"use client";

import { getAllNewsExceptId } from "@/actions/getAllNewsExceptId";
import { getDetailNews } from "@/actions/getDetailNews";
import ReadAllBtn from "@/components/ReadAllBtn";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import BeatLoader from "react-spinners/BeatLoader";

const NewsPageDetail = () => {
  const [news, setNews] = useState({});
  const [otherNews, setOtherNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const newsId = params.newsId;

  useEffect(() => {
    const fetchDetailNews = async () => {
      try {
        setIsLoading(true);
        const data = await getDetailNews(newsId);
        const otherNewsData = await getAllNewsExceptId(newsId);
        setNews(data[0]);
        setOtherNews(otherNewsData);
        console.log(data[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetailNews();
  }, [newsId]);

  return (
    <div className="flex flex-col items-center justify-center my-20">
      {isLoading ? (
        <div className="max-w-[970px] lg:max-w-[1170px] mx-auto flex items-center justify-center min-h-[40vh]">
          <BeatLoader color="#e8d5a1b8" />
        </div>
      ) : (
        <div className="font-raleway max-w-[1100px] mx-auto w-full mb-28 ">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-[200px] h-[150px]">
              <Image src="/PRIMESTIX_ICON.png" width={400} height={400} alt="news-page" />
            </div>
          </div>

          {/* News Title */}
          <div className="justify-center flex flex-col items-center">
            <h1 className="capitalize font-[800] text-center text-5xl text-slate-900 px-5 md:px-0">
              {news?.title}
            </h1>
            <span className="text-slate-800 font-semibold text-center w-full">5 MINIS READ</span>
          </div>

          {/* Banner Image */}
          <div className="flex items-center justify-center my-10 w-full">
            {news?.bannerImage?.asset?.url && (
              <Image
                width={800}
                height={800}
                alt="banner-image"
                className="w-full"
                src={news?.bannerImage?.asset?.url}
              />
            )}
          </div>

          {/* News body */}
          <div className="grid grid-cols-12">
            <div className="md:col-span-2 col-span-12">
              <div className="px-6 flex justify-center items-center font-semibold">
                {/* Posted date */}
                <FormattedDate createdAt={news?._createdAt} />
              </div>
            </div>
            <div className="md:col-span-10 col-span-12">
              {/* Post body */}
              <div className="w-full px-6 mt-4">
                <p className="text-xl md:text-left text-center">
                  {news?.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other news data */}
      <div className="max-w-[1100px] mx-auto w-full font-raleway ">
        {/* Other related news data */}
        <h2 className="capitalize font-[800] text-center text-5xl text-slate-900 my-4">Other news</h2>

        <div className="flex flex-col gap-4 md:px-0 px-5">
          {otherNews.map((news) => (
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-200 p-5 rounded-2xl" key={news._id}>
              <div className="flex flex-col items-center justify-center h-full">
                {/* Blog image */}
                <Image width="700" height="700" src={news?.bannerImage?.asset?.url} className="flex rounded-2xl items-center justify-center h-full" alt="news page" />
              </div>
              <div className="p-4">
                {/* Date posted */}
                <OtherFormattedDate createdAt={news?._createdAt} />

                <div>
                  {/* Title */}
                  <h1 className="capitalize text-[#A18830] font-[800] text-3xl py-3">
                    {news?.title}
                  </h1>
                  {/* Truncated text */}
                  <p className="news__txt">
                    {news?.body &&
                      news.body.split(' ').slice(0, 50).join(' ') +
                      (news.body.split(' ').length > 50 ? '...' : '')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ReadAllBtn/>
      </div>
    </div>
  );
};

// You can format the date data however you like
const FormattedDate = ({ createdAt }) => {
  const date = new Date(createdAt);
  const dateString = date.toString();
  const dateArray = dateString.split(" ");
  const day = dateArray[2];
  const month = dateArray[1];

  return (
    <div className="flex md:flex-col flex-row w-full justify-center items-center md:items-start  gap-2">
      <span className="md:text-7xl text-3xl text-[#A18830]">{day}</span>
      <span className="text-center font-[400] md:text-4xl items-center justify-center flex text-3xl">{month}.</span>
    </div>
  );
};

// You can format the date data however you like
const OtherFormattedDate = ({ createdAt }) => {
  const date = new Date(createdAt);
  const dateString = date.toString();
  const dateArray = dateString.split(" ");
  const day = dateArray[2];
  const month
  = dateArray[1];

  return (
    <div className="flex flex-row w-full items-start  text-2xl gap-2">
      <span className="text-[#A18830]">{day}</span>
      <span className="text-center font-[400]  items-center justify-center flex">
        {month}
      </span>
    </div>
  );
};

export default NewsPageDetail;
