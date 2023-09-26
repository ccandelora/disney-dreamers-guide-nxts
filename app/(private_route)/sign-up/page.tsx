"use client";

import InputField from "@/components/InputField";
import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
 
const SignUp = () => {
  const [userInfo, setUerInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = userInfo;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setUerInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/users", {
      method: "POST",
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());
    console.log(res);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="max-w-md w-full space-y-8">
        <InputField
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
        >
          Sign Up
        </button>
        <div className="">Already have an accout? Login in 
        <Link className="text-purple-700" href="/auth/sign-in"> here</Link>.
        </div>
      </form>
    </div>
  );
};

export default SignUp;
