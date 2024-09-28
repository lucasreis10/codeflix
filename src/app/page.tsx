import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full  lg:h-[140vh]">
      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute flex top-0 left-0 -z-10 h-[95vh] flex-col w-screen bg-black"></div>

          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            The Witcher
          </h1>
        </div>
      </main>
    </div>
  );
}
