'use client'

import { SplineScene } from "./subcomponents/splite";
import { Card } from "./subcomponents/card";
import Spotlight  from "./subcomponents/spotlight";
 
export default function SplineSceneBasic() {
  return (
    <div className="bg-black">
      <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20" 
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Hello, I’m <span className="bg-gradient-to-r bg-cyan-200 bg-clip-text text-transparent">
        Lokesh</span>
        </h1>

          <p className="mt-4 text-neutral-300 max-w-lg">
          A Full Stack Developer specializing in MERN, Next.js, AWS, passionate about DSA and scalable web apps. 
          I also explore blockchain and Web3 technologies, striving to build secure and high-performance applications.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
    </div>
  )
}