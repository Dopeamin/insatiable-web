import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="w-full flex justify-center align-center">
      <div className="w-full flex max-w-7xl p-10 justify-between items-center gap-20">
        <h1 className="text-3xl tracking-widest text-gray-100 font-bold">
          Insatiable
        </h1>

        <div className="flex justify-evenly text-gray-200 gap-10 text-sm font-semibold items-center">
          <a className="cursor-pointer px-4 py-2 rounded-md hover:bg-zinc-800 transition-all duration-300 ease-in-out hover:shadow-lg">
            Activity
          </a>
          <a className="cursor-pointer px-4 py-2 rounded-md hover:bg-zinc-800 transition-all duration-300 ease-in-out hover:shadow-lg">
            About us
          </a>
          <a className="cursor-pointer px-4 py-2 rounded-md hover:bg-zinc-800 transition-all duration-300 ease-in-out hover:shadow-lg">
            Contact us
          </a>
          <Link
            href="signup"
            className="cursor-pointer px-4 py-2 rounded-md hover:bg-zinc-800 transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            Register
          </Link>

          <div className="w-28 h-10 relative cursor-pointer">
            <Image
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              fill
              alt="alt"
              objectFit="contain"
            ></Image>
          </div>
          <div className="w-20 h-10 relative cursor-pointer">
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              fill
              alt="alt"
              objectFit="contain"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
