import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex w-full bg-black items-center justify-between p-4 lg:px-10 py-6">
      <Image alt="LOGO" src="/logo.svg" width={120} height={120}></Image>
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li> Movies</li>
        <li>Latest</li>
      </ul>
    </header>
  );
};
