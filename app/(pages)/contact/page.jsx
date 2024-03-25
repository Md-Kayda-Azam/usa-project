'use client';
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Image from 'next/image';
import React from 'react';
import phone from '@/app/assets/icon/phone.png';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <Breadcrumbs title="Contact Us" name="About" />
      <div className="md:flex block gap-5 mb-16 justify-between  md:py-6 bg-white">
        <div className="flex-1">
          <div className="md:border-t-8 rounded-lg md:border shadow-md md:border-t-red-700 space-y-6 bg-white border md:p-8 p-4 pt-0">
            <div className="hidden md:block md:my-8 ">
              <h4 className="text-3xl font-semibold text-[#111928]">
                Send Message
              </h4>
            </div>
            <form className="w-full">
              <div className="md:mt-10 grid grid-cols-1 lg:grid-cols-2 mb-4 gap-8">
                <div className="flex flex-col">
                  <label
                    for="first-name"
                    className="block text-sm font-medium leading-6 text-[#6b7280]"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      placeholder="John"
                      className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>{' '}
                <div className="flex flex-col">
                  <label
                    for="email"
                    className="block text-sm font-medium leading-6 text-[#6b7280]"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="tester@neutrix.com"
                      className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>{' '}
                <div className="flex flex-col">
                  <label
                    for="number"
                    className="block text-sm font-medium leading-6 text-[#6b7280]"
                  >
                    Mobile Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="number"
                      id="number"
                      placeholder="+26134522213649"
                      className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>{' '}
                <div className="flex flex-col">
                  <label
                    for="first-name"
                    className="block text-sm font-medium leading-6 text-[#6b7280]"
                  >
                    policy Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="number"
                      id="number"
                      placeholder="+56344662"
                      className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>{' '}
                <div className="flex flex-col">
                  <label
                    for="message"
                    className="block text-sm font-medium leading-6 text-[#6b7280]"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows={5}
                      cols={50}
                      type="message"
                      name="message"
                      id="message"
                      placeholder="message"
                      className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-5">
                <button
                  type="submit"
                  className="inline-flex justify-center sm:w-[300px] w-full px-4 py-4 rounded-full text-sm font-medium text-white bg-red-600 border border-transparent  shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        {/**Card Items */}
        <div className="md:my-0 my-10">
          <div className="max-w-full mx-auto ">
            <div className="flex flex-col md:w-auto w-full gap-5">
              <div className="w-full border shadow-sm bg-white rounded-md  p-4">
                <div className="mb-4 p-5 border relative border-red-100 bg-red-600 rounded-full flex justify-center items-center w-14 h-14">
                  <Image
                    src={phone}
                    width={24}
                    height={24}
                    alt="Group"
                    className="absolute m-auto"
                  />
                </div>
                <h4 className="text-lg font-semibold">
                  General In quiries & C S
                </h4>
                <div className="grid gap-2">
                  <p className="text-xs text-gray-900 flex items-center justify-start gap-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a href="tel:+12485412800" className="text-sm font-medium">
                      +1 (248) 541-2800
                    </a>
                  </p>
                  <p className="text-xs text-gray-900 flex items-center justify-start gap-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                      <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                    </svg>

                    <a
                      href="mailto:customerservice@usaunderwriters.com"
                      className="text-sm font-medium"
                    >
                      customerservice@usaunderwriters.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="w-full border shadow-sm bg-white rounded-md  p-4">
                <div className="mb-4 p-5 border relative border-red-100 bg-gray-200 rounded-full flex justify-center items-center w-14 h-14">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="24"
                      transform="translate(0 0.5)"
                      fill="#E5E7EB"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.50183 6.5H11.2477L11.25 6.5H14.6299C16.4915 6.50268 17.9999 8.01269 17.9999 9.875V19.25C19.6567 19.25 20.9999 17.9068 20.9999 16.25V6.60821C20.9999 5.10282 19.8751 3.7966 18.3358 3.66884C18.1121 3.65027 17.8879 3.63321 17.6632 3.61767C17.1633 2.65647 16.1583 2 15 2H13.5C12.3417 2 11.3367 2.65647 10.8368 3.61765C10.6121 3.63319 10.3878 3.65026 10.1639 3.66884C8.66165 3.79353 7.55421 5.04069 7.50183 6.5ZM13.5 3.5C12.6716 3.5 12 4.17157 12 5H16.5C16.5 4.17157 15.8284 3.5 15 3.5H13.5Z"
                      fill="#C81E1E"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 9.875C3 8.83947 3.83947 8 4.875 8H14.625C15.6605 8 16.5 8.83947 16.5 9.875V21.125C16.5 22.1605 15.6605 23 14.625 23H4.875C3.83947 23 3 22.1605 3 21.125V9.875ZM12.5857 14.4685C12.8444 14.1451 12.792 13.6731 12.4685 13.4143C12.1451 13.1556 11.6731 13.208 11.4143 13.5315L8.93781 16.6272L8.03033 15.7197C7.73744 15.4268 7.26256 15.4268 6.96967 15.7197C6.67678 16.0126 6.67678 16.4874 6.96967 16.7803L8.46967 18.2803C8.62052 18.4312 8.82847 18.5107 9.04148 18.4989C9.25448 18.4871 9.45238 18.3851 9.58565 18.2185L12.5857 14.4685Z"
                      fill="#C81E1E"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Clai m In quiries</h4>
                <div className="grid gap-2 ">
                  <p className="text-xs text-gray-900 flex items-center justify-start gap-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a href="tel:+12485412800" className="text-sm font-medium">
                      +1 (248) 541-2800
                    </a>
                  </p>
                  <p className="text-xs text-gray-900 flex items-center justify-start gap-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                      <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                    </svg>

                    <a
                      href="mailto:customerservice@usaunderwriters.com"
                      className="text-sm font-medium"
                    >
                      customerservice@usaunderwriters.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="w-full border shadow-sm bg-white rounded-md  p-4">
                <div className="mb-4 p-5 border relative border-red-100 bg-gray-200 rounded-full flex justify-center items-center w-14 h-14">
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 21C20.1569 21 21.5 19.6569 21.5 18V9.82622L14.6212 13.8481L18.1056 15.7243C18.4703 15.9207 18.6067 16.3755 18.4104 16.7402C18.214 17.1049 17.7591 17.2414 17.3944 17.045L11.7112 13.9848C11.2672 13.7457 10.7328 13.7457 10.2889 13.9848L4.60558 17.045C4.24087 17.2414 3.78603 17.1049 3.58965 16.7402C3.39327 16.3755 3.52972 15.9207 3.89442 15.7243L7.37878 13.8481L0.5 9.82621V18C0.5 19.6569 1.84315 21 3.5 21L18.5 21Z"
                      fill="#C81E1E"
                    />
                    <path
                      d="M0.5 8.08864V7.34391C0.5 6.24026 1.10597 5.22574 2.0777 4.7025L9.5777 0.664037C10.4656 0.185922 11.5344 0.185922 12.4223 0.664037L19.9223 4.7025C20.894 5.22574 21.5 6.24027 21.5 7.34391V8.08864L13.0742 13.0151L12.4223 12.6641C11.5344 12.186 10.4656 12.1859 9.5777 12.6641L8.92585 13.0151L0.5 8.08864Z"
                      fill="#C81E1E"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Mail In quiries</h4>
                <div className="grid gap-2 ">
                  <p className="text-xs text-gray-900 flex items-center justify-start gap-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a href="tel:+12485412800" className="text-sm font-medium">
                      +1 (248) 541-2800
                    </a>
                  </p>
                  <p className="text-xs text-gray-900 flex items-center justify-start gap-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a
                      href="mailto:customerservice@usaunderwriters.com"
                      className="text-sm font-medium"
                    >
                      P.O. Box 2426 Rancho Cucamonga, CA, 91729
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
