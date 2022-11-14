import React from "react";
import { PartnersBubbles } from "./PartnerBubbles";
import googleIcon from "../../public/logos/google-2015.svg";
import metaIcon from "../../public/logos/meta-1.svg";
import netflixIcon from "../../public/logos/netflix-3.svg";
import pinterestIcon from "../../public/logos/pinterest-5.svg";
import slackIcon from "../../public/logos/slack-2.svg";
import uberIcon from "../../public/logos/uber-2.svg";
import dribbbleIcon from "../../public/logos/dribbble-4.svg";
import figmaIcon from "../../public/logos/figma-1.svg";

interface IPartner {
  name: string;
  logo: string;
}

const Partners = () => {
  const partners: IPartner[] = [
    { name: "Google", logo: googleIcon },
    { name: "Meta", logo: metaIcon },
    { name: "Netflix", logo: netflixIcon },
    { name: "Pinterest", logo: pinterestIcon },
    { name: "Slack", logo: slackIcon },
    { name: "Uber", logo: uberIcon },
    { name: "Dribbble", logo: dribbbleIcon },
    { name: "Figma", logo: figmaIcon },
  ];

  return (
    <>
      <div className="mb-14">
        <h1 className="mx-auto mt-14 mb-14 text-center text-2xl font-medium text-neutral-800 md:text-3xl lg:text-3xl">
          Trusted by more than 10k users
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((item, index) => (
            <PartnersBubbles key={index} name={item.name} logo={item.logo} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Partners };
