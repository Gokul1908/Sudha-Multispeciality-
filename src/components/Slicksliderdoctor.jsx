"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { doctorsData } from "@/constants/doctorDetails";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function NextArrow({ onClick }) {
  return (
    <button
      className="absolute right-2 md:-right-25 bottom-[-50px] w-8 h-8 bg-[#2B3990] text-white rounded-full flex items-center justify-center z-10"
      onClick={onClick}
    >
      <ChevronRight size={20} />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      className="absolute right-12 md:right-18 bottom-[-50px] w-8 h-8 bg-[#2B3990] text-white rounded-full flex items-center justify-center z-10"
      onClick={onClick}
    >
      <ChevronLeft size={20} />
    </button>
  );
}

export default function DoctorSlider({ specialty, counter }) {
  const filteredDoctors = doctorsData.filter(
    (doctor) => doctor.speciality === specialty
  );
  const settings = {
    arrows: counter > 2, // ✅ disables arrows for 1, 2, 3
    infinite: true,
    speed: 500,
    slidesToShow: counter,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(filteredDoctors.length, 2),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-[#f0f7ff] py-6   max-w-4xl mx-auto">
      <Slider {...settings}>
        {filteredDoctors.map((doc, index) => (
          <div key={index} className="px-3">
            <div className="bg-white h-[520px] rounded-2xl text-start relative">
              <div className=" self-start">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  width={300}
                  height={300}
                  className="mx-auto w-[100%] h-[320px] rounded-t-2xl object-cover"
                />
              </div>


              <div className="p-6 flex flex-col justify-between">
                {/* Text centered below */}
                <div className="">
                  <h3 className="text-md   text-[#2B3990]">
                    {doc.name}
                  </h3>
                  <p className="text-sm mt-2 ">
                    {doc.degrees}
                  </p>
                </div>
                <div className="absolute bottom-6 ">
                  <Link
                    href={`/doctor-detail/${doc.id}`}
                    className="btn-diagonal-outline px-8  w-full mt-8" >
                    View Profile <ArrowUpRight className="w-5 h-5" />

                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </Slider >
    </div >
  );
}
