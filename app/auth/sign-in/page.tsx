"use client";

import InputField from "@/components/InputField";
import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Alert from "@/components/Alert";

const SignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUerInfo] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { email, password } = userInfo;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setUerInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) return setError(res.error);
    router.replace("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <form className="w-1/3" onSubmit={handleSubmit}>
        {error ? (
          <div className="mb-4">
            <Alert value={error} />
          </div>
        ) : null}
        <InputField
          label="Email"
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
        <div className="text-center mt-4">
          <Link href="/auth/sign-up" className="underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;