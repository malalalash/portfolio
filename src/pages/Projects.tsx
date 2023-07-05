import data from "../data/data";
import Project from "../components/Project";
import { useContext } from "react";
import { LangContext } from "../context/LanguageContext";
const Projects = () => {
  const { lang } = useContext(LangContext);
  return (
    <section id="projects" className="w-full pt-10 bg-projects px-10">
      <h2 className="heading text-black mb-12">
        {lang === "pl" ? "Projekty" : "Projects"}
      </h2>
      <div className="container max-w-xl lg:max-w-4xl flex items-center justify-center flex-col mx-auto">
        {data.map((project) => (
          <Project data={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
