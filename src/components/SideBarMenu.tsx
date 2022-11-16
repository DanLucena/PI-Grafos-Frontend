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
import ReactTooltip from "react-tooltip";

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
        <li data-tip data-for='notify' className="mb-2 flex h-12 w-full items-center justify-center rounded-lg">
          <BiBell size="1.5rem" color="#aaa"/>
        </li>
        <ReactTooltip id='notify' effect='solid'>
          <span>Coming soon</span>
        </ReactTooltip>
        <li data-tip data-for='dashboard' className="mb-2 flex h-12 w-full items-center justify-center rounded-lg">
          <AiOutlineDashboard size="1.5rem" color="#aaa"/>
        </li>
        <ReactTooltip id='dashboard' effect='solid'>
          <span>Coming soon</span>
        </ReactTooltip>
        <li data-tip data-for='reports' className="mb-2 flex h-12 w-full items-center justify-center rounded-lg">
          <TbReportAnalytics size="1.5rem" color="#aaa"/>
        </li>
        <ReactTooltip id='reports' effect='solid'>
          <span>Coming soon</span>
        </ReactTooltip>
        <li data-tip data-for='users' className="mb-2 flex h-12 w-full items-center justify-center rounded-lg">
          <AiOutlineUserAdd size="1.4rem" color="#aaa"/>
        </li>
        <ReactTooltip id='users' effect='solid'>
          <span>Coming soon</span>
        </ReactTooltip>
        <li data-tip data-for='options' className="mb-2 flex h-12 w-full items-center justify-center rounded-lg">
          <BsGear size="1.4rem" color="#aaa"/>
        </li>
        <ReactTooltip id='options' effect='solid'>
          <span>Coming soon</span>
        </ReactTooltip>
        <li className="mt-auto cursor-pointer flex h-12 w-full items-center justify-center rounded-lg hover:bg-neutral-300" onClick={() => logoutHandler()}>
          <AiOutlinePoweroff
            size="1.5rem"
            className="cursor-pointer"
          />
        </li>
      </ul>
    </div>
  );
};

export { SideBarMenu };
