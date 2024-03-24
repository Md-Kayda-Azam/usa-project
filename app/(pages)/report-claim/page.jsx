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
      <div className="px-5 sm:px-3 ">
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
        <div className="text-center lg:text-left gap-16 sm:flex sm:flex-row flex flex-col-reverse py-5">
          <div className="lg:w-[30%] w-full">
            <h2 className="text-[35px] font-semibold mb-2">
              Contact Claims Department
            </h2>
            <span className="text-md">
              To report a claim, please call +1 (855) 230-1656
            </span>
            <div className="flex gap-4 py-4 justify-center items-center lg:justify-start">
              <button className="bg-[#B90909] text-white px-4 sm:w-[180px] w-full py-4 rounded-full">
                Call Toll-Free
              </button>
              <button className="text-[#B90909] px-4 py-4 rounded-full sm:w-[180px] w-full border border-[#B90909]">
                Send Message
              </button>
            </div>
          </div>
          <div className="lg:w-[60%] w-full">
            <p className="hidden sm:block">
              You will need to answer a series of necessary questions about the
              incident surrounding your claim. To expedite this process and get
              your claim moving faster, please have as much of the following
              information prepared in advance of contacting us to report your
              claim :
            </p>
            <div className="py-5">
              <div className="flex items-center gap-4 mb-3 ">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="sm:w-8 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#C81E1E" />
                </svg>

                <span className="sm:text-sm text-xs">Policy Number</span>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <svg
                  width="8"
                  height="8"
                  className="sm:w-8 w-10"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#C81E1E" />
                </svg>

                <p className="sm:text-sm text-xs">
                  Name, address and phone number for all parties involved in the
                  accident
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="sm:w-8 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#C81E1E" />
                </svg>

                <p className="sm:text-sm text-xs">
                  Year, make, model and license plate of the vehicles involved
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="sm:w-8 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#C81E1E" />
                </svg>

                <p className="sm:text-sm text-xs">
                  Facts surrounding the claim, including date, time and location
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="sm:w-8 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#C81E1E" />
                </svg>

                <p className="sm:text-sm text-xs">
                  Police report number and name of the police agency
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  className="sm:w-8 w-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#C81E1E" />
                </svg>

                <p className="sm:text-sm text-xs">
                  Extent of in juries of all parties involved
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="sm:w-8 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#C81E1E" />
                </svg>

                <p className="sm:text-sm text-xs">
                  Area of damage on the involved vehicles
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="sm:w-8 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#C81E1E" />
                </svg>
                <p className="sm:text-sm text-xs">
                  Location of vehicles if not drivable
                </p>
              </div>{' '}
              <div className="flex items-center gap-4 mb-3">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="sm:w-8 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#C81E1E" />
                </svg>

                <p className="sm:text-sm text-xs">
                  Name, address and phone number for any witnesses
                </p>
              </div>
            </div>
            <div>
              <p className="sm:text-sm text-xs mb-5">
                Once your claims information is submitted, a claims ad juster
                will be assigned to resolve your claim, guide you through the
                process and answer any questions you might have. Purchased
                coverages will determine the actions of the ad juster and the
                outcome of the claim.
              </p>
              <span className="text-sm">
                Remember to protect your vehicle from further damage.
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReportClaim;
