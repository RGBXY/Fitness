import { contact } from "@/data";
import Image from "next/image";
import React from "react";

const TrainerCard = () => {
  return (
    <div className="flex justify-between overflow-x-auto no-scrollbar gap-5">
      {contact.map((trainer) => (
        <div className="w-fit" key={trainer.id}>
          <h1 className="text-xl font-semibold mb-4">{trainer.name}</h1>
          <div className="overflow-hidden relative w-[250px] h-[340px]">
            <div className=" absolute top-0 right-0 h-0 w-0 border-t-[60px] border-black border-l-[50px] border-l-transparent"></div>
            <Image className="rounded-2xl h-full w-full object-cover" height={200} width={200} src={trainer.img} alt="Cevalline Hyen" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainerCard;
