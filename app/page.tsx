import Image from "next/image";
import Demo from "./components/demo"
import AnimatedPinGrid from "./components/AnimatedPinDemo"
import FloatingDock from "./components/FloatingDockDemo"
import { Logos3Demo as Slider } from "./components/Slider";
import Certificates from "./components/Certificates"
import ContactFormDemo from "./components/contact-demo"
import AnimatedModalDemo from "./components/resume"
export default function Home() {
  return (
   <section className="bg-black overflow-hidden">
    <div>
      <AnimatedModalDemo/>
    </div>
    <div>
    <Demo/>
    </div>
    <div id="Skills">
      <Slider/>
    </div>
    <div id="Projects"className="mt-10 ml-35 bg-black">
      <h1 className="flex justify-center font-bold text-white text-6xl">Projects</h1>
    <AnimatedPinGrid />
    </div>
    <div id="Certificates" className="mt-140 bg-black">
      <h1 className="flex justify-center font-bold text-white text-6xl">Certificates</h1>
      <Certificates/>
    </div>
    <div id="Contactme" className="mt-80 bg-black flex justify-center items-center">
      <ContactFormDemo/>
    </div>
    <div id="Social"className="mt-20 bg-black">
      <FloatingDock />
    </div>
   </section>
  );
}
