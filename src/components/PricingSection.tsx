import React, { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const PricingSection = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex flex-col">
        <h1 className="mx-auto mt-14 text-center text-2xl font-medium text-neutral-800 md:text-3xl lg:text-4xl">
          Our pricing is simple with <br />
          no hidden fess
        </h1>
        <span className="mx-auto mt-6 text-neutral-500">
          Choose your payment period
        </span>
        <div className="mx-auto mt-6 flex text-neutral-500">
          <span className="mr-3 text-sm font-medium text-gray-900 dark:text-neutral-800">
            Monthly
          </span>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              id="default-toggle"
              onChange={() => setToggle(!toggle)}
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-lime-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-neutral-800"></div>
          </label>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-neutral-800">
            Yearly
          </span>
        </div>
        <div className="flex flex-col justify-between px-6 lg:flex-row lg:px-16">
          <div className="mt-8 mr-8 flex h-[23rem] w-full max-w-4xl flex-col rounded-md bg-neutral-800 px-8 py-10 lg:mt-12 lg:w-6/12">
            <div className="flex">
              <div>
                <div className="inline-block w-fit rounded border-2 px-4">
                  <p className="text-xl text-white">Simple</p>
                </div>
                <h1 className="my-8 max-w-sm text-6xl font-extrabold text-white md:text-7xl">
                  {toggle ? "$200" : "$20"}
                </h1>
                <p className="text-lg font-normal text-white">
                  Per member, charged {toggle ? "yearly" : "monthly"}
                </p>
              </div>
              <div className="mx-10 hidden h-full w-px bg-white md:block"></div>
              <div className="my-auto flex flex-col">
                <div className="mb-3 flex">
                  <BsFillPatchCheckFill size="1.5rem" color="#fff" />
                  <span className="ml-5 text-[12px] text-white xl:text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
                <div className="mb-3 flex">
                  <BsFillPatchCheckFill size="1.5rem" color="#fff" />
                  <span className="ml-5 text-[12px] text-white xl:text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
                <div className="mb-3 flex">
                  <BsFillPatchCheckFill size="1.5rem" color="#fff" />
                  <span className="ml-5 text-[12px] text-white xl:text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
                <div className="flex">
                  <BsFillPatchCheckFill size="1.5rem" color="#fff" />
                  <span className="ml-5 text-[12px] text-white xl:text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
            <button className="mt-auto h-12 w-full rounded bg-white">
              start now
            </button>
          </div>
          <div className="mt-8 flex h-[23rem] w-full max-w-4xl flex-col rounded-md bg-lime-500 px-8 py-10 lg:mt-12 lg:w-6/12">
            <div className="flex">
              <div>
                <div className="inline-block w-fit rounded border-2 px-4">
                  <p className="text-xl text-white">Enterprise</p>
                </div>
                <h1 className="my-8 max-w-sm text-6xl font-extrabold text-white md:text-7xl">
                  {toggle ? "$600" : "$60"}
                </h1>
                <p className="text-lg font-normal text-white">
                  Per member, charged {toggle ? "yearly" : "monthly"}
                </p>
              </div>
              <div className="mx-10 hidden h-full w-px bg-white md:block"></div>
              <div className="my-auto flex flex-col">
                <div className="mb-3 flex">
                  <BsFillPatchCheckFill size="1.5rem" color="#fff" />
                  <span className="ml-5 text-[12px] text-white xl:text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
                <div className="mb-3 flex">
                  <BsFillPatchCheckFill size="1.5rem" color="#fff" />
                  <span className="ml-5 text-[12px] text-white xl:text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
                <div className="mb-3 flex">
                  <BsFillPatchCheckFill size="1.5rem" color="#fff" />
                  <span className="ml-5 text-[12px] text-white xl:text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
                <div className="flex">
                  <BsFillPatchCheckFill size="1.5rem" color="#fff" />
                  <span className="text- ml-5 text-[12px] text-white xl:text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
            <button className="mt-auto h-12 w-full rounded bg-white">
              start now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { PricingSection };
