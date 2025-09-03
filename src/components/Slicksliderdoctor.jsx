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
    arrows: filteredDoctors.length > 3,
    infinite: filteredDoctors.length > counter,
    speed: 500,
    slidesToShow: Math.min(filteredDoctors.length, counter), // ✅ only show available doctors
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
          <div key={index} className="pr-3">
            <div className="bg-white h-[500px] max-w-[300px] rounded-2xl text-start flex flex-col overflow-hidden">
              {/* Doctor Image */}
              <Image
                src={doc.image}
                alt={doc.name}
                width={300}
                height={300}
                className="w-full h-[300px] object-cover rounded-t-2xl"
              />

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-md font-bold text-[#2B3990]">{doc.name}</h3>
                  <p className="text-sm mt-2">{doc.degrees}</p>
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
        ))
        }
      </Slider >
    </div >
  );
}
