import React from "react";
import { newInStore } from "./data";
import RecentSlider from "./recentSlider";
import { formatLocation } from "@/lib/helpers";

import { textVariant, staggerContainer, fadeIn, planetVariants } from '../utils/motion';

import { motion } from "framer-motion"

const New = ({ data }) => {
  // Add format location function here
  // new in store
  const { title, subtitle, link, icon } = newInStore;
  return (
    <div className="container mt-10 font-raleway text-white overflow-x-hidden max-w-[1100px] mx-auto px-5">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <motion.div  variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} className="flex flex-col md:items-baseline md:gap-x-6 mb-6 lg:mb-0 md:text-left text-left justify-center items-start">
          <motion.h1 variants={textVariant(1.1)} className="title text-5xl font-bold max-w-[245px] lg:mt-[30px] lg:mb-[29px]">
            {title}
          </motion.h1>
          <motion.p variants={textVariant(1.2)} className="max-w-[445px] text-2xl lg:mb-5 font-semibold">
            {/* Add format location function here */}
            in {formatLocation(data?.city?.name, data?.country?.name)}
          </motion.p>
          <div className="md:my-0 my-5 flex items-center bg-black py-3 px-6 rounded-[50px] ">
            <a
              className="hover:border-b lg:items-center font-medium text-xl transition-all"
              href="#"
            >
              {link}
            </a>
            <span className="text-2xl">{icon}</span>
          </div>
        </motion.div>

        {/* slider */}

        <div className='w-full relative overflow-x-auto md:-right-[20%]'>
                <RecentSlider data={data?.projects} /> 
            </div>
           
      </div>
    </div>
  );
};

export default New;
