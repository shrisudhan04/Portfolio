import { useState } from "react";
import "./App.css";
import Dropdown from 'react-bootstrap/Dropdown';
import logo from "./assets/Image/logo.png";
import Avatar from "./assets/Image/Avatar.png";
import Avatar2 from "./assets/Image/Avatar2.png";
import left from "./assets/Image/leftArrow.png";
import right from "./assets/Image/RightArrow.png";
import mobile1 from "./assets/Image/MobileAvatar.png";
import mobile2 from "./assets/Image/mobile2.png";
import react from "./assets/Image/React.png";
import spring from "./assets/Image/Spring.png";
import mysql from "./assets/Image/mysql.png";
import java from "./assets/Image/java.png";
import pro1 from "./assets/Image/pro1.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden bg-[radial-gradient(circle_at_75%_35%,#ff000040_0%,#78000026_30%,transparent_65%),radial-gradient(circle_at_50%_50%,rgba(70,0,0,0.08)_0%,transparent_70%),linear-gradient(90deg,#080808_0%,#0d0708_50%,#120304_100%)] min-h-screen w-full">

      {/* NAVBAR */}
      <div className="relative flex items-center justify-between p-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-14 md:w-20 object-contain"
          />

          <div className="font-logo flex ml-[-0.7rem] md:ml-[-1rem] text-xl md:text-2xl">
            <div className="text-white">s</div>
            <div className="text-[#ff0000]">u</div>
            <div className="text-white">dhan</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-8 lg:gap-15 text-white font-menu">
            <li className="cursor-pointer hover:text-[#ff0000] transition-all duration-300">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#ff0000] transition-all duration-300">
              About
            </li>
            <li className="cursor-pointer hover:text-[#ff0000] transition-all duration-300">
              Services
            </li>
            <li className="cursor-pointer hover:text-[#ff0000] transition-all duration-300">
              Contact
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md z-50 md:hidden">
            <ul className="flex flex-col items-center gap-6 py-6 text-white font-menu">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>

      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-8 lg:px-15 py-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start gap-2 w-fit lg:w-1/2 md:mt-0 mt-2">

          <div className="font-menu text-white text-sm md:text-base">
            Hello, I'm <span className="text-[#ff0000]">Sudhan</span>
          </div>

          <div className="text-3xl md:text-5xl lg:text-6xl font-menu text-white">
            Turning <span className="text-[#ff0000]">Ideas</span> Into
          </div>

          <div className="text-3xl md:text-5xl lg:text-6xl font-menu text-white">
            Digital Reality
          </div>

          <div className="font-nav text-white mt-4 text-sm md:text-base max-w-xl text-justify">
            Building modern, scalable, and user-centric applications with
            Mendix and Full Stack technologies. Continuously learning,
            innovating, and delivering high-quality solutions.
          </div>

          <button className="hover:scale-105 transition-all duration-300 bg-[#ff0000] px-6 py-3 rounded text-white flex items-center gap-3 mt-5 font-menu">
            Resume
            <i className="bi bi-arrow-down"></i>
          </button>

          {/* STATS */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-10 mt-10">

            <img
              src={left}
              alt="left"
              className="w-8 md:w-auto"
            />

            <div className="flex flex-wrap justify-center gap-8 md:gap-20">

              <div className="flex items-start gap-2">
                <div className="text-2xl md:text-4xl font-menu font-bold text-white">
                  190+
                </div>

                <div>
                  <div className="font-menu text-white text-sm">
                    Projects
                  </div>
                  <div className="font-menu text-white text-sm">
                    Completed
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="text-2xl md:text-4xl font-menu font-bold text-white">
                  2+
                </div>

                <div>
                  <div className="font-menu text-white text-sm">
                    Years
                  </div>
                  <div className="font-menu text-white text-sm">
                    Experience
                  </div>
                </div>
              </div>

            </div>

            <img
              src={right}
              alt="right"
              className="w-8 md:w-auto"
            />
          </div>
      </div>

        {/* HERO IMAGE */}
        <div className="relative w-full lg:w-1/2 h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden flex items-center justify-center">

          <img
            src={Avatar}
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-[280px] hidden md:block lg:h-[550px] object-contain pointer-events-none"
          />
          <img
            src={mobile1}
            alt=""
            className="absolute fade-image left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-[380px] block md:hidden lg:h-[550px] object-contain pointer-events-none"
          />

          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex animate-marquee">

              <span className="text-[80px] md:text-[150px] lg:text-[250px] font-menu text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.15)]">
                UI/UX UI/UX UI/UX UI/UX UI/UX
              </span>

              <span className="text-[80px] md:text-[150px] lg:text-[250px] font-menu text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.15)]">
                UI/UX UI/UX UI/UX UI/UX UI/UX
              </span>

            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="mt-20 flex flex-col lg:flex-row items-center">

        {/* ABOUT IMAGE */}
        <div className="relative w-full lg:w-1/3 h-[330px] md:h-[450px] lg:h-[500px] overflow-hidden flex items-center justify-center">

          <img
            src={Avatar2}
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-[280px] hidden md:block lg:h-[550px] object-contain pointer-events-none"
          />
          <img
            src={mobile2}
            alt=""
            className="absolute fade-image left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-[400px] block md:hidden  lg:h-[550px] object-contain pointer-events-none"
          />

          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex animate-marquee">

              <span className="text-[80px] md:text-[150px] lg:text-[250px] font-menu text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.15)]">
                ABOUT ABOUT ABOUT ABOUT ABOUT
              </span>

              <span className="text-[80px] md:text-[150px] lg:text-[250px] font-menu text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.15)]">
                ABOUT ABOUT ABOUT ABOUT ABOUT
              </span>

            </div>
          </div>
        </div>

        {/* ABOUT CONTENT */}
        <div className="flex-1 px-6 lg:px-0 lg:ml-20 mt-10 lg:mt-0">

          <div className="text-3xl md:text-5xl lg:text-6xl font-nav text-white font-bold">
            About Me
          </div>

          <div className="lg:pr-10 mt-5">
            <div className="font-nav text-white text-sm md:text-base leading-7">
              I am a passionate and dedicated software developer with a strong
              focus on creating innovative and user-friendly applications. With
              a background in both front-end and back-end development, I have a
              comprehensive understanding of the software development lifecycle.
              I thrive in collaborative environments and am always eager to
              learn new technologies and improve my skills. My goal is to
              contribute to impactful projects that make a difference in the
              digital world.
            </div>
          </div>

         <div className="flex flex-wrap justify-start mt-5">
            <div className="w-full md:w-1/2 xl:w-1/3 mb-4 pr-4">
              <div className="card-border">
                <div className="card-content font-bold md:text-base">
                  <i className="fs-3 text-[#C70E1A] bi bi-person-fill"></i>
                  Shri Sudhan
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 mb-4 pr-4">
              <div className="card-border">
                <div className="card-content">
                  <i className="fs-3 text-[#C70E1A] bi bi-briefcase-fill"></i>
                  3 Years Experience
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 mb-4">
              <div className="card-border">
                <div className="card-content">
                  <i className="fs-3 text-[#C70E1A] bi bi-person-workspace"></i>
                  Full Stack Developer
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/*Skills*/}
      <div className="px-10 py-15">
        <div className="text-xl md:text-xl lg:text-xl text-[#C70E1A] font-menu">
          Skills
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl text-white font-nav font-bold">
          Technical Skills
        </div>
        <div className="relative overflow-hidden w-full py-8">
          <div className="marquee flex">

            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-8 mr-8">
                {[
                  { img: react, name: "React" },
                  { img: spring, name: "Spring Boot" },
                  { img: mysql, name: "MySQL" },
                  { img: java, name: "Java" },
                ].map((tech, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="relative w-[120px] h-[90px] rounded-xl overflow-hidden
                              bg-white/[0.03] backdrop-blur-xl
                              shadow-[0_0_20px_rgba(255,0,0,0.08)]
                              flex-shrink-0"
                  >
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-red-500/30 blur-2xl"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="w-10 h-10 object-contain mt-2"
                      />
                      <p className="text-white text-xs mt-2 font-menu">
                        {tech.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Project */}
      <div className="projects">
        <div className="font-nav text-[#C70E1A] text-xl md:text-2xl lg:text-xl px-10">
          Projects
        </div>
        <div className="px-10 text-white text-3xl md:text-5xl lg:text-4xl font-nav font-bold">
          My Recent Projects
        </div>
        <div className="project-list px-10 py-8 flex gap-8 overflow-x-auto">
            <div className="relative w-80 h-auto rounded-xl overflow-hidden bg-white/[0.03] backdrop-blur-xl shadow-[0_0_20px_rgba(255,0,0,0.08)] flex-shrink-0">
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-80 h-50 bg-red-500/30 blur-2xl"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <img src={pro1} alt="Project 1" className="w-80 h-50 object-cover rounded-3xl p-2" />
                    <p className="text-white mt-1 font-nav text-sm md:text-base px-3 font-bold">
                      Portfolio
                    </p>
                    <p className="text-white font-menu text-xs md:text-xs px-3 justify-center text-justify">
                      A personal portfolio website built with React, showcasing my skills, projects, and experience in a visually appealing and user-friendly manner.
                    </p>
                    <div className="tools flex gap-2 px-3 pb-3 mt-auto">
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">JavaScript</span>
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">CSS</span>
                    </div>
                  </div>
            </div>
            <div className="relative w-80 h-auto rounded-xl overflow-hidden bg-white/[0.03] backdrop-blur-xl shadow-[0_0_20px_rgba(255,0,0,0.08)] flex-shrink-0">
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-80 h-50 bg-red-500/30 blur-2xl"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <img src={pro1} alt="Project 1" className="w-80 h-50 object-cover rounded-3xl p-2" />
                    <p className="text-white mt-1 font-nav text-sm md:text-base px-3 font-bold">
                      Portfolio
                    </p>
                    <p className="text-white font-menu text-xs md:text-xs px-3 justify-center text-justify">
                      A personal portfolio website built with React, showcasing my skills, projects, and experience in a visually appealing and user-friendly manner.
                    </p>
                    <div className="tools flex gap-2 px-3 pb-3 mt-auto">
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">JavaScript</span>
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">CSS</span>
                    </div>
                  </div>
            </div>
            <div className="relative w-80 h-auto rounded-xl overflow-hidden bg-white/[0.03] backdrop-blur-xl shadow-[0_0_20px_rgba(255,0,0,0.08)] flex-shrink-0">
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-80 h-50 bg-red-500/30 blur-2xl"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <img src={pro1} alt="Project 1" className="w-80 h-50 object-cover rounded-3xl p-2" />
                    <p className="text-white mt-1 font-nav text-sm md:text-base px-3 font-bold">
                      Portfolio
                    </p>
                    <p className="text-white font-menu text-xs md:text-xs px-3 justify-center text-justify">
                      A personal portfolio website built with React, showcasing my skills, projects, and experience in a visually appealing and user-friendly manner.
                    </p>
                    <div className="tools flex gap-2 px-3 pb-3 mt-auto">
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">JavaScript</span>
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">CSS</span>
                    </div>
                  </div>
            </div>
            <div className="relative w-80 h-auto rounded-xl overflow-hidden bg-white/[0.03] backdrop-blur-xl shadow-[0_0_20px_rgba(255,0,0,0.08)] flex-shrink-0">
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-80 h-50 bg-red-500/30 blur-2xl"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <img src={pro1} alt="Project 1" className="w-80 h-50 object-cover rounded-3xl p-2" />
                    <p className="text-white mt-1 font-nav text-sm md:text-base px-3 font-bold">
                      Portfolio
                    </p>
                    <p className="text-white font-menu text-xs md:text-xs px-3 justify-center text-justify">
                      A personal portfolio website built with React, showcasing my skills, projects, and experience in a visually appealing and user-friendly manner.
                    </p>
                    <div className="tools flex gap-2 px-3 pb-3 mt-auto">
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">JavaScript</span>
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">CSS</span>
                    </div>
                  </div>
            </div>
            <div className="relative w-80 h-auto rounded-xl overflow-hidden bg-white/[0.03] backdrop-blur-xl shadow-[0_0_20px_rgba(255,0,0,0.08)] flex-shrink-0">
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-80 h-50 bg-red-500/30 blur-2xl"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <img src={pro1} alt="Project 1" className="w-80 h-50 object-cover rounded-3xl p-2" />
                    <p className="text-white mt-1 font-nav text-sm md:text-base px-3 font-bold">
                      Portfolio
                    </p>
                    <p className="text-white font-menu text-xs md:text-xs px-3 justify-center text-justify">
                      A personal portfolio website built with React, showcasing my skills, projects, and experience in a visually appealing and user-friendly manner.
                    </p>
                    <div className="tools flex gap-2 px-3 pb-3 mt-auto">
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">JavaScript</span>
                      <span className="bg-white/10 font-menu text-white text-xs px-2 py-1 rounded">CSS</span>
                    </div>
                  </div>
            </div>
        </div>
      </div>

      {/* COntact */}
      <div className="contact">
        <div className="font-nav text-white text-4xl font-bold px-5">Contact</div>
        <div className="content px-5 mt-5">
          <div className="w-full max-w-3xl mx-auto">

      <form className="space-y-4">

        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Name */}
          <div className="flex items-center h-12 px-4 rounded-lg bg-white/[0.03] backdrop-blur-xl border border-white/10">
            <i className="bi bi-person-fill text-[#C70E1A] text-lg"></i>

            <input
              type="text"
              placeholder="Your Name"
              className="ml-3 w-full bg-transparent text-white placeholder:text-gray-400 outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center h-12 px-4 rounded-lg bg-white/[0.03] backdrop-blur-xl border border-white/10">
            <i className="bi bi-envelope-fill text-[#C70E1A] text-lg"></i>

            <input
              type="email"
              placeholder="Your Email"
              className="ml-3 w-full bg-transparent text-white placeholder:text-gray-400 outline-none"
            />
          </div>

        </div>

        {/* Subject */}
        <div className="flex items-center h-12 px-4 rounded-lg bg-white/[0.03] backdrop-blur-xl border border-white/10">
          <i className="bi bi-chat-left-text-fill text-[#C70E1A] text-lg"></i>

          <input
            type="text"
            placeholder="Subject"
            className="ml-3 w-full bg-transparent text-white placeholder:text-gray-400 outline-none"
          />
        </div>

        {/* Message */}
        <div className="flex items-center h-12 px-4 rounded-lg bg-white/[0.03] backdrop-blur-xl border border-white/10">
  <i className="bi bi-person-fill text-[#C70E1A] text-lg"></i>

  <input
    type="text"
    placeholder="Your Name"
    className="ml-5 w-full bg-transparent text-white placeholder:text-gray-400 outline-none"
  />
</div>

        {/* Button */}
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C70E1A] text-white hover:bg-red-700 transition-all duration-300"
        >
          <i className="bi bi-send-fill"></i>
          Send Message
        </button>

      </form>

    </div>
        </div>
      </div>
     </div>
  );
}

export default App;