"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllCommunities } from "@/actions/getAllCommunities";
import { getAllProjects } from "@/actions/getAllProjects";

import { footerVariants } from "../utils/motion";

import { motion } from "framer-motion";

import toast from "react-hot-toast";
const Footer = () => {
  const [email, setEmail] = useState("");

  const [communities, setCommunities] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      let data = await getAllCommunities();
      data = data.splice(0, 3);
      setCommunities(data);
    };

    const fetchAllProducts = async () => {
      let data = await getAllProjects();
      data = data?.splice(0, 4).map((datum) => datum);
      setProjects(data);
    };

    fetchCommunities();
    fetchAllProducts();
  }, []);

  const handleSendNewsletter = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/newsletter`, {
      method: "POST",
      body: JSON.stringify({ email }),
      "Content-Type": "application/json",
    });

    const data = await response.json();
    console.log(data);
    if (data?.status === 200) {
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  };

  return (
    <div className="bg-footer text-gray-300 pb-20">
      <div className="font-raleway max-w-[1100px] mx-auto w-full flex flex-col justify-center items-center">
        <motion.div
          className="grid grid-cols-12"
          variants={footerVariants}
          initial="hidden"
          whileInView="show"
        >
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <div className="flex flex-col items-start mt-10 -ml-[50px]">
                  {/* logo */}
                  <Link
                    href="/"
                    className="uppercase flex items-center font-[500]"
                  >
                    <Image
                      src="/PRIMESTIX_ICON.png"
                      width={200}
                      height={100}
                      alt="logo"
                    />{" "}
                    <h1 className="heading -ml-[3rem] leading-6">
                      Primestix <br />
                      <span className="-mt-5 text-sm capitalize">
                        Where we give best.
                      </span>
                    </h1>
                  </Link>

                  {/* <div className="flex gap-2 ml-5 mt-4 font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </span>
                    <p>
                      4, Wuse Lane,
                      Abuja, FCT
                      <br />
                      Nigeria
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-col gap-2">
                <h1 className="heading">Why PRIMSTIX?</h1>
                <Link href="/about">About Primestix</Link>
                <Link href="/founder">Founder&apos;s Message</Link>
                <Link href="/">Careers</Link>
                <Link href="/">Investor relations</Link>
                <Link href="/">Whistleblower line</Link>
              </div>

              <div className="col-span-12 md:col-span-4 flex flex-col gap-2">
                <h1 className="heading">Communities</h1>
                {communities?.map((community) => (
                  <Link
                    href={`/community/${community?._id}`}
                    key={community?._id}
                  >
                    {community?.name}
                  </Link>
                ))}
              </div>

              <div className="col-span-12 md:col-span-4 flex flex-col gap-2">
                <h1 className="heading">Latest Launch</h1>
                <Link href="/news">News</Link>
                {projects?.map((project) => (
                  <Link key={project._id} href={`/projects/${project._id}`}>
                    {project?.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-12 my-10">
              {/* <div className="col-span-12 md:col-span-4 flex flex-col gap-2">
                <h1 className="heading">Communities</h1>
                {communities?.map((community) => (
                  <Link href={`/community/${community?._id}`} key={community?._id} href="/projects">
                    {community?.name}
                  </Link>
                ))}
              </div> */}
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-start  text-white md:ml-10 ml-0 ">
            <p className="text-4xl Capitalize font-semibold py-10">
              <span className="font-bold text-[#A18830]">Subscribe</span> to our{" "}
              <br />
              news letter
            </p>
            <div className="relative">
              <div className="border rounded overflow-hidden  flex">
                <input
                  type="text"
                  className="px-4 py-2 text-black"
                  placeholder="Enter mail..."
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSendNewsletter}
                  className="flex items-center justify-center px-4 border-l"
                  disabled={email === "" || email.length === 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="-rotate-45  w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="md:text-4xl text-xl my-4 flex items-start justify-start gap-4">
              <i className="ri-facebook-box-line"></i>
              <i className="ri-twitter-x-line"></i>
              <i className="ri-linkedin-box-fill"></i>
              <i className="ri-youtube-fill"></i>
            </div>
          </div>
        </motion.div>

        <div className="">
          <div className="flex flex-row md:px-0 px-5 pb-10 text-xs gap-5">
            <Link href="./">Sitemap Policy</Link>
            <Link href="./">Cookie</Link>
            <Link href="./">Policy</Link>
            <Link href="./">Terms and Conditions</Link>
            <Link href="./">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
