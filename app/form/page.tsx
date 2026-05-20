// app/register/page.tsx

'use client'

import { useState } from 'react'

import { useForm } from 'react-hook-form'

export default function RegisterPage() {

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm()




    const onSubmit = (data: any) => {
        console.log(data)
        reset()
    }


    console.log(errors)


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Register
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Username */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Username
                        </label>

                        <input
                            {...register('username', { required: "Username is required", maxLength: 20 })}
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />
                        <p className="text-red-500 text-sm mt-1">
                            {errors.username?.message as string}
                        </p>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            {...register('email', { required: "Email is required" })}
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email?.message as string}
                        </p>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            {...register('password', { required: "Password is required", minLength: 6, maxLength: 20 })}
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password?.message as string}
                        </p>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Confirm Password
                        </label>

                        <input
                            {...register('confirmPassword', { required: "Please confirm your password", minLength: 6, maxLength: 20 })}
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />
                        <p className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword?.message as string}
                        </p>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    )
}