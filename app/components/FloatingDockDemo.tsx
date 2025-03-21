"use client";
import React from "react";
import { FloatingDock } from "./subcomponents/FloatingDock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconHome,
  IconCertificate,
  IconNewSection,
  IconBulb,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      target: "",
    },

    {
      title: "Skills",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Skills",
      target: "",
    },
    {
      title: "Projects",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Projects",
      target: "",
    },
    {
      title: "Certificates",
      icon: (
        <IconCertificate className="h-full w-full text-neutral-500  dark:text-neutral-300" />
      ),
      href: "#Certificates",
      target: "",
    },
    {
      title: "Contactme",
      icon: (
        <IconMail className="h-full w-full text-neutral-500  dark:text-neutral-300" />
      ),
      href: "#Contactme",
      target: "",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/lokesh-revalla/",
      target: "_blank",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/revallalokesh",
      target: "_blank",
    },
  ];
  return (
    <div className="bg-black flex items-center justify-center h-[10rem] w-full">
      <FloatingDock 
        items={links}
        mobileClassName="fixed bottom-0 left-1/2 -translate-x-1/2 z-250"
        desktopClassName="fixed bottom-0 left-1/2 -translate-x-1/2 z-250"
      />
    </div>
  );
}
