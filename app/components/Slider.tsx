import { Logos3 } from "./subcomponents/logos3"
const demoData = {
  heading: "Skills",
  logos: [
    {
      id: "logo-1",
      description: "Java",
      image: "/images/java.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-2",
      description: "HTML",
      image: "/images/html.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-3",
      description: "CSS",
      image: "/images/css.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-4",
      description: "Bootstrap",
      image: "/images/bootstrap.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-5",
      description: "JavaScript",
      image: "../images/js.png",
      className: "h-7 w-auto text-cyan-200",
    },
    {
      id: "logo-6",
      description: "Tailwind CSS",
      image: "/images/tailwind.png",
      className: "h-4 w-auto text-white",
    },
    {
      id: "logo-7",
      description: "MySQL",
      image: "/images/mysql.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-8",
      description: "React",
      image: "/images/react.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-9",
      description: "Redux",
      image: "/images/redux.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-10",
      description: "Node.js",
      image: "/images/nodejs.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-11",
      description: "Express",
      image: "/images/express.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-12",
      description: "MongoDB",
      image: "/images/mongodb.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-13",
      description: "TypeScript",
      image: "/images/typescript.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-14",
      description: "Next.js",
      image: "/images/nextjs.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-15",
      description: "Git and GitHub",
      image: "/images/github.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-16",
      description: "AWS",
      image: "../images/aws.png",
      className: "h-7 w-auto text-cyan-200",
    },
    {
      id: "logo-17",
      description: "Solidity",
      image: "/images/solidity.png",
      className: "h-7 w-auto text-white",
    },
    {
      id: "logo-18",
      description: "Blockchain",
      image: "/images/blockchain.png",
      className: "h-7 w-auto text-white",
    },
  ],
};

function Logos3Demo() {
  return <Logos3 {...demoData} />;
}

export { Logos3Demo };
