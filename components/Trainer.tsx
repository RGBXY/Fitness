import Image from "next/image";
import React from "react";
import TrainerCard from "./ui/TrainerCard";

const Trainer = () => {
  return (
    <div className="lg:px-20 py-10 px-5">
      <div className=" flex justify-between flex-col lg:flex-row items-center mb-20">
        <div className="w-full lg:w-[400px] h-[150px] rounded-full overflow-hidden mb-5">
          <Image className="h-full w-full object-cover" loading="lazy" height={200} width={200} src={"/assets/trainer.jpeg"} alt="trainer" />
        </div>
        <div className="lg:w-[55%]">
          <h1 className="text-4xl leading-[3rem] tracking-wide mb-5 font-semibold">Trainer Professional</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Eu diam nulla netus in maecenas viverra. Fermentum sed amet eget elementum volutpat amet augue. </p>
        </div>
      </div>

      <TrainerCard />
    </div>
  );
};

export default Trainer;
