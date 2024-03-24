'use client';
import React, { useEffect, useState } from 'react';
import Group from '../Card/Card';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import { motion } from 'framer-motion';

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;
      const threshold = 200;
      setIsVisible(scrollPosition > threshold);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="mx-auto px-3">
      <section className="my-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className=" sm:flex  sm:items-start sm:flex-col flex justify-center flex-col items-center">
              <h2 className="text-sm font-semibold text-gray-800 mb-2">
                Our Features
              </h2>
              <h4 className="text-xl font-bold text-black mb-4 sm:text-2xl ">
                MCCA REFUND INFORMATION
              </h4>
              <button
                type="submit"
                className="inline-flex justify-center sm:w-[200px] w-full px-4 py-3 rounded-full text-sm font-medium text-white bg-[#b81c1c] border border-transparent  shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900"
              >
                MCCA Refund FAQ
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="text-gray-700 leading-relaxed text-sm">
                The Michigan Catastrophic Claims Association approved refunds
                for certain Michigan Policyholders due to a surplus of funds
                being held by the MCCA. The approved refund will be $400 per
                eligible vehicle insured with USA Underwriters on October 31st,
                2021 at 11:59 PM, or $80 if the vehicle is an insured historical
                vehicle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Group />
      <BackgroundImage />
    </div>
  );
};

export default HomeSection;
