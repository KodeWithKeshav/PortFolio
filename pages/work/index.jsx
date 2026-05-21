import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiX } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

const Circles = () => <div className="absolute inset-0 pointer-events-none opacity-20" />;

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
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

// Work slider data with enriched project details
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Elephant Monitoring And Alert System",
          live: "https://www.linkedin.com/posts/keshav-s-545345266_happy-to-share-my-project-an-elephant-monitoring-ugcPost-7339508260653191168--gAN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEEwrMUBZO19E84wX2BUFtuXKzqeIllh6PA",
          github: "",
          year: "2025",
          tags: ["IoT", "ESP32", "Wildlife Safety"],
          description: "IoT-based system for real-time elephant tracking and alert generation to reduce human-wildlife conflicts.",
          highlights: [
            "Real-time tracking and alert generation using IoT sensor networks",
            "Designed to mitigate human–elephant conflict in forest-fringe zones",
            "Integrated GPS and motion sensors for automated intrusion detection",
          ],
        },
        {
          title: "SerpentSense",
          live: "https://serpent-sense-bot.vercel.app/",
          github: "https://github.com/KodeWithKeshav/SerpentSenseBot",
          year: "2025",
          tags: ["AI", "Computer Vision", "Wildlife Safety"],
          description: "AI-powered snake species identification system trained on Indian snake species using deep learning.",
          highlights: [
            "Classifies venomous vs non-venomous snakes with deep learning models",
            "Provides region-specific first-aid guidance on identification",
            "Offers emergency contact details and medical response instructions through intelligent image recognition",
          ],
        },
        {
          title: "SafariConnect",
          live: "https://safari-connect-ebzmnedgv-kodewithkeshav-4392s-projects.vercel.app",
          github: "https://github.com/KodeWithKeshav/Safari-Connect",
          year: "2025",
          tags: ["Flutter", "Mobile Dev", "Eco-Tourism"],
          description: "Mobile application connecting wildlife enthusiasts with safari experiences across Indian national parks.",
          highlights: [
            "Features real-time booking, location tracking, and a user-friendly interface",
            "Integrated chatbot promoting eco-tourism and wildlife awareness",
          ],
        },
        {
          title: "Accoustic Monitor",
          live: "https://www.linkedin.com/posts/keshav-s-545345266_building-a-sound-based-classifier-for-nocturnal-activity-7331732975425921024-QGTa",
          github: "https://github.com/KodeWithKeshav/Accoustic_Monitor",
          year: "2025",
          tags: ["Machine Learning", "Audio Processing"],
          description: "ML-based passive acoustic monitoring system for identifying nocturnal animal species using environmental sound analysis.",
          highlights: [
            "ML system with 92% accuracy to classify wildlife sounds for biodiversity analysis",
            "Tested on Jungle Nightjar and Barn Owl vocalizations",
          ],
        },
      ],
    },
    {
      images: [
        {
          title: "MediChain",
          live: "",
          github: "https://github.com/KodeWithKeshav/MediLink",
          year: "2025",
          tags: ["Blockchain", "Ethereum", "Healthcare"],
          description: "Blockchain-based pharmaceutical supply chain system ensuring secure and transparent tracking of medical supply chains.",
          highlights: [
            "Built on Ethereum to ensure traceability and prevent counterfeit drugs",
            "Automates compliance checks using smart contracts",
            "Secures transactions on an immutable ledger for full auditability",
          ],
        },
        {
          title: "Animal FootPrint Classifier",
          live: "",
          github: "https://github.com/KodeWithKeshav/Footprint_classifier",
          year: "2025",
          tags: ["Deep Learning", "Computer Vision"],
          description: "Deep learning model that classifies animal species from footprint images to aid wildlife monitoring and research.",
          highlights: [
            "Trained on diverse footprint datasets for multi-species classification",
            "Assists field researchers in non-invasive wildlife monitoring",
          ],
        },
        {
          title: "Smart Canteen System",
          live: "",
          github: "https://github.com/KodeWithKeshav/Menu_Catlog",
          year: "2025",
          tags: ["Node.js", "MongoDB", "Full-Stack"],
          description: "Full-stack web application for digital canteen management, featuring online ordering, payments, and menu automation.",
          highlights: [
            "Built with Node.js, Express, HTML/CSS/JS, and MongoDB",
            "Features digital menu catalog with real-time order management",
            "Streamlines campus canteen operations with automated payment flow",
          ],
        },
        {
          title: "Lazarus – Multi-Agent AI Platform",
          live: "https://www.linkedin.com/posts/keshav-s-545345266_aiforbharat-teamlazarus-buildonaws-ugcPost-7444720160797720577-YHd1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEwrMUBZO19E84wX2BUFtuXKzqeIllh6PA",
          github: "",
          year: "2026",
          tags: ["Generative AI", "AWS", "Distributed Systems"],
          description: "Multi-agent AI platform to automatically analyze, migrate, and deploy legacy codebases at scale.",
          highlights: [
            "Developed a system of 5 coordinated AI agents for end-to-end code migration",
            "Built a self-healing, serverless pipeline using AWS Lambda and Docker",
            "Detects errors, generates fixes, and redeploys at scale automatically",
          ],
        },
      ],
    },
    {
      images: [
        {
          title: "CardioSync – Edge AI ECG System",
          live: "",
          github: "https://github.com/KodeWithKeshav/ECG_Monitoring",
          year: "2025",
          tags: ["Embedded AI", "IoT", "1D-CNN"],
          description: "Edge AI system to classify ECG signals into 5 categories using a 1D-CNN model deployed on resource-constrained hardware.",
          highlights: [
            "Achieved over 95% classification accuracy on real-world ECG data",
            "Optimized on-device inference for resource-constrained hardware",
            "Designed a lightweight signal processing pipeline with noise filtering, baseline correction, and feature extraction",
          ],
        },
        {
          title: "Smart Beehive Monitoring System",
          live: "",
          github: "https://github.com/KodeWithKeshav/Smart_Apiculture_System",
          year: "2025",
          tags: ["STM32", "IoT", "Environmental Sensing"],
          description: "Real-time monitoring unit using STM32 microcontrollers to track hive health and detect environmental anomalies.",
          highlights: [
            "Developed using STM32 microcontrollers for precision hive monitoring",
            "Integrated temperature and humidity sensors to detect swarm activity",
          ],
        },
      ],
    },
  ],
};

/* ─── Project Detail Modal ─── */
const ProjectModal = ({ project, onClose }) => {
  // Close on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
      >
        <div
          className="relative w-full max-w-lg pointer-events-auto rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/95 via-black/95 to-zinc-950/95 backdrop-blur-2xl shadow-[0_0_80px_-12px_rgba(220,38,38,0.15)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top glow accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-red-600/[0.07] blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.1] hover:bg-red-600/20 hover:border-red-600/30 transition-all duration-300 text-gray-400 hover:text-white"
          >
            <FiX className="text-sm" />
          </button>

          {/* Content */}
          <div className="relative p-6 sm:p-8 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-red-600/30 scrollbar-track-transparent">
            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/15 border border-red-600/25 mb-4"
            >
              <HiSparkles className="text-red-500 text-xs" />
              <span className="text-red-400 text-xs font-bold tracking-wider">{project.year}</span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xl sm:text-2xl font-bold text-white mb-3 pr-8 leading-tight"
            >
              {project.title}
            </motion.h3>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h-px bg-gradient-to-r from-red-600/40 via-red-600/20 to-transparent mb-4 origin-left"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-gray-300 text-sm leading-relaxed mb-5"
            >
              {project.description}
            </motion.p>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[11px] font-semibold tracking-wide rounded-full bg-white/[0.05] border border-white/[0.08] text-gray-300 hover:border-red-600/30 hover:text-red-400 hover:bg-red-600/[0.06] transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mb-6"
              >
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">
                  Key Highlights
                </div>
                <div className="space-y-2.5">
                  {project.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600/60 group-hover:bg-red-500 group-hover:shadow-[0_0_8px_rgba(220,38,38,0.4)] transition-all duration-300 flex-shrink-0" />
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {highlight}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
                >
                  <FaGithub className="text-base text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">View Source</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-red-600/15 border border-red-600/25 hover:bg-red-600/25 hover:border-red-500/40 transition-all duration-300 shadow-[0_0_20px_-6px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_-6px_rgba(220,38,38,0.35)]"
                >
                  <FiExternalLink className="text-base text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  <span className="text-sm font-medium text-red-300 group-hover:text-red-200 transition-colors duration-300">Live Demo</span>
                </a>
              )}
            </motion.div>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
        </div>
      </motion.div>
    </>
  );
};

/* ─── Work Slider ─── */
const WorkSlider = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[340px] sm:h-[580px]"
      >
        {workSlides.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 cursor-pointer h-[280px] sm:h-[520px]">
              {slide.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  onClick={() => setSelectedProject(image)}
                  className="relative rounded-xl overflow-hidden group bg-gradient-to-br from-zinc-900/70 via-black/60 to-zinc-950/70 border border-zinc-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_40px_-8px_rgba(220,38,38,0.15)]"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:via-red-600/10 group-hover:to-transparent transition-all duration-500"></div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-red-600/20 to-transparent blur-2xl"></div>
                  </div>

                  {/* Content container */}
                  <div className="relative h-full flex flex-col justify-between p-3 sm:p-5 z-10">
                    {/* Top section - Year + Title + description */}
                    <div className="space-y-1 sm:space-y-2">
                      {/* Year pill */}
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] sm:text-[10px] font-bold text-red-500/70 tracking-widest">{image.year}</span>
                      </div>
                      <h3 className="text-white font-bold text-[11px] sm:text-lg tracking-tight group-hover:text-red-400 transition-colors duration-300 leading-snug">
                        {image.title}
                      </h3>
                      <p className="text-gray-400 text-[9px] sm:text-xs leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                        {image.description}
                      </p>
                    </div>

                    {/* Bottom section - Tags + Explore hint */}
                    <div className="space-y-2">
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {image.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 text-[8px] sm:text-[10px] font-medium rounded-md bg-white/[0.04] border border-white/[0.06] text-gray-500 group-hover:text-gray-300 group-hover:border-red-600/20 group-hover:bg-red-600/[0.05] transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Explore indicator */}
                      <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                        <span className="text-[9px] sm:text-[11px] text-red-500 font-semibold tracking-wider uppercase">Tap to explore</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-bl from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Bottom edge glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}

        <style>{`
          .swiper-pagination-bullet {
            background: white !important;
            opacity: 0.4;
            width: 10px;
            height: 10px;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: #dc2626 !important;
            opacity: 1;
            width: 28px;
            border-radius: 5px;
          }
          .swiper-pagination {
            bottom: 10px !important;
          }
        `}</style>
      </Swiper>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Work = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-16 sm:pt-36 sm:pb-20 md:py-28 lg:py-36 flex items-center relative overflow-hidden">
      <Circles />

      {/* Spline 3D Model - Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-10 pointer-events-none" />
        <div className="w-full h-full relative overflow-hidden">
          <iframe
            src="https://my.spline.design/robotarm-jQ7x0jyPlqUfoScqJmOdbSMi/"
            className="w-full h-full absolute"
            style={{
              border: 'none',
              width: '100%',
              height: '100%',
              filter: 'brightness(0.8) contrast(1.15)',
              transform: 'scale(1.1)',
              left: '0',
              top: '0',
            }}
            title="3D Robotic Arm"
          />
          {/* Overlay to hide bottom-left watermark */}
          <div className="absolute bottom-0 left-0 w-48 h-16 bg-black z-20" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-x-12 items-start justify-center xl:justify-start max-w-7xl mx-auto">
          {/* text */}
          <div className="text-center flex w-full xl:w-[35vw] xl:max-w-[450px] flex-col lg:text-left mb-8 xl:mb-0 xl:pt-12 px-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
            >
              The Arsenal <span className="text-red-600">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-sm sm:text-base md:text-lg mb-4 max-w-[400px] mx-auto lg:mx-0 text-gray-300 leading-relaxed"
            >
This is where technology meets purpose. From IoT systems that prevent human–wildlife conflicts to AI platforms that identify snakes and monitor animal sounds, each project bridges innovation with impact. Whether it's blockchain powering transparency in healthcare, Flutter apps promoting eco-tourism, or full-stack portals transforming campus life — every line of code is built for the real world, not just the demo room.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:w-auto xl:flex-1 xl:max-w-[600px] mx-auto xl:mx-0"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;