import Image from "next/image";
import { Header } from "@/app/components/Header";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-t from-black lg:h-[140vh]">
      <Header />
      <main className="relative pb-24 pl-4  lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute flex top-0 left-0 -z-10 h-[95vh] flex-col w-screen bg-black">
            <Image
              src="/banner.png"
              alt="Maid"
              fill={true}
              className="h-[65v] object-cover object-top lg:h-[95vh]"
            />
          </div>
          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">MAID</h1>

          <p className="text-shadow-md max-w-xs text-xs md:text-w-lg md:text-lg lg:max-w-2xl">
            Afeter fleeing an abusive relationship, a young mother finds a job
            cleaning houses as she fights to provide for her child and build
            them a better future.
          </p>
        </div>

        <div className="flex space-x-3">
          <button className="md:text-xl; flex cursor-pointer items-center rounded gap-x-2 bg-white text-black px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5">
            Play
          </button>
          <button className="md:text-xl; flex cursor-pointer items-center rounded gap-x-2 bg-gray-500 text-black px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5">
            More Info
          </button>
        </div>
      </main>
    </div>
  );
}
