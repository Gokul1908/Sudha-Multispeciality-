import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, } from 'lucide-react';
import Slider from "react-slick";
import Image from "next/image";
import Heart from "../assets/home/centreofexcellence/heart.svg";
import Lungs from "../assets/home/centreofexcellence/lungs.svg";
import Mother from "../assets/home/centreofexcellence/mother.svg";
import Cancercentre from "../assets/home/centreofexcellence/cancercentre.svg";
import Brain from "../assets/home/centreofexcellence/brain.svg";
import Fertility from "../assets/home/centreofexcellence/fertility.svg";
import { Check } from 'lucide-react';

const excellenceData = [
  {
    id: 1,
    title: "Cardiology",
    description: "Comprehensive cardiac care led by experienced cardiologists and advanced diagnostic tools.",
    image: Heart,
    services: [
      "Coronary Angiography ",
      "Coronary Angioplasty  ",
      "Pacemaker Implantation  ",
      "Peripheral Vascular Stenting ",
      "Complex Heart Surgeries ",
      "Paediatric Cardiology ",
      "Preventive Cardiology  ",
      "Non-Invasive Cardiology ",

    ]
  },
  {
    id: 2,
    title: "Pulmonology",
    description: "Advanced care and diagnosis for all your pulmonary needs, from diagnosis to recovery. ",
    image: Lungs,
    services: [
      "Asthma  ",
      "Chronic Obstructive Pulmonary Disease (COPD)  ",
      "Interstitial Lung Disease  ",
      "Tuberculosis (TB)   ",
      "Pneumonia   ",
      "Fungal and bacterial lung infections ",
      "Paediatric Pulmonology",
      "Pulmonology Surgeries",

    ]
  },
  {
    id: 3,
    title: "Mother And Child Care",
    description: "Expert-led services for mothers and babies, from prenatal assessments to delivery and neonatal care. ",
    image: Mother,
    services: [
      "Pre-natal Care ",
      "Post-natal Care ",
      "Paediatrics ",
      "Maternity Care",
      "Gynaecology ",
      "Maternity",
      "Painless Delivery ",
      "Dietetics "
    ]
  },
  {
    id: 4,
    title: "Cancer Center",
    description: "Comprehensive cancer diagnosis and treatment led by expert oncologists using advanced technologies in a compassionate setting. ",
    image: Cancercentre,
    services: [
      "Brain Cancer",
      "Breast Cancer ",
      "Cervical Cancer ",
      "Colorectal Cancer",
      "Endometrial Cancer",

      "Lung Cancer",
      "Lymphoma Cancer",

      "Renal Cancer",

    ]
  },
  {
    id: 5,
    title: "Neurology",
    description: "Comprehensive neurological support with cutting-edge evaluation and compassionate care. ",
    image: Brain,
    services: [
      "Micro Neurosurgical Tumour Removal  ",
      "Stereotactic surgery (Pinhole/Keyhole Brain Biopsy)   ",
      "Skull Base Surgery  ",
      "Paediatric Neurology ",
      "Neurosurgery ",
      "Epilepsy Surgeries  ",
      "Stereotactic Surgery  ",
      "Stroke Evaluation  "
    ]
  },
  {
    id: 6,
    title: "Fertility Centre",
    description: "Advanced fertility treatments and diagnostics, supporting couples in every stage of their parenthood journey with care. ",
    image: Fertility,
    services: [
      "IVF ",
      "IUI ",
      "ICSI ",
      "Fertility Checkup ",
      "PCOD & PCOS ",
      "Laparoscopy  ",
      "Male Infertility  ",
      "Female Infertility "
    ]
  },

];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 
               lg:right-[150px] right-[290px] translate-x-[60px] 
               lg:bottom-[-60px] bottom-[-100px] 
               border border-[#2B3990] text-[#2B3990] 
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
               lg:right-[-20px] right-20 -translate-x-[60px] 
               lg:bottom-[-60px] bottom-[-100px] 
               bg-[#2B3990] hover:bg-[#1f2e6e] 
               text-white p-2 rounded-full"
  >
    <ChevronRight className="w-4 h-4" />
  </button>
);

export default function CentreOfExcellence() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 1,
          rows: 2,
        },
      },
    ],
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(excellenceData.length / itemsPerPage);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerPage;
    return excellenceData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="bg-gradient-to-br  ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white text-[#2B3990] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Centre of Excellence
          </div>
          <h2 className="text-[30px] mb-4">
            Personalized Comprehensive Care for Adult
            <br />
            & Paediatrics
          </h2>
        </div>

        {/* Cards Container */}

        <div className="relative mb-m">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
            {getCurrentItems().map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 duration-300 relative "
              >
                {/* Top-right SVG Image */}
                <div className="absolute top-6 right-6 w-10 h-10 sm:w-12 sm:h-12">
                  <Image src={item.image} alt={item.title} className="object-contain w-full h-full" />
                </div>

                {/* Header */}
                <div className="flex-1 mb-4 sm:mb-6">
                  <h3 className="text-[22px]  mb-3">{item.title}</h3>
                  <p className="text-[14px]">{item.description}</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
                  {item.services.map((service, index) => (
                    <div key={index} className="flex items-start  gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F0F7FD] text-[#2B3990] flex items-center justify-center">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <p className="font-semibold text-[14px]">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center sm:justify-end gap-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#2B3990] text-[#2B3990] hover:bg-[#2B3990] hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2B3990] text-white hover:bg-[#1f2e6e] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}