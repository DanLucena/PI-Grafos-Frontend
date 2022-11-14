import { useRouter } from "next/router";
import {
  AiOutlinePoweroff,
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { BsGear } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import React from "react";

const SideBarMenu = () => {
  const router = useRouter();

  function logoutHandler() {
    localStorage.removeItem("userToken");
    router.push("/");
  }

  return (
    <div className="flex h-full w-16 flex-col items-center bg-neutral-200 py-5">
      <ul className="flex h-full w-full flex-col items-center px-2">
        <li className="mb-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 bg-lime-500">
            <h1 className="text-2xl">
              T<span className="text-white">r</span>
            </h1>
          </div>
        </li>
        <li className="mb-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg hover:bg-neutral-300">
          <AiOutlineHome size="1.5rem" className="cursor-pointer" />
        </li>
        <li className="mb-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg hover:bg-neutral-300">
          <BiBell size="1.5rem" className="cursor-pointer" />
        </li>
        <li className="mb-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg hover:bg-neutral-300">
          <AiOutlineDashboard size="1.5rem" className="cursor-pointer" />
        </li>
        <li className="mb-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg hover:bg-neutral-300">
          <TbReportAnalytics size="1.5rem" className="cursor-pointer" />
        </li>
        <li className="mb-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg hover:bg-neutral-300">
          <AiOutlineUserAdd size="1.4rem" className="cursor-pointer" />
        </li>
        <li className="mb-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg hover:bg-neutral-300">
          <BsGear size="1.4rem" className="cursor-pointer" />
        </li>
        <li className="mt-auto flex h-12 w-full cursor-pointer items-center justify-center rounded-lg hover:bg-neutral-300">
          <AiOutlinePoweroff
            size="1.5rem"
            className="cursor-pointer"
            onClick={() => logoutHandler()}
          />
        </li>
      </ul>
    </div>
  );
};

export { SideBarMenu };
