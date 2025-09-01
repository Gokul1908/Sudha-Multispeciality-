"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowUpRight } from "lucide-react";
import docImg from "../assets/home/doc/shyla.jpg";
import Link from "next/link";

const doctors = [
  {
    name: "Dr.Kumaravel Pandiyan",
    qualification: "DA Anaesthesia",
    image: docImg,
  },
  {
    name: "Dr. U. Shyla",
    qualification: "DNB Cardiologist",
    image: docImg,
  },
  {
    name: "Dr. U. Shyla",
    qualification: "Interventional Cardiologist",
    image: docImg,
  },
];

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

export default function DoctorSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="relative bg-[#f0f7ff] pt-4  max-w-4xl mx-auto">
      <Slider {...settings}>
        {doctors.map((doc, index) => (
          <div key={index} className="pr-4">
            <div className="bg-white h-[520px] rounded-2xl text-start relative">
              <Image
                src={doc.image}
                alt={doc.name}
                width={300}
                height={300}
                className="mx-auto w-[100%] h-[320px] rounded-t-2xl object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <div className="">
                  <h3 className="text-md   text-[#2B3990]">
                    {doc.name}
                  </h3>
                  <p className="text-sm mt-2 ">
                    {doc.qualification}
                  </p>
                </div>

                <div className="absolute bottom-6 ">
                  <Link
                    href="#contactus"
                    className="btn-diagonal-outline w-full mt-8"
                  >
                    Book an Appointment <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
