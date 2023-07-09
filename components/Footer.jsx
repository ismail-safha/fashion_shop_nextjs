/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Wrapper from "./Wrapper";
import asma_logo from "../public/img/asma_logo.png";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="bg-[#F6F6F6]">
      <Wrapper>
        <div className="">
          {/* logo  */}
          <div className="">
            <Image
              src={asma_logo}
              alt=""
              className="object-cover h-[200px] w-[200px]"
            />
          </div>
          {/* Informations */}
          <div className="">
            <h1>Informations</h1>
            <p> Suivre ma commande</p>
            <p> 06.62.18.73.97</p>
            <p> contact@zorym.com</p>
            <p>
              Si vous avez des questions ou un besoin particulier n'hésitez pas
              à nous contacter par mail à contact@zorym.com
            </p>
          </div>
          {/* Liens rapides */}
          <div className="">
            <h1>CUSTOMER SERVICES</h1>
            <Link href="/">
              <span>Contact Us</span>
            </Link>
            <Link href="/">
              <span>Track Your Order</span>
            </Link>
            <Link href="/">
              <span>Product Care & Repair</span>
            </Link>
            <Link href="/">
              <span>Shipping & Returns</span>
            </Link>
          </div>
          {/* social media */}
          <div className="">
            <h1>@Asmaa_Lux</h1>
            <span>INSTAGRAM</span>
            <span>INSTAGRAM</span>
            <span>INSTAGRAM</span>
          </div>
        </div>
        {/* copywriter */}
        <div className="">copywriter</div>
      </Wrapper>
    </section>
  );
};

export default Footer;
