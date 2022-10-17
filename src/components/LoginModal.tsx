import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
}

const LoginModal = ({ isOpen, closeModal }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function sendLoginData(data: FieldValues) {
    const response = await axios.post(
      `http://localhost:3333/companies/login`,
      data
    );
    const token = response.data;
    localStorage.setItem("userToken", token);
  }

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
            <form
              className="flex flex-col"
              onSubmit={handleSubmit((data) => sendLoginData(data))}
            >
              <div className="mt-5 flex flex-col">
                <label className="mb-2 font-medium" htmlFor="">
                  Company Email
                </label>
                {errors.mail && <p>Email is required.</p>}
                <input
                  type="text"
                  className="mb-5 h-10 rounded border-2 pl-3"
                  placeholder="email@email.com"
                  {...register("email", { required: true })}
                />
                <label className="mb-2 font-medium" htmlFor="">
                  Password
                </label>
                {errors.password && <p>Enter a password.</p>}
                <input
                  type="password"
                  className="mb-5 h-10 rounded border-2 pl-3"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
                <span className="cursor-pointerz ml-auto mt-2">
                  Forgot your password?
                </span>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name=""
                    id="remember"
                    className="mr-2"
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div className="mt-5 flex gap-2">
                  <button className="h-10 w-6/12 rounded border-2">
                    Cancel
                  </button>
                  <button className="h-10 w-6/12 rounded bg-lime-500 text-white">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  );
};

export { LoginModal };
