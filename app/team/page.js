import React from "react";
import Image from "next/image";
// import ScrollToTop from "react-scroll-up";
const Page = () => {
  return (
    <div>
      <div className="bg-black mt-20">
        <div className="flex flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">Meet Our Team</h1>
            <p className="capitalize text-lg text-gray-400 md:text-xl">
              Meet the diverse talents and expertise that form the heart of our
              team
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mt-20 mx-auto w-full flex gap-7 mb-10 flex-col items-center justify-center">
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/ceo.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                    <span>Maxwell Okperi</span>
                    <span className="text-xs italic">
                      Chief Executive Officer
                    </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-7.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Maxwell Okperi</span>
                    <span className="text-xs italic">
                      Chief Executive Officer
                    </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/director.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                    <span>Hanim Windibiziri</span>
                    <span className="text-xs italic">
                      Executive Director / Founding Partner
                    </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-1.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Hanim Windibiziri</span>
                    <span className="text-xs italic">
                      Executive Director / Founding Partner
                    </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/frontdesk.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                    <span>Jane Francis Odinka</span>
                    <span className="text-xs italic">Front Desk Officer</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-3.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Jane Francis Odinka</span>
                    <span className="text-xs italic">Front Desk Officer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--2.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Angelfortune Ogbeta</span>
                      <span className="text-xs italic">
                        Content Writer
                      </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-15.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Angelfortune Ogbeta</span>
                      <span className="text-xs italic">
                        Content Writer
                      </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--3.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Fantis Skari</span>
                      <span className="text-xs italic">
                        Head Sales & Marketing
                      </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-13.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Fantis Skari</span>
                      <span className="text-xs italic">
                        Head Sales & Marketing
                      </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--4.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Grace Ichaba</span>
                      <span className="text-xs italic">
                        Head Engineering Construction
                      </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-11.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Grace Ichaba</span>
                      <span className="text-xs italic">
                        Head Engineering Construction
                      </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--5.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    {/* <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Nnadi Johnson</span>
                      <span className="text-xs italic">
                        Chief Executive Officer
                      </span>
                    </button> */}
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-10.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      {/* <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                        <span>Nnadi Johnson</span>
                        <span className="text-xs italic">
                          Chief Executive Officer
                        </span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--6.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    {/* <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Nnadi Johnson</span>
                      <span className="text-xs italic">
                        Chief Executive Officer
                      </span>
                    </button> */}
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-17.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      {/* <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                        <span>Nnadi Johnson</span>
                        <span className="text-xs italic">
                          Chief Executive Officer
                        </span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--7.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    {/* <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Nnadi Johnson</span>
                      <span className="text-xs italic">
                        Chief Executive Officer
                      </span>
                    </button> */}
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-16.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      {/* <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                        <span>Nnadi Johnson</span>
                        <span className="text-xs italic">
                          Chief Executive Officer
                        </span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--8.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Manny Bosei</span>
                      <span className="text-xs italic">
                        Brand & Comms Manager
                      </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-8.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Manny Bosei</span>
                      <span className="text-xs italic">
                        Brand & Comms Manager
                      </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--9.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      {/* <span>Nnadi Johnson</span>
                      <span className="text-xs italic">
                        Chief Executive Officer
                      </span> */}
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-9.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                        {/* <span>Nnadi Johnson</span>
                        <span className="text-xs italic">
                          Chief Executive Officer
                        </span> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--10.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Theresa Queen Maza</span>
                      <span className="text-xs italic">
                        Office Assistant
                      </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-12.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>Theresa Queen Maza</span>
                      <span className="text-xs italic">
                        Office Assistant
                      </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--11.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      {/* <span>Nnadi Johnson</span>
                      <span className="text-xs italic">
                        Chief Executive Officer
                      </span> */}
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-5.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                        {/* <span>Nnadi Johnson</span>
                        <span className="text-xs italic">
                          Chief Executive Officer
                        </span> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--12.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      {/* <span>Nnadi Johnson</span>
                      <span className="text-xs italic">
                        Chief Executive Officer
                      </span> */}
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-4.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                        {/* <span>Nnadi Johnson</span>
                        <span className="text-xs italic">
                          Chief Executive Officer
                        </span> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--13.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      {/* <span>Nnadi Johnson</span>
                      <span className="text-xs italic">
                        Chief Executive Officer
                      </span> */}
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-2.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                        {/* <span>Nnadi Johnson</span>
                        <span className="text-xs italic">
                          Chief Executive Officer
                        </span> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
