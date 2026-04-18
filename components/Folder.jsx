import { useState, useEffect, useRef, useCallback } from 'react';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color.split('').map(c => c + c).join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '', defaultOpen = false, onPaperClick, cycleInterval = 3000 }) => {
  const maxPapers = 3;
  const totalItems = items.length;
  const hasOverflow = totalItems > maxPapers;

  // Track which set of 3 we're currently showing
  const [cycleOffset, setCycleOffset] = useState(0);
  const [open, setOpen] = useState(defaultOpen);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxPapers }, () => ({ x: 0, y: 0 })));
  const [fading, setFading] = useState(false);
  const intervalRef = useRef(null);

  // Build the current visible papers (up to 3)
  const getVisiblePapers = useCallback(() => {
    if (totalItems === 0) return [null, null, null];
    const visible = [];
    for (let i = 0; i < maxPapers; i++) {
      const idx = (cycleOffset + i) % totalItems;
      visible.push(items[idx] || null);
    }
    return visible;
  }, [cycleOffset, items, totalItems]);

  const visiblePapers = getVisiblePapers();

  // Get the actual item index for a paper position
  const getActualIndex = useCallback((paperPos) => {
    if (totalItems === 0) return -1;
    return (cycleOffset + paperPos) % totalItems;
  }, [cycleOffset, totalItems]);

  // Auto-cycle when folder is open and has more than 3 items
  useEffect(() => {
    if (open && hasOverflow) {
      intervalRef.current = setInterval(() => {
        setFading(true);
        setTimeout(() => {
          setCycleOffset(prev => (prev + maxPapers) % totalItems);
          setFading(false);
        }, 300);
      }, cycleInterval);
    } else {
      setCycleOffset(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [open, hasOverflow, totalItems, cycleInterval]);

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = (e) => {
    if (open && e.target.closest('.paper')) return;
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxPapers }, () => ({ x: 0, y: 0 })));
      setCycleOffset(0);
    }
  };

  const handlePaperClick = (e, paperPos) => {
    e.stopPropagation();
    if (open && onPaperClick) {
      const actualIdx = getActualIndex(paperPos);
      if (actualIdx >= 0 && items[actualIdx]) {
        onPaperClick(actualIdx);
      }
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  };

  const folderClassName = `folder ${open ? 'open' : ''}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <div style={scaleStyle} className={className}>
      <div className={folderClassName} style={folderStyle} onClick={handleClick}>
        <div className="folder__back">
          {visiblePapers.map((item, i) => (
            <div
              key={i}
              className={`paper paper-${i + 1}`}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseLeave={e => handlePaperMouseLeave(e, i)}
              onClick={e => handlePaperClick(e, i)}
              style={{
                '--magnet-x': `${paperOffsets[i]?.x || 0}px`,
                '--magnet-y': `${paperOffsets[i]?.y || 0}px`,
                cursor: open && item ? 'zoom-in' : 'pointer',
                opacity: fading ? 0 : 1,
                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
              }}
            >
              {item ? (
                <div className="w-full h-full overflow-hidden flex items-center justify-center p-1">
                  {item}
                </div>
              ) : null}
            </div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>
      </div>

      {/* Page indicator dots when cycling */}
      {open && hasOverflow && (
        <div className="flex justify-center gap-1 mt-2" style={{ transform: `scale(${1/size})` }}>
          {Array.from({ length: Math.ceil(totalItems / maxPapers) }).map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: Math.floor(cycleOffset / maxPapers) === i ? '12px' : '4px',
                height: '4px',
                backgroundColor: Math.floor(cycleOffset / maxPapers) === i ? color : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
