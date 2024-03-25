'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Rectangle from '@/app/assets/img/Rectangle.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const BackgroundImage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 658);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="py-20 bg-white">
      <div className="max-w-auto sm:h-[500px]  sm:relative">
        {isVisible && (
          <Image
            src={Rectangle}
            alt="BackgroundImage"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        )}
        <div className=" sm:absolute inset-0  flex flex-col items-start justify-end text-white bg-opacity-50">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
            className="sm:max-w-[400px]   sm:ml-20 mb-10 bg-red-500 p-4 rounded-lg flex flex-col"
          >
            <span className="text-lg md:text-xl font-bold mb-2">
              Obtain cost-effective same-day insurance coverage quickly.
            </span>
            <p className="text-xs mb-4">
              Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna
              leo. Etiam enim varius dictum amet hac imperdiet facilisis
              malesuada.
            </p>
            <div className="">
              <button className="bg-[#111928] sm:w-[200px] w-full text-white px-4 py-2 rounded-full mb-5">
                Report a Claim
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
