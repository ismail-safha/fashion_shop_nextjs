/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import Wrapper from "./Wrapper";
// import asma_logo from "../public/img/asma_logo.png";


const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <header className="">
      <section className="bg-[#f5f5f5] leading-4 uppercase text-[14px] tracking-[0.8px] p-[16px] text-center">
        Livraison Gratuite à Partir de
        <span className="font-bold">1000 Dhs</span> d'Achat
      </section>
      <section>
        <Wrapper>
          <div className="bg-[#fff] h-[80px] flex justify-between	items-center text-[19px]	 ">
            {/* menu-bar*/}
            {/* header_left */}
            <div className="flex gap-[30px] items-center relative ">
              <Link href="/" className="ri-user-line text-[23px]"></Link>
              <Link href="/" className="ri-star-line text-[23px] "></Link>
              <span className=" item_floating_header ">7</span>
            </div>
            {/* header_center */}
            <div className="flex items-center gap-[137px] ">
              <nav>
                <ul className="flex gap-[40px] items-center">
                  <li>
                    <Link className="text-[14px] font-[600] uppercase" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[14px] font-[600] uppercase"
                      href="/product"
                    >
                      Product
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link href="/" className="relative font-Prata text-[30px]">
                {/* <Image
                  src={asma_logo}
                  alt="asma logo"
                  className="w-full object-cover  h-[80px]"
                /> */}
                asma_logo
              </Link>
              <nav>
                <ul className="flex gap-[40px] items-center">
                  <li>
                    <Link className="text-[14px] font-[600] uppercase" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[14px] font-[600] uppercase"
                      href="/product"
                    >
                      Product
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* header_right */}
            <div className="flex gap-[30px] items-center relative">
              <Link href="/" className="ri-search-line text-[23px]"></Link>
              <Link href="/cart" className="ri-shopping-bag-line text-[23px]">
                {cartItemsCount > 0 && (
                  <span className=" item_floating_header ">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </Wrapper>
      </section>
    </header>
  );
};

export default Header;
