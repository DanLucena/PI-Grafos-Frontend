import React from "react";
import Image from "next/image";

interface IPartnersBubbles {
  name: string;
  logo: string;
}

const PartnersBubbles = ({ name, logo }: IPartnersBubbles) => {
  return (
    <>
      <div className="flex h-24 w-24 items-center justify-center rounded-full border-2">
        <Image src={logo} alt={name} width={50} height={50} />
      </div>
    </>
  );
};

export { PartnersBubbles };
