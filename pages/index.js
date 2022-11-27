import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import pfp from "../public/imgs/pfp.jpg";

import { SiFacebook, SiYoutube, SiGoogle } from "react-icons/si";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>John Rod</title>
      </Head>
      <div className=" bg-black z-20 flex flex-col justify-center items-center content-center absolute top-0 bottom-0 left-0 right-0">
        <div className=" w-full text-center opacity-50">
          <p className=" font-thin">RIZAL TECHNOLOGICAL UNIVERSITY</p>
          <p className=" font-thin">College of Engineering and Architecture</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className=" w-[300px] h-[300px] bg-white rounded-full mx-auto overflow-hidden drop-shadow-[0px_0px_50px_#ffffff50]">
            <Image className="rounded-full" src={pfp}></Image>
          </div>
          <div className="text-center mt-5">
            <p className="font-extrabold text-lg">John Rod Dondoyano</p>
            <p className=" font-thin">BS Computer Engineering</p>
            <br />
            <p>Seminars and Fieldtrips</p>
            <p>E-Portfolio</p>
          </div>
          <div
            onClick={() => {
              router.push("/certificateswebinars");
            }}
            className="my-4 mx-auto bg-white px-8 rounded-full text-black  w-fit cursor-pointer"
          >
            OPEN
          </div>
          <div className="flex flex-row gap-2 text-[30px] ">
            <Link
              href="https://www.facebook.com/dondycles"
              passHref
              legacyBehavior
            >
              <a target="_blank">
                <SiFacebook className="text-blue-500"></SiFacebook>
              </a>
            </Link>
            <Link
              href="https://www.youtube.com/johnroddondoyano"
              passHref
              legacyBehavior
            >
              <a target="_blank">
                <SiYoutube className=" text-red-500"></SiYoutube>
              </a>
            </Link>

            <SiGoogle className=" "></SiGoogle>
          </div>
        </div>
      </div>
    </>
  );
}
