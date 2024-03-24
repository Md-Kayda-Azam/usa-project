'use client';

import React from 'react';
import MobileFooter from './MobileFooter';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#1f2a37]">
        <div className="max-w-[1440px] m-auto p-0">
          <div className="hidden sm:block  text-white px-14 py-10">
            <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-2">
              <div className="col-span-1 gap-3 grid">
                <span>USA Underwriters</span>
                <div className="grid gap-1">
                  <p className="text-xs text-gray-300">NAIC #: 30457</p>
                  <p className="text-xs text-gray-300">P.O. Box 2426</p>
                  <p className="text-xs text-gray-300">
                    Rancho Cucamonga, CA, 91729
                  </p>
                </div>
              </div>
              <div className="col-span-1 gap-3 grid">
                <span>Underwriting Support</span>
                <div className="grid gap-1">
                  <p className="text-xs text-gray-300 flex items-center justify-start gap-1 ">
                    <svg
                      width="15"
                      height="21"
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.5 16.5C10.8137 16.5 13.5 13.8137 13.5 10.5C13.5 7.18629 10.8137 4.5 7.5 4.5C4.18629 4.5 1.5 7.18629 1.5 10.5C1.5 13.8137 4.18629 16.5 7.5 16.5ZM8.25 6.75C8.25 6.33579 7.91421 6 7.5 6C7.08579 6 6.75 6.33579 6.75 6.75V10.5C6.75 10.9142 7.08579 11.25 7.5 11.25H10.5C10.9142 11.25 11.25 10.9142 11.25 10.5C11.25 10.0858 10.9142 9.75 10.5 9.75H8.25V6.75Z"
                        fill="white"
                      />
                      <path fill="white" />
                    </svg>
                    <span>Monday - Friday, 9:00 am - 6:00 pm ET</span>
                  </p>
                  <p className="text-xs text-gray-300 flex items-center justify-start gap-1 ">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_30_2412)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.9375 2.8125C0.9375 1.77697 1.77697 0.9375 2.8125 0.9375H3.66977C4.2075 0.9375 4.67623 1.30347 4.80665 1.82515L5.49777 4.58964C5.61213 5.04706 5.44121 5.52847 5.06401 5.81136L4.2555 6.41775C4.17154 6.48072 4.15329 6.57292 4.17688 6.6373C4.88657 8.57468 6.42532 10.1134 8.3627 10.8231C8.42708 10.8467 8.51928 10.8285 8.58225 10.7445L9.18864 9.93599C9.47153 9.55879 9.95294 9.38787 10.4104 9.50223L13.1748 10.1933C13.6965 10.3238 14.0625 10.7925 14.0625 11.3302V12.1875C14.0625 13.223 13.223 14.0625 12.1875 14.0625H10.7812C5.3447 14.0625 0.9375 9.6553 0.9375 4.21875V2.8125Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_30_2412">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+12485412800">+1 (248) 541-2800</a>
                  </p>
                  <p className="text-xs text-gray-300 flex items-center justify-start gap-1 ">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 3C1.42157 3 0.75 3.67157 0.75 4.5V5.37111L7.08074 8.53647C7.34467 8.66844 7.65533 8.66844 7.91926 8.53647L14.25 5.37111V4.5C14.25 3.67157 13.5784 3 12.75 3H2.25Z"
                        fill="white"
                      />
                      <path
                        d="M14.25 6.62889L8.42238 9.5427C7.84173 9.83303 7.15827 9.83303 6.57762 9.5427L0.75 6.62889V10.5C0.75 11.3284 1.42157 12 2.25 12H12.75C13.5784 12 14.25 11.3284 14.25 10.5V6.62889Z"
                        fill="white"
                      />
                    </svg>
                    <a href="mailto:customerservice@usaunderwriters.com">
                      customerservice@usaunderwriters.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-span-1 ">
                <span>Policy Suspensions And Coverage Approvals</span>
                <p className="text-xs text-gray-300 flex items-center justify-start gap-1 mt-4 ">
                  <svg
                    width="15"
                    height="21"
                    viewBox="0 0 15 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.5 16.5C10.8137 16.5 13.5 13.8137 13.5 10.5C13.5 7.18629 10.8137 4.5 7.5 4.5C4.18629 4.5 1.5 7.18629 1.5 10.5C1.5 13.8137 4.18629 16.5 7.5 16.5ZM8.25 6.75C8.25 6.33579 7.91421 6 7.5 6C7.08579 6 6.75 6.33579 6.75 6.75V10.5C6.75 10.9142 7.08579 11.25 7.5 11.25H10.5C10.9142 11.25 11.25 10.9142 11.25 10.5C11.25 10.0858 10.9142 9.75 10.5 9.75H8.25V6.75Z"
                      fill="white"
                    />
                    <path fill="white" />
                  </svg>
                  <span>Monday - Friday, 9:00 am - 6:00 pm ET</span>
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-2 mt-10">
              <div className="col-span-1">
                <span>Customer Service & Support</span>
                <div className="grid gap-1">
                  <p className="text-xs text-gray-300 flex items-center justify-start gap-1 mt-4 ">
                    <svg
                      width="15"
                      height="21"
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.5 16.5C10.8137 16.5 13.5 13.8137 13.5 10.5C13.5 7.18629 10.8137 4.5 7.5 4.5C4.18629 4.5 1.5 7.18629 1.5 10.5C1.5 13.8137 4.18629 16.5 7.5 16.5ZM8.25 6.75C8.25 6.33579 7.91421 6 7.5 6C7.08579 6 6.75 6.33579 6.75 6.75V10.5C6.75 10.9142 7.08579 11.25 7.5 11.25H10.5C10.9142 11.25 11.25 10.9142 11.25 10.5C11.25 10.0858 10.9142 9.75 10.5 9.75H8.25V6.75Z"
                        fill="white"
                      />
                      <path fill="white" />
                    </svg>
                    <span>Monday - Friday, 9:00 am - 6:00 pm ET</span>
                  </p>
                  <p className="text-xs text-gray-300 flex items-center justify-start gap-1 ">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_30_2412)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.9375 2.8125C0.9375 1.77697 1.77697 0.9375 2.8125 0.9375H3.66977C4.2075 0.9375 4.67623 1.30347 4.80665 1.82515L5.49777 4.58964C5.61213 5.04706 5.44121 5.52847 5.06401 5.81136L4.2555 6.41775C4.17154 6.48072 4.15329 6.57292 4.17688 6.6373C4.88657 8.57468 6.42532 10.1134 8.3627 10.8231C8.42708 10.8467 8.51928 10.8285 8.58225 10.7445L9.18864 9.93599C9.47153 9.55879 9.95294 9.38787 10.4104 9.50223L13.1748 10.1933C13.6965 10.3238 14.0625 10.7925 14.0625 11.3302V12.1875C14.0625 13.223 13.223 14.0625 12.1875 14.0625H10.7812C5.3447 14.0625 0.9375 9.6553 0.9375 4.21875V2.8125Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_30_2412">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+12485412800">+1 (248) 541-2800</a>
                  </p>

                  <p className="text-xs text-gray-300 flex items-center justify-start gap-1 ">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 3C1.42157 3 0.75 3.67157 0.75 4.5V5.37111L7.08074 8.53647C7.34467 8.66844 7.65533 8.66844 7.91926 8.53647L14.25 5.37111V4.5C14.25 3.67157 13.5784 3 12.75 3H2.25Z"
                        fill="white"
                      />
                      <path
                        d="M14.25 6.62889L8.42238 9.5427C7.84173 9.83303 7.15827 9.83303 6.57762 9.5427L0.75 6.62889V10.5C0.75 11.3284 1.42157 12 2.25 12H12.75C13.5784 12 14.25 11.3284 14.25 10.5V6.62889Z"
                        fill="white"
                      />
                    </svg>
                    <a href="mailto:customerservice@usaunderwriters.com">
                      customerservice@usaunderwriters.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-span-1 grid gap-3">
                <span>Claims Administration</span>
                <div className="grid gap-1">
                  <p className="text-xs text-gray-300 flex items-center justify-start gap-1 ">
                    <svg
                      width="15"
                      height="21"
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.5 16.5C10.8137 16.5 13.5 13.8137 13.5 10.5C13.5 7.18629 10.8137 4.5 7.5 4.5C4.18629 4.5 1.5 7.18629 1.5 10.5C1.5 13.8137 4.18629 16.5 7.5 16.5ZM8.25 6.75C8.25 6.33579 7.91421 6 7.5 6C7.08579 6 6.75 6.33579 6.75 6.75V10.5C6.75 10.9142 7.08579 11.25 7.5 11.25H10.5C10.9142 11.25 11.25 10.9142 11.25 10.5C11.25 10.0858 10.9142 9.75 10.5 9.75H8.25V6.75Z"
                        fill="white"
                      />
                      <path fill="white" />
                    </svg>
                    <span>Monday - Friday, 9:00 am - 6:00 pm ET</span>
                  </p>
                  <p className="text-xs text-gray-300 flex items-center justify-start gap-1 ">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_30_2412)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.9375 2.8125C0.9375 1.77697 1.77697 0.9375 2.8125 0.9375H3.66977C4.2075 0.9375 4.67623 1.30347 4.80665 1.82515L5.49777 4.58964C5.61213 5.04706 5.44121 5.52847 5.06401 5.81136L4.2555 6.41775C4.17154 6.48072 4.15329 6.57292 4.17688 6.6373C4.88657 8.57468 6.42532 10.1134 8.3627 10.8231C8.42708 10.8467 8.51928 10.8285 8.58225 10.7445L9.18864 9.93599C9.47153 9.55879 9.95294 9.38787 10.4104 9.50223L13.1748 10.1933C13.6965 10.3238 14.0625 10.7925 14.0625 11.3302V12.1875C14.0625 13.223 13.223 14.0625 12.1875 14.0625H10.7812C5.3447 14.0625 0.9375 9.6553 0.9375 4.21875V2.8125Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_30_2412">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+12485412800">+1 (855) 230-1656</a>
                  </p>
                  <p className="text-xs text-gray-300 flex items-center justify-start gap-1 ">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.26756 14.1997L7.26966 14.2007C7.4175 14.265 7.5 14.25 7.5 14.25C7.5 14.25 7.5825 14.265 7.73093 14.2004L7.73244 14.1997L7.73674 14.1978L7.75036 14.1915C7.76163 14.1863 7.77725 14.1789 7.79693 14.1694C7.83628 14.1505 7.89191 14.1229 7.9615 14.0866C8.10058 14.0141 8.29591 13.9064 8.52874 13.7621C8.99342 13.4741 9.61302 13.037 10.2341 12.4383C11.4766 11.2407 12.75 9.36936 12.75 6.75C12.75 3.85051 10.3995 1.5 7.5 1.5C4.60051 1.5 2.25 3.85051 2.25 6.75C2.25 9.36936 3.52337 11.2407 4.76589 12.4383C5.38698 13.037 6.00658 13.4741 6.47126 13.7621C6.70409 13.9064 6.89942 14.0141 7.0385 14.0866C7.10809 14.1229 7.16372 14.1505 7.20307 14.1694C7.22275 14.1789 7.23837 14.1863 7.24964 14.1915L7.26326 14.1978L7.26756 14.1997ZM7.5 8.4375C8.43198 8.4375 9.1875 7.68198 9.1875 6.75C9.1875 5.81802 8.43198 5.0625 7.5 5.0625C6.56802 5.0625 5.8125 5.81802 5.8125 6.75C5.8125 7.68198 6.56802 8.4375 7.5 8.4375Z"
                        fill="white"
                      />
                    </svg>
                    <span>P.O. Box 647 | Battle Creek, MI 49016</span>
                  </p>
                </div>
              </div>
              <div className="col-span-1 grid gap-3">
                <span>
                  PIP Qualification Question and Submissions for Coverage
                </span>
                <div className="grid gap-1">
                  <p className="text-xs text-gray-300 flex items-center justify-start gap-1 ">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_30_2412)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.9375 2.8125C0.9375 1.77697 1.77697 0.9375 2.8125 0.9375H3.66977C4.2075 0.9375 4.67623 1.30347 4.80665 1.82515L5.49777 4.58964C5.61213 5.04706 5.44121 5.52847 5.06401 5.81136L4.2555 6.41775C4.17154 6.48072 4.15329 6.57292 4.17688 6.6373C4.88657 8.57468 6.42532 10.1134 8.3627 10.8231C8.42708 10.8467 8.51928 10.8285 8.58225 10.7445L9.18864 9.93599C9.47153 9.55879 9.95294 9.38787 10.4104 9.50223L13.1748 10.1933C13.6965 10.3238 14.0625 10.7925 14.0625 11.3302V12.1875C14.0625 13.223 13.223 14.0625 12.1875 14.0625H10.7812C5.3447 14.0625 0.9375 9.6553 0.9375 4.21875V2.8125Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_30_2412">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+12485412800">+1 (855) 230-1656</a>
                  </p>
                  <p className="text-xs text-gray-300 flex items-center justify-start gap-1 ">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 3C1.42157 3 0.75 3.67157 0.75 4.5V5.37111L7.08074 8.53647C7.34467 8.66844 7.65533 8.66844 7.91926 8.53647L14.25 5.37111V4.5C14.25 3.67157 13.5784 3 12.75 3H2.25Z"
                        fill="white"
                      />
                      <path
                        d="M14.25 6.62889L8.42238 9.5427C7.84173 9.83303 7.15827 9.83303 6.57762 9.5427L0.75 6.62889V10.5C0.75 11.3284 1.42157 12 2.25 12H12.75C13.5784 12 14.25 11.3284 14.25 10.5V6.62889Z"
                        fill="white"
                      />
                    </svg>
                    <a href="mailto:policybinding-@usaunderwriters.com">
                      policybinding-@usaunderwriters.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*Mobile Footer*/}
          <MobileFooter />
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
