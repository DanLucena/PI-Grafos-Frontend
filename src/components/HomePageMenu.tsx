import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { MobileMenu } from "./MobileMenu";
import { Link, animateScroll as scroll } from 'react-scroll';

interface IProps {
  openModal: () => void;
}

const HomePageMenu = ({ openModal }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu(): void {
    setIsOpen(false);
  }

  return (
    <>
      <MobileMenu
        isOpen={isOpen}
        closeMenu={closeMenu}
        openRegisterModal={openModal}
      />
      <div className="mb-24 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          <span className="text-lime-500">Tra</span>veller
        </h1>
        <CgMenu
          size="1.8rem"
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        />
        <ul className="hidden md:flex">
          <li className="cursor-pointer font-semibold"><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></li>
          <li className="ml-7 cursor-pointer font-semibold"><Link to="services" spy={true} smooth={true} offset={50} duration={500}>Services</Link></li>
          <li className="ml-7 cursor-pointer font-semibold"><Link to="pricing" spy={true} smooth={true} offset={50} duration={500}>Pricing</Link></li>
          <li className="ml-7 cursor-pointer font-semibold"><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link></li>
        </ul>
        <button
          onClick={() => {
            openModal();
          }}
          className="hidden border-2 border-lime-500 px-2 py-2 text-lime-500 transition duration-150 ease-in-out hover:bg-lime-500 hover:text-white md:block xl:hidden"
        >
          Already a customer
        </button>
      </div>
    </>
  );
};

export { HomePageMenu };
