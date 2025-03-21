"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactFormDemo from "./contact-form-demo";

export default function LampDemo() {
  return (
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-4">
        <ContactFormDemo />
      </div>
  );
}