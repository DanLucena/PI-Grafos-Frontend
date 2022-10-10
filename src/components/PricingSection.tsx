import React from "react";

const PricingSection = () => {
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
        <div className="mx-auto mt-6 text-neutral-500">sdasd</div>
        <div className="flex flex-col justify-between px-6 lg:flex-row lg:px-10">
          <div className="mt-8 mr-5 h-72 w-full max-w-4xl rounded-md bg-neutral-800 px-8 py-10 lg:mt-12 lg:w-6/12">
            <div className="inline-block rounded border-2 px-4">
              <p className="text-xl text-white">Simple</p>
            </div>
            <h1 className="max-w-sm text-7xl font-extrabold text-white">$20</h1>
            <p className="text-white">per member charged monthly</p>
          </div>
          <div className="mt-8 h-72 w-full max-w-4xl rounded-md bg-lime-500 px-8 py-10 lg:mt-12 lg:w-6/12">
            <div className="inline-block rounded border-2 px-4">
              <p className="text-xl text-white">Enterprise</p>
            </div>
            <h1 className="max-w-sm text-7xl font-extrabold text-white">$60</h1>
            <p className="text-white">per member charged monthly</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { PricingSection };
