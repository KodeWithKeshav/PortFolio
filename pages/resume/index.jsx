import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiDownload, HiAcademicCap, HiLightningBolt, HiCode, HiDocumentText } from "react-icons/hi";
import { aboutData } from "../about/index";

/* ─── animation helpers ─── */
const fadeIn = (direction, delay) => ({
  hidden: {
    y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
    x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay,
    },
  },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 18, stiffness: 100 },
  },
};

/* ─── section icons ─── */
const sectionIcons = {
  experience: HiLightningBolt,
  research: HiDocumentText,
  credentials: HiAcademicCap,
  arsenal: HiCode,
};

/* ─── GlassCard component ─── */
const GlassCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={fadeIn("up", delay)}
    initial="hidden"
    animate="show"
    className={`relative group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-red-600/30 hover:shadow-[0_0_40px_-12px_rgba(241,48,36,0.15)] ${className}`}
  >
    {/* subtle inner glow on hover */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/[0.06] group-hover:to-transparent transition-all duration-700 pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

/* ─── Section heading ─── */
const SectionHeading = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-red-600/15 border border-red-600/20">
      <Icon className="text-red-500 text-lg" />
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
      {title}
    </h3>
    <div className="flex-1 h-px bg-gradient-to-r from-red-600/30 to-transparent ml-2" />
  </div>
);

/* ─── Timeline item ─── */
const TimelineItem = ({ item, index, isLast }) => (
  <motion.div
    variants={staggerItem}
    className="relative flex gap-4 group"
  >
    {/* Timeline rail */}
    <div className="flex flex-col items-center">
      <div className="relative w-3.5 h-3.5 rounded-full bg-black border-2 border-red-600/60 group-hover:border-red-500 transition-colors duration-300 z-10 flex-shrink-0 mt-1.5">
        <div className="absolute inset-0.5 rounded-full bg-red-600/40 group-hover:bg-red-500 transition-all duration-300" />
        <div className="absolute -inset-1 rounded-full bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-500 blur-sm" />
      </div>
      {!isLast && (
        <div className="w-px flex-1 bg-gradient-to-b from-red-600/30 via-white/10 to-transparent min-h-[40px]" />
      )}
    </div>

    {/* Content */}
    <div className="pb-6 flex-1 -mt-0.5">
      <div className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:border-red-600/20 group-hover:bg-white/[0.05] transition-all duration-300">
        <span className="inline-block text-xs font-semibold text-red-500 bg-red-600/10 px-2.5 py-0.5 rounded-full mb-1.5 tracking-wide">
          {item.stage}
        </span>
        <div className="text-sm md:text-base text-gray-200 font-medium leading-relaxed">
          {item.title}
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── Research card ─── */
const ResearchCard = ({ item, index }) => (
  <motion.div
    variants={staggerItem}
    className="group relative rounded-xl overflow-hidden"
  >
    <div className="relative p-5 border border-white/[0.06] rounded-xl bg-gradient-to-br from-white/[0.04] to-transparent hover:border-red-600/25 transition-all duration-400">
      {/* Status badge */}
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-2 h-2 rounded-full ${item.stage === "Accepted" ? "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" : "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.4)]"}`} />
        <span className={`text-xs font-bold uppercase tracking-widest ${item.stage === "Accepted" ? "text-emerald-400" : "text-amber-400"}`}>
          {item.stage}
        </span>
      </div>

      {/* Paper title */}
      <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        &ldquo;{item.title}&rdquo;
      </p>

      {/* Decorative line */}
      <div className="mt-4 h-px bg-gradient-to-r from-red-600/30 via-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </motion.div>
);

/* ─── Credential card ─── */
const CredentialCard = ({ item, index }) => (
  <motion.div
    variants={staggerItem}
    className="group relative flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:border-red-600/20 transition-all duration-300 cursor-default"
  >
    {/* Number badge */}
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 font-bold text-sm group-hover:bg-red-600/20 transition-colors duration-300">
      {String(index + 1).padStart(2, "0")}
    </div>

    {/* Content */}
    <div className="flex-1 min-w-0">
      <div className="text-sm md:text-base text-white font-medium truncate">
        {item.title}
      </div>
      <div className="text-xs text-gray-500 mt-0.5 font-light">
        {item.stage}
      </div>
    </div>

    {/* Hover arrow */}
    <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-red-500">
      →
    </div>
  </motion.div>
);

/* ─── Skill icon with tooltip ─── */
const SkillIcon = ({ Icon, index }) => (
  <motion.div
    variants={staggerItem}
    className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-red-600/30 hover:bg-red-600/10 transition-all duration-300 cursor-default"
  >
    <Icon className="text-2xl md:text-3xl text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
    {/* Glow effect */}
    <div className="absolute inset-0 rounded-xl bg-red-600/0 group-hover:bg-red-600/[0.08] blur-md transition-all duration-500" />
  </motion.div>
);

/* ─── Main Resume component ─── */
const Resume = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">

      {/* ── Ambient background effects ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large floating orb - top right */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-red-600/[0.04] blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
        {/* Smaller orb - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-red-600/[0.03] blur-[100px] animate-pulse" style={{ animationDuration: "12s" }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-20 xl:pr-28 pt-28 sm:pt-32 pb-20 sm:pb-28 max-w-[1400px] mx-auto">

        {/* ── Hero Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 mb-14 md:mb-20">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            animate="show"
            className="flex-1"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeIn("right", 0.05)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-px bg-red-600" />
              <span className="text-xs text-red-500 uppercase tracking-[0.2em] font-semibold">
                Curriculum Vitae
              </span>
            </motion.div>

            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-3">
              KESHAV{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  S
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full" />
              </span>
            </h2>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-gray-500 max-w-lg font-light leading-relaxed">
              IoT Engineer • Web Developer • AI Researcher
              <br />
              <span className="text-gray-600 italic">
                Speaking fluent in both silicon and algorithm.
              </span>
            </p>
          </motion.div>

          {/* Download button */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="w-full md:w-auto"
          >
            <a
              href="/resume.pdf"
              download="Keshav_S_Resume.pdf"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl overflow-hidden transition-all duration-500 w-full md:w-auto"
            >
              {/* Button bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/15 to-red-600/5 border border-red-600/30 rounded-2xl group-hover:from-red-600/25 group-hover:to-red-600/10 group-hover:border-red-500/50 transition-all duration-500" />
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_-8px_rgba(241,48,36,0.3)]" />

              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                  <HiDownload className="text-red-400 text-lg group-hover:animate-bounce" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white tracking-wide">
                    DOWNLOAD CV
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                    PDF • ~120KB
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-14 md:mb-20"
        />

        {/* ── Main content: Bento grid layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* ── Experience card ── */}
          <GlassCard delay={0.3} className="lg:row-span-1">
            <SectionHeading icon={HiLightningBolt} title="Experience" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col"
            >
              {aboutData
                .find((d) => d.title === "experience")
                .info.map((item, i, arr) => (
                  <TimelineItem
                    key={i}
                    item={item}
                    index={i}
                    isLast={i === arr.length - 1}
                  />
                ))}
            </motion.div>
          </GlassCard>

          {/* ── Credentials card ── */}
          <GlassCard delay={0.4} className="lg:row-span-1">
            <SectionHeading icon={HiAcademicCap} title="Credentials" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-3"
            >
              {aboutData
                .find((d) => d.title === "credentials")
                .info.map((item, i) => (
                  <CredentialCard key={i} item={item} index={i} />
                ))}
            </motion.div>
          </GlassCard>

          {/* ── Research card ── */}
          <GlassCard delay={0.5} className="lg:col-span-1">
            <SectionHeading icon={HiDocumentText} title="Research Papers" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-4"
            >
              {aboutData
                .find((d) => d.title === "research")
                .info.map((item, i) => (
                  <ResearchCard key={i} item={item} index={i} />
                ))}
            </motion.div>
          </GlassCard>

          {/* ── Arsenal / Skills card ── */}
          <GlassCard delay={0.6} className="lg:col-span-1">
            <SectionHeading icon={HiCode} title="Arsenal" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6"
            >
              {aboutData
                .find((d) => d.title === "arsenal")
                .info.map((item, i) => (
                  <motion.div key={i} variants={staggerItem}>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                      {item.title}
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      {item.icons.map((Icon, j) => (
                        <SkillIcon key={j} Icon={Icon} index={j} />
                      ))}
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </GlassCard>
        </div>

        {/* ── Footer signature ── */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          className="mt-16 md:mt-20 flex flex-col items-center text-center"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent mb-4" />
          <p className="text-xs text-gray-600 tracking-widest uppercase">
            Built with purpose • Designed with intent
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
