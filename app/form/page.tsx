// app/register/page.tsx

'use client'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type FormData = {
    username: string
    email: string
    password: string
    confirmPassword: string
}

// Yup Schema
const schema = yup.object({
    username: yup
        .string()
        .required('Username is required')
        .max(20, 'Max 20 characters'),

    email: yup
        .string()
        .required('Email is required')
        .email('Invalid email'),

    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Minimum 6 characters')
        .max(20, 'Max 20 characters'),

    confirmPassword: yup
        .string()
        .required('Please confirm your password')
        .oneOf([yup.ref('password')], 'Passwords do not match'),
})

export default function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: FormData) => {
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

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >

                    {/* Username */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Username
                        </label>

                        <input
                            {...register('username')}
                            type="text"
                            placeholder="Enter username"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                        <p className="text-red-500 text-sm mt-1">
                            {errors.username?.message}
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Enter email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                        <p className="text-red-500 text-sm mt-1">
                            {errors.email?.message}
                        </p>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            {...register('password')}
                            type="password"
                            placeholder="Enter password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                        <p className="text-red-500 text-sm mt-1">
                            {errors.password?.message}
                        </p>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Confirm Password
                        </label>

                        <input
                            {...register('confirmPassword')}
                            type="password"
                            placeholder="Confirm password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                        <p className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword?.message}
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