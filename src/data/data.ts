import memoryss from "../assets/memoryss.png";
import recipeess from "../assets/recipeess.png";
import izomakss from "../assets/izomakss.png";
import weatherss from "../assets/weatherss.png";

const projects = [
  {
    id: 1,
    title: "Memory Game",
    img: memoryss,
    description:
      "Memory Game to prosta gra stworzona w czystym JavaScript. Osiągnij jak najmniej ruchów w jak najkrótszym czasie!",
    github: "https://github.com/malalalash/memory-game",
    demo: "https://superlative-paprenjak-795c0c.netlify.app/",
    stack: ["HTML", "CSS", "JavaScript"],
    descriptionEn:
      "Memory Game - a simple game created in pure JavaScript. Achieve as few moves as possible in the shortest time!",
  },
  {
    id: 2,
    title: "Recipee",
    img: recipeess,
    description:
      "Recipee to narzędzie umożliwiające łatwe wyszukiwanie dowolnych przepisów kulinarnych.",
    github: "https://github.com/malalalash/Recipe-app",
    demo: "https://incredible-baklava-405d3f.netlify.app/",
    stack: ["React", "React Router", "Tailwind"],
    descriptionEn:
      "Recipee - a tool that enables easy searching for any culinary recipes.",
  },
  {
    id: 3,
    title: "Izomak",
    img: izomakss,
    description:
      "Strona internetowa stworzona dla firmy zajmującej się natryskami pianami poliuretanowymi.",
    github: undefined,
    demo: "https://www.izomak.pl/",
    stack: ["React", "React Router", "Tailwind", "Node/Express"],
    descriptionEn:
      "Website created for a company specializing in polyurethane foam spraying.",
  },
  {
    id: 4,
    title: "Weather APP",
    img: weatherss,
    description:
      "Weather APP to aplikacja, która dostarcza aktualnych i przyszłych informacji pogodowych.",
    github: "https://github.com/malalalash/weather-app",
    demo: "https://sensational-cupcake-3020bd.netlify.app/",
    stack: [
      "React",
      "React Query",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Leaflet Maps",
    ],
    descriptionEn:
      "Weather APP - an application that provides current and future weather information.",
  },
];

export default projects;
