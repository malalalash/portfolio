import profile from "../../assets/av.png";
import { SiGithub, SiLinkedin } from "react-icons/si";
import html from "../../assets/html5.svg";
import css from "../../assets/css.svg";
import js from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import { useContext } from "react";
import { LangContext } from "../../context/LanguageContext";

const Home = () => {
  const icons: Array<string> = [html, css, js, react, tailwindcss];
  const { lang } = useContext(LangContext);

  return (
    <section
      id="home"
      className="w-full flex flex-col items-center justify-center my-20 lg:my-40"
    >
      <div className="container  max-w-3xl flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-start max-w-sm">
          <h1 className="text-lg sm:text-2xl lg:text-3xl">
            {lang === "pl" ? "Cześć, jestem " : "Hello, I'm "}
            <span className="text-violet-600 font-semibold">Mikołaj.</span>
          </h1>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            Front-end Developer
          </h2>
          <div className="flex gap-1 items-center justify-center lg:justify-start mt-5">
            <a
              href="https://www.linkedin.com/in/mikolaj-malarczyk/"
              target="_blank"
              className="social "
            >
              <SiLinkedin size={30} />
            </a>
            <a
              href="https://github.com/malalalash"
              target="_blank"
              className="social"
            >
              <SiGithub size={30} />
            </a>
          </div>
        </div>
        <img
          src={profile}
          alt="profile image"
          className="rounded-full mt-5 border-2 border-solid border-black/50 w-[15rem] h-[15rem] lg:w-[17rem] lg:h-[17rem] object-contain"
        />
      </div>
      <div className="container justify-center lg:justify-start max-w-sm px-5 sm:px-0 flex-wrap sm:max-w-3xl mx-auto flex items-center mt-5 lg:mt-10">
        <h3 className="border-r hidden lg:block font-semibold pr-5 py-3 text-lg border-black">
          Skills
        </h3>
        <div className="flex gap-5 ml-5 flex-wrap justify-center">
          {icons.map((icon, index) => (
            <img
              src={icon}
              alt={icon}
              key={index}
              className=" bg-gray-50 p-3 rounded-full object-contain shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
