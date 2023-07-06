import about from "../assets/aboutimg.png";
import { useContext } from "react";
import { LangContext } from "../context/LanguageContext";
import aboutText from "../data/aboutText";
import { AboutTextType } from "../types/aboutTypes";
const About = () => {
  const data: AboutTextType = aboutText;
  const { lang } = useContext(LangContext);
  return (
    <section
      id="about"
      className="w-full  bg-gradient-to-tr from-violet-500 to-violet-600 flex items-start justify-center pt-20 relative clip min-h-[70vh] md:pb-10"
    >
      <article className="container max-w-4xl mx-auto">
        <h2 className="heading text-white">
          {lang === "pl" ? "O mnie" : "About Me"}
        </h2>
        <div className="flex flex-col-reverse items-center md:items-start md:flex-row justify-center lg:justify-between w-full mx-auto">
          <img
            src={about}
            alt="about image"
            className="object-cover w-44 md:w-60  lg:w-72 pt-5 lg:-translate-y-10"
          />
          <div className="flex flex-col gap-5 mt-10 md:mt-16">
            <p className="about-info">
              {lang === "pl" ? data.pl.first : data.en.first}
            </p>

            <p className="about-info">
              {lang === "pl" ? data.pl.second : data.en.second}
            </p>

            <p className="about-info">
              {lang === "pl" ? data.pl.third : data.en.third}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
