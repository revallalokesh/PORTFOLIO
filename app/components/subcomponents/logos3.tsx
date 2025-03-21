// This template requires the Embla Auto Scroll plugin to be installed and supports multi-colored logos:
// npm install embla-carousel-auto-scroll --save

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Skills",
  logos = [
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
}: Logos3Props) => {
  return (
    <section className="py-32 bg-black">
      <div className="container ml-10 flex flex-col items-center text-center">
        <h1 className="my-6 text-white text-6xl font-bold lg:text-6xl">
         {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={`${logo.className} h-20 w-20`} // Adjusted height and width
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
