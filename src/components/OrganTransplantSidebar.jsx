"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import sidebar1 from "@/assets/organtransplant/renal.webp";
import sidebar2 from "@/assets/organtransplant/lung.webp";
import sidebar3 from "@/assets/alliedhealthservice/3.png";
import sidebar4 from "@/assets/alliedhealthservice/4.png";
import sidebar5 from "@/assets/alliedhealthservice/5.png";
import Image from "next/image";
import Logo from "../assets/nursingservice/Group.png";
import Link from "next/link";
import './bookappointment.css';

const rightbar = [
  {
    head: "Renal Transplant ",
    label: "Leading You to a Healthier Tomorrow.",
    image: sidebar1,
    link: "/renal-transplant",
  },
  // {
  //   head: "Lungs ",
  //   label: "The medical professional doctors available in the clinic",
  //   image: sidebar2,
  //   link: "/#",
  // },

];

const OrganTransplantSidebar = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <aside className="w-full lg:w-1/2 space-y-6 lg:sticky lg:top-24 h-fit">
          <h5 className="inline-block px-4 py-1.5 font-semibold bg-white text-[#2B3990] rounded-full text-[14px]">
            Organ Transplant
          </h5>

          <div>
            <h2 className="text-[30px]  pb-4 ">
              Advanced Allied Healthcare for Complete Recovery
            </h2>
            <p className="mb-4">
              At Sudha Multispeciality Hospital, our Allied Health Care Services offer
              critical support that complements your medical treatment. Our expert professionals
              provide personalised care across physiotherapy, dietetics, psychology, maternal
              health, and organ transplant rehab. From the very first step in your healing journey,
              we focus on enhancing recovery outcomes, boosting your physical and emotional strength,
              and ensuring that your overall well-being is restored with compassion, collaboration,
              and cutting-edge therapies.
            </p>

            <Link href="#" className="mt-4">
              <div
                className="btn-diagonal "
              >
                Book an Appointment
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 7L7 17M7 7h10v10"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </aside>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-6">
            {rightbar.map((item, index) => (
              <Link href={item.link} key={index}>
                <div className="relative group">
                  <div className="bg-white  rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start">
                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.head}
                      className="w-full sm:w-60 h-[220px] sm:h-[260px] object-cover  rounded-3xl mx-auto"
                    />

                    {/* Text Content */}
                    <div className="flex flex-col flex-1 justify-between h-full w-full">
                      <div className="flex justify-between items-end w-full">
                        <h3 className="text-[20px] sm:text-[22px] ">
                          {item.head}
                        </h3>
                        <Image
                          height={40}
                          width={40}
                          alt="Logo"
                          src={Logo}
                          className="hidden sm:block"
                        />
                      </div>

                      <div className="pt-4 absolute bottom-6 mr-4">
                        <div className="border-t border-gray-200 mt-4 mb-2" />
                        <p className="text-gray-700 text-[14px] ">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  {/* <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center z-30 shadow-md group-hover:shadow-lg transition-all duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-black group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 7L7 17M7 7h10v10"
                      />
                    </svg>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganTransplantSidebar;
