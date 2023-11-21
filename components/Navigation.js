"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const handleItemClick = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  return (
<div>
<div className="bg-white z-[9999] fixed bottom-0 w-full h-[60px] my-auto items-center justify-center flex font-semibold capitalize">
      <ul className="display flex w-full justify-around items-center">
        <li
          className={`flex items-center flex-col cursor-pointer relative`}
        >
<i class="ri-customer-service-2-line"></i>
          <span> Enquire </span>
        </li>

        <li
          className={`flex items-center flex-col cursor-pointer relative`}
          onClick={() => handleItemClick(1)} // Provide an appropriate index
        >
          <i class="ri-whatsapp-line"></i>
          <span> WhatsApp </span>

          {/* Dropdown content */}
          {/* {dropdownVisible === 1 && (
            <div className="absolute -top-[120px] text-center w-[150px] text-xs bg-white p-2 shadow-md">
              
              <ul>
                <li>
                  Sales <br></br>+971 4 520 5400
                </li>
                <li className="divider h-1 w-full my-2 bg-[#A18830]"></li>
                <li>
                  Customer Relations <br></br>+971 4 520 5400
                </li>
              </ul>
            </div>
          )} */}
        </li>
        <li
          className={`flex items-center flex-col cursor-pointer relative`}
          onClick={() => handleItemClick(2)} // Provide an appropriate index
        >
          <i class="ri-phone-line"></i>
          <span> Call </span>

          {/* Dropdown content */}
          {/* {dropdownVisible === 2 && (
            <div className="absolute -top-[120px] text-center w-[150px] text-xs bg-white p-2 shadow-md">
              
              <ul>
                <li>
                  Sales <br></br>+971 4 520 5400
                </li>
                <li className="divider h-1 w-full my-2 bg-[#A18830]"></li>
                <li>
                  Customer Relations <br></br>+971 4 520 5400
                </li>
              </ul>
            </div>
          )} */}
        </li>
      </ul>
    
    </div> 
    <div className="flex items-center justify-center absolute w-full">
         {openModal && <Modal closeModal={() => setOpenModal(false)} />}
    </div>
    
</div>
  );
};

export default Navigation;
