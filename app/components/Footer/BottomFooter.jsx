'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const BottomFooter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="max-w-[1440px] m-auto p-0">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="md:flex sm:justify-between sm:flex-row bg-[#1f2a37] text-white md:text-black flex-col justify-center items-center  md:text-md text-sm  py-5 md:bg-white px-14"
      >
        <div className="mb-4 md:mb-0 flex flex-wrap justify-center items-center">
          <span className="block md:inline-block">
            Copyright 2022 USA Underwriters |{' '}
          </span>
          <span className="font-bold">
            <a href="#" className="text-gray-400 hover:text-black-700">
              Privacy Policy
            </a>
            |
            <a href="#" className="text-gray-400 hover:text-black-700">
              Terms of Use
            </a>
          </span>
        </div>
        <div className="flex  flex-wrap  items-center justify-center">
          <span className="block md:inline-block">Built by Neutrix -</span>{' '}
          <span className="block md:inline-block">
            powered by Neutrix Systems
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default BottomFooter;
