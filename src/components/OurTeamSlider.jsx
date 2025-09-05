"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { doctorsData } from "@/constants/doctorDetails";
import { ArrowUpRight } from "lucide-react";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 
               right-24 lg:right-[90px]
               bottom-[-40px] md:bottom-[-50px] text-white 
               border border-white
               hover:bg-[#2B3990] hover:text-white 
               p-2 rounded-full"
  >
    <ChevronLeft className="w-4 h-4" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 
               right-14 lg:right-[40px]
               bottom-[-40px] md:bottom-[-50px]
               border border-white bg-[#2B3990] 
               hover:bg-[#1f2e6e] text-white 
               p-2 rounded-full"
  >
    <ChevronRight className="w-4 h-4" />
  </button>
);

export default function OurTeamSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // default for desktop
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl bg-gradient-to-r from-[#2A3D90] to-[#0C122A] mx-auto px-4 rounded-3xl pt-16 pb-20">
        <div className="flex justify-center ">
          <h2 className="bg-white text-[#2B3990] px-5  py-2 rounded-full text-sm font-semibold">
            Our Medical Team
          </h2>
        </div>

        <h1 className="text-center text-[30px] text-white mt-4">
          Our Multi-Speciality Experts
        </h1>

        <p className=" text-white mt-2 text-center">
          Book your appointment with the best specialists for all of your health
          concerns.
        </p>

        <div className="relative mt-10">
          <Slider {...settings}>
            {doctorsData.map((doc, index) => (
              <div key={index} className="px-3">
                {/* Card */}
                <div className="bg-white h-[500px] max-w-[300px] rounded-2xl text-start flex flex-col overflow-hidden">
                  {/* Image */}
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-[300px] object-cover rounded-t-2xl"
                  />

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-[14px] sm:text-[16px] text-[#2b3990]">
                        {doc.name}
                      </h3>
                      <p className="text-[12px] mt-2">{doc.degrees}</p>
                      <p className="text-[12px] mt-2">{doc.qualification}</p>
                    </div>

                    {/* Button aligned at bottom */}
                    <Link
                      href={`/doctor-detail/${doc.id}`}
                      className="btn-diagonal-outline px-8 w-full mt-6 flex items-center justify-center gap-2"
                    >
                      View Profile <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}
