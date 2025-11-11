import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

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

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you. I will get back to you ASAP."))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Spline 3D Globe Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://my.spline.design/worldplanet-XkYA2BwyJ8tHp0ggzrmrPVSE/"
          className="w-full h-full border-0"
          style={{
            pointerEvents: isMobile ? 'none' : 'auto',
          }}
          title="3D Globe"
        />
        {/* Hide Spline watermark */}
        <div className="absolute bottom-0 right-0 w-48 h-16 bg-black z-10" />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto pt-32 sm:pt-40 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 text-center xl:text-left flex items-center justify-center min-h-screen">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-x-8 w-full max-w-[1100px]">
          
          {/* Left side - Contact Info - Hidden on mobile */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex flex-col gap-6 xl:max-w-[350px] bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-red-600/20 hover:bg-black/40 transition-all duration-300"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-left text-white">
              Get In <span className="text-red-600">Touch</span>
            </h2>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-left">
                <HiEnvelope className="text-red-600 text-xl flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Email</p>
                  <p className="text-gray-300 text-sm">keshavs100605@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-left">
                <HiPhone className="text-red-600 text-xl flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Phone</p>
                  <p className="text-gray-300 text-sm">+91 7305051171</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-left">
                <HiMapPin className="text-red-600 text-xl flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Location</p>
                  <p className="text-gray-300 text-sm">Coimbatore, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/KodeWithKeshav"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-red-600/30 flex items-center justify-center hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 text-gray-300 hover:text-red-600"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://linkedin.com/in/keshav-s-545345266"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-red-600/30 flex items-center justify-center hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 text-gray-300 hover:text-red-600"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <div className="flex flex-col w-full max-w-[700px] xl:flex-1">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-white"
            >
              Let's <span className="text-red-600">connect.</span>
            </motion.h2>

            {/* form */}
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-4 sm:gap-6 w-full mx-auto bg-black/20 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-red-600/20 hover:bg-black/50 focus-within:bg-black/50 transition-all duration-300"
              onSubmit={handleSubmit}
              autoComplete="off"
              autoCapitalize="off"
              data-netlify="true"
            >
              {/* input group */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="flex-1 bg-transparent outline-none border-b border-white/20 h-12 sm:h-14 text-white placeholder:text-gray-500 focus:border-red-600 transition-all px-2"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                  aria-required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="flex-1 bg-transparent outline-none border-b border-white/20 h-12 sm:h-14 text-white placeholder:text-gray-500 focus:border-red-600 transition-all px-2"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                  aria-required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent outline-none border-b border-white/20 h-12 sm:h-14 text-white placeholder:text-gray-500 focus:border-red-600 transition-all px-2"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <textarea
                name="message"
                placeholder="Message..."
                className="bg-transparent outline-none border-b border-white/20 h-32 sm:h-40 text-white placeholder:text-gray-500 focus:border-red-600 transition-all resize-none px-2 py-2"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <button
                type="submit"
                className="btn rounded-full border border-red-600/50 w-full sm:max-w-[170px] h-12 sm:h-auto px-8 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-red-600 hover:bg-red-600/10 group disabled:opacity-50 text-white font-medium"
                disabled={isLoading}
                aria-disabled={isLoading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {isLoading ? "Sending..." : "Let's talk"}
                </span>

                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </button>
            </motion.form>

            {/* Mobile Contact Info */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="xl:hidden mt-8 space-y-4 bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-red-600/20 hover:bg-black/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-3">
                <HiEnvelope className="text-red-600 text-xl" />
                <p className="text-gray-300 text-sm">keshavs100605@gmail.com</p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <HiPhone className="text-red-600 text-xl" />
                <p className="text-gray-300 text-sm">+91 7305051171</p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <HiMapPin className="text-red-600 text-xl" />
                <p className="text-gray-300 text-sm">Coimbatore, India</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center pt-2">
                <a
                  href="https://github.com/KodeWithKeshav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-red-600/30 flex items-center justify-center hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 text-gray-300 hover:text-red-600"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://linkedin.com/in/keshav-s-545345266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-red-600/30 flex items-center justify-center hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 text-gray-300 hover:text-red-600"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;