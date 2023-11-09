import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
const FooterSocialLinks = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shyam-raghuwanshi-b67489220/",
    icon: <FaLinkedin />,
  },
  {
    name: "Github",
    href: "http://www.github.com/Shyam-Raghuwanshi",
    icon: <FaGithub />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/shyam_raghuonec",
    icon: <FaYoutube />,
  },
];
const FooterAboutLinks = [
  {
    name: "Learning about me",
    href: "/Shyam-Raghuwanshi.pdf",
  },
  {
    name: "shyamraghuonec@gmail.com",
    href: "",
  },
  {
    name: "Become Sponsor",
    href: "",
  },
];
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[999] pb-20 sm:pb-0">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            {FooterSocialLinks?.map((social, index) => (
              <Link href={social.href} key={index}>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  {social.icon}
                  <span className="text-[15px] ml-[6px]">{social.name}</span>
                </p>
              </Link>
            ))}
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            {FooterAboutLinks?.map((social, index) => (
              <Link href={social.href} key={index}>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <span className="text-[15px] ml-[6px]">{social.name}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Shyam Dev 2023. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
