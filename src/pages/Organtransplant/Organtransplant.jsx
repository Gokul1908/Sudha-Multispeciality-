"use client";
import React from "react";
import Banner from "@/assets/organtransplant/organ-transplant.webp";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import Main from "@/assets/nursingservice/main.jpg";
import Bookappointment from "@/components/Bookappointment";
import Image from "next/image";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import HospitalCard from "@/components/Hospital";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import OrganTransplantSidebar from "@/components/OrganTransplantSidebar";


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Organ Transplant", href: "/organ-transplant" },
];

const hospitalscards = [
    {
        number: <h3 className="text-[44px] text-[#2B3990]">40+</h3>,
        title: (
            <p className="text-md font-bold text-black">Years of Experience</p>
        ),
        link: "/op-centre",
        icon: hospitalOne,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">300+</h3>,
        title: <p className="text-md font-bold text-black">Patient Beds</p>,
        link: "/maternity",
        icon: hospitalTwo,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">24+</h3>,
        title: <p className="text-md font-bold text-black">Departments</p>,
        link: "/heart-care",
        icon: hospitalThree,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">100+</h3>,
        title: <p className="text-md font-bold text-black">Doctor's</p>,
        link: "/heart-care",
        icon: hospitalFour,
    },
];


const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};
const customerSlides = [Main, Main, Main];

const OrganTransplant = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div>
                <div className="flex justify-end -mt-[60px] ">{dots}</div>
            </div>
        ),
        customPaging: (i) => (
            <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"></div>
        ),
    };
    return (
        <div>
            <section className="relative px-7 hero-section -mt-28 mb-hero-section">
                <div
                    className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >

                    <div className="max-w-7xl mx-auto">
                        {/* Breadcrumb */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-2"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[40px]  mb-3"
                        >
                            Organ Transplant
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white mb-4"
                        >
                            Comprehensive Support for Complete Recovery
                        </motion.p>

                        {/* Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Link
                                href="#contactus"
                                className="btn-white"
                            >
                                Book an Appointment <ArrowUpRight className="w-5 h-5" />
                            </Link>
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

            <section>
                <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {hospitalscards.map((card, idx) => (
                            <motion.div key={idx} variants={cardVariants}>
                                <HospitalCard
                                    number={card.number}
                                    icon={card.icon}
                                    title={card.title}
                                    link={card.link}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <div>
                <Marquee
                    speed={50}
                    gradient={false}
                    pauseOnHover={true}
                    className="mt-5">
                    <span className="mx-4 text-[#D5DAE5] font-extrabold text-[76px]">
                        Experienced Professionals + Preventive Care
                    </span>
                </Marquee>
            </div>

            <div className="max-w-7xl mx-auto py-16 ">
                <OrganTransplantSidebar />
            </div>

            <section id="contactus">
                <Bookappointment />
            </section>
        </div>
    );
};

export default OrganTransplant;
