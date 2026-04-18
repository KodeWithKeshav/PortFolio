import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { aboutData } from "../about/index";

const fadeIn = (direction, delay) => {
  return {
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
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const Resume = () => {
  return (
    <div className="relative w-full min-h-screen bg-black/90 py-32 overflow-y-auto overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-16 pt-10 pb-24 h-full flex flex-col">
        
        {/* Header Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-6 gap-6">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase mb-2">
              KESHAV <span className="text-red-600">S</span>
            </h2>
            <p className="text-gray-400 max-w-lg">
              IoT Engineer • Web Developer • AI Researcher<br />
              Speaking fluent in both silicon and algorithm.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
          >
            {/* The actual file should be stored in public/resume.pdf */}
            <a
              href="/resume.pdf"
              download="Keshav_S_Resume.pdf"
              className="group flex flex-col items-center justify-center gap-x-2 text-white/90 hover:text-white transition-all bg-red-600/10 hover:bg-red-600/30 border border-red-600/50 backdrop-blur-md px-6 py-3 rounded-lg w-full md:w-auto"
            >
              <span className="flex items-center gap-2 font-bold tracking-wide">
                <HiDownload className="text-xl group-hover:animate-bounce" />
                DOWNLOAD PDF
              </span>
              <span className="text-xs text-gray-400 mt-1 uppercase tracking-widest opacity-60">
                Size: ~120KB
              </span>
            </a>
          </motion.div>
        </div>

        {/* Content area: Two Columns on Large screens */}
        <div className="flex flex-col lg:flex-row gap-12 w-full">
          
          {/* Left Column */}
          <div className="flex flex-col gap-10 flex-1">
            {/* Experience Section */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                <span className="w-8 h-[2px] bg-red-600"></span> Experience
              </h3>
              <div className="flex flex-col gap-6">
                {aboutData.find(d => d.title === "experience").info.map((item, index) => (
                  <div key={index} className="relative pl-6 before:w-[2px] before:h-full before:bg-white/10 before:absolute before:left-0 before:top-2">
                    <div className="absolute left-[-4px] top-2 w-[10px] h-[10px] rounded-full bg-red-600 border-[2px] border-black"></div>
                    <div className="text-sm font-semibold text-red-600 mb-1">{item.stage}</div>
                    <div className="text-lg text-white font-medium">{item.title}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Research Section */}
            <motion.div
               variants={fadeIn("up", 0.5)}
               initial="hidden"
               animate="show"
               className="bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-xl p-6 md:p-8"
             >
               <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                 <span className="w-8 h-[2px] bg-red-600"></span> Research (Papers)
               </h3>
               <div className="flex flex-col gap-6">
                 {aboutData.find(d => d.title === "research").info.map((item, index) => (
                   <div key={index} className="flex flex-col gap-1">
                     <div className="text-sm font-semibold px-2 py-1 bg-red-600/20 text-red-600 rounded w-max mb-1">
                       {item.stage}
                     </div>
                     <div className="text-md text-gray-300 font-light leading-relaxed">
                       "{item.title}"
                     </div>
                   </div>
                 ))}
               </div>
             </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 flex-1">
            {/* Credentials / Education */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              className="bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-xl p-6 md:p-8"
            >
               <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                 <span className="w-8 h-[2px] bg-red-600"></span> Credentials
               </h3>
               <div className="flex flex-col gap-5">
                 {aboutData.find(d => d.title === "credentials").info.map((item, index) => (
                   <div key={index} className="flex flex-col group p-4 border border-white/5 rounded-lg hover:border-red-600/30 hover:bg-red-600/5 transition-colors">
                     <div className="text-lg text-white font-medium mb-1">{item.title}</div>
                     <div className="text-sm text-gray-400 font-light">{item.stage}</div>
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* Arsenal / Skills */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              animate="show"
              className="bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-xl p-6 md:p-8"
            >
               <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                 <span className="w-8 h-[2px] bg-red-600"></span> Arsenal
               </h3>
               <div className="flex flex-col gap-6">
                 {aboutData.find(d => d.title === "arsenal").info.map((item, index) => (
                   <div key={index} className="flex flex-col">
                     <div className="text-sm font-light text-gray-400 mb-3">{item.title}</div>
                     <div className="flex gap-4 flex-wrap">
                       {item.icons.map((Icon, i) => (
                         <div key={i} className="text-3xl text-gray-300 hover:text-red-500 transition-colors">
                           <Icon />
                         </div>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Resume;
