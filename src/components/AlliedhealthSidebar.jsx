"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import Physiotherapy from "@/assets/alliedhealthservice/physiotherapy.webp";
import Dietetics from "@/assets/alliedhealthservice/dietetics-cover.webp";
import Lactation from "@/assets/alliedhealthservice/lactation-maternal.webp";
import Nursing from "@/assets/alliedhealthservice/nursingservices/nursing-inner.webp";
import Psychology from "@/assets/alliedhealthservice/psychology.webp";
import Image from "next/image";


import Physio from "@/assets/alliedhealthservice/physical.svg";
import Diet from "@/assets/alliedhealthservice/gymnast-diet.svg";
import Maternal from "@/assets/alliedhealthservice/maternity-care.svg";
import Nurse from "@/assets/alliedhealthservice/nursing-services.svg";
import Psycho from "@/assets/alliedhealthservice/psycho.svg";

import Link from "next/link";
import './bookappointment.css';

const rightbar = [
  {
    head: "Physiotherapy ",
    label: "Empowering recovery through expert therapy for strength and confident movement.",
    image: Physiotherapy,
    link: "/resources/allied-health-services/physiotherapy",
    icon: Physio,
  },
  {
    head: "Dietetics ",
    label: "Personalized nutrition plans supporting health, recovery, and lifelong wellness.",
    image: Dietetics,
    link: "/resources/allied-health-services/dietetics",
    icon: Diet,
  },
  {
    head: "Lactation & Maternal Health ",
    label: "Expert lactation and maternal health support for stronger motherhood journeys.",
    image: Lactation,
    link: "/resources/allied-health-services/lactation-and-maternal-health",
    icon: Maternal,
  },
  {
    head: "Nursing Services ",
    label: "Trusted nursing care delivering comfort, healing, and continuous medical support.",
    image: Nursing,
    link: "/resources/allied-health-services/nursing-service",
    icon: Nurse,
  },
  {
    head: "Psychology ",
    label: "Expert psychological care promoting emotional wellbeing and balanced mental health.",
    image: Psychology,
    link: "/resources/allied-health-services/psychology",
    icon: Psycho,
  },
];

const Alliedhealthsidebar = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <aside className="w-full lg:w-1/2 space-y-6 lg:sticky lg:top-24 h-fit">
          <h5 className="inline-block  px-4 py-1.5 font-semibold bg-white text-[#2B3990] rounded-full text-sm ">
            Allied Services
          </h5>

          <div>
            <h2 className="text-[30px] ">
              Advanced Allied Healthcare for Complete Recovery
            </h2>
            <p className="mt-3 mb-4">
              At Sudha Multispeciality Hospital, our Allied Health Care Services offer
              critical support that complements your medical treatment. Our expert professionals
              provide personalised care across physiotherapy, dietetics, psychology, maternal
              health, and organ transplant rehab. From the very first step in your healing journey,
              we focus on enhancing recovery outcomes, boosting your physical and emotional strength,
              and ensuring that your overall well-being is restored with compassion, collaboration,
              and cutting-edge therapies.
            </p>

            <Link href="#">
              <div className="btn-diagonal ">
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
                      className="w-full sm:w-60 h-[220px] sm:h-[260px] object-cover rounded-3xl"
                    />

                    {/* Text Content */}
                    <div className="flex flex-col flex-1 h-full w-full">
                      <div className="flex justify-between items-start w-full">
                        <h3 className="text-[18px] ">
                          {item.head}
                        </h3>
                        <Image
                          height={40}
                          width={40}
                          alt="Logo"
                          src={item.icon}
                          className="hidden sm:block"
                        />
                      </div>

                      <div className="pt-4 absolute bottom-6 mr-4">
                        <div className="border-t border-gray-200 mt-4 mb-2" />
                        <p className="text-[14px]">
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

export default Alliedhealthsidebar;
