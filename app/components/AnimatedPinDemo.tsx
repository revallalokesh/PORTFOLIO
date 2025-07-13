"use client";
import React from "react"; 
import {PinContainer}  from "./subcomponents/pin";
export default function AnimatedPinDemo() {
  return (
    <div className="mt-5 bg-black h-[40rem] w-full items-center justify-center">
      <div className="mt-15 flex flex-row">
      <PinContainer
        title="/SaveServe.com"
        href="https://drive.google.com/file/d/1khpf7ccm7ReVKIH_zFq06ugbksw2Azpu/view?usp=drivesdk"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className=" flex justify-center max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            SaveServe
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Built with MERN Stack and Next Js.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-white via-white to-white">
            <img src="/images/SaveServe.jpg" alt="Save Serve" className="w-70 h-50 object-cover" />
          </div>
           </div>
      </PinContainer>
      <PinContainer
        title="/Tomato.com"
        href="https://tomato-1-xng7.onrender.com/"
      >
        <div className="flex  basis-full flex-col  p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="flex justify-center max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Tomato
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Built with MERN Stack.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-white via-white to-white">
            <img src="/images/Tomato.jpg" alt="Tomato" className="w-full h-full object-cover" />
          </div>
        </div>
      </PinContainer>
      
      <PinContainer
        title="/FCP.com"
        href="https://fcp-m5eo.onrender.com/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="flex justify-center max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            FCP 
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Built with MERN and Zustand.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-white via-white to-white">
            <img src="/images/FCP web.jpg" alt="FCP" className="w-70 h-50 object-cover" />
          </div>
         </div>
      </PinContainer>
      </div>
      <div className="mt-15 flex flex-row">
      <PinContainer
        title="/BlockStamp.com"
        href="https://www.linkedin.com/feed/update/urn:li:activity:7308388922827411457/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className=" flex justify-center max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            BlockStamp
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Built with Javascript,React,Solidity,Ganache & ethereum.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-white via-white to-white">
            <img src="/images/blockstamp.jpg" alt="BlockStamp" className="w-70 h-50 object-cover" />
          </div>
           </div>
      </PinContainer>
      <PinContainer
        title="/D-Meet.com"
        href="https://www.linkedin.com/posts/lokesh-revalla_blockchain-decentralization-web3-activity-7246760168749703169-EjTR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERYUEQBkrC8B6-vHcasH_V59YVcN_dmRTE"
      >
        <div className="flex  basis-full flex-col  p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="flex justify-center max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            D-Meet
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Built with Javascript,React,Solidity,Ganache & ethereum.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-white via-white to-white">
            <img src="/images/blockmeet.jpg" alt="D-Meet" className="w-full h-full object-cover" />
          </div>
        </div>
      </PinContainer>
      
      <PinContainer
        title="/FurnitureApp.com"
        href="https://github.com/revallalokesh/FURNITURE-APP-ANDROID"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="flex justify-center max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Furniture App
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Built with Java and Andriod Studio.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-white via-white to-white">
            <img src="/images/AndriodApp.jpg" alt="FurnitureApp" className="w-70 h-50 object-cover" />
          </div>
         </div>
      </PinContainer>
      </div>
      <div className="mt-15 flex flex-row">
      <PinContainer
        title="/Time Series Analysis.com"
        href="https://github.com/revallalokesh/PYTHON-PROJECT"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="flex justify-center max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
           Time Series Analysis
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Built with Numpy,Pandas,Matplotlib and Seaborn.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-white via-white to-white">
            <img src="/images/timeseries.jpg" alt="Time Series Analysis" className="w-full h-full object-cover" />
          </div>
         </div>
      </PinContainer>
      <PinContainer
        title="/InsectRobot"
        href="https://github.com/revallalokesh"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="flex justify-center max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Insect Trapping Robot
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Built With Esp8266 and Electronic Mess.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-white via-white to-white">
            <img src="/images/insectrobot.jpg" alt="InsectRobot" className="w-full h-50 object-cover" />
          </div>
         </div>
      </PinContainer>
      <PinContainer
        title="/Portfolio.com"
        href="https://github.com/revallalokesh/PORTFOLIO"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="flex justify-center max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Portfolio
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Built With Next Js and Typescript.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-white via-white to-white">
            <img src="/images/Portifolio.jpg" alt="Portifolio" className="w-full h-full object-cover" />
          </div>
           </div>
      </PinContainer>
      </div>
    </div>
  );
}