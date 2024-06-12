import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-full pt-24 pb-10 lg:px-20 px-5">
      <div className="rounded-3xl overflow-hidden h-[400px]">
        <Image className="w-full h-full object-cover" height={1600} width={900} loading="lazy" src={"/assets/hero.png"} alt="" />
      </div>
      <div className="flex flex-col md:flex-row items-center mt-7">
        <h1 className="md:w-[40%] mb-4 w-full text-2xl lg:text-4xl font-semibold">We Dont Just Practice But Calms The Soul</h1>
        <p className="md:w-[60%] w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem sunt similique? Maiores error, consequuntur libero id porro iste, tempore sit repudiandae, magnam numquam dignissimos!</p>
      </div>
    </div>
  );
};

export default Hero;
