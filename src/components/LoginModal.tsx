import React from "react";
import { GrFormClose } from "react-icons/gr";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
}

const LoginModal = ({ isOpen, closeModal }: IProps) => {
  return (
    isOpen && (
      <>
        <div className="absolute z-50 flex h-full w-full items-center justify-center bg-black/50">
          <div className="w-10/12 max-w-[417px] rounded-md bg-white p-7 opacity-100">
            <div className="flex">
              <h1 className="text-xl font-medium">Login</h1>
              <GrFormClose
                onClick={() => closeModal()}
                size="2rem"
                className="ml-auto cursor-pointer"
              />
            </div>
            <div className="mt-5 flex flex-col">
              <label className="mb-3 font-medium" htmlFor="">
                Company Email
              </label>
              <input
                type="text"
                className="mb-5 h-10 rounded border-2 pl-3"
                placeholder="email@email.com"
              />
              <label className="mb-3 font-medium" htmlFor="">
                Password
              </label>
              <input
                type="password"
                className="h-10 rounded border-2 pl-3"
                placeholder="Password"
              />
              <span className="cursor-pointerz ml-auto mt-2">
                Forgot your password?
              </span>
              <div className="flex items-center">
                <input type="checkbox" name="" id="remember" className="mr-2" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="mt-5 flex gap-2">
                <button className="h-10 w-6/12 rounded border-2">Cancel</button>
                <button className="h-10 w-6/12 rounded bg-lime-500 text-white">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export { LoginModal };
