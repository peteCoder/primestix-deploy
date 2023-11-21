"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllNews } from "@/actions/getAllNews";
import { useRouter } from "next/navigation";

import { motion } from 'framer-motion';

import { fadeIn, textVariant, staggerContainer } from '../utils/motion';


const AllNews = () => {
  const [news, setNews] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getAllNews();
        console.log(data);
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      {news && (
        <div>
          <div className="bg-black mt-20">
            <div className="flex flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20">
              <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25}} className="text-white">
                <motion.h1 className="text-4xl font-semibold" variants={textVariant(1.1)}>News</motion.h1>
                <motion.p variants={textVariant(1.2)} className="capitalize text-lg text-gray-400 md:text-xl">
                  Read about Our success, innovation, and motivation
                </motion.p>
              </motion.div>
            </div>
          </div>
          <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} className="flex flex-col gap-4 font-raleway max-w-[1100px] w-full mx-auto px-5 py-10">
            {/* Blog cards */}
            {news.map((n) => (
              <motion.div
                className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-200 cursor-pointer p-5 rounded-2xl"
                onClick={() => router.push(`/news/${n._id}`)}
                key={n?._id}

                variants={fadeIn('up', 'spring', 0.5, 1)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  {/* blog image  */}
                  <Image
                    width="700"
                    height="700"
                    src={n?.bannerImage?.asset?.url}
                    className="flex items-center justify-center object-fit rounded-2xl h-full"
                    alt="news page"
                  />
                </div>
                <div className="p-4">
                  {/* date posted */}
                  <FormattedDate createdAt={n?._createdAt} />

                  <div>
                    {/* title */}
                    <h1 className="capitalize text-slate-900 font-[800] text-3xl py-3">
                      {n?.title}
                    </h1>
                    {/* truncated text */}
                    <p className="news__txt">
                      {n?.body && n.body.length > 120
                        ? `${n.body.substring(0, 120)}...`
                        : n?.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

const FormattedDate = ({ createdAt }) => {
  const date = new Date(createdAt);
  const dateString = date.toString();
  const dateArray = dateString.split(" ");
  const day = dateArray[2];
  const month = dateArray[1];

  return (
    <div className="flex flex-row w-full items-start text-2xl gap-2">
      <span className="">{day}</span>
      <span className="text-center font-[400] items-center justify-center flex">
        {month}.
      </span>
    </div>
  );
};

export default AllNews;
