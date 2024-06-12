import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="h-full pb-10">
      <div className="bg-black w-full h-80"></div>
      <div className="bg-[#1391AD40] flex flex-col pb-14 h-full lg:px-20 px-5">
        <div className="w-full h-[350px] rounded-3xl overflow-hidden -mt-64 relative">
          <Image className="w-full h-full object-cover" loading="lazy" height={1600} width={900} src={"/assets/contact.jpeg"} alt="contact" />
          <Link href={"https://www.youtube.com/embed/AZABwItOAgw?si=VAsO0jCw1eCb1Qab"}>
            <Image className="object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" height={70} width={70} src={"/assets/videoButton.svg"} alt="contact" />
          </Link>
        </div>
        <div className="parent flex justify-between gap-10 flex-col lg:flex-row mt-16">
          <div className="child-1 lg:w-[50%]">
            <h1 className="text-4xl font-semibold leading-[3rem] tracking-wide mb-5">Fitness is The Best Solution For You</h1>
            <p className="leading-[2rem]">
              Lorem ipsum dolor sit amet consectetur. Eu diam nulla netus in maecenas viverra. Fermentum sed amet eget elementum volutpat amet augue. Lorem ipsum dolor sit amet consectetur. Eu diam nulla netus in maecenas viverra. Fermentum
              sed amet eget elementum volutpat amet augue.{" "}
            </p>
            <button className="bg-gradient-to-b from-[#24FFDD] to-[#1391AD] px-6 py-3 mt-5 rounded-3xl text-lg">Contact Now</button>
          </div>

          <div className="child-2 lg:w-[33%] rounded-2xl bg-white text-black py-8 px-8">
            <h1 className="font-serif font-semibold text-[1.7rem]">Contact Us!</h1>
            <div className="flex gap-5 items-start my-6">
              <Image className="h-8 w-8" loading="lazy" height={30} width={30} src={"/assets/email.svg"} alt="contact" />
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-[0.8rem]">ecotourtravelkarimunjawa@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-5 items-start my-6">
              <Image className="mt-1" loading="lazy" height={30} width={30} src={"/assets/phone.svg"} alt="contact" />
              <div>
                <p className="font-semibold text-sm">Phone</p>
                <p className="text-[0.8rem]">0858-0033-1815</p>
              </div>
            </div>
            <div className="flex gap-5 items-start my-6">
              <Image className="mt-1" loading="lazy" height={30} width={30} src={"/assets/Location.svg"} alt="contact" />
              <div>
                <p className="font-semibold text-sm">Location</p>
                <p className="text-[0.8rem]">Jl. Bukit Kapuran, Karimunjawa, RT 04 RW 01 Jepara, Jawa Tengah, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
