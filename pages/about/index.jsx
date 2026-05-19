// comment
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import {
  FaPython, FaJava, FaReact, FaNode, FaDocker, FaGitAlt, FaDatabase,
  FaRaspberryPi, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiTensorflow, SiArduino, SiMongodb, SiExpress, SiCplusplus,
  SiJavascript, SiSolidity, SiFlutter, SiPytorch, SiScikitlearn,
  SiNextdotjs, SiSpringboot, SiFirebase, SiFastapi, SiPandas, SiNumpy,
  SiPostgresql, SiDart, SiHaskell, SiEthereum, SiC,
  SiTypescript, SiDocker, SiEspressif,
} from "react-icons/si";
import { TbSql, TbCpu } from "react-icons/tb";
import { BsCpu } from "react-icons/bs";

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

//  data
export const aboutData = [
  {
    title: "arsenal",
    info: [
      {
        title: "Languages",
        techs: [
          { icon: SiC, name: "C" },
          { icon: SiCplusplus, name: "C++" },
          { icon: FaPython, name: "Python" },
          { icon: FaJava, name: "Java" },
          { icon: SiJavascript, name: "JavaScript" },
          { icon: SiSolidity, name: "Solidity" },
          { icon: SiHaskell, name: "Haskell" },
          { icon: SiDart, name: "Dart" },
          { icon: FaHtml5, name: "HTML" },
          { icon: FaCss3Alt, name: "CSS" },
          { icon: TbSql, name: "SQL" },
        ],
      },
      {
        title: "Web & Frameworks",
        techs: [
          { icon: FaReact, name: "React" },
          { icon: SiNextdotjs, name: "Next.js" },
          { icon: FaNode, name: "Node.js" },
          { icon: SiExpress, name: "Express" },
          { icon: SiSpringboot, name: "SpringBoot" },
          { icon: SiFastapi, name: "FastAPI" },
          { icon: SiFlutter, name: "Flutter" },
          { icon: SiFirebase, name: "Firebase" },
        ],
      },
      {
        title: "AI & ML",
        techs: [
          { icon: SiTensorflow, name: "TensorFlow" },
          { icon: SiPytorch, name: "PyTorch" },
          { icon: SiScikitlearn, name: "Scikit-learn" },
          { icon: BsCpu, name: "Deep Learning" },
          { icon: TbCpu, name: "CNNs" },
        ],
      },
      {
        title: "Data & DevOps",
        techs: [
          { icon: SiMongodb, name: "MongoDB" },
          { icon: SiPostgresql, name: "PostgreSQL" },
          { icon: SiPandas, name: "Pandas" },
          { icon: SiNumpy, name: "NumPy" },
          { icon: FaDocker, name: "Docker" },
          { icon: FaGitAlt, name: "Git" },
        ],
      },
      {
        title: "IoT & Embedded",
        techs: [
          { icon: SiArduino, name: "Arduino" },
          { icon: SiEspressif, name: "ESP32" },
          { icon: BsCpu, name: "STM32" },
          { icon: FaRaspberryPi, name: "Raspberry Pi" },
        ],
      },
      {
        title: "Blockchain",
        techs: [
          { icon: SiEthereum, name: "Ethereum" },
          { icon: SiSolidity, name: "Smart Contracts" },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Developer Intern - BCE Global Tech",
        stage: "2026",
        desc: [
          "Developing RESTful APIs using Spring Boot and Node.js/Express, ensuring scalable and maintainable architecture",
          "Working with databases to design schemas, perform CRUD operations, and optimize data handling",
          "Building and integrating frontend components with backend services for seamless user experience",
          "Collaborating in an agile environment to test, debug, and deploy robust software solutions"
        ]
      },
      {
        title: "IoT Engineer - Intel IoT Club, Amrita",
        stage: "2025 - Present",
        desc: [
          "Developed IoT prototypes using ESP32, STM32, and Raspberry Pi with MicroPython and Wi-Fi automation",
          "Collaborated on innovation challenges and campus tech workshops focused on IoT applications"
        ]
      },
      {
        title: "Research Contributor - Amrita Vishwa Vidyapeetham",
        stage: "2023 - Present",
        desc: [
          "Co-authored research papers in AI, Smart Systems, and IoT; submitted to national-level journals"
        ]
      },
      {
        title: "NSS Volunteer - Amrita Vishwa Vidyapeetham",
        stage: "2023 - 2025",
        desc: [
          "Engaged in social service initiatives, environmental sustainability, and digital literacy programs"
        ]
      }
    ],
  },
  {
    title: "research",
    info: [
      {
        title: "AI’s Influence on Gender Representation and Societal Norms in Emerging Technologies",
        stage: "Published",
        link: "https://ieeexplore.ieee.org/document/11478212/"
      },
      {
        title: "SecureAI-Cyber: An AI-Powered Cybersecurity Solution for Scalable Threat Management",
        stage: "Published",
        link: "https://link.springer.com/chapter/10.1007/978-981-96-9682-6_17"
      },
      {
        title: "Redefining Healthcare support through Personalized Nutrition and Lifestyle Recommendations with Multimodal AI For People with Alzheimer’s disease: A study",
        stage: "Accepted",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "B.Tech CSE - Amrita (CGPA: 9.61/10)",
        stage: "Batch Topper",
      },
      {
        title: "AWS AI for Bharat Hackathon - Pre-finals (Lazarus Cloud-Native AI Platform)",
        stage: "2026",
      },
      {
        title: "Smart India Hackathon - Top 50 Teams (University Level)",
        stage: "2025",
      },
      {
        title: "IIT Delhi Hackathon - Top 50 Teams (Technical Problem-Solving)",
        stage: "2025",
      },
      {
        title: "AI For All Ideathon (NIT Trichy) - Top 50 out of 650+ Teams",
        stage: "2025",
      },
      {
        title: "Certified: Office Auto, Web & Mobile Dev - Bharathidasan Univ.",
        stage: "Completed",
      },
      {
        title: "12th Grade - Velammal Bodhi Campus",
        stage: "94.8%",
      },
      {
        title: "10th Grade - Velammal Bodhi Campus",
        stage: "98.2%",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* 3D Robot Background - Fixed */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="relative w-full h-full">
          <iframe
            src="https://my.spline.design/nexbotrobotcharacterconcept-35jkgbt6hKRrjNC1eg6R95Ly/"
            className="w-full h-full border-0"
            style={{
              pointerEvents: 'auto',
            }}
            title="3D Robot"
          />
          {/* Hide Spline watermark */}
          <style>
            {`
              iframe {
                pointer-events: auto !important;
              }
              /* Hide Spline logo */
              iframe::after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                width: 200px;
                height: 60px;
                background: black;
                z-index: 1000;
              }
            `}
          </style>
          {/* Cover for Spline watermark */}
          <div className="absolute bottom-0 right-0 w-48 h-16 bg-black z-50 pointer-events-none"></div>
        </div>
        {/* Adjusted overlay gradient - less opacity in center */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/50 pointer-events-none" />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 w-full pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Main content wrapper with proper spacing */}
          <div className="pt-32 sm:pt-40 lg:pt-32 pb-20 flex flex-col xl:flex-row gap-8 xl:gap-x-12">

            {/* Left side - text */}
            <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto xl:mx-0 xl:max-w-[45%] pointer-events-auto">
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
              >
                The specs? <span className="text-red-600">Off the charts.</span>
              </motion.h2>

              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                animate="show"
                className="max-w-[600px] mx-auto xl:mx-0 mb-6 xl:mb-8 text-sm sm:text-base text-gray-300 bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg"
              >
                I don't just write code, I engineer intelligence from neural networks
                that learn, to IoT systems that sense, from frontend interfaces that dazzle
                to backend architectures that never break. Currently I am pushing the boundaries
                of AI and cybersecurity research while turning theoretical computer science
                into weapons-grade software. Think of me as the guy who speaks fluent in
                both silicon and algorithm.
              </motion.p>

              {/* Desktop counters */}
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                animate="show"
                className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 bg-black/40 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="flex flex-1 gap-4 xl:gap-x-6">
                  {/* CGPA */}
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-red-600/30 after:absolute after:top-0 after:right-0 pr-4">
                    <div className="text-2xl xl:text-4xl font-extrabold text-red-600 mb-2">
                      <CountUp start={0} end={9.61} duration={5} decimals={2} decimal="." />
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-gray-400">
                      Academic
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-red-600/30 after:absolute after:top-0 after:right-0 pr-4">
                    <div className="text-2xl xl:text-4xl font-extrabold text-red-600 mb-2">
                      <CountUp start={0} end={10} duration={5} />+
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-gray-400">
                      Systems
                    </div>
                  </div>

                  {/* Research Papers */}
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-red-600/30 after:absolute after:top-0 after:right-0 pr-4">
                    <div className="text-2xl xl:text-4xl font-extrabold text-red-600 mb-2">
                      <CountUp start={0} end={3} duration={5} />
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-gray-400">
                      Papers
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="relative flex-1">
                    <div className="text-2xl xl:text-4xl font-extrabold text-red-600 mb-2">
                      <CountUp start={0} end={3} duration={5} />+
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-gray-400">
                      Certs
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Counters */}
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                animate="show"
                className="md:hidden grid grid-cols-2 gap-3 mb-6 max-w-md mx-auto"
              >
                <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-lg">
                  <div className="text-2xl font-extrabold text-red-600 mb-1">
                    <CountUp start={0} end={9.66} duration={5} decimals={2} decimal="." />
                  </div>
                  <div className="text-xs uppercase text-gray-400">Academic</div>
                </div>
                <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-lg">
                  <div className="text-2xl font-extrabold text-red-600 mb-1">
                    <CountUp start={0} end={10} duration={5} />+
                  </div>
                  <div className="text-xs uppercase text-gray-400">Systems</div>
                </div>
                <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-lg">
                  <div className="text-2xl font-extrabold text-red-600 mb-1">
                    <CountUp start={0} end={3} duration={5} />
                  </div>
                  <div className="text-xs uppercase text-gray-400">Papers</div>
                </div>
                <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-lg">
                  <div className="text-2xl font-extrabold text-red-600 mb-1">
                    <CountUp start={0} end={3} duration={5} />+
                  </div>
                  <div className="text-xs uppercase text-gray-400">Certs</div>
                </div>
              </motion.div>
            </div>

            {/* Right side - info */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col w-full xl:max-w-[48%] bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-red-600/20 pointer-events-auto"
            >
              <div className="flex gap-x-3 sm:gap-x-4 xl:gap-x-8 mb-4 flex-wrap justify-center xl:justify-start">
                {aboutData.map((item, itemI) => (
                  <div
                    key={itemI}
                    className={`${index === itemI &&
                      "text-red-600 after:w-[100%] after:bg-red-600 after:transition-all after:duration-300"
                      } cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 text-white hover:text-red-600 transition-colors`}
                    onClick={() => setIndex(itemI)}
                  >
                    {item.title}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start w-full overflow-y-auto max-h-[300px] sm:max-h-[400px] xl:max-h-[450px] scrollbar-thin scrollbar-thumb-red-600/50 scrollbar-track-black/20 pr-1 sm:pr-2 pb-2">
                {aboutData[index].info.map((item, itemI) => (
                  <div
                    key={itemI}
                    className="flex flex-col gap-2 w-full bg-black/30 p-3 sm:p-4 rounded border border-red-600/10"
                  >
                    {/* Title & Stage Row */}
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center justify-between text-center sm:text-left">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noreferrer" className="font-light text-xs sm:text-sm text-gray-300 hover:text-red-500 transition-colors underline underline-offset-4 decoration-red-600/30">
                          {item.title}
                        </a>
                      ) : (
                        <div className="font-light text-xs sm:text-sm text-gray-300">{item.title}</div>
                      )}
                      {item.stage && (
                        <>
                          <div className="hidden sm:flex text-red-600/50">-</div>
                          <div className="text-red-600 text-xs sm:text-sm min-w-max">{item.stage}</div>
                        </>
                      )}
                    </div>

                    {/* New Description Rendering for Experience */}
                    {item.desc && (
                      <ul className="list-none mt-2 flex flex-col gap-1.5 w-full">
                        {item.desc.map((bullet, bulletI) => (
                          <li key={bulletI} className="text-xs sm:text-sm text-gray-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-red-600 text-left leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Original Icons array (for non-arsenal sections if any) */}
                    {item.icons && (
                      <div className="flex gap-2 sm:gap-3 mt-2">
                        {item.icons.map((Icon, iconI) => (
                          <div key={iconI} className="text-lg sm:text-xl text-red-600 hover:text-red-500 transition-colors">
                            <Icon />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* New Techs array rendering for Arsenal */}
                    {item.techs && (
                      <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 justify-center sm:justify-start">
                        {item.techs.map((tech, techI) => {
                          const Icon = tech.icon;
                          return (
                            <div
                              key={techI}
                              className="group flex items-center gap-2 bg-black/50 border border-red-600/20 px-3 py-2 rounded-lg hover:bg-red-600/10 hover:border-red-600/50 transition-all duration-300 cursor-pointer"
                            >
                              <div className="text-lg sm:text-xl text-red-600 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300">
                                <Icon />
                              </div>
                              <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                                {tech.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
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

export default About;