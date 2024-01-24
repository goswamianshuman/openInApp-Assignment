"use client";
import {
  Apple,
  BaseLogo,
  Discord,
  Github,
  Google,
  Linkedin,
  Twitter,
} from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const socials = [
  {
    icon: <Github color="white" />,
  },
  {
    icon: <Twitter color="white" />,
  },
  {
    icon: <Linkedin color="white" />,
  },
  {
    icon: <Discord color="white" />,
  },
];

const socialsMobile = [
  {
    icon: <Github color="#858585" />,
  },
  {
    icon: <Twitter color="#858585" />,
  },
  {
    icon: <Linkedin color="#858585" />,
  },
  {
    icon: <Discord color="#858585" />,
  },
];

export default function Login() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full min-h-[80px] md:py-5 md:flex-[0.5] md:flex md:flex-col md:justify-between bg-primary md:bg-transparent md:bg-[url('/images/left-wing.svg')] bg-center bg-cover bg-no-repeat">
        {/* mobile-screen */}
        <div className="container md:hidden h-[80px] flex items-center">
          <BaseLogo />
        </div>

        <div className="hidden md:block container">
          {/* logo */}
          <div className="relative h-[80.15px] w-[80.15px] bg-white rounded-full">
            <Image
              src="/images/h-line.svg"
              fill
              alt="logo"
              className="object-center object-contain scale-[1.1]"
            />
          </div>
        </div>
        <div className="hidden container md:flex items-center max-w-[40%] justify-start">
          <h1 className="uppercase font-montserrat text-7xl font-bold text-white">
            base
          </h1>
        </div>
        <div className="hidden md:flex items-center max-w-[42%] justify-start gap-x-4 container">
          {socials.map((data, i) => (
            <Link href="#">{data.icon}</Link>
          ))}
        </div>
      </div>
      <div className="w-full flex-grow md:flex-[0.5] md:flex md:items-center md:justify-center">
        <div className="container py-5 md:max-w-[400px]">
          <div>
            <h4 className="font-montserrat font-bold text-2xl capitalize">
              sign in
            </h4>
            <p className="font-lato font-normal text-xs">
              Sign in to your account
            </p>
          </div>

          <div className="my-5 flex items-center w-full gap-x-3">
            <button className="w-full flex items-center justify-center gap-x-2">
              <Google /> Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center gap-x-2">
              <Apple /> Sign in with Apple
            </button>
          </div>

          <div className="bg-white rounded-lg">
            <form className="container py-7">
              <div className="w-full">
                <p className="text-base font-lato font-normal">Email address</p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full mt-2"
                />
              </div>

              <div className="w-full mt-4">
                <p className="text-base font-lato font-normal">Password</p>
                <input
                  type="password"
                  placeholder="Your password"
                  className="w-full mt-2"
                />
              </div>

              <div className="mt-4 flex flex-col">
                <Link
                  href="#"
                  className="text-base font-lato font-normal text-link"
                >
                  Forgot password ?
                </Link>

                <button className="w-full mt-4 bg-primary font-montserrat font-bold text-base text-white">
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4 flex flex-col md:flex-row md:gap-x-1 items-center justify-center gap-y-3">
            <p className="text-base font-lato font-normal text-secondaryText">
              Don't have an account?
            </p>
            <Link
              href="#"
              className="text-base font-lato font-normal text-link"
            >
              Register here
            </Link>
          </div>

          <div className="mt-7 md:hidden flex items-center justify-center gap-x-3">
            {socialsMobile.map((data, i) => (
              <Link className="scale-[0.8]" href="#">
                {data.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
