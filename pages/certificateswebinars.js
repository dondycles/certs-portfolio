import Head from "next/head";
import Router, { useRouter } from "next/router";
import Image from "next/image";

import { motion as m } from "framer-motion";

import { BiRightArrowCircle, BiLeftArrowCircle } from "react-icons/bi";

import wirelessnetcoms from "../public/imgs/certs/wirelessnetcoms.jpg";
import wirelessnetcomsss from "../public/imgs/ss/wirelessnetcomsss.png";
import wirelessnetcomsevalss from "../public/imgs/ss/wirelessnetcomsevalss.png";
import wirelessnetcomsatss from "../public/imgs/ss/wirelessnetcomsatss.png";
import wirelessnetcomsregss from "../public/imgs/ss/wirelessnetcomsregss.png";

import fundamentalsofcloud from "../public/imgs/certs/fundamentalsofcloud.jpg";
import fundamentalsofcloudss from "../public/imgs/ss/fundamentalsofcloudss.png";
import fundamentalsofcloudevalss from "../public/imgs/ss/fundamentalsofcloudevalss.png";
import fundamentalsofcloudatss from "../public/imgs/ss/fundamentalsofcloudatss.png";
import fundamentalsofcloudregss from "../public/imgs/ss/fundamentalsofcloudregss.png";

import dataprivacy from "../public/imgs/certs/dataprivacy.jpg";
import dataprivacyss from "../public/imgs/ss/dataprivacyss.png";
import dataprivacyevalss from "../public/imgs/ss/dataprivacyevalss.png";
import dataprivacyatss from "../public/imgs/ss/dataprivacyatss.png";
import dataprivacyregss from "../public/imgs/ss/dataprivacyregss.png";

import lawsandprofessional from "../public/imgs/certs/lawsandprofessional.jpg";
import lawsandprofessionalss from "../public/imgs/ss/lawsandprofessionss.png";
import lawsandprofessionalevalss from "../public/imgs/ss/lawsandprofessionevalss.png";
import lawsandprofessionalatss from "../public/imgs/ss/lawsandprofessionalatss.png";
import lawsandprofessionalregss from "../public/imgs/ss/lawsandprofessionregss.png";

import cloudfirst from "../public/imgs/certs/cloudfirst.jpg";

import latesttechnology from "../public/imgs/certs/latesttechnology.jpg";
import latesttechnologyss from "../public/imgs/ss/latesttechnologyss.png";
import latesttechnologyevalss from "../public/imgs/ss/latesttechnologyevalss.png";
import latesttechnologyatss from "../public/imgs/ss/latesttechnologyatss.png";
import latesttechnologyregss from "../public/imgs/ss/latesttechnologyregss.png";

import itcpecareers from "../public/imgs/certs/itcpecareers.png";
import itcpecareersss from "../public/imgs/ss/itcpecareersss.png";
import itcpecareersevalss from "../public/imgs/ss/itcpecareersevalss.png";
import itcpecareersatss from "../public/imgs/ss/itcpecareersatss.png";
import itcpecareersregss from "../public/imgs/ss/itcpecareersregss.png";

import qa from "../public/imgs/certs/qa.png";
import qass from "../public/imgs/ss/qass.png";
import qaevalss from "../public/imgs/ss/qaevalss.png";
import qaatss from "../public/imgs/ss/qaatss.png";
import qaregss from "../public/imgs/ss/qaregss.png";

import mobileapp from "../public/imgs/certs/mobileapp.jpg";
import mobileappss from "../public/imgs/ss/mobileappss.jpg";
import mobileappevalss from "../public/imgs/ss/mobileappevalss.jpg";
import mobileappatss from "../public/imgs/ss/mobileappatss.jpg";
import mobileappregss from "../public/imgs/ss/mobileappregss.jpg";

import ip from "../public/imgs/certs/ip.png";
import ipevalss from "../public/imgs/ss/ipevalss.png";
import ippostss from "../public/imgs/ss/ippostss.png";
import ipregss from "../public/imgs/ss/ipregss.png";

import dm from "../public/imgs/certs/dm.png";
import dmss from "../public/imgs/ss/dmss.png";
import dmevalss from "../public/imgs/ss/dmevalss.png";
import dmatss from "../public/imgs/ss/dmatss.png";
import dmregss from "../public/imgs/ss/dmregss.png";

import workshop from "../public/imgs/certs/workshop.png";
import workshopss from "../public/imgs/ss/workshopss.png";
import workshopevalss from "../public/imgs/ss/workshopevalss.png";
import workshopatss from "../public/imgs/ss/workshopeatss.png";
import workshopregss from "../public/imgs/ss/workshopregss.png";

import adv from "../public/imgs/certs/adv.png";
import advss from "../public/imgs/ss/advss.png";
import advevalss from "../public/imgs/ss/advevalss.png";
import advatss from "../public/imgs/ss/advatss.png";
import advregss from "../public/imgs/ss/advregss.png";

import backend from "../public/imgs/certs/backend.png";
import backendss from "../public/imgs/ss/backendss.png";
import backendevalss from "../public/imgs/ss/backendevalss.png";
import backendatss from "../public/imgs/ss/backendatss.png";
import backendregss from "../public/imgs/ss/backendregss.png";

import { useState } from "react";

export default function CertificatesWebinars() {
  const [counter1, setCounter1] = useState(0);
  const [toggleAnim1, setToggleAnim1] = useState(false);

  const [counter2, setCounter2] = useState(0);
  const [toggleAnim2, setToggleAnim2] = useState(false);

  const [counter3, setCounter3] = useState(0);
  const [toggleAnim3, setToggleAnim3] = useState(false);

  const [counter4, setCounter4] = useState(0);
  const [toggleAnim4, setToggleAnim4] = useState(false);

  const [counter6, setCounter6] = useState(0);
  const [toggleAnim6, setToggleAnim6] = useState(false);

  const [counter7, setCounter7] = useState(0);
  const [toggleAnim7, setToggleAnim7] = useState(false);

  const [counter8, setCounter8] = useState(0);
  const [toggleAnim8, setToggleAnim8] = useState(false);

  const [counter9, setCounter9] = useState(0);
  const [toggleAnim9, setToggleAnim9] = useState(false);

  const [counter10, setCounter10] = useState(0);
  const [toggleAnim10, setToggleAnim10] = useState(false);

  const [counter11, setCounter11] = useState(0);
  const [toggleAnim11, setToggleAnim11] = useState(false);

  const [counter12, setCounter12] = useState(0);
  const [toggleAnim12, setToggleAnim12] = useState(false);

  const [counter13, setCounter13] = useState(0);
  const [toggleAnim13, setToggleAnim13] = useState(false);

  const [counter14, setCounter14] = useState(0);
  const [toggleAnim14, setToggleAnim14] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Portfolio</title>
      </Head>
      <m.div
        initial={{ y: "0%" }}
        animate={{ y: "0%" }}
        exit={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="pt-10 2xl:pt-0"
      >
        {/* wireless net coms */}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim1 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter1 == 0 && (
                <Image src={wirelessnetcoms} height={500}></Image>
              )}
              {counter1 == 1 && (
                <div className="relative h-[200px] md:h-[400px] lg:h-[500px] w-[320px] md:w-[600px] lg:w-[800px]  flex justify-center items-center">
                  <iframe
                    className="flex-1 w-full h-full"
                    src="https://drive.google.com/file/d/1vIN4Oqe0LIbs_KsLhKAI5_bTgPQWKlCr/preview"
                  ></iframe>
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex items-center justify-center">
                    loading video...
                  </div>
                </div>
              )}
              {counter1 == 2 && (
                <Image src={wirelessnetcomsss} height={500}></Image>
              )}
              {counter1 == 3 && (
                <Image src={wirelessnetcomsregss} height={500}></Image>
              )}
              {counter1 == 4 && (
                <Image src={wirelessnetcomsatss} height={500}></Image>
              )}
              {counter1 == 5 && (
                <Image src={wirelessnetcomsevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim1(true);
              }}
              onMouseUp={() => {
                setToggleAnim1(false);
              }}
              onClick={() => {
                if (counter1 == 0) {
                  setCounter1((prev) => prev);
                } else {
                  setCounter1((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim1 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter1 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter1 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter1 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter1 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter1 == 4 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter1 == 5 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim1(true);
              }}
              onMouseUp={() => {
                setToggleAnim1(false);
              }}
              onClick={() => {
                if (counter1 == 5) {
                  setCounter1(0);
                } else {
                  setCounter1((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim1 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Wireless Networks and Communications
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            September 03, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I was able to recall the basics with Internet
            Protocols. It also taught me about the Internet Protocol computer
            network addresses and how to find it. This webinar also taught me
            the differences between IPv4 and IPv6. Additionally, the speaker
            also did a demo on how to simulate network connections with the use
            of Cisco Packet Tracer which is great because it is also a
            requirement for one of my courses.
          </p>
        </div>

        {/* fundamentals of cloud */}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim2 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter2 == 0 && (
                <Image src={fundamentalsofcloud} height={500}></Image>
              )}
              {counter2 == 1 && (
                <div className="h-[200px] md:h-[400px] lg:h-[500px] w-[320px] md:w-[600px] lg:w-[800px] relative flex justify-center items-center">
                  <iframe
                    className="flex-1 w-full h-full"
                    src="https://drive.google.com/file/d/1z6pns_YpmcoYYQ_fNM_yMmJHAyBsVHD5/preview"
                  ></iframe>
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex items-center justify-center">
                    loading video...
                  </div>
                </div>
              )}
              {counter2 == 2 && (
                <Image src={fundamentalsofcloudss} height={500}></Image>
              )}
              {counter2 == 3 && (
                <Image src={fundamentalsofcloudregss} height={500}></Image>
              )}
              {counter2 == 4 && (
                <Image src={fundamentalsofcloudatss} height={500}></Image>
              )}
              {counter2 == 5 && (
                <Image src={fundamentalsofcloudevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim2(true);
              }}
              onMouseUp={() => {
                setToggleAnim2(false);
              }}
              onClick={() => {
                if (counter2 == 0) {
                  setCounter2((prev) => prev);
                } else {
                  setCounter2((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim2 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter2 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter2 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter2 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter2 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter2 == 4 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter2 == 5 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim2(true);
              }}
              onMouseUp={() => {
                setToggleAnim2(false);
              }}
              onClick={() => {
                if (counter2 == 5) {
                  setCounter2(0);
                } else {
                  setCounter2((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim2 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Fundamentals of Cloud Computing and Efficient Solutions for Cloud
            Data Storage
          </p>
          <p className="mx-auto mt-0 mb-0text-lg opacity-50 font-thin ">
            September 18, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I was able to learn about the good benefits and
            the efficiency of having a cloud services and storage than a
            physical storage. I also learned that cloud services also has the
            same security features if we compare it with the traditional ones.
            Cloud storages has encryption and security features as well which is
            one of the features that users look for. Therefore, cloud services
            does not compromise security but it enhances it rather.
          </p>
        </div>

        {/* data privacy */}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim3 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter3 == 0 && <Image src={dataprivacy} height={500}></Image>}
              {counter3 == 1 && (
                <div className="h-[200px] md:h-[400px] lg:h-[500px] w-[320px] md:w-[600px] lg:w-[800px] relative flex justify-center items-center">
                  <iframe
                    className="flex-1 w-full h-full"
                    src="https://drive.google.com/file/d/1s1EDInlUyPHvkrDP47YbrfbvY95J-a62/preview"
                  ></iframe>
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex items-center justify-center">
                    loading video...
                  </div>
                </div>
              )}
              {counter3 == 2 && (
                <Image src={dataprivacyss} height={500}></Image>
              )}
              {counter3 == 3 && (
                <Image src={dataprivacyregss} height={500}></Image>
              )}
              {counter3 == 4 && (
                <Image src={dataprivacyatss} height={500}></Image>
              )}
              {counter3 == 5 && (
                <Image src={dataprivacyevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim3(true);
              }}
              onMouseUp={() => {
                setToggleAnim3(false);
              }}
              onClick={() => {
                if (counter3 == 0) {
                  setCounter3((prev) => prev);
                } else {
                  setCounter3((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim3 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter3 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter3 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter3 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter3 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter3 == 4 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter3 == 5 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim3(true);
              }}
              onMouseUp={() => {
                setToggleAnim3(false);
              }}
              onClick={() => {
                if (counter3 == 5) {
                  setCounter3(0);
                } else {
                  setCounter3((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim3 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">Data Privacy</p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            September 18, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I learned how to be mindful of my personal or
            private data and information. We should not be always giving our
            data more importantly to those who are not trustworthy and
            refutable. Taking care of your money is also the same with taking
            care of your private information. In digital world, your private
            information is your wealth and it is important to keep it healthy by
            keeping it confidential.
          </p>
        </div>

        {/* laws and professional */}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim4 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter4 == 0 && (
                <Image src={lawsandprofessional} height={500}></Image>
              )}
              {counter4 == 1 && (
                <div className="h-[200px] md:h-[400px] lg:h-[500px] w-[320px] md:w-[600px] lg:w-[800px] relative flex justify-center items-center">
                  <iframe
                    className="flex-1 w-full h-full"
                    src="https://drive.google.com/file/d/1BFQpamlU0etcs-7bKj5ojdBayTHqideS/preview"
                  ></iframe>
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex items-center justify-center">
                    loading video...
                  </div>
                </div>
              )}
              {counter4 == 2 && (
                <Image src={lawsandprofessionalss} height={500}></Image>
              )}
              {counter4 == 3 && (
                <Image src={lawsandprofessionalregss} height={500}></Image>
              )}
              {counter4 == 4 && (
                <Image src={lawsandprofessionalatss} height={500}></Image>
              )}
              {counter4 == 5 && (
                <Image src={lawsandprofessionalevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim4(true);
              }}
              onMouseUp={() => {
                setToggleAnim4(false);
              }}
              onClick={() => {
                if (counter4 == 0) {
                  setCounter4((prev) => prev);
                } else {
                  setCounter4((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim4 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter4 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter4 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter4 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter4 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter4 == 4 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter4 == 5 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim4(true);
              }}
              onMouseUp={() => {
                setToggleAnim4(false);
              }}
              onClick={() => {
                if (counter4 == 5) {
                  setCounter4(0);
                } else {
                  setCounter4((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim4 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Laws & Professional Conducts For ICT Professionals
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            October 2, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, the importance of understanding and adhering to
            relevant laws and regulations in the ICT industry was one of the key
            insights I gained. It is our responsibility to ensure that we are
            aware of and compliant with all relevant legal requirements in order
            to avoid potential legal consequences. Furthermore, the webinar
            emphasized the significance of maintaining professional ethics in
            the ICT field, such as confidentiality and acting with integrity.
          </p>
        </div>

        {/* ip */}

        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim10 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter10 == 0 && <Image src={ip} height={500}></Image>}

              {counter10 == 1 && <Image src={ipregss} height={500}></Image>}
              {counter10 == 2 && <Image src={ipevalss} height={500}></Image>}
              {counter10 == 3 && <Image src={ippostss} height={500}></Image>}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim10(true);
              }}
              onMouseUp={() => {
                setToggleAnim10(false);
              }}
              onClick={() => {
                if (counter10 == 0) {
                  setCounter10((prev) => prev);
                } else {
                  setCounter10((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim10 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter10 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter10 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter10 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter10 == 3 && "w-[25px]"}
              `}
            ></div>

            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim10(true);
              }}
              onMouseUp={() => {
                setToggleAnim10(false);
              }}
              onClick={() => {
                if (counter10 == 3) {
                  setCounter10(0);
                } else {
                  setCounter10((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim10 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Intellectual Property Course Webinar
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            October 4-5 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            This webinar provided me with valuable insights into the world of
            patents. I learned about the various types of patents and the patent
            application process, as well as the importance of conducting
            thorough research to ensure that an invention is truly novel and
            non-obvious. I also liked how they discussed the potential benefits
            and challenges of obtaining a patent, as well as the role of patents
            in the larger intellectual property landscape. Overall, I would
            strongly recommend it to any students currently working on capstone
            projects.
          </p>
        </div>

        {/* cloud first environment */}

        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className=" relative mt-auto mx-auto rounded-xl overflow-hidden">
            <Image src={cloudfirst} width={800}></Image>
          </div>
          <p className="mx-auto mt-5  mb-0 text-2xl text-center">
            Building Blocks for a Cloud-First Environment
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            October 6, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I learned a lot about the key building blocks of
            a cloud-first environment, such as cloud storage, cloud networking,
            and cloud computing services, from the speaker, who was
            knowledgeable and engaging. The webinar also discussed the
            significance of selecting the right cloud provider, as well as the
            potential challenges and benefits of a cloud-first strategy.
          </p>
        </div>

        {/* latest technology */}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim6 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter6 == 0 && (
                <Image src={latesttechnology} height={500}></Image>
              )}
              {counter6 == 1 && (
                <div className="h-[200px] md:h-[400px] lg:h-[500px] w-[320px] md:w-[600px] lg:w-[800px] relative flex justify-center items-center">
                  <iframe
                    className="flex-1 w-full h-full"
                    src="https://drive.google.com/file/d/1dbtXu7GGlqvUpQrsa3RETGjz33VnaT7O/preview"
                  ></iframe>
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex items-center justify-center">
                    loading video...
                  </div>
                </div>
              )}
              {counter6 == 2 && (
                <Image src={latesttechnologyss} height={500}></Image>
              )}
              {counter6 == 3 && (
                <Image src={latesttechnologyregss} height={500}></Image>
              )}
              {counter6 == 4 && (
                <Image src={latesttechnologyatss} height={500}></Image>
              )}
              {counter6 == 5 && (
                <Image src={latesttechnologyevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim6(true);
              }}
              onMouseUp={() => {
                setToggleAnim6(false);
              }}
              onClick={() => {
                if (counter6 == 0) {
                  setCounter6((prev) => prev);
                } else {
                  setCounter6((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim6 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter6 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter6 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter6 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter6 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter6 == 4 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter6 == 5 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim6(true);
              }}
              onMouseUp={() => {
                setToggleAnim6(false);
              }}
              onClick={() => {
                if (counter6 == 5) {
                  setCounter6(0);
                } else {
                  setCounter6((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim6 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Latest Technology in Embedded Systems
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            October 14, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I learned about the most recent technology and
            developments in the field of embedded systems, such as new
            microcontrollers, sensors, and software tools. The speaker also
            discussed the potential applications of these technologies and
            provided practical tips and guidance on how to integrate them into
            embedded systems. The webinar was extremely informative and
            inspiring, and I am astounded by the rapid progress and innovation
            in the field of embedded systems. I strongly recommend
          </p>
        </div>

        {/* IT CPE careers */}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim7 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter7 == 0 && <Image src={itcpecareers} height={500}></Image>}
              {counter7 == 1 && (
                <div className="h-[200px] md:h-[400px] lg:h-[500px] w-[320px] md:w-[600px] lg:w-[800px] relative flex justify-center items-center">
                  <iframe
                    className="flex-1 w-full h-full"
                    src="https://drive.google.com/file/d/1YoiUxcrhUAkRz9a_HXYj0FV_8fas-3Zj/preview"
                  ></iframe>
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex items-center justify-center">
                    loading video...
                  </div>
                </div>
              )}
              {counter7 == 2 && (
                <Image src={itcpecareersss} height={500}></Image>
              )}
              {counter7 == 3 && (
                <Image src={itcpecareersregss} height={500}></Image>
              )}
              {counter7 == 4 && (
                <Image src={itcpecareersatss} height={500}></Image>
              )}
              {counter7 == 5 && (
                <Image src={itcpecareersevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim7(true);
              }}
              onMouseUp={() => {
                setToggleAnim7(false);
              }}
              onClick={() => {
                if (counter7 == 0) {
                  setCounter7((prev) => prev);
                } else {
                  setCounter7((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim7 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter7 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter7 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter7 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter7 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter7 == 4 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter7 == 5 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim7(true);
              }}
              onMouseUp={() => {
                setToggleAnim7(false);
              }}
              onClick={() => {
                if (counter7 == 5) {
                  setCounter7(0);
                } else {
                  setCounter7((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim7 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            IT and CPE Careers in the IT Industry
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            October 26, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I have learned that there is a lot of jobs
            available in the field of I.T. Personally, I will choose to be a Web
            Developer not because it can make a lot of money but because it is
            my dream job and I enjoy it a lot. The speaker taught us on how to
            further enhance our skills and add more in our skillset. He also
            taught us about a lot of positive attitudes while in the
            professional field to keep track of ourserlves and reach our goals.
          </p>
        </div>

        {/* adv*/}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim13 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter13 == 0 && <Image src={adv} height={500}></Image>}
              {counter13 == 1 && (
                <div className="h-[200px] md:h-[400px] lg:h-[500px] w-[320px] md:w-[600px] lg:w-[800px] relative flex justify-center items-center">
                  <iframe
                    className="flex-1 w-full h-full"
                    src="https://drive.google.com/file/d/1VNgrBKrIEXHE4F1AcNNMDzCmJfXOJ4QU/preview"
                  ></iframe>
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex items-center justify-center">
                    loading video...
                  </div>
                </div>
              )}
              {counter13 == 2 && <Image src={advss} height={500}></Image>}
              {counter13 == 3 && <Image src={advregss} height={500}></Image>}
              {counter13 == 4 && <Image src={advatss} height={500}></Image>}
              {counter13 == 5 && <Image src={advevalss} height={500}></Image>}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim13(true);
              }}
              onMouseUp={() => {
                setToggleAnim13(false);
              }}
              onClick={() => {
                if (counter13 == 0) {
                  setCounter13((prev) => prev);
                } else {
                  setCounter13((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim13 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter13 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter13 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter13 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter13 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter13 == 4 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter13 == 5 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim13(true);
              }}
              onMouseUp={() => {
                setToggleAnim13(false);
              }}
              onClick={() => {
                if (counter13 == 5) {
                  setCounter13(0);
                } else {
                  setCounter13((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim13 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Advanced Programming & Web Technology
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            November 9, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I learned more about the technologies we can use
            with web programming. This is important to me because I work as a
            front-end developer. This gave me an idea about design patterns,
            design concepts, and its fundamentals. The speaker also addressed
            the differences of an application and a website. I also learned more
            about the back-end developer and it was helpful for me because I
            still struggle with it.
          </p>
        </div>

        {/* qa */}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim8 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter8 == 0 && <Image src={qa} height={500}></Image>}
              {counter8 == 1 && (
                <div className="h-[200px] md:h-[400px] lg:h-[500px] w-[320px] md:w-[600px] lg:w-[800px] relative flex justify-center items-center">
                  <iframe
                    className="flex-1 w-full h-full"
                    src="https://drive.google.com/file/d/1G5SpAOUGCm2KJ2YHDcsGVBTMTjIU2eMg/preview"
                  ></iframe>
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex items-center justify-center">
                    loading video...
                  </div>
                </div>
              )}
              {counter8 == 2 && <Image src={qass} height={500}></Image>}
              {counter8 == 3 && <Image src={qaregss} height={500}></Image>}
              {counter8 == 4 && <Image src={qaatss} height={500}></Image>}
              {counter8 == 5 && <Image src={qaevalss} height={500}></Image>}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim8(true);
              }}
              onMouseUp={() => {
                setToggleAnim8(false);
              }}
              onClick={() => {
                if (counter8 == 0) {
                  setCounter8((prev) => prev);
                } else {
                  setCounter8((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim8 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter8 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter8 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter8 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter8 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter8 == 4 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter8 == 5 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim8(true);
              }}
              onMouseUp={() => {
                setToggleAnim8(false);
              }}
              onClick={() => {
                if (counter8 == 5) {
                  setCounter8(0);
                } else {
                  setCounter8((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim8 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            QA Testing Conference: QA Testers Share Their Successful Software
            Testing Case Studies
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            November 12, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I was amazed to know that this job exits. You
            just have to test software or applications and check their
            functionalities. However, I also think that this is not easy because
            you really need to be watchful for errors or the project will be
            deployed with errors. I learned also that this job is really
            important for the development of project because it will eliminate
            bugs and errors of a software or application.
          </p>
        </div>

        {/* mobile app */}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim9 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter9 == 0 && <Image src={mobileapp} height={500}></Image>}
              {counter9 == 1 && (
                <div className="h-[200px] md:h-[400px] lg:h-[500px] w-[320px] md:w-[600px] lg:w-[800px] relative flex justify-center items-center">
                  <iframe
                    className="flex-1 w-full h-full"
                    src="https://drive.google.com/file/d/1E6puwAt5yxkRfFLZl4qxCPEnZw7OwdJN/preview"
                  ></iframe>
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex items-center justify-center">
                    loading video...
                  </div>
                </div>
              )}
              {counter9 == 2 && <Image src={mobileappss} height={500}></Image>}
              {counter9 == 3 && (
                <Image src={mobileappregss} height={500}></Image>
              )}
              {counter9 == 4 && (
                <Image src={mobileappatss} height={500}></Image>
              )}
              {counter9 == 5 && (
                <Image src={mobileappevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim9(true);
              }}
              onMouseUp={() => {
                setToggleAnim9(false);
              }}
              onClick={() => {
                if (counter9 == 0) {
                  setCounter9((prev) => prev);
                } else {
                  setCounter9((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim9 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter9 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter9 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter9 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter9 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter9 == 4 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter9 == 5 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim9(true);
              }}
              onMouseUp={() => {
                setToggleAnim9(false);
              }}
              onClick={() => {
                if (counter9 == 5) {
                  setCounter9(0);
                } else {
                  setCounter9((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim9 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Mobile Application UI Development Using React Native
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            November 16, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I witnessed how to create basic User Interface
            using React Native. I also use React for web developing that is why
            I am familiar by a little. I also learned more about the use of
            React Hooks like useEffect, useState, and many more. This is really
            important for because I also use React and React is really more
            understandable for than the other frameworks under JavaScript.
          </p>
        </div>

        {/* workshop */}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim12 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter12 == 0 && <Image src={workshop} height={500}></Image>}
              {counter12 == 1 && (
                <div className="h-[200px] md:h-[400px] lg:h-[500px] w-[320px] md:w-[600px] lg:w-[800px] relative flex justify-center items-center">
                  <iframe
                    className="flex-1 w-full h-full"
                    src="https://drive.google.com/file/d/1shsr8iA78n5RMhGri8GcXnC-LuAIJBwg/preview"
                  ></iframe>
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex items-center justify-center">
                    loading video...
                  </div>
                </div>
              )}
              {counter12 == 2 && <Image src={workshopss} height={500}></Image>}
              {counter12 == 3 && (
                <Image src={workshopregss} height={500}></Image>
              )}
              {counter12 == 4 && (
                <Image src={workshopatss} height={500}></Image>
              )}
              {counter12 == 5 && (
                <Image src={workshopevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim12(true);
              }}
              onMouseUp={() => {
                setToggleAnim12(false);
              }}
              onClick={() => {
                if (counter12 == 0) {
                  setCounter12((prev) => prev);
                } else {
                  setCounter12((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim12 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter12 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter12 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter12 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter12 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter12 == 4 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter12 == 5 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim12(true);
              }}
              onMouseUp={() => {
                setToggleAnim12(false);
              }}
              onClick={() => {
                if (counter12 == 5) {
                  setCounter12(0);
                } else {
                  setCounter12((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim12 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Workshop on Arduino Project
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            November 18, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I learned how Adruino works and how to program
            it. The speaker taught us basic programming tecniques and ideas to
            make a task happen. This is really important to us especially for
            our thesis projects which requires motors, actuators, and sensors.
            Therefore, we need a microcontroller to give them life and that is
            the Arduino Uno or Mega.
          </p>
        </div>

        {/* dm */}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim11 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter11 == 0 && <Image src={dm} height={500}></Image>}
              {counter11 == 1 && (
                <div className="h-[200px] md:h-[400px] lg:h-[500px] w-[320px] md:w-[600px] lg:w-[800px] relative flex justify-center items-center">
                  <iframe
                    className="flex-1 w-full h-full"
                    src="https://drive.google.com/file/d/1-FfOlT0SwyaEQcUaBIws8MI0SsX5TBlh/preview"
                  ></iframe>
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex items-center justify-center">
                    loading video...
                  </div>
                </div>
              )}
              {counter11 == 2 && <Image src={dmss} height={500}></Image>}
              {counter11 == 3 && <Image src={dmregss} height={500}></Image>}
              {counter11 == 4 && <Image src={dmatss} height={500}></Image>}
              {counter11 == 5 && <Image src={dmevalss} height={500}></Image>}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim11(true);
              }}
              onMouseUp={() => {
                setToggleAnim11(false);
              }}
              onClick={() => {
                if (counter11 == 0) {
                  setCounter11((prev) => prev);
                } else {
                  setCounter11((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim11 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter11 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter11 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter11 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter11 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter11 == 4 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter11 == 5 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim11(true);
              }}
              onMouseUp={() => {
                setToggleAnim11(false);
              }}
              onClick={() => {
                if (counter11 == 5) {
                  setCounter11(0);
                } else {
                  setCounter11((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim11 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Data Mining and Data Analytics (Sponsored Webinar)
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            November 23, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I learned the process on how our data are being
            collected. Data collected from us is being used for the development
            of Artificial Intelligence, Machine Learning, and for Ad Campaigns
            as well. I learned that the other purpose is to learn the trends of
            people's behavior and to predict the future trends as well. Business
            companies, to be specific, do this to help them make decisions.
          </p>
        </div>

        {/* backend */}
        <div className=" min-h-[100vh] w-full flex flex-col drop-shadow-[0px_0px_50px_#ffffff50] border-b-[1px] border-b-slate-800">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div
              className={` relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${toggleAnim14 ? " translate-x-5 " : " translate-x-0"}
              `}
            >
              {counter14 == 0 && <Image src={backend} height={500}></Image>}

              {counter14 == 1 && <Image src={backendss} height={500}></Image>}
              {counter14 == 2 && (
                <Image src={backendregss} height={500}></Image>
              )}
              {counter14 == 3 && <Image src={backendatss} height={500}></Image>}
              {counter14 == 4 && (
                <Image src={backendevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onMouseDown={() => {
                setToggleAnim14(true);
              }}
              onMouseUp={() => {
                setToggleAnim14(false);
              }}
              onClick={() => {
                if (counter14 == 0) {
                  setCounter14((prev) => prev);
                } else {
                  setCounter14((prev) => prev - 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim14 ? "-translate-x-1" : "translate-x-0"}
              `}
            />
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter14 == 0 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter14 == 1 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter14 == 2 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter14 == 3 && "w-[25px]"}
              `}
            ></div>
            <div
              className={`bg-white w-[12px] h-[10px] rounded-full transition-all duration-300 ease-in-out
              ${counter14 == 4 && "w-[25px]"}
              `}
            ></div>
            <BiRightArrowCircle
              onMouseDown={() => {
                setToggleAnim14(true);
              }}
              onMouseUp={() => {
                setToggleAnim14(false);
              }}
              onClick={() => {
                if (counter14 == 4) {
                  setCounter14(0);
                } else {
                  setCounter14((prev) => prev + 1);
                }
              }}
              className={`text-[30px] min-w-[30px] cursor-pointer transition-all duration-300 ease-in-out
              ${toggleAnim14 ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Backend Web Development
          </p>
          <p className="mx-auto mt-0 mb-0 text-lg opacity-50 font-thin ">
            December 4, 2022
          </p>
          <h2 className="mx-auto mt-5 mb-0 text-xl">Reflection</h2>
          <p className="mx-auto mt-0 mb-auto text-lg  font-thin max-w-[800px] text-justify  px-3">
            With this webinar, I learned the process on how backend works. I
            also learned how to use MongoDB and Express to connect your project
            with a database. The speaker taught us basic programming with
            regards to the back end development. I will be attending more
            webinars about backend development because it is my weak side.
          </p>
        </div>
      </m.div>
    </div>
  );
}
