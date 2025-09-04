"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { doctorsDatarenal } from "@/constants/doctorDetails";


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 
               right-24 lg:right-[90px]
               bottom-[-40px] md:bottom-[-50px] text-[#2B3990]
               border border-[#2B3990]
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

export default function Sliderdoctor() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
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
    ],
  };

  return (
    <section className="max-w-7xl mx-auto pt-16 pb-20">
       <div className="flex justify-center ">
          <h2 className="bg-white text-[#2B3990] px-5  py-2 rounded-full text-sm font-semibold">
            Our Medical Team
          </h2>
        </div>
      <div className="">
       

        <h1 className="text-center text-[30px] text-black mt-4">
          Our Transplant Team
        </h1>

        <div className="relative mt-10">
          <Slider {...settings}>
            {doctorsDatarenal.map((doc, index) => (
              <div key={index} className="pr-3">
                {/* Card wrapper */}
                <div className="bg-white h-[500px] max-w-[300px] rounded-2xl text-start flex flex-col overflow-hidden">
                  {/* Image */}
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    width={300}
                    height={300}
                    className="w-full h-[300px] object-cover rounded-t-2xl"
                  />

                  {/* Content */}
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-[16px] sm:text-[16px] font-bold text-[#2B3990]">
                        {doc.name}
                      </h3>
                      <p className="text-[12px]  mt-1">
                        {doc.degrees}
                      </p>
                      <p className="text-[12px]  mt-1">
                        {doc.qualification}
                      </p>
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
