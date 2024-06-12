import { testimoni } from "@/data";
import Image from "next/image";
import React from "react";

const TestimoniBox = () => {
  return (
    <div className="w-full mt-16 text-black flex justify-between overflow-x-auto no-scrollbar space-x-4">
      {testimoni.map((testimoni) => (
        <div className="flex-shrink-0 py-4 px-6 rounded-2xl bg-white w-[350px]" key={testimoni.id}>
          <div className="flex gap-6 items-center mb-4">
            <Image className="w-[75px] h-[75px] object-cover rounded-full" height={75} width={75} src={testimoni.img} alt="testi" />
            <div>
              <p className="text-lg font-semibold mb-1">{testimoni.name}</p>
              <p className="text-sm">{testimoni.job}</p>
            </div>
          </div>
          <p>{testimoni.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimoniBox;
