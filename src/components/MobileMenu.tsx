import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";

interface IProps {
  isOpen: boolean;
  closeMenu: () => void;
  openRegisterModal: () => void;
}

const MobileMenu = ({ isOpen, closeMenu, openRegisterModal }: IProps) => {
  function openRegister(): void {
    closeMenu();
    openRegisterModal();
  }

  return (
    isOpen && (
      <>
        <div className="absolute top-0 left-0 z-50 flex h-full w-full flex-col bg-lime-500 py-3">
          <GrFormClose
            size="1.8rem"
            className="ml-auto mr-5 mb-5 cursor-pointer md:hidden"
            onClick={() => {
              closeMenu();
            }}
          />
          <ul className="flex flex-col">
            <li className="flex h-16 cursor-pointer items-center font-semibold text-white transition duration-150 ease-in-out hover:bg-white hover:text-lime-500">
              <span className="ml-5">About Us</span>
            </li>
            <li className="flex h-16 cursor-pointer items-center font-semibold text-white transition duration-150 ease-in-out hover:bg-white hover:text-lime-500">
              <span className="ml-5">Services</span>
            </li>
            <li className="flex h-16 cursor-pointer items-center font-semibold text-white transition duration-150 ease-in-out hover:bg-white hover:text-lime-500">
              <span className="ml-5">Pricing</span>
            </li>
            <li className="flex h-16 cursor-pointer items-center font-semibold text-white transition duration-150 ease-in-out hover:bg-white hover:text-lime-500">
              <span className="ml-5">Contact Us</span>
            </li>
          </ul>
          <button
            onClick={() => openRegister()}
            className="mx-5 mt-auto mb-5 border-2 border-white px-2 py-2 text-white transition duration-150 ease-in-out hover:bg-white hover:text-lime-500 md:block"
          >
            Already a customer
          </button>
        </div>
      </>
    )
  );
};

export { MobileMenu };
