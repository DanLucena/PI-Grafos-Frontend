import React from "react";
import { CgMenu } from "react-icons/cg";

const HomePageMenu = () => {
  return (
    <>
      <div className="mb-24 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          <span className="text-lime-500">Tra</span>veller
        </h1>
        <CgMenu size="1.8rem" className="cursor-pointer md:hidden" />
        <ul className="hidden md:flex">
          <li className="cursor-pointer font-semibold">About Us</li>
          <li className="ml-7 cursor-pointer font-semibold">Services</li>
          <li className="ml-7 cursor-pointer font-semibold">Pricing</li>
          <li className="ml-7 cursor-pointer font-semibold">Partners</li>
        </ul>
        <button className="hidden border-2 border-lime-500 px-2 py-2 text-lime-500 md:block xl:hidden">
          Already a customer
        </button>
      </div>
    </>
  );
};

export { HomePageMenu };
