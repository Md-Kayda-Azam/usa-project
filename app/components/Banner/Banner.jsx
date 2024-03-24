'use client';
import man from '@/app/assets/img/man.png';
import ar from '@/app/assets/img/ar.png';
import one from '@/app/assets/icon/Ellipse 1.png';
import two from '@/app/assets/icon/Ellipse 2.png';
import Slider from 'react-slick';

import Image from 'next/image';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="px-3">
        <div className="w-full bg-red-600 rounded-lg">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
            <div className="p-8">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                GET AFFORDABLE, SAME-DAY COVERAGE IN NO TIME.
              </h1>
              <p className="text-white text-sm md:text-1xl mb-8">
                With roots over a century deep in the birthplace of the
                automobile industry, USA Underwriters has the knowledge and
                expertise to help tailor a policy to suit your lifestyle, your
                budget, and your priorities.
              </p>
              <div className="flex flex-row md:flex-row md:space-x-4 ">
                <button className="inline-flex justify-center sm:w-[180px] w-full px-4 py-3 rounded-full text-sm font-medium bg-white text-black border border-transparent shadow-sm">
                  Report a Claim
                </button>
                <button className="md:text-1xl text-sm bg-transparent text-white py-2 px-4 flex flex-row items-center justify-center gap-2 ">
                  <p>Learn More</p> <Image src={ar} alt="Icon" />
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src={man}
                alt="Banner_image"
                width={300}
                height={200}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="px-3">
        <div className="w-full bg-red-600 rounded-lg">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
            <div className="p-8">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                GET AFFORDABLE, SAME-DAY COVERAGE IN NO TIME.
              </h1>
              <p className="text-white text-sm md:text-1xl mb-8">
                With roots over a century deep in the birthplace of the
                automobile industry, USA Underwriters has the knowledge and
                expertise to help tailor a policy to suit your lifestyle, your
                budget, and your priorities.
              </p>
              <div className="flex flex-row md:flex-row md:space-x-4 ">
                <button className="inline-flex justify-center sm:w-[180px] w-full px-4 py-3 rounded-full text-sm font-medium bg-white text-black border border-transparent shadow-sm">
                  Report a Claim
                </button>
                <button className="md:text-1xl text-sm bg-transparent text-white py-2 px-4 flex flex-row items-center justify-center gap-2 ">
                  <p>Learn More</p> <Image src={ar} alt="Icon" />
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src={man}
                alt="Banner_image"
                width={300}
                height={200}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="px-3">
        <div className="w-full bg-red-600 rounded-lg">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
            <div className="p-8">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                GET AFFORDABLE, SAME-DAY COVERAGE IN NO TIME.
              </h1>
              <p className="text-white text-sm md:text-1xl mb-8">
                With roots over a century deep in the birthplace of the
                automobile industry, USA Underwriters has the knowledge and
                expertise to help tailor a policy to suit your lifestyle, your
                budget, and your priorities.
              </p>
              <div className="flex flex-row md:flex-row md:space-x-4 ">
                <button className="inline-flex justify-center sm:w-[180px] w-full px-4 py-3 rounded-full text-sm font-medium bg-white text-black border border-transparent shadow-sm">
                  Report a Claim
                </button>
                <button className="md:text-1xl text-sm bg-transparent text-white py-2 px-4 flex flex-row items-center justify-center gap-2 ">
                  <p>Learn More</p> <Image src={ar} alt="Icon" />
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src={man}
                alt="Banner_image"
                width={300}
                height={200}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
