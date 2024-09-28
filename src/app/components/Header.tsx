"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handlerScroll);

    return () => window.removeEventListener("scroll", handlerScroll);
  }, []);

  return (
    <header
      className={`
      ${isScrolled && "bg-black"}
      fixed top-0 z-50 flex w-full items-center justify-between transition-all p-4 lg:px-10 py-6`}
    >
      <div className="flex items-center space-x-2 md:space-x-8">
        <Image alt="LOGO" src="/logo.svg" width={120} height={120}></Image>
        <ul className="hidden md:flex md:space-x-8">
          <li>Home</li>
          <li>TV Shows</li>
          <li> Movies</li>
          <li>Latest</li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <p className="hidden cursor-not-allowed lg:inline">Kids</p>
        <Image
          className="cursor-pointer rounded"
          src="/profile.png"
          alt="PROFILE"
          width={30}
          height={30}
        />
      </div>
    </header>
  );
};
