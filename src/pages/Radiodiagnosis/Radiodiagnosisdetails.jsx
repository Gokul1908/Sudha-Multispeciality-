'use client';
import React from 'react';
import Banner from "@/assets/fellownationalboard/Banner.png";
import Anaesthesia from '@/assets/fellownationalboard/anaesthesia.png';
import Radiology from '@/assets/fellownationalboard/radiology.png';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const breadcrumbItems = [
    { label: "Home", href: "/" },

    { label: "Academics", href: "" },

    { label: "Post MBBS Diploma Courses (DNB)", href: "/post-mbbs-diploma-courses" },

    { label: "DNB – Radio Diagnosis", href: "/dnb-radio-diagnosis" },
];

const TickCircle = () => (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
        <svg
            className="w-4 h-4 text-[#2B3990]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute z-10 
               lg:right-[150px] right-[290px] translate-x-[60px] 
               lg:bottom-[-60px] bottom-[-100px] 
               border border-[#2B3990] text-[#2B3990] 
               hover:bg-[#2B3990] hover:text-white 
               p-1.5 rounded-full"
    >
        <ChevronLeft className="w-4 h-4" />
    </button>
);

// Main Page Component
const AnesthesioCourseDetails = () => {


    const courses = [
        {
            title: "DNB – Anesthesiology",
            duration: "Post Diploma (DA) :  2 years",
            seats: "Approved Seats : 4 No’s",
            img: Anaesthesia,
            since: "Since 2002",
        },
        {
            title: "DNB – Radio Diagnosis",
            duration: "Post Diploma (DA) :  2 years",
            seats: "Approved Seats : 4 No’s",
            img: Radiology,
            since: "Since 2002",
        },
    ];

    return (
        <div>
            {/* Banner Section */}
            <section className="relative px-7 hero-section -mt-28 mb-hero-section">
                <div
                    className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-2 text-white"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[40px]  mb-3"
                        >
                            DNB – Radio Diagnosis
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 text-white"
                        >
                            Training Experts in Diagnostic Excellence
                        </motion.p>

                        <motion.div className='mt-12'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* <Link
                                href="#"
                                className="btn-white inline-flex  text-[16px] tracking-wide items-center px-7 py-3 bg-white text-[#2B3990] font-semibold rounded-full  hover:-translate-y-[3px] transition-transform duration-200"
                            >
                           
                            </Link> */}
                        </motion.div>

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
            <section className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
                <div className="bg-[#f3f9ff] min-h-screen flex justify-center">
                    <div className="rounded-2xl max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8">

                        {/* Left Side */}
                        <div className="space-y-4 md:col-span-7">
                            <h2 className="text-[30px]  text-[#2d2d8f]">Course Details</h2>

                            {/* Anesthesiology */}
                            <h4 className="text-[22px] ">DNB – Radio Diagnosis</h4>
                            <p className=" ">
                                Sudha Multispeciality Hospital offers a 2-year DNB Post MBBS Diploma course in Radio Diagnosis, accredited by the National Board of Examinations in Medical Sciences (NBEMS). With one approved seat available annually, this programme aims to develop proficient radiologists skilled in the latest imaging techniques and diagnostic practices.
                            </p>

                            <div className="mt-4">
                                <h4 className="text-[22px] ">Our Radiology Department 
</h4>
                                <p className="mt-3 ">
                                    Our Radiology department is equipped with advanced imaging modalities including digital X-ray, ultrasound, CT scan, MRI, and interventional radiology suites. Trainees gain extensive hands-on experience interpreting a wide range of cases, guided by experienced faculty committed to comprehensive clinical and academic training. 
                                </p>
                            </div>


                            <h4 className="text-[22px] ">Why Choose Our Program? </h4>
                            <ul className="pl-1 space-y-2 text-gray-700 text-sm sm:text-base">
                                <li className="flex items-start  gap-2 text-[14px] font-semibold"><TickCircle /> NBEMS accredited 2-year course</li>
                                <li className="flex items-start  gap-2 text-[14px] font-semibold"><TickCircle /> Limited seat (1 per year) for focused mentorship </li>
                                <li className="flex items-start  gap-2 text-[14px] font-semibold"><TickCircle /> Access to cutting-edge diagnostic technology</li>
                                
                                <li className="flex items-start  gap-2 text-[14px] font-semibold"><TickCircle /> Strong academic curriculum and research opportunities </li>
                                <li className="flex items-start  gap-2 text-[14px] font-semibold"><TickCircle /> Supportive learning environment with multidisciplinary collaboration</li>
                            </ul>


                        </div>

                        {/* Right Side Form */}
                        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl self-start sticky top-8 md:col-span-5">
                            <h2 className="text-[30px] ">Enroll Now!</h2>
                            <p className="">Personal Details</p>

                            <form className="mt-4 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium">Full Name <span className="text-red-500">*</span></label>
                                        <input type="text" placeholder="Enter full name" className="border rounded-lg p-2 w-full text-sm sm:text-base" />
                                    </div>
                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium">Mobile No <span className="text-red-500">*</span></label>
                                        <input type="text" placeholder="Enter Mobile No" className="border rounded-lg p-2 w-full text-sm sm:text-base" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium">Email <span className="text-red-500">*</span></label>
                                        <input type="email" placeholder="Enter your Email Id" className="border rounded-lg p-2 w-full text-sm sm:text-base" />
                                    </div>
                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium">Qualification <span className="text-red-500">*</span></label>
                                        <input type="text" placeholder="Enter your Qualification" className="border rounded-lg p-2 w-full text-sm sm:text-base" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm font-medium">Message</label>
                                    <textarea placeholder="Leave your Message..." className="border rounded-lg p-2 w-full h-24 sm:h-28 text-sm sm:text-base" />
                                </div>

                                <button type="submit" className="bg-[#2d2d8f] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-[#1f1f6f] transition text-sm sm:text-base">
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};



export default AnesthesioCourseDetails;
