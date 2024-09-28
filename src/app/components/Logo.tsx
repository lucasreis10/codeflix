import Image from "next/image";

export const Logo = () => {
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
