'use client'

import React, { ReactElement, ReactHTMLElement, useEffect } from "react"
import { useForm } from "react-hook-form";
import MySnackBar from "./MySnackBar";
import { POST } from "@/app/api/auth/login/route";

type myForm = {
    email : string
    password : string
}

const LoginForm:React.FC = () => {
    const [isLogin, setIsLogin] = React.useState(false)

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        getValues 
    } = useForm <myForm>({
        mode : 'onSubmit'
    });

    const Sneker = ()=>{
        return(
            <MySnackBar 
            message={`${errors.email?.message||errors.password?.message}`} 
            open={!!errors.email || !!errors.password}
            />
        )
    }

    const onSubmit=async(data:myForm)=>{
        const aselole = await fetch('/api/auth/login',{
            method : "POST",
            body : JSON.stringify(data)
            
        })
        // const anjai = await aselole.json()

        console.log(await aselole.json())
    }



    const handleLogin = () => {
        setIsLogin(!isLogin)
    }
    const RegisterForm = () => {
        return (
            <>
                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="firstName" className="text-sm text-gray-700 dark:text-gray-200 mr-2">First Name:</label>
                    <input type="text" id="firstName" name="firstName" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="lastName" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="username" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Username:</label>
                    <input type="text" id="username" name="username" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

            </>
        )
    }
    return (
        <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
            <Sneker/>
            <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Welcome to My Company</h1>
            <form action="#" className="w-full flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                {isLogin ? <RegisterForm /> : <></>}

                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        {...register("email",{required:"Email can't blank"})
                        } 
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        {...register("password",{
                                required:"Password cannot be blank",
                                minLength:{
                                    value:4,
                                    message:"at least 4 character"
                                },
                                maxLength:{
                                    value:8,
                                    message : "lebih dari 8"
                                }
                            }
                        )}   
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    <p className="text-red-400">{errors.password?.message}</p>
                </div>

                {isLogin ? (
                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="confirmPassword" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Confirm Password:</label>
                        <input 
                            type="password" 
                            id="confirmPassword" name="confirmPassword" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>

                ) : <></>}
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Register</button>
            </form>

            <div className="mt-4 text-center">
                <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
                <p className="text-blue-500 hover:text-blue-600 cursor-pointer" onClick={handleLogin}>{isLogin ? "Register Here" : "Login"}</p>
            </div>
        </div >
    )
}

export default LoginForm