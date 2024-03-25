'use client';
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Image from 'next/image';
import React from 'react';
import Samples from '@/public/Samples 2.png';
import { motion } from 'framer-motion';
const ReportClaim = () => {
  return (
    <main>
      <Breadcrumbs title="Report a Claim" name="Claim" />
      <div className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, scaleY: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center lg:text-left  lg:flex">
            <div className="lg:w-[20%] w-full">
              <span className="text-sm">Need to Know</span>
              <h2 className="text-xl font-bold">Before We Begain</h2>
            </div>
            <div className="lg:w-[80%] w-full">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
                molestias ipsa dolor quam? Error sed vitae cum quasi est quis
                explicabo nam nesciunt quo adipisci molestiae facere, architecto
                atque.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="py-5">
          <Image src={Samples} height={1600} width={1600} alt="banner" />
        </div>
        <div className="text-center lg:text-left gap-16 lg:flex lg:flex-row md:flex md:flex-col-reverse flex flex-col-reverse py-5">
          <div className="lg:w-[30%] max-w-full">
            <h2 className="text-[35px] font-semibold mb-2">
              Contact Claims Department
            </h2>
            <span className="text-md">
              To report a claim, please call +1 (855) 230-1656
            </span>
            <div className="flex gap-4 py-4 justify-center items-center lg:justify-start">
              <button className="sm:text-md text-sm bg-[#B90909] text-white px-4 sm:w-[180px] w-full py-4 rounded-full">
                Call Toll-Free
              </button>
              <button className="text-[#B90909] sm:text-md text-sm px-4 py-4 rounded-full sm:w-[180px] w-full border border-[#B90909]">
                Send Message
              </button>
            </div>
          </div>
          <div className="flex flex-col max-w-full">
            <div className="">
              <p className="text-sm font-medium text-gray-500 hidden md:block">
                You will need to answer a series of necessary questions about
                the incident surrounding your claim. To expedite this process
                and get your claim moving faster, please have as much of the
                following information prepared in advance of contacting us to
                report your claim:
              </p>
            </div>
            <ul className=" space-y-2">
              <li className=" text-sm text-gray-700 flex items-center  gap-2">
                <span className="text-red-700 text-3xl">•</span> Policy number
              </li>
              <li className="text-sm text-gray-700 flex items-center  gap-2">
                <span className="text-red-700 text-3xl">•</span> Name, address
                and phone number for all parties involved in the accident
              </li>
              <li className="text-sm text-gray-700 flex items-center  gap-2">
                <span className="text-red-700 text-3xl">•</span> Year, make,
                model and license plate of the vehicles involved
              </li>
              <li className="text-sm text-gray-700 flex items-center  gap-2">
                <span className="text-red-700 text-3xl">•</span> Facts
                surrounding the claim, including date, time and location
              </li>
              <li className="text-sm text-gray-700 flex items-center  gap-2">
                <span className="text-red-700 text-3xl">•</span> Police report
                number and name of the police agency
              </li>
              <li className="text-sm text-gray-700 flex items-center  gap-2">
                <span className="text-red-700 text-3xl">•</span> Extent of
                injuries of all parties involved
              </li>
              <li className="text-sm text-gray-700 flex items-center  gap-2">
                <span className="text-red-700 text-3xl">•</span> Area of damage
                on the involved vehicles
              </li>
              <li className="text-sm text-gray-700 flex items-center  gap-2">
                <span className="text-red-700 text-3xl">•</span> Location of
                vehicles if not drivable
              </li>
              <li className="text-sm text-gray-700 flex items-center  gap-2">
                <span className="text-red-700 text-3xl">•</span> Area of damage
                on the involved vehicles
              </li>
              <li className="text-sm text-gray-700 flex items-center  gap-2">
                <span className="text-red-700 text-3xl items-center pt-2">
                  •
                </span>{' '}
                Name, address and phone number for any witnesses
              </li>
            </ul>
            <br />
            <div className="">
              <p className="text-sm font-medium text-gray-500">
                Once your claims information is submitted, a claims adjuster
                will be assigned to resolve your claim, guide you through the
                process and answer any questions you might have. Purchased
                coverages will determine the actions of the adjuster and the
                outcome of the claim.
              </p>
              <p className="text-sm font-medium text-gray-500 mt-5 hidden md:inline-block">
                Remember to protect your vehicle from further damage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReportClaim;
