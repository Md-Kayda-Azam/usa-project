'use client';
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Group from '@/app/components/Card/Card';
import Image from 'next/image';
import React from 'react';
import image from '@/app/assets/img/Rectanglec.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Breadcrumbs title="About Us" name="About us" />
      <div className="container mx-auto px-4 py-5">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, scaleY: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-8 flex sm:justify-between flex-col sm:flex-row gap-x-24 sm:items-center items-start">
            <div className="mb-4">
              <h2 className="text-sm font-medium mb-2 sm:block hidden">
                About Us
              </h2>
              <h4 className="text-lg font-semibold">History</h4>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 text-sm">
                In 1962, the Southern Michigan Mutual Insurance Company
                celebrated its 100th year in continuous operation and was
                presented with a plaque by the State of Michigan as a Centenary
                Business.
              </p>
            </div>
          </div>
        </motion.div>
        <div>
          <Image src={image} alt="Image" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, scaleY: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-8">
            <p className="mb-4 text-gray-700 text-sm">
              In 2013, Southern Michigan Mutual Insurance Company became USA
              Underwriters. The name may have changed, but the dedication to our
              customers, our drive to serve them and their communities hasn't.
              USA Underwriters mission as a leading Property and Casualty
              Insurance company in Michigan, remains largely unchanged from the
              mission of its progenitor: to provide affordable, quality
              insurance solutions to families and individuals.
            </p>
            <p className="mb-4 text-gray-700 text-sm">
              Insurance has changed a lot in the last century and a half. When
              Southern Michigan Mutual Insurance Company was founded,
              automobiles simply didn't exist. That all changed right in the
              company's backyard at the turn of the 20th century when Henry
              Ford's Model T began rolling off the assembly line.
            </p>
            <p className="text-gray-700 text-sm">
              In an instant of history, the car supplanted the horse and buggy
              as Americans' primary mode of transportation. The era of the
              Automobile had begun, and the Southern Michigan Mutual Insurance
              Company was front and center for one of the most dramatic shifts
              in American history. The car accelerated economic growth and
              offered a freedom of travel that had been unimaginable for the
              vast majority of people through the whole of human history.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, scaleY: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-8 grid sm:grid-cols-2 grid-cols-1 items-center ">
            <div className="mb-4 sm:mt-0 mt-10 col-span-1">
              <h2 className="text-sm font-medium mb-2">Believe</h2>
              <h4 className="text-lg font-semibold text-red-500">
                OUR MISSION
              </h4>
            </div>
            <div className="mb-6 col-span-1">
              <p className="text-gray-700 text-sm">
                Our mission has remained largely unchanged over the century and
                a half the company has operated: to quickly provide affordable
                insurance solutions for our customers that support the
                communities and families they represent.
              </p>
            </div>
          </div>
        </motion.div>
        <Group />
      </div>
    </>
  );
};

export default About;
