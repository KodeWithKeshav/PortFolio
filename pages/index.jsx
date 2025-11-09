import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden">
      {/* text */}
      <div className="w-full min-h-screen bg-gradient-to-r from-red-950/20 via-black/50 to-black/10 lg:from-red-950/20 lg:via-black/50 lg:to-black/10 relative z-10">
        <div className="text-center flex flex-col justify-center pt-20 pb-12 sm:pt-24 lg:pt-32 xl:pt-40 xl:text-left min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 xl:pr-[500px]">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6 lg:mb-8"
          >
            Sometimes You Gotta <br /> Run Before You Can{" "}
            <span className="text-red-600">Walk</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm sm:text-base lg:text-lg max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-gray-300 leading-relaxed"
          >
            Genius. Billionaire. Playboy. Philanthropist? Not quite. But I am a 
            Computer Science engineer at Amrita Vishwa Vidyapeetham, 
            architecting AI systems that think, IoT networks that pulse with life, 
            and full-stack solutions that don't just work—they dominate. I turn 
            impossible problems into elegant code and wild ideas into published research. 
            No arc reactor yet, but give me time.
          </motion.p>
        </div>
      </div>

      {/* image and 3D content */}
      <div className="w-full xl:w-[1280px] h-full absolute right-0 bottom-0 top-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* Spline 3D Robot - Background on small screens, foreground on large */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 opacity-30 pointer-events-none lg:top-0 lg:left-auto lg:translate-x-0 lg:translate-y-0 lg:bottom-0 lg:-right-32 lg:w-[800px] lg:h-[800px] lg:overflow-hidden lg:opacity-100 lg:pointer-events-auto lg:z-20">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-full relative flex items-center justify-center lg:block"
          >
            <div className="w-[500px] h-[500px] relative lg:w-full lg:h-full">
              <iframe
                src="https://my.spline.design/genkubgreetingrobot-OFu24U76EIEeEIwCbRjGY8Ai/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="pointer-events-none lg:pointer-events-auto"
                title="3D Robot Animation"
              />
              {/* Cover the "Built with Spline" badge */}
              <div className="absolute bottom-0 right-0 w-64 h-20 bg-black z-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;