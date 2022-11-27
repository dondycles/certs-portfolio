import Head from "next/head";
import Router, { useRouter } from "next/router";
import Image from "next/image";

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

import { useState } from "react";

export default function CertificatesWebinars() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  const [counter6, setCounter6] = useState(0);
  const [counter7, setCounter7] = useState(0);
  const [counter8, setCounter8] = useState(0);

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="">
        {/*1. wireless net coms */}
        <div className=" min-h-[100vh] w-full flex flex-col">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div className=" relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden ">
              {counter1 == 0 && (
                <Image src={wirelessnetcoms} height={500}></Image>
              )}
              {counter1 == 1 && (
                <Image src={wirelessnetcomsss} height={500}></Image>
              )}
              {counter1 == 2 && (
                <Image src={wirelessnetcomsregss} height={500}></Image>
              )}
              {counter1 == 3 && (
                <Image src={wirelessnetcomsatss} height={500}></Image>
              )}
              {counter1 == 4 && (
                <Image src={wirelessnetcomsevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onClick={() => {
                if (counter1 == 0) {
                  setCounter1((prev) => prev);
                } else {
                  setCounter1((prev) => prev - 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
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
            <BiRightArrowCircle
              onClick={() => {
                if (counter1 == 4) {
                  setCounter1(0);
                } else {
                  setCounter1((prev) => prev + 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Wireless Networks and Communications
          </p>
          <p className="mx-auto mt-0 mb-auto text-lg opacity-50 font-thin ">
            September 03, 2022
          </p>
        </div>

        {/*2. fundamentals of cloud */}
        <div className=" min-h-[100vh] w-full flex flex-col">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div className=" relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden ">
              {counter2 == 0 && (
                <Image src={fundamentalsofcloud} height={500}></Image>
              )}
              {counter2 == 1 && (
                <Image src={fundamentalsofcloudss} height={500}></Image>
              )}
              {counter2 == 2 && (
                <Image src={fundamentalsofcloudregss} height={500}></Image>
              )}
              {counter2 == 3 && (
                <Image src={fundamentalsofcloudatss} height={500}></Image>
              )}
              {counter2 == 4 && (
                <Image src={fundamentalsofcloudevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onClick={() => {
                if (counter2 == 0) {
                  setCounter2((prev) => prev);
                } else {
                  setCounter2((prev) => prev - 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
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
            <BiRightArrowCircle
              onClick={() => {
                if (counter2 == 4) {
                  setCounter2(0);
                } else {
                  setCounter2((prev) => prev + 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Fundamentals of Cloud Computing and Efficient Solutions for Cloud
            Data Storage
          </p>
          <p className="mx-auto mt-0 mb-auto text-lg opacity-50 font-thin ">
            September 18, 2022
          </p>
        </div>

        {/*3. data privacy */}
        <div className=" min-h-[100vh] w-full flex flex-col">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div className=" relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden ">
              {counter3 == 0 && <Image src={dataprivacy} height={500}></Image>}
              {counter3 == 1 && (
                <Image src={dataprivacyss} height={500}></Image>
              )}
              {counter3 == 2 && (
                <Image src={dataprivacyregss} height={500}></Image>
              )}
              {counter3 == 3 && (
                <Image src={dataprivacyatss} height={500}></Image>
              )}
              {counter3 == 4 && (
                <Image src={dataprivacyevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onClick={() => {
                if (counter3 == 0) {
                  setCounter3((prev) => prev);
                } else {
                  setCounter3((prev) => prev - 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
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
            <BiRightArrowCircle
              onClick={() => {
                if (counter3 == 4) {
                  setCounter3(0);
                } else {
                  setCounter3((prev) => prev + 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">Data Privacy</p>
          <p className="mx-auto mt-0 mb-auto text-lg opacity-50 font-thin ">
            September 18, 2022
          </p>
        </div>

        {/*4. laws and professional */}
        <div className=" min-h-[100vh] w-full flex flex-col">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div className=" relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden ">
              {counter4 == 0 && (
                <Image src={lawsandprofessional} height={500}></Image>
              )}
              {counter4 == 1 && (
                <Image src={lawsandprofessionalss} height={500}></Image>
              )}
              {counter4 == 2 && (
                <Image src={lawsandprofessionalregss} height={500}></Image>
              )}
              {counter4 == 3 && (
                <Image src={lawsandprofessionalatss} height={500}></Image>
              )}
              {counter4 == 4 && (
                <Image src={lawsandprofessionalevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onClick={() => {
                if (counter4 == 0) {
                  setCounter4((prev) => prev);
                } else {
                  setCounter4((prev) => prev - 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
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
            <BiRightArrowCircle
              onClick={() => {
                if (counter4 == 4) {
                  setCounter4(0);
                } else {
                  setCounter4((prev) => prev + 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Laws & Professional Conducts For ICT Professionals
          </p>
          <p className="mx-auto mt-0 mb-auto text-lg opacity-50 font-thin ">
            October 2, 2022
          </p>
        </div>

        {/*5. cloud first environment */}

        <div className=" h-[100vh] w-full flex flex-col items-center justify-center">
          <div className=" relative mt-auto mx-auto rounded-xl overflow-hidden">
            <Image src={cloudfirst} width={800}></Image>
          </div>
          <p className="mx-auto mt-5  mb-0 text-2xl text-center">
            Building Blocks for a Cloud-First Environment
          </p>
          <p className="mx-auto mt-0 mb-auto text-lg opacity-50 font-thin ">
            October 6, 2022
          </p>
        </div>

        {/*6. latest technology */}
        <div className=" min-h-[100vh] w-full flex flex-col">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div className=" relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden ">
              {counter6 == 0 && (
                <Image src={latesttechnology} height={500}></Image>
              )}
              {counter6 == 1 && (
                <Image src={latesttechnologyss} height={500}></Image>
              )}
              {counter6 == 2 && (
                <Image src={latesttechnologyregss} height={500}></Image>
              )}
              {counter6 == 3 && (
                <Image src={latesttechnologyatss} height={500}></Image>
              )}
              {counter6 == 4 && (
                <Image src={latesttechnologyevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onClick={() => {
                if (counter6 == 0) {
                  setCounter6((prev) => prev);
                } else {
                  setCounter6((prev) => prev - 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
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
            <BiRightArrowCircle
              onClick={() => {
                if (counter6 == 4) {
                  setCounter6(0);
                } else {
                  setCounter6((prev) => prev + 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            Latest Technology in Embedded Systems
          </p>
          <p className="mx-auto mt-0 mb-auto text-lg opacity-50 font-thin ">
            October 14, 2022
          </p>
        </div>

        {/*7. IT CPE careers */}
        <div className=" min-h-[100vh] w-full flex flex-col">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div className=" relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden ">
              {counter7 == 0 && <Image src={itcpecareers} height={500}></Image>}
              {counter7 == 1 && (
                <Image src={itcpecareersss} height={500}></Image>
              )}
              {counter7 == 2 && (
                <Image src={itcpecareersregss} height={500}></Image>
              )}
              {counter7 == 3 && (
                <Image src={itcpecareersatss} height={500}></Image>
              )}
              {counter7 == 4 && (
                <Image src={itcpecareersevalss} height={500}></Image>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onClick={() => {
                if (counter7 == 0) {
                  setCounter7((prev) => prev);
                } else {
                  setCounter7((prev) => prev - 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
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
            <BiRightArrowCircle
              onClick={() => {
                if (counter7 == 4) {
                  setCounter7(0);
                } else {
                  setCounter7((prev) => prev + 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            IT and CPE Careers in the IT Industry
          </p>
          <p className="mx-auto mt-0 mb-auto text-lg opacity-50 font-thin ">
            October 26, 2022
          </p>
        </div>

        {/*8. qa */}
        <div className=" min-h-[100vh] w-full flex flex-col">
          <div className="mt-auto mb-0 mx-auto flex justify-center items-center gap-1 min-h-[50vh]">
            <div className=" relative mt-auto mb-auto mx-auto   rounded-xl overflow-hidden ">
              {counter8 == 0 && <Image src={qa} height={500}></Image>}
              {counter8 == 1 && <Image src={qass} height={500}></Image>}
              {counter8 == 2 && <Image src={qaregss} height={500}></Image>}
              {counter8 == 3 && <Image src={qaatss} height={500}></Image>}
              {counter8 == 4 && <Image src={qaevalss} height={500}></Image>}
            </div>
          </div>

          <div className="mx-auto mt-5 flex gap-2 items-center">
            <BiLeftArrowCircle
              onClick={() => {
                if (counter8 == 0) {
                  setCounter8((prev) => prev);
                } else {
                  setCounter8((prev) => prev - 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
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
            <BiRightArrowCircle
              onClick={() => {
                if (counter8 == 4) {
                  setCounter8(0);
                } else {
                  setCounter8((prev) => prev + 1);
                }
              }}
              className="text-[30px] min-w-[30px] cursor-pointer"
            />
          </div>

          <p className="mx-auto mt-5 mb-0 text-2xl text-center">
            QA Testing Conference: QA Testers Share Their Successful Software
            Testing Case Studies
          </p>
          <p className="mx-auto mt-0 mb-auto text-lg opacity-50 font-thin ">
            November 12, 2022
          </p>
        </div>
      </div>
    </>
  );
}
