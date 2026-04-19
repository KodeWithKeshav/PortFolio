import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import ProfileCard from "../../components/ProfileCard";

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
  const [showModal, setShowModal] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

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
      .then(() => {
        setShowModal(true);
        myForm.reset();
      })
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

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600 rounded-lg p-8 max-w-md w-full shadow-2xl shadow-red-600/20"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Message */}
              <h3 className="text-2xl font-bold text-white">
                Message Sent!
              </h3>
              <p className="text-gray-300">
                Thank you for reaching out. I will get back to you as soon as possible.
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-all duration-300 w-full"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto pt-32 sm:pt-40 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 text-center xl:text-left flex items-center justify-center min-h-screen">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-x-8 w-full max-w-[1100px]">
          
          {/* Left side - Contact Info - Hidden on mobile */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:block w-full xl:max-w-[350px] perspective-1000 z-20"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="w-full relative h-[420px] cursor-pointer"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front side: ProfileCard */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  backfaceVisibility: "hidden", 
                  WebkitBackfaceVisibility: "hidden",
                  pointerEvents: isFlipped ? "none" : "auto" 
                }}
              >
                <ProfileCard
                  name="Keshav S"
                  title="CS Engineer • AI Researcher"
                  handle="KodeWithKeshav"
                  status="Available"
                  contactText="Connect"
                  avatarUrl="/keshav_avatar_holographic.png"
                  iconUrl="/iconpattern.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={(e) => {
                    // Stop propagation so clicking the button doesn't trigger the parent twice
                    e.stopPropagation();
                    setIsFlipped(true);
                  }}
                  behindGlowColor="rgba(241, 48, 36, 0.4)"
                  innerGradient="linear-gradient(145deg, #1a0505cc 0%, #f1302422 100%)"
                  behindGlowEnabled
                />
              </div>

              {/* Back side: Contact Info Details */}
              <div 
                className="absolute inset-0 w-full h-full bg-black/80 backdrop-blur-md p-8 rounded-[30px] border border-red-600/30 hover:border-red-600/50 hover:shadow-[0_0_30px_-5px_rgba(241,48,36,0.2)] transition-all duration-300 flex flex-col justify-center gap-8"
                style={{ 
                  backfaceVisibility: "hidden", 
                  WebkitBackfaceVisibility: "hidden", 
                  transform: "rotateY(180deg)",
                  pointerEvents: isFlipped ? "auto" : "none"
                }}
              >
                <h2 className="text-3xl font-bold text-center text-white">
                  Get In <span className="text-red-600">Touch</span>
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-left group">
                    <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                      <HiEnvelope className="text-red-400 text-lg" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-gray-200 text-sm font-medium">keshavs100605@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-left group">
                    <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                      <HiPhone className="text-red-400 text-lg" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-gray-200 text-sm font-medium">+91 7305051171</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-left group">
                    <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                      <HiMapPin className="text-red-400 text-lg" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-gray-200 text-sm font-medium">Coimbatore, India</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center mt-2">
                  <a
                    href="https://github.com/KodeWithKeshav"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-12 h-12 rounded-full border border-red-600/30 flex items-center justify-center hover:border-red-600 hover:bg-red-600/10 hover:scale-110 transition-all duration-300 text-gray-300 hover:text-red-500 relative group"
                  >
                    <div className="absolute inset-0 rounded-full bg-red-600/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <FaGithub className="text-xl relative z-10" />
                  </a>
                  <a
                    href="https://linkedin.com/in/keshav-s-545345266"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-12 h-12 rounded-full border border-red-600/30 flex items-center justify-center hover:border-red-600 hover:bg-red-600/10 hover:scale-110 transition-all duration-300 text-gray-300 hover:text-red-500 relative group"
                  >
                    <div className="absolute inset-0 rounded-full bg-red-600/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <FaLinkedin className="text-xl relative z-10" />
                  </a>
                </div>
              </div>
            </motion.div>
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