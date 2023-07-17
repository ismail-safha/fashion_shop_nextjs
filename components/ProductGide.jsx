import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";
import img1 from "../public/img/asmaa_product_6.jpg";
import img2 from "../public/img/asmaa_product_7.jpg";
import img3 from "../public/img/asmaa_product_8.jpg";

export default function ProductGide() {
  return (
    <section className="bg-[#f1f2f6] ">
      <Wrapper>
        <div className=" text-[#1F1F1F] text-center  px-[36px] py-[13px]  mt-[60px] mb-[60px]">
          <h1 className="text-[40px] ">Products Guide</h1>
        </div>
        <div className="flex items-center gap-[30px] md:flex-col">
          {/* one */}
          <div className="text-center ">
            <div className="thumbnail hover">
              <Image
                src={img1}
                alt="product_1"
                className="!h-[285px] object-cover object-top"
              />
            </div>
            <h1 className="font-Seasons_Bold font-[400] leading-[34px] pt-[10px] py-[20px]	text-[18px] ">
              The Blue Ocean MX
            </h1>
            <p className="leading-[1.4] text-[#687080] text-[14px] pb-[30px]  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              laudantium et vel.
            </p>
          </div>

          {/* tow */}
          <div className="text-center">
            <div className="thumbnail hover">
              <Image
                src={img2}
                alt="product_1"
                className="!h-[285px] object-cover object-top"
              />
            </div>
            <h1 className="font-Seasons_Bold  font-[400] leading-[34px]	pt-[10px] py-[20px]	text-[18px] ">
              The Blue Ocean MX
            </h1>
            <p className="leading-[1.4] text-[#687080] text-[14px] pb-[30px] ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              laudantium et vel.
            </p>
          </div>

          {/* three */}
          <div className="text-center">
            <div className="thumbnail hover">
              <Image
                src={img3}
                alt="product_1"
                className="!h-[285px]  object-cover object-top"
              />
            </div>
            <h1 className="font-Seasons_Bold  font-[400] leading-[34px]	pt-[10px] py-[20px]	text-[18px] ">
              The Blue Ocean MX
            </h1>
            <p className="leading-[1.4] text-[#687080] text-[14px] pb-[30px] ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              laudantium et vel.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
