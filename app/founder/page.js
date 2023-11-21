"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getFoundersMessage } from "@/actions/getFoundersMessage";

const Founder = () => {
  const [founder, setFounder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFounderMessage = async () => {
      try {
        setIsLoading(true);
        const data = await getFoundersMessage();
        setFounder(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFounderMessage();
  }, []);

  return (
    <>
      {isLoading ? (
        <>LOADING</>
      ) : (
        <>
          <div className="mb-10">
            <div className="bg-black mt-20">
              <div className="flex flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20">
                <div className="text-white">
                  <h1 className="text-4xl font-semibold">About PRIMESTIX</h1>
                  <p className="capitalize text-xl text-gray-400 md:text-2xl">
                    Founder&apos;s message
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-raleway max-w-[1100px] md:mt-20 w-full mx-auto md:py-20 relative">
              <div className="grid grid-cols-12 md:gap-7">
                <div className="md:col-span-4 col-span-12">
                  <Image
                    className="w-[300px] relative md:absolute object-cover md:-top-[20%] left-0 h-[400px]"
                    src={founder?.image?.asset?.url}
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <div className="md:col-span-8 col-span-12 text-black">
                  <div>
                    <p className="mt-10 mb-5 pb-10  px-5 md:px-0 text-xl md:text-3xl font-semibold relative">
                      {founder?.short_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-raleway max-w-[1100px] w-full px-5 md:px-0 mx-auto py-5 font-[400] pb-5 md:pb-20 text-xl text-md leading-8">
              <p>
                <br />
                {founder?.message}
                <br />
                <span className="text-slate-600 italic font-bold">
                  {founder?.name}
                </span>
                <br/>
                <span className="text-slate-500 font-bold">
                  Founder
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Founder;
