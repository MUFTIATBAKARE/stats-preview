import Image from "next/image";
import HeroImage from "./assets/Bitmap.svg";

export default function Home() {
  return (
    <main className=" flex flex-col-reverse  min-h-screen xl:flex-row xl:px-[165px] xl:py-[177px] xl:items-center xl:justify-center px-6 py-[88px]">
      <div className="border border-[#1B1937] rounded-b-lg xl:rounded-l-lg xl:rounded-none xl:min-h-[475.83px] 2xl:min-h-[1000px] bg-[#1B1937] xl:pl-[72px] xl:pr-[124.5px] xl:py-[71px] flex flex-col gap-10 xl:gap-[72px] 2xl:gap-[128px] pr-8 pb-8 pl-[31px] md:text-left text-center xl:text-left flex-1">
       <div className="flex flex-col gap-4 xl:gap-[25px] 2xl:gap-[72px]">
          <p className="text-[28px] xl:text-4xl 2xl:text-8xl font-bold pt-10">
            Get <span className="text-[#AB5CDB] ">insights</span> that
            help your business grow.
          </p>
          <p className="text-[#FFF]/[0.75] text-[15px] 2xl:text-4xl font-normal">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <span className="flex flex-col xl:flex-row md:flex-row gap-6 xl:gap-16">
          <span>
            <p className="text-2xl 2xl:text-4xl font-bold">10k+</p>
            <p className="text-[#FFF]/[0.75] text-xs 2xl:text-xl font-normal">Companies</p>
          </span>
          <span>
            <p className="text-2xl 2xl:text-4xl font-bold">314</p>
            <p className="text-[#FFF]/[0.75] text-xs 2xl:text-xl font-normal">Templates</p>
          </span>
          <span>
            <p className="text-2xl 2xl:text-4xl font-bold">12M+</p>
            <p className="text-[#FFF]/[0.75] text-xs 2xl:text-xl font-normal">Queries</p>
          </span>
        </span>
      </div>
      <div className="relative border border-[#1B1937] rounded-t-lg xl:rounded-none xl:rounded-r-lg flex-1 min-h-[300px] md:min-h-[650px] lg:min-h-[800px]  xl:min-h-[475.83px] 2xl:min-h-[1000px]">
        <Image
          src={HeroImage}
          alt="image"
          fill
          style={{
            objectFit: 'cover',
            width: "100%",
            height: "100%",
            position: 'absolute', 
            top: 0,
            left: 0
          }}
          className="border border-[#1B1937] rounded-t-lg xl:rounded-none xl:rounded-r-lg"
        />
        <div className="absolute top-0 z-10 rounded-t-lg xl:rounded-none xl:rounded-r-lg w-full h-full bg-[#AB5CDB]/[.7511]"></div>
      </div>
    </main>
  );
}
