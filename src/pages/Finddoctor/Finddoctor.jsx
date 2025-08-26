"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackgroundIMage from "../../assets/ourteam/find-doctor.webp";
import { degrees, motion } from "framer-motion";
import Link from "next/link";
import "../Finddoctor/finddoc.css";
import { ArrowUpRight } from "lucide-react";

import { doctorsData } from "@/constants/doctorDetails";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Find a Doctor", href: "/doctorlist" },
  ];



export default function Finddoctor() {
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter((doc) => {
      return (
        (!selectedSpeciality || doc.speciality === selectedSpeciality) &&
        (!selectedDoctor || doc.name === selectedDoctor)
      );
    });
  }, [selectedSpeciality, selectedDoctor]);

  const groupedBySpeciality = useMemo(() => {
    const map = new Map();
    filteredDoctors.forEach((doc) => {
      if (!map.has(doc.speciality)) map.set(doc.speciality, []);
      map.get(doc.speciality).push(doc);
    });
    return map;
  }, [filteredDoctors]);

  const uniqueDoctors = useMemo(() => {
    const filtered = selectedSpeciality
      ? doctorsData.filter((doc) => doc.speciality === selectedSpeciality)
      : doctorsData;
    return [...new Set(filtered.map((doc) => doc.name))];
  }, [selectedSpeciality]);

  const uniqueSpecialities = [
    ...new Set(doctorsData.map((doc) => doc.speciality)),
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <section className="relative px-7 hero-section -mt-28 mb-hero-section">
        {/* Background Gradient */}
        <div
          className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
          style={{ backgroundImage: `url(${BackgroundIMage.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm mb-4"
            >
             <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px]  mb-3"
            >
              Find a Doctor
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-white"
            >
              A Heartfelt Care For Your Heart Care
            </motion.p>

           
          </div>
          <div className="absolute bottom-0 right-0  z-30 hidden md:block">
            <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="h-[30%] bg-transparent" />
              <div className="bg-white p-5">
                <h3 className="text-[36px] font-extrabold text-[#2B3990]">40+</h3>
                <p className="text-[16px] text-black font-bold">
                  Years of Trusted <br />
                  Expertise in <br />
                  Healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" max-w-7xl mx-auto pt-16">
        <div className=" bg-white z-20 w-[50%] absolute p-8 rounded-3xl -mt-28">
          <div>
            <h5 className="mb-4 text-[20px]">
              Find top specialists by department and book your appointment now.
            </h5>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <select
                onChange={(e) => {
                  setSelectedSpeciality(e.target.value);
                  setSelectedDoctor(""); // ✅ RESET doctor when speciality changes
                }}
                className="border px-4 py-2 rounded-md w-full"
                value={selectedSpeciality}
              >
                <option value="">All Specialities</option>
                {uniqueSpecialities.map((speciality, i) => (
                  <option key={i} value={speciality}>
                    {speciality}
                  </option>
                ))}
              </select>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="border px-4 py-2 rounded-md w-full"
                disabled={!selectedSpeciality} // ✅ disable unless a speciality is selected
              >
                <option value="">
                  {selectedSpeciality
                    ? "All Doctors"
                    : "Select Speciality First"}
                </option>

                {uniqueDoctors.map((name, i) => (
                  <option key={i} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        
      </div>
      <div className="max-w-7xl mx-auto  pt-20 sm:py-16">
          {selectedDoctor ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white finddoc shadow-md rounded-xl p-4 text-center pt-5 relative"
                >
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    className="mx-auto w-[50%] rounded-md object-cover"
                  />
                  <h3 className="text-md  mt-2 text-[#2B3990]">
                    {doc.name}
                  </h3>
                  <h3 className="text-md  mt-2 text-[#2B3990]">
                    {doc.degrees}
                  </h3>
                  <p className="text-sm mt-2 text-gray-600">
                    {doc.qualification}
                  </p>
                  <p className="text-sm mt-3 text-gray-600">{doc.degrees}</p>

                  <h2 className="text-[#2B3990] mt-8 font-semibold">
                    Book an Appointment{" "}
                  </h2>

                  {/* Arrow Button */}
                  <Link
                    href={`/doctor-detail/${doc.id}`}
                    className="absolute bottom-24 right-1 w-8 h-8 rounded-full bg-white flex items-center justify-center z-30 shadow-md group "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-black transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            [...groupedBySpeciality.entries()].map(([speciality, doctors]) => (
              <div key={speciality} className="mb-8">
                <h2 className="text-xl font-semibold text-[#2B3990] mb-4">
                  {speciality}
                </h2>
                <Slider {...sliderSettings}>
                  {doctors.map((doc) => (
                    <div key={doc.id} className="px-3">
                      <div className="bg-white finddoc rounded-xl p-4 text-start relative">
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          className="mx-auto w-[70%] rounded-md object-cover"
                        />
                        <h3 className="text-md font-bold mt-2  text-[#2B3990]">
                          {doc.name}
                        </h3>

                        <p className="text-sm mt-2 text-gray-600">
                          {doc.qualification}
                        </p>
                        <p className="text-sm mt-3 text-gray-600">
                          {doc.degrees}
                        </p>
                        <h2 className="text-[#2B3990] mt-8 font-semibold">
                          Book an Appointment{" "}
                        </h2>

                        {/* Arrow Button */}
                        <Link
                           href={`/doctor-detail/${doc.id}`}
                          className="absolute bottom-2 right-1 w-8 h-8 rounded-full bg-white flex items-center justify-center z-30 shadow-md group "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-black transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
                        </Link>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ))
          )}
        </div>
    </>
  );
}
