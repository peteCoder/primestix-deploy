"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import "../styles/news-slider.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import { motion } from "framer-motion"

import { slideIn, staggerContainer, textVariant } from "@/utils/motion";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { getAllNews } from "@/actions/getAllNews";
import { useRouter } from "next/navigation";
import ReadAllBtn from "./ReadAllBtn";

const News = () => {
  const [news, setNews] = useState([]);
  const router = useRouter()

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getAllNews();
      console.log(data);
      setNews(data);
    };

    fetchNews();
  }, []);


  return (
    <div className="relative md:px-0 px-5 font-raleway">
      {news && (
        <>
          <motion.div className="two alt-two"  variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25}}>
            <motion.h1  variants={textVariant(1.1)} className="primary-heading" style={{ color: "white" }}>
              News
            </motion.h1>
          </motion.div>

          <span className="capitalize flex items-center justify-center text-white my-5 font-semibold text-center text-xl font-raleway px-5 md:px-32" variants={textVariant(1.2)}>
            Get updated with the latest news
          </span>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            navigation={false}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              750: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper3 news-slider"
          >
            {news.map((n) => (
              <SwiperSlide
                onClick={() => router.push(`/news/${n._id}`)}
                key={n?._id}
                className="news-slider__wrp swiper-wrapper"
              >
                <div
                  className="news-slider__item swiper-slide"
                >
                  <div className="news__item">
                    {/* Here */}
                    <FormattedDate createdAt={n?._createdAt} />
                    <div>
                      <a className="news__title">{n?.title}</a>
                    </div>

                    <p className="news__txt">
  {n?.body && n.body.length > 120
    ? `${n.body.substring(0, 120)}...`
    : n?.body}
</p>

                    <div className="news__img object-cover">
                      <Image
                        src={n?.bannerImage?.asset?.url}
                        className="object-cover"
                        width={500}
                        height={100}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}

      <motion.div className="flex items-center justify-center" variants={textVariant(1.2)}>
      <ReadAllBtn/>
      </motion.div>
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
    <div className="news-date">
      <span className="news-date__title">{day}</span>
      <span className="news-date__txt">{month}</span>
    </div>
  );
};

export default News;