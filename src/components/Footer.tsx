import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="mt-24 flex h-52 w-full flex-col-reverse items-center bg-neutral-800 px-3 py-3 md:flex-row md:px-24 md:py-0">
        <div className="">
          <ul className="flex flex-row gap-5 text-white">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Pricing</li>
          </ul>
        </div>
        <div className="flex-1">
          <div>
            <h1 className="text-center text-4xl text-white">
              <span className="text-lime-500">Tra</span>veller
            </h1>
            <p className="text-center text-neutral-500">
              Be sure to look at our&nbsp;
              <span className="cursor-pointer">
                Terms of Use
                <br /> and Privacy Policy
              </span>
            </p>
          </div>
        </div>
        <div className="mb-3 flex gap-4 md:mb-0">
          <AiFillFacebook
            color="#fff"
            size="1.5rem"
            className="cursor-pointer"
          />
          <AiFillInstagram
            color="#fff"
            size="1.5rem"
            className="cursor-pointer"
          />
          <AiFillTwitterSquare
            color="#fff"
            size="1.5rem"
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export { Footer };
