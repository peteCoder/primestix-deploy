"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeaturedImages from "./FeaturedImages";

import { motion } from "framer-motion"

import { slideIn, staggerContainer, textVariant, fadeIn } from "@/utils/motion";

const Featured = () => {
  return (
    <div className=" md:px-0 overflow-hidden">
      <div className="w-full h-full relative">
        <div className="absolute top-0 w-full h-full">
            <Image alt="" src="/pic-2.jpg"  className="absolute md:-right-[10rem] top-0 z-[-999] object-cover " width={1000} height={1000} />
            <div className="cloud"></div>
        </div>
      <motion.div   variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} className="py-32 max-w-[600px] mx-auto w-full overflow-hidden flex flex-col justify-center leading-7 items-center gap-3 two alt-two px-5">
        <motion.h1 variants={fadeIn('up', 'tween', 0.2, 1)} className="primary-heading text-center capitalize font-[600] leading-8">
          The premier luxury
          <span className="leading-3">property developer in Nigeria</span>
        </motion.h1>
        <motion.h2 variants={fadeIn('up', 'tween', 0.2, 2)} className="text-center text-white z-[999] font- md:text-xl text-sm leading-6 font-raleway">
           Primestix is a company that has been shaping the
          Nigeria&apos;s luxury real estate market, delivering iconic
          residential, commercial and leisure properties for sale across the
          region and beyond.
        </motion.h2>
      </motion.div>
      </div>
      {/* <FeaturedSlider/> */}
      <FeaturedImages/>
    </div>
  );
};

export default Featured;
