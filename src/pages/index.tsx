import type { NextPage } from "next";
import { HomePageMenu } from "../components/HomePageMenu";
import { PricingSection } from "../components/PricingSection";
import { HomePageButton } from "../components/HomePageButton";
import { CreditCard } from "../components/CreditCard";
import { BackCreditCard } from "../components/BackCreditCard";
import { BsClockHistory } from "react-icons/bs";
import { RiCarLine } from "react-icons/ri";
import { Partners } from "../components/Partners";
import { ContactArea } from "../components/ContactArea";
import { Footer } from "../components/Footer";
import { LoginModal } from "../components/LoginModal";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  function openModal(): void {
    setIsModalOpen(true);
  }

  function closeModal(): void {
    setIsModalOpen(false);
  }

  function authCheck() {
    const userToken = localStorage.getItem("userToken");
    if (userToken) router.push("/profile");
  }

  useEffect(() => {
    authCheck();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="h-screen overflow-x-hidden">
        <LoginModal isOpen={isModalOpen} closeModal={closeModal} />
        <div className="flex h-5/6">
          <div className="py-8 px-8 md:px-16 xl:w-9/12">
            <HomePageMenu openModal={openModal} />
            <h1 className="w-full text-4xl font-medium lg:w-10/12 lg:text-5xl xl:text-6xl 2xl:text-7xl 2xl:leading-[6rem]">
              Make It Easy And Save Money With The Best Mobility
              <br /> Benefits Card
            </h1>
            <p className="mt-24 mb-12 w-full leading-[1.3rem] text-gray-500 md:mt-8 lg:w-9/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tortor mi, malesuada id tempus sed, euismod nec tortor.
              Suspendisse potenti. Maecenas tempor neque sed finibus congue.Sed
              tortor mi, malesuada id tempus sed, euismod nec tortor.
              Suspendisse potenti. Maecenas tempor neque sed finibus congue.
            </p>
            <button className="rounded bg-lime-500 px-10 py-3 font-medium text-white drop-shadow-lg">
              Get in touch
            </button>
          </div>
          <div className="relative hidden w-3/12 bg-lime-500 xl:block">
            <HomePageButton openModal={openModal} />
            <CreditCard />
            <BackCreditCard />
          </div>
        </div>
        <div className="flex h-2/6 w-full items-center bg-black pl-16 lg:px-24">
          <div className="text-white md:mr-16 md:w-8/12 lg:w-5/12 xl:w-3/12">
            <p className="text-4xl font-light">Why Use</p>
            <p className="text-4xl font-semibold">Traveller</p>
            <p className="mt-6 font-light text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tortor mi, malesuada id tempus sed, euismod nec tortor.
              Suspendisse potenti. Maecenas tempor neque sed finibus congue.Sed
              tortor mi, malesuada id tempus sed.
            </p>
          </div>
          <div className="flex w-8/12 justify-between">
            <div className="hidden w-10/12 text-white md:block lg:w-5/12 xl:w-3/12">
              <BsClockHistory size={"2.5rem"} />
              <p className="mt-4 mb-4 text-lg font-semibold">Time Saving</p>
              <p className="font-light text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tortor mi, malesuada id tempus sed, euismod nec tortor.
              </p>
            </div>
            <div className="hidden text-white lg:block lg:w-5/12 xl:w-3/12">
              <RiCarLine size={"2.5rem"} />
              <p className="mt-4 mb-4 text-lg font-semibold">All Transport</p>
              <p className="font-light text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tortor mi, malesuada id tempus sed, euismod nec tortor.
              </p>
            </div>
            <div className="hidden w-3/12 text-white xl:block">
              <BsClockHistory size={"2.5rem"} />
              <p className="mt-4 mb-4 text-lg font-semibold">Time Saving</p>
              <p className="font-light text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tortor mi, malesuada id tempus sed, euismod nec tortor.
              </p>
            </div>
          </div>
        </div>
        <Partners />
        <div className="mt-8 justify-center text-center lg:mt-10">
          <h1 className="text-2xl font-medium text-neutral-800 md:text-3xl lg:text-4xl">
            Features that you get only
            <br /> in <span className="text-lime-500">Tra</span>veller
          </h1>
          <p className="mx-auto mt-8 max-w-md px-3 text-neutral-500 md:p-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor
            mi, malesuada id tempus sed, euismod nec tortor.
          </p>
        </div>
        <div className="mx-auto mt-12 h-64 w-11/12 max-w-4xl rounded-md bg-neutral-800 px-8 py-10 md:ml-10">
          <p className="mb-4 text-2xl text-white">Accepted in All Plataforms</p>
          <p className="max-w-sm text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor
            mi, malesuada id tempus sed, euismod nec tortor. Suspendisse
            potenti. Maecenas tempor neque sed finibus congue.Sed tortor mi,
            malesuada id tempus sed.
          </p>
        </div>
        <PricingSection />
        <ContactArea />
        <Footer />
      </section>
    </>
  );
};

export default Home;
