import React from "react";

interface IProps {
  openModal: () => void;
}

const HomePageButton = ({ openModal }: IProps) => {
  return (
    <>
      <div className="flex py-8 px-16">
        <button
          onClick={() => {
            openModal();
          }}
          className="ml-auto border-2 border-white px-2 py-2 text-white transition duration-150 ease-in-out hover:bg-white hover:text-lime-500"
        >
          Already a customer
        </button>
      </div>
    </>
  );
};
export { HomePageButton };
