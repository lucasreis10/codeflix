"use client";
import Image from "next/image";
import { Component, useEffect, useState } from "react";

const Logo = () => {
  return (
    <Image
      className="cursor-pointer"
      alt="LOGO"
      src="/logo.svg"
      width={120}
      height={120}
    ></Image>
  );
};

const NavLinks = () => {
  return (
    <ul className="hidden md:flex md:space-x-8">
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>Latest</li>
    </ul>
  );
};

const UserProfile = () => {
  return (
    <div className="flex space-x-4">
      <p className="hidden cursor-not-allowed lg:inline">Kids</p>
      <Image
        className="cursor-pointer rounded"
        src="/profile.png"
        alt="PROFILE"
        width={40}
        height={40}
      />
    </div>
  );
};

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
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
};
