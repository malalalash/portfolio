import { SiGithub } from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";
import { useContext } from "react";
import { LangContext } from "../context/LanguageContext";
import { motion } from "framer-motion";

interface Data {
  id: number;
  title: string;
  img: string;
  description: string;
  github: string | undefined;
  demo: string;
  stack: Array<string>;
  descriptionEn: string;
}

const Project = ({ data }: { data: Data }) => {
  const { lang } = useContext(LangContext);

  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      className="mb-5 p-5  flex items-center rounded-3xl  shadow-inner justify-between flex-col lg:flex-row w-full"
    >
      <div className="flex flex-col text-center">
        <h3 className="text-2xl font-semibold pb-5">{data.title}</h3>
        <p className=" max-w-md md:max-w-sm  pb-5 text-base lg:text-lg">
          {lang === "pl" ? data.description : data.descriptionEn}
        </p>
        <div className="flex flex-wrap items-center text-white justify-center gap-3 text-sm mb-5 max-w-md md:max-w-sm">
          {data.stack.map((item, i) => (
            <span
              className="border border-violet-800 p-1 font-semibold bg-violet-600"
              key={i}
            >
              {item}
            </span>
          ))}
        </div>
        <ul className="lg:hidden items-center flex justify-center mb-5">
          {data.github && (
            <li>
              <a
                href={data.github}
                target="_blank"
                className="flex hover:text-violet-600 font-semibold pr-2 items-center text-black group-hover:opacity-100 transition duration-500 cursor-pointer"
              >
                <span className="flex items-center pr-1 text-lg sm:text-xl">
                  {lang === "pl" ? "Kod" : "Code"}
                </span>
                <SiGithub size={22} />
              </a>
            </li>
          )}
          <li>
            <a
              href={data.demo}
              target="_blank"
              className="ml-2 flex hover:text-violet-600 font-semibold items-center text-black group-hover:opacity-100 transition duration-500 cursor-pointer"
            >
              <span className="flex items-center pr-1 text-lg sm:text-xl">
                {lang === "pl" ? "Demo" : "See Live"}
              </span>
              <MdOpenInNew size={22} />
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full group max-w-sm flex items-center justify-center h-[250px] md:max-w-md rounded-2xl bg-cover bg-no-repeat relative overflow-hidden shadow-lg border">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          src={data.img}
          alt={data.title}
        />
        <div className="absolute w-full h-full transition duration-500 group-hover:bg-black/80">
          <div className="lg:flex items-center hidden justify-center h-full">
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                className="opacity-0 flex hover:text-violet-600 font-semibold pr-2 items-center text-white group-hover:opacity-100 transition duration-500 cursor-pointer"
              >
                <span className="flex items-center pr-1 text-xl">
                  {lang === "pl" ? "Kod" : "Code"}
                </span>
                <SiGithub size={22} />
              </a>
            )}
            <a
              href={data.demo}
              target="_blank"
              className="opacity-0 ml-2 flex hover:text-violet-600 font-semibold items-center text-white group-hover:opacity-100 transition duration-500 cursor-pointer"
            >
              <span className="flex items-center pr-1 text-xl">
                {lang === "pl" ? "Demo" : "See Live"}
              </span>
              <MdOpenInNew size={22} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
