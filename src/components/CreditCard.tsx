import React from "react";
import Image from "next/image";
import chipImage from "../../public/Chip_Card.svg";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { SiVisa } from "react-icons/si";

const CreditCard = () => {
  return (
    <>
      <div className="absolute -left-40 bottom-48 z-10 h-[19rem] w-[33rem] rotate-[68deg] rounded-[3rem] border-4 border-white p-8 backdrop-blur">
        <div className="">
          <p className="text-xl text-white">Balance</p>
          <p className="text-xl text-white">$5,756</p>
        </div>
        <div className="flex">
          <div className="ml-auto">
            <Image className="-rotate-[67.5deg]" src={chipImage} alt="" />
          </div>
        </div>
        <div className="flex items-center">
          <VscCircleLargeFilled color="#fff" />
          <VscCircleLargeFilled color="#fff" />
          <VscCircleLargeFilled color="#fff" />
          <VscCircleLargeFilled color="#fff" className="mr-3" />
          <VscCircleLargeFilled color="#fff" />
          <VscCircleLargeFilled color="#fff" />
          <VscCircleLargeFilled color="#fff" />
          <VscCircleLargeFilled color="#fff" className="mr-3" />
          <VscCircleLargeFilled color="#fff" />
          <VscCircleLargeFilled color="#fff" />
          <VscCircleLargeFilled color="#fff" />
          <VscCircleLargeFilled color="#fff" className="mr-3" />
          <span className="font-medium text-white">3546</span>
        </div>
        <div className="flex">
          <div className="ml-auto">
            <SiVisa size="5.5rem" color="#fff" />
          </div>
        </div>
      </div>
    </>
  );
};

export { CreditCard };
