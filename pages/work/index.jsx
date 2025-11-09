import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";

// Mock Circles component
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

// Work slider data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Wildlife Protection AI",
          path: "/thumb1.jpg",
          description: "Neural network system for real-time wildlife monitoring and threat detection",
        },
        {
          title: "Smart Campus IoT",
          path: "/thumb2.jpg",
          description: "Integrated IoT platform managing 500+ sensors across university campus",
        },
        {
          title: "Predictive Analytics Engine",
          path: "/thumb3.jpg",
          description: "Machine learning pipeline for demand forecasting with 94% accuracy",
        },
        {
          title: "Autonomous Navigation",
          path: "/thumb4.jpg",
          description: "Computer vision system for indoor robot navigation and obstacle avoidance",
        },
      ],
    },
    {
      images: [
        {
          title: "Blockchain Supply Chain",
          path: "/thumb5.jpg",
          description: "Distributed ledger system for transparent supply chain tracking",
        },
        {
          title: "Real-time Collaboration",
          path: "/thumb6.jpg",
          description: "WebSocket-based platform supporting 10k+ concurrent users",
        },
        {
          title: "Edge Computing Framework",
          path: "/thumb7.jpg",
          description: "Low-latency processing system for IoT devices at the edge",
        },
        {
          title: "Security Monitoring AI",
          path: "/thumb8.jpg",
          description: "Anomaly detection system processing 1M+ events per second",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
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
                className="relative rounded-xl overflow-hidden group bg-gradient-to-br from-zinc-900/70 via-black/60 to-zinc-950/70 border border-zinc-800/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm"
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:via-red-600/10 group-hover:to-transparent transition-all duration-500"></div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-red-600/20 to-transparent blur-2xl"></div>
                </div>

                {/* Content container */}
                <div className="relative h-full flex flex-col justify-between p-3 sm:p-6 z-10">
                  {/* Top section - Title and description */}
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-white font-bold text-xs sm:text-xl tracking-tight group-hover:text-red-400 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-gray-400 text-[10px] sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                      {image.description}
                    </p>
                  </div>

                  {/* Bottom section - Live project badge */}
                  <div className="flex items-center gap-x-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center gap-x-1.5 sm:gap-x-2 text-[10px] sm:text-xs tracking-wider">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-600 animate-pulse"></div>
                      <span className="text-red-500 font-semibold">LIVE PROJECT</span>
                      <BsArrowRight className="text-red-500 text-xs sm:text-base ml-1" />
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
              This is where theory meets reality. From neural networks that protect wildlife 
              to IoT systems that power smart campuses, each project is a testament to what 
              happens when you combine ambition with execution. No prototypes—just production-ready 
              tech that solves real problems. Think of these as my Mark series, but in code.
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