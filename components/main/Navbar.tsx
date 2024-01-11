"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { NavLinks } from "@/constants";
import { ColorContext } from "@/context/colors/colorContext";
import Link from "next/link";
const Navbar = () => {
  const contextValue = useContext(ColorContext);
  if (!contextValue) {
    return null;
  }
  const { color, setColor } = contextValue;

  const handleChange = (e: { target: { value: string } }) => {
    setColor(e.target.value);
  };
  return (
    <>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-sm z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/author.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin rounded-full hover:scale-125 transition duration-300"
            />

            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Shyam
            </span>
          </a>

          <div className="hidden w-[300px] h-full sm:flex flex-row items-center justify-between  ">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              {NavLinks?.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  className="cursor-pointer  hover:scale-125 transition duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-5 items-center">
            {Socials?.map((social) => (
              <Link
                key={social.name}
                passHref
                href={social.href}
                target="_blank"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={30}
                  height={30}
                  className=" hover:scale-125 transition duration-300"
                />
              </Link>
            ))}
            <div
              style={{ backgroundColor: color }}
              className="bg-transparent justify-center items-center h-8 w-8 rounded-full cursor-pointer inline-flex overflow-hidden outline-slate-400"
            >
              <input
                onChange={handleChange}
                className="border-transparent appearance-none bg-transparent cursor-pointer p-5"
                type="color"
                id="colorPicker"
                name="colorPicker"
                value={color}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
