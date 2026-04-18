import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Folder from "../../components/Folder";

const fadeIn = (direction, delay) => ({
  hidden: {
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.2,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

// ----- CONFIGURE YOUR CERTIFICATES HERE -----
const hackathonCerts = [
  "/certificates/hackathons/hack2skill-1.png",
  "/certificates/hackathons/hack2skill-2.png",
  "/certificates/hackathons/hack2skill-3.png",
];

const courseCerts = [
  "/certificates/courses/course-1.png",
  "/certificates/courses/course-2.png",
  "/certificates/courses/course-3.png",
];

const paperCerts = [
  "/certificates/papers/paper-1.jpeg",
  "/certificates/papers/paper-2.png",
];

const nonTechCerts = [
  "/certificates/non-technical/nontech-1.png",
  "/certificates/non-technical/nontech-2.jpg",
  "/certificates/non-technical/nontech-2.png",
];

const categories = [
  { title: "Hackathons", color: "#dc2626", certs: hackathonCerts },
  { title: "Courses", color: "#dc2626", certs: courseCerts },
  { title: "Paper Presentations", color: "#dc2626", certs: paperCerts },
  { title: "Non-Technical", color: "#dc2626", certs: nonTechCerts },
];

// Lightbox Modal
const Lightbox = ({ src, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out"
    onClick={onClose}
  >
    <button
      onClick={onClose}
      className="absolute top-6 right-6 z-10 text-white/70 hover:text-white text-4xl font-light transition-colors leading-none"
      aria-label="Close"
    >
      ✕
    </button>
    <motion.img
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      src={src}
      alt="Certificate Preview"
      className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
      onClick={e => e.stopPropagation()}
      style={{ cursor: 'default' }}
    />
  </motion.div>
);

const Certificates = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-black/90 py-32 overflow-y-auto overflow-x-hidden">

      <AnimatePresence>
        {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-16 pt-10 pb-24 h-full flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-32">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-4"
          >
            Honors & <span className="text-red-600">Certificates</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="text-gray-400 max-w-lg mx-auto"
          >
            Click on a folder to reveal the certificates. Click a certificate to zoom in.
          </motion.p>
        </div>

        {/* 4 Folders - 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-36 gap-x-32 md:gap-x-48 w-full max-w-3xl mx-auto place-items-center">
          {categories.map((category, index) => {
            const certItems = category.certs.slice(0, 3).map((src, i) => (
              <img
                key={`${index}-${i}`}
                src={src}
                alt={`${category.title} ${i + 1}`}
                className="w-full h-full object-cover rounded"
                draggable={false}
              />
            ));

            return (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.3 + index * 0.15)}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center group relative"
                style={{ minHeight: "260px" }}
              >
                <div className="relative z-10 hover:z-50">
                  <Folder
                    color={category.color}
                    size={1.8}
                    items={certItems}
                    defaultOpen={false}
                    onPaperClick={(paperIndex) => {
                      if (category.certs[paperIndex]) {
                        setLightboxSrc(category.certs[paperIndex]);
                      }
                    }}
                  />
                </div>

                <div className="text-center mt-14">
                  <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-widest">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {category.certs.length} Document(s)
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Certificates;
