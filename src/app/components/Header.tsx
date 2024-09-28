"use client";
import { UserProfile } from "@/app/components/UserProfile";
import { Logo } from "@/app/components/Logo";
import { NavLinks } from "@/app/components/NavLinks";
import { useScroll } from "@/app/hooks/useScroll";

export const Header = () => {
  const isScrolled = useScroll();

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
