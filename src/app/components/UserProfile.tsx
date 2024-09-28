import Image from "next/image";

export const UserProfile = () => {
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
