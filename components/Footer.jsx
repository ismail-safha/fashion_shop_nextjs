import Image from "next/image";
import Link from "next/link";
// import Customer from "../public/img/server/Customer Support service_brand_color.png";
import payment_img from "../public/img/payment_img.png";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <footer className="bg-[#252525] text-[#fff]">
      {/* top */}
      <Wrapper>
        <div className="flex justify-between pt-[20px]	gap-[20px] md:flex-col md:m-auto md:text-center">
          {/* left  */}
          <div className="pt-[20px] pb-2 md:m-auto md:text-center">
            <h1 className="pb-[30px]">CONTACT US</h1>
            <p className="max-w-[210px]">
              If you have any questions, please contact us by call or by
              whatsapp
            </p>
            <div className="relative  ">
              {/* <Image
                className="w-[200px] h-[200px] absolute left-[-43px] top-[-16px]"
                src={Customer}
                alt="Customer Support service"
              /> */}
              <p className="mt-[20px]">+212 000 000 000</p>
            </div>
          </div>
          {/* center 1 */}
          <div className="pt-[20px]  pb-4 md:m-auto md:text-center">
            <h1 className="pb-[30px]">LOCATION</h1>
            <p>Casablanca, MA, Morocco,</p>
            <p className="pt-[45px] max-w-[184px]">
              Monday – Friday: 9 a.m. – 6 p.m. Saturday: 9 a.m. – 1 p.m.
            </p>
          </div>
          {/* center 2 */}
          <div className="pt-[20px] pb-4 md:m-auto md:text-center">
            <h1 className="pb-[30px]">CATEGORIES</h1>
            <ul>
              <li className="mb-[10px]">
                <Link href="/">collections</Link>
              </li>
              <li className="mb-[10px]">
                <Link href="/">Accessories</Link>
              </li>
              <li className="mb-[10px]">
                <Link href="/">Future brides</Link>
              </li>
              <li className="mb-[10px]">
                <Link href="/">FAQs</Link>
              </li>
              <li className="mb-[10px]">
                <Link href="/">GTC</Link>
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="line_center overflow-hidden"></div>
          <div className="pt-[20px] pb-4 md:m-auto md:text-center ">
            <h1 className="pb-[30px]">NEWSLETTER</h1>
            <p className="max-w-[244px]">
              Subscribe to the weekly newsletter for all the latest updates
            </p>
            <form>
              <div className="mt-4 flex h-[52px] flex-col items-center gap-2 smm:flex-row smm:gap-3 border-[0.5px] border-[#dfc392]  rounded-md p-2 md:flex-row">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full bg-transparent  border-[#dfc392] shadow-sm rounded-md focus:outline-none focus:z-10 focus:border-[#dfc392] focus:ring-[#dfc392] text-[#fff]"
                    placeholder="Enter your email"
                  />
                </div>
                <a
                  className="w-full smm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-[#dfc392] hover:bg-[#e6dac6] border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#dfc392] focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 mr-[-10px]"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                New UI kits or big discounts. Never spam.
              </p>
            </form>
          </div>
        </div>
        {/* button */}
        <div className="line overflow-hidden"></div>
        {/* == */}
        <div className=" overflow-hidden flex w-full justify-between items-center md:flex-col md:m-auto md:text-center ">
          {/* md */}
          <div className="flex gap-5 text-[30px]">
            <i className="ri-facebook-circle-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-tiktok-fill"></i>
          </div>
          {/* Copyright  */}
          <div className="pb-[10px]">
            <p>
              Copyright © 2023 Created By <strong>ISMAILSAFHA</strong> All
              Rights Reserved.
            </p>
          </div>
          {/* payment*/}
          <Image
            src={payment_img}
            alt="payment_img"
            className="object-contain"
          />
        </div>
      </Wrapper>
    </footer>
  );
}
