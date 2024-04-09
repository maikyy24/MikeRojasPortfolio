import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta, 
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  universal,
  usta,
  amazon,
  watersafe,
  venom,
  rick,
  travis,
  alex,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Usta Court-Attendant",
    company_name: "United States Tennis Association",
    icon: usta,
    iconBg: "#383E56",
    date: "Mar 2020 - Oct 2020 ",
    points: [
      "Learned how to maintain professional tennis courts.",
      "Directed tournaments such as the NCAA Tennis tournaments .",
      "Learned how to manage the budget  for a large event.",
    ],
  },
  {
    title: "Warehouse attendant",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Oct 2021",
    points: [
      "Learned how to find the most optimal spaces for products",
      "Managed the work flow for small team around 8-12 people a day",
      "Worked in a team to reach the desired productivity for the month ",
    ],
  },
  {
    title: "Valet Runner",
    company_name: "Universal",
    icon: universal,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Park cars for guest ",
      "Learned how to manage a team in difficult situations ",
      "Learned how to always greets and have exceptional socials skills for guests",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought mike was going to be a barista  but he likes  to work hard.",
    name: "Rick L",
    designation: "Professor",
    company: "UCF",
    image:rick,

  },
  {
    testimonial:
      "Mike beginning in data structures were rough but he putted a lot of effort and he got an A in my data structure class.",
    name: "Travis Meade",
    designation: "Professor ",
    company: "UCF",
    image: travis,
  },
  {
    testimonial:
      "Mike and I met in computer science 1  , we both struggle in the class but both ended up with A and Lifelong friendship!",
    name: "Alex Stanciu",
    designation: "Student",
    company: "UCF",
    image: alex,
  },
];

const projects = [
  {
    name: "WaterSafeAI",
    description:
      "React Native full stack application. Worked with a team of 5 people to create an application that calculates the water quality of your location .  Worked with the model that predicts the quality  with database. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react Native",
        color: "pink-text-gradient",
      },
    ],
    image: watersafe,
    source_code_link: "https://github.com/",
  },
  {
    name: "Venom Gains",
    description:
      "A full stack react native application in where you can plan your workouts by day  , week  or month . For each workout you could select up to 2 muscle group for the day and select a max of 5 exercises  per muscle group , I worked mostly  in the front-end with react native and also  helped with the Api's.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: venom,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food website ",
    description:
      "Coming soon",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };