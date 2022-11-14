import React from "react";

const ContactArea = () => {
  return (
    <>
      <h1 className="mx-auto mt-24 text-center text-2xl font-medium text-neutral-800 md:text-3xl lg:text-4xl">
        Do we get your attention?
        <br /> Contact us !!
      </h1>
      <div className="mx-auto mt-16 flex h-[30rem] w-11/12 flex-col rounded-lg border-2 p-6 lg:w-10/12 2xl:w-6/12">
        <div className="flex w-full gap-5">
          <input
            type="text"
            placeholder="Your Full Name"
            className="h-12 w-6/12 rounded border-2 bg-gray-50 pl-4"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="h-12 w-6/12 rounded border-2 bg-gray-50 pl-4"
          />
        </div>
        <div className="mt-3 flex w-full gap-5">
          <input
            type="text"
            placeholder="Your Phone Number"
            className="h-12 w-6/12 rounded border-2 bg-gray-50 pl-4"
          />
          <select
            id="countries"
            className="block w-6/12 rounded border-2 bg-gray-50 p-2.5 text-sm text-gray-900"
          >
            <option>Choose a section</option>
            <option value="Sales">Sales</option>
            <option value="Engineering">Engineering</option>
            <option value="Administrative">Administrative</option>
            <option value="CustomerSuccess">Customer Success</option>
          </select>
        </div>
        <div className="mt-3">
          <textarea
            name=""
            id=""
            className="h-64 w-full resize-none rounded border-2 bg-gray-50 p-3"
            placeholder="Tell us what you want to talk about."
          ></textarea>
        </div>
        <button className="ml-auto mt-2 rounded bg-lime-500 px-8 py-2 text-white">
          Submit
        </button>
      </div>
    </>
  );
};

export { ContactArea };
