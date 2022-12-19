import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { motion as m } from "framer-motion";

import pfp from "../public/imgs/pfp.jpg";

import { SiFacebook, SiYoutube, SiGoogle, SiTailwindcss } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { BsCode, BsCodeSlash } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [openClicked, setOpenClicked] = useState(false);
  const [openFb, setOpenFb] = useState(false);
  const [openYt, setOpenYt] = useState(false);
  const [openGg, setOpenGg] = useState(false);

  return (
    <div>
      <Head>
        <title>John Rod</title>
      </Head>
      <m.div
        initial={{ y: "-100%" }}
        animate={{ y: "0" }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className=" bg-black z-20 flex flex-col justify-center items-center content-center absolute top-0 bottom-0 left-0 right-0 "
      >
        <div className=" w-full text-center opacity-50">
          <p className=" font-thin mt-5">RIZAL TECHNOLOGICAL UNIVERSITY</p>
          <p className=" font-thin">College of Engineering and Architecture</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className=" w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-white rounded-full mx-auto overflow-hidden drop-shadow-[0px_0px_50px_#ffffff50]">
            <Image className="rounded-full" src={pfp}></Image>
          </div>
          <div className="text-center mt-5">
            <BsCode />
            <p className="font-extrabold text-2xl"> John Rod Dondoyano</p>
            <p className=" font-thin">BS Computer Engineering</p>
            <p className=" font-thin">2019-101913</p>
            <p className=" font-thin">CEIT-03-701A</p>
            <br />
            <p>Seminars and Fieldtrips</p>
            <p>E-Portfolio</p>
            <BsCodeSlash />
          </div>
          <div
            onMouseDown={() => {
              setOpenClicked(true);
            }}
            onMouseUp={() => {
              setOpenClicked(false);
              router.push("/certificateswebinars");
            }}
            onTouchStart={() => {
              setOpenClicked(true);
            }}
            onTouchEnd={() => {
              setOpenClicked(false);
              router.push("/certificateswebinars");
            }}
            className={`my-4 mx-auto bg-white px-8 rounded-full text-black  w-fit cursor-pointer  drop-shadow-[0px_0px_0px_#ffffff50] hover:drop-shadow-[0px_0px_10px_#ffffff50] transition-all duration-150 ease-in-out hover:px-10
            ${openClicked ? "scale-[95%]" : "scale-100"}
            `}
          >
            OPEN
          </div>
          <div className="flex flex-row gap-2 text-[30px] items-center">
            <SiFacebook
              onMouseDown={() => {
                setOpenFb(true);
              }}
              onMouseUp={() => {
                setOpenFb(false);
                window.open("https://www.facebook.com/dondycles", "_blank");
              }}
              className={` hover:animate-logoSpin hover:drop-shadow-[0px_0px_10px_#ffffff50] cursor-pointer transition-all duration-150 ease-in-out text-[26px]
                  ${openFb ? "scale-[95%]" : "scale-100"}
                  `}
            ></SiFacebook>

            <SiYoutube
              onMouseDown={() => {
                setOpenYt(true);
              }}
              onMouseUp={() => {
                setOpenYt(false);
                window.open(
                  "https://www.youtube.com/johnroddondoyano",
                  "_blank"
                );
              }}
              className={` hover:animate-logoSpin hover:drop-shadow-[0px_0px_10px_#ffffff50] cursor-pointer transition-all duration-150 ease-in-out
                  ${openYt ? "scale-[95%]" : "scale-100"}
                  `}
            ></SiYoutube>

            <AiFillInstagram
              onMouseDown={() => {
                setOpenGg(true);
              }}
              onMouseUp={() => {
                setOpenGg(false);
                window.open("https://www.facebook.com/dondycles", "_blank");
              }}
              className={` hover:animate-logoSpin hover:drop-shadow-[0px_0px_10px_#ffffff50] cursor-pointer transition-all duration-150 ease-in-out
                  ${openGg ? "scale-[95%]" : "scale-100"}
                  `}
            ></AiFillInstagram>
          </div>
        </div>
        <footer className="font-thin opacity-50 text-[12px] flex gap-1 items-center mb-2">
          Coded by John Rod Dondoyano with NextJS{" "}
          <TbBrandNextjs className="text-xl"></TbBrandNextjs> & Tailwind{" "}
          <SiTailwindcss className="text-xl"></SiTailwindcss>
        </footer>
      </m.div>
    </div>
  );
}
