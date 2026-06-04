
import '/Users/ShriSudhanBoobathi/Desktop/Portfolio/src/App.css';
import logo from './assets/Image/logo.png'
import Avatar from './assets/Image/Avatar.png'
import left from './assets/Image/leftArrow.png'
import right from './assets/Image/RightArrow.png'

function App() {
  return (
    <>
      <div className="bo bg-[radial-gradient(circle_at_75%_35%,rgba(255,0,0,0.25)_0%,rgba(120,0,0,0.15)_30%,transparent_65%),radial-gradient(circle_at_50%_50%,rgba(70,0,0,0.08)_0%,transparent_70%),linear-gradient(90deg,#080808_0%,#0d0708_50%,#120304_100%)] h-auto w-full">
        <div className="nav relative flex items-center p-4 justify-between">
          <div className="logo flex">
            <img src={logo} alt="logo" className="w-20 h-full object-contain" />
            <div className="logo-sudhan font-logo flex ml-[-1rem] text-2xl mt-2">
              <div className="text-white">s</div>
              <div className="text-[#ff0000] font-logo">u</div>
              <div className="text-white">dhan</div>
            </div>
          </div>

          <div className="nav-items absolute left-1/2 -translate-x-1/2">
            <ul className="flex gap-15 text-white font-menu">
              <li className="hover:underline-offset-8 hover:underline cursor-pointer hover:text-[#ff0000] transition-all duration-500 ease-in-out">Home</li>
              <li className="hover:underline-offset-8 hover:underline cursor-pointer hover:text-[#ff0000] transition-all duration-500 ease-in-out">About</li>
              <li className="hover:underline-offset-8 hover:underline cursor-pointer hover:text-[#ff0000] transition-all duration-500 ease-in-out">Services</li>
              <li className="hover:underline-offset-8 hover:underline cursor-pointer hover:text-[#ff0000] transition-all duration-500 ease-in-out">Contact</li>
            </ul>
          </div>


        </div>
        <div className="App flex  items-center justify-between mt-10 px-15">
          <div className="title flex flex-col items-start gap-4">
            <div className="text-6xl font-menu text-white">Turning  <span className="text-[#ff0000]"> Ideas  </span>Into </div>
            <div className="text-6xl font-menu text-white">Digital Reality</div>
            <div className="body font-nav text-white mt-5">
              Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto Bianca pesto roll onions.
            </div>
            <div className="remuse hover:scale-105 transition-all duration-300 gap-4 bg-[#ff0000] w-[9.6rem] h-[3rem] rounded-2xl text-white flex items-center justify-center mt-5 cursor-pointer font-menu">
              Resume <span> <i className="bi bi-arrow-down"></i></span>
            </div>
          </div>
          <div className="relative w-1/2 h-[500px] overflow-hidden flex items-center">

            {/* Image */}
            <img
              src={Avatar}
              alt=""
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                z-20
                h-[550px]
                object-contain
                pointer-events-none
              "
            />

            {/* Moving Text */}
            <div className="overflow-hidden whitespace-nowrap">
              <div className="inline-flex animate-marquee">

                <span className="text-[250px] font-logo text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.15)]">
                  UI/UX UI/UX UI/UX UI/UX UI/UX
                </span>

                <span className="text-[250px] font-logo  text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.15)]">
                  UI/UX UI/UX UI/UX UI/UX UI/UX
                </span>

              </div>
            </div>

          </div>
        </div>
        <div className="count flex items-center gap-10 justify-center mt-20">
            <img src={left} alt="left arrow" />
            <div className="flex items-center gap-20">
              <div className="project flex items-start">
              <div className="text-4xl font-menu font-bold text-white">190+</div>
              <div className="flex flex-col items-start ml-2">
                <div className="font-menu text-white font-thin text-sm">Projects</div>
                <div className="font-menu text-white font-thin text-sm">Completed</div>
              </div>
            </div>
             <div className="project flex items-start">
              <div className="text-4xl font-menu font-bold text-white">190+</div>
              <div className="flex flex-col items-start ml-2">
                <div className="font-menu text-white font-thin text-sm">Projects</div>
                <div className="font-menu text-white font-thin text-sm">Completed</div>
              </div>
            </div>
             <div className="project flex items-start">
              <div className="text-4xl font-menu font-bold text-white">190+</div>
              <div className="flex flex-col items-start ml-2">
                <div className="font-menu text-white font-thin text-sm">Projects</div>
                <div className="font-menu text-white font-thin text-sm">Completed</div>
              </div>
            </div>
             <div className="project flex items-start">
              <div className="text-4xl font-menu font-bold text-white">190+</div>
              <div className="flex flex-col items-start ml-2">
                <div className="font-menu text-white font-thin text-sm">Projects</div>
                <div className="font-menu text-white font-thin text-sm">Completed</div>
              </div>
            </div>
            </div>
            <img src={right} alt="right arrow" />
        </div>
      </div>
    </>
  )
}

export default App