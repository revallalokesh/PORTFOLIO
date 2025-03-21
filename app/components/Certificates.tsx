"use client";

import Image from "next/image";
import { Tabs } from "./subcomponents/flipcard";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Certificate1",
      value: "Certificate1",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-cyan-400 to-violet-600 flex justify-center items-center">
          <Image
            src="/images/blockchaincertificate.png"
            alt="Block Chain"
            width={800}
            height={600}
            className="rounded-xl border-2 border-white shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Certificate2",
      value: "Certificate2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-cyan-400 to-violet-600 flex justify-center items-center">
          <Image
            src="/images/Cloud Certificate.jpg"
            alt="AWS Cloud"
            width={800}
            height={600}
            className="rounded-xl border-2 border-white shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Certificate3",
      value: "Codetantra Certificate",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-cyan-400 to-violet-600 flex justify-center items-center">
          <Image
            src="/images/codetantracertificate.jpg"
            alt="Certificate 3"
            width={800}
            height={600}
            className="rounded-xl border-2 border-white shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Certificate4",
      value: "UptoSkills Certificate",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-cyan-400 to-violet-600 flex justify-center items-center">
          <Image
            src="/images/uptoSkills lokesh certifiate.jpg"
            alt="Certificate 4"
            width={800}
            height={600}
            className="rounded-xl border-2 border-white shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Certificate5",
      value: "Python Certificate",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-cyan-400 to-violet-600 flex justify-center items-center">
          <Image
            src="/images/pythoncertificate.png"
            alt="Certificate 5"
            width={800}
            height={600}
            className="rounded-xl border-2 border-white shadow-lg"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-black h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
