"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  username: yup.string().required("Username is required").max(20, "Max 20 characters"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required").min(6, "Minimum 6 characters").max(20, "Max 20 characters"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const userData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    const oldUsers = localStorage.getItem("users");
    const users = oldUsers ? JSON.parse(oldUsers) : [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    reset();
  };

  const inputClass =
    "w-full bg-[#0a1419] border border-[#1a3a2a] px-4 py-3 outline-none focus:border-[#00ff88] text-[#c8ffd9] text-sm transition-colors";

  return (
    <div className="min-h-screen flex items-center justify-center p-5 pt-24">
      <div className="w-full max-w-md hack-card p-8">
        <h1 className="text-2xl font-black text-center mb-2 text-[#00ff88] uppercase tracking-widest">
          Register
        </h1>
        <p className="text-center text-[#3a6a4a] text-xs mb-8">// create new account</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-2 text-[10px] font-bold uppercase tracking-widest text-[#3a6a4a]">
              Username
            </label>
            <input {...register("username")} type="text" placeholder="Enter username" className={inputClass} />
            <p className="text-[#ff3366] text-xs mt-1">{errors.username?.message}</p>
          </div>

          <div>
            <label className="block mb-2 text-[10px] font-bold uppercase tracking-widest text-[#3a6a4a]">
              Email
            </label>
            <input {...register("email")} type="email" placeholder="Enter email" className={inputClass} />
            <p className="text-[#ff3366] text-xs mt-1">{errors.email?.message}</p>
          </div>

          <div>
            <label className="block mb-2 text-[10px] font-bold uppercase tracking-widest text-[#3a6a4a]">
              Password
            </label>
            <input {...register("password")} type="password" placeholder="Enter password" className={inputClass} />
            <p className="text-[#ff3366] text-xs mt-1">{errors.password?.message}</p>
          </div>

          <div>
            <label className="block mb-2 text-[10px] font-bold uppercase tracking-widest text-[#3a6a4a]">
              Confirm Password
            </label>
            <input {...register("confirmPassword")} type="password" placeholder="Confirm password" className={inputClass} />
            <p className="text-[#ff3366] text-xs mt-1">{errors.confirmPassword?.message}</p>
          </div>

          <button type="submit" className="w-full hack-btn-filled py-3 text-xs mt-2">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
