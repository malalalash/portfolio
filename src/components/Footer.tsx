import { SiGithub, SiLinkedin } from "react-icons/si";
import { useContext } from "react";
import { LangContext } from "../context/LanguageContext";
import { Link } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const { lang } = useContext(LangContext);
  return (
    <footer className="bg-zinc-900 w-full p-12">
      <div className="text-center text-white flex flex-col gap-2 sm:flex-row items-center justify-between">
        <p className="md:text-lg">
          {lang === "pl"
            ? "Wszelkie prawa zastrzeżone © 2023"
            : "All rights reserved © 2023"}
        </p>

        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/mikolaj-malarczyk/"
            target="_blank"
            className=""
          >
            <SiLinkedin size={30} />
          </a>
          <a href="https://github.com/malalalash" target="_blank" className="">
            <SiGithub size={30} />
          </a>
          <Link
            to="home"
            smooth={true}
            duration={900}
            offset={-230}
            className="hover:-translate-y-[1px] cursor-pointer transform-gpu duration-300"
          >
            <IoIosArrowUp size={35} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
