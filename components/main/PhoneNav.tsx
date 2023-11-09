"use client";
import Image from "next/image";
import { NavLinks } from "@/constants";
const PhoneNav = () => {

  return (
    <>
      <div className="fixed bottom-3 z-[9999] w-full flex justify-center h-[55px] sm:hidden">
        <div className="w-[300px] flex items-center shadow-lg justify-between border border-[#7042f861]  backdrop-blur-sm shadow-[#2A0E61]/50 bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
          {NavLinks?.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="cursor-pointer  hover:scale-125 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhoneNav;
