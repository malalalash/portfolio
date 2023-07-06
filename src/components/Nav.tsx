import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect, useContext } from "react";
import { debounce } from "lodash";
import { motion, AnimatePresence } from "framer-motion";
import pl from "../assets/flag-pl.svg";
import gb from "../assets/flag-gb.svg";
import { LangContext } from "../context/LanguageContext";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const { lang, setLang } = useContext(LangContext);

  const handleOpen = () => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = debounce(
      () => {
        if (window.pageYOffset > 0) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      },
      200,
      { leading: true, trailing: true }
    );

    const handleResize = debounce(() => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
        document.body.style.overflow = "";
      }
    }, 150);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    closed: { opacity: 0.5, x: "-100%", transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`w-full ${
        scroll ? "shadow-md" : ""
      } mx-auto backdrop-blur-lg z-50 backdrop-saturate-200 bg-white/90 backdrop-filter top-0  sticky lg:px-10 overflow-hidden transition ease-in-out duration-300`}
    >
      <div
        className={`container max-w-6xl z-50 relative mx-auto p-2 ${
          isOpen ? "border-b shadow-md transition ease-in-out duration-300" : ""
        } sm:shadow-none sm:border-none transition ease-in-out duration-300`}
      >
        <div className="w-full  flex items-center justify-between">
          <Link
            to="home"
            isDynamic={true}
            smooth={true}
            duration={800}
            offset={-230}
            className="cursor-pointer ml-5 text-3xl md:text-4xl lg:text-5xl font-bkack-ops"
          >
            Mikolaj<span className="text-violet-600">.dev</span>
          </Link>
          <div className="flex md:hidden mr-5 items-center justify-center">
            <button
              onClick={handleOpen}
              className={`hover:bg-gray-100/50 ${
                isOpen ? "mr-4" : ""
              } rounded-full p-4 active:scale-95`}
            >
              {isOpen ? (
                <span className="text-violet-600 ">
                  <RxCross2 size={20} />
                </span>
              ) : (
                <FaBars size={20} />
              )}
            </button>
          </div>

          <div className="md:flex items-center mr-5 hidden text-base md:text-lg font-medium">
            <ul className="flex gap-2">
              <li>
                <Link
                  to="home"
                  isDynamic={true}
                  smooth={true}
                  duration={800}
                  offset={-230}
                  className="nav-link"
                  activeClass="active"
                  spy
                >
                  {lang === "pl" ? "Start" : "Home"}
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  isDynamic={true}
                  smooth={true}
                  duration={600}
                  offset={-50}
                  className="nav-link"
                  activeClass="active"
                  spy
                >
                  {lang === "pl" ? "O mnie" : "About"}
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  isDynamic={true}
                  smooth={true}
                  duration={700}
                  offset={-50}
                  className="nav-link"
                  activeClass="active"
                  spy
                >
                  {lang === "pl" ? "Projekty" : "Projects"}
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  isDynamic={true}
                  smooth={true}
                  duration={800}
                  offset={100}
                  className="nav-link"
                  activeClass="active"
                  spy
                >
                  {lang === "pl" ? "Kontakt" : "Contact"}
                </Link>
              </li>
            </ul>
            <div className="pl-5 py-2 flex gap-2">
              <button
                className="max-w-[30px] hover:-translate-y-[1px] transform duration-300"
                onClick={() => {
                  setLang("pl");
                }}
              >
                <img
                  src={pl}
                  alt={`${lang === "pl" ? "flaga polski" : "polish flag"}`}
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                className="max-w-[30px] hover:-translate-y-[1px] transform duration-300"
                onClick={() => {
                  setLang("en");
                }}
              >
                <img
                  src={gb}
                  className="w-full h-full object-cover"
                  alt={`${
                    lang === "pl"
                      ? "flaga wielkiej bryranii"
                      : "great britain flag"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={variants}
            animate={isOpen ? "open" : "closed"}
            exit={"closed"}
            initial="closed"
            className={`md:hidden border-b z-50 w-full pt-4 ${
              isOpen ? "bg-white" : "hidden"
            }`}
          >
            <ul className="flex flex-col bg-transparent items-start gap-2 text-base font-medium">
              <li className="w-full">
                <Link
                  to="home"
                  isDynamic={true}
                  smooth={true}
                  duration={800}
                  offset={-390}
                  className="nav-link-mobile"
                  activeClass="active-mobile"
                  spy
                  onClick={handleOpen}
                >
                  {lang === "pl" ? "Start" : "Home"}
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="about"
                  isDynamic={true}
                  smooth={true}
                  duration={600}
                  offset={-300}
                  className="nav-link-mobile"
                  activeClass="active-mobile"
                  spy
                  onClick={handleOpen}
                >
                  {lang === "pl" ? "O mnie" : "About"}
                </Link>
              </li>
              <li className="w-full">
                {" "}
                <Link
                  to="projects"
                  isDynamic={true}
                  smooth={true}
                  duration={700}
                  offset={-320}
                  className="nav-link-mobile"
                  activeClass="active-mobile"
                  spy
                  onClick={handleOpen}
                >
                  {lang === "pl" ? "Projekty" : "Projects"}
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="contact"
                  isDynamic={true}
                  smooth={true}
                  duration={800}
                  className="nav-link-mobile"
                  activeClass="active-mobile"
                  spy
                  onClick={handleOpen}
                >
                  {lang === "pl" ? "Kontakt" : "Contact"}
                </Link>
              </li>
            </ul>
            <div className="pl-5 py-2 flex gap-2">
              <button
                className="max-w-[30px]"
                onClick={() => {
                  setLang("pl");
                  handleOpen();
                }}
              >
                <img
                  src={pl}
                  alt={`${lang === "pl" ? "flaga polski" : "polish flag"}`}
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                className="max-w-[30px]"
                onClick={() => {
                  setLang("en");
                  handleOpen();
                }}
              >
                <img
                  src={gb}
                  className="w-full h-full object-cover"
                  alt={`${
                    lang === "pl"
                      ? "flaga wielkiej bryranii"
                      : "great britain flag"
                  }`}
                />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
