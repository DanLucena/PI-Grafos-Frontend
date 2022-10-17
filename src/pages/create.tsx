import React from "react";
import type { NextPage } from "next";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";

const Create: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function sendData(data: FieldValues) {
    const headers = {
      token: data.token,
    };

    await axios.post(`http://localhost:3333/companies/create`, data, {
      headers,
    });
  }

  return (
    <div className="flex h-screen justify-center">
      <div className="my-auto flex items-center justify-center">
        <div className="min-h-[732px] w-[480px] rounded border-2 p-3">
          <h1 className="mb-5 flex justify-center text-3xl font-semibold">
            <span className="text-lime-500">Tra</span>veller
          </h1>
          <form
            className="flex flex-col"
            onSubmit={handleSubmit((data) => sendData(data))}
          >
            <label className="mb-2 font-medium" htmlFor="">
              Company Name
            </label>
            {errors.name && <p>Company name is required.</p>}
            <input
              type="text"
              className="mb-5 h-10 rounded border-2 pl-3"
              placeholder="Example Company"
              {...register("name", { required: true })}
            />
            <label className="mb-2 font-medium" htmlFor="">
              Company Email
            </label>
            {errors.mail && <p>Email is required.</p>}
            <input
              type="text"
              className="mb-5 h-10 rounded border-2 pl-3"
              placeholder="email@email.com"
              {...register("mail", { required: true })}
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
            <label className="mb-2 font-medium" htmlFor="">
              Branch
            </label>
            {errors.branch && <p>Enter your company branch.</p>}
            <input
              type="text"
              className="mb-5 h-10 rounded border-2 pl-3"
              placeholder="Construction"
              {...register("branch", { required: true })}
            />
            <label className="mb-2 font-medium" htmlFor="">
              Cellphone
            </label>
            {errors.cellphone && <p>Enter the company principal number.</p>}
            <input
              type="text"
              className="mb-5 h-10 rounded border-2 pl-3"
              placeholder="(61) 99999-9999"
              {...register("cellphone", { required: true })}
            />
            <label className="mb-2 font-medium" htmlFor="">
              Plan
            </label>
            {errors.plan && <p>Choose a plan.</p>}
            <select
              className="mb-5 h-10 rounded border-2 pl-3"
              {...register("plan", { required: true })}
            >
              <option value="Simple">Simple</option>
              <option value="Enterprise">Enterprise</option>
            </select>
            <label className="mb-2 font-medium" htmlFor="">
              Creation Token
            </label>
            {errors.token && <p>Insert the creation token</p>}
            <input
              type="password"
              className="mb-5 h-10 rounded border-2 pl-3"
              placeholder="Creation token"
              {...register("token", { required: true })}
            />
            <input
              type="submit"
              className="w-fill h-10 cursor-pointer rounded bg-lime-500 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
