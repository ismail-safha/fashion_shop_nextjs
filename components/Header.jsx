/* eslint-disable react/no-unescaped-entities */
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import Wrapper from "./Wrapper";
// import asma_logo from "../public/img/asma_logo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Menu } from "@headlessui/react";
import DropdownLink from "./DropdownLink";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Header = () => {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  const { status, data: session } = useSession();
  <ToastContainer position="bottom-center" limit={1} />;
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <header className="">
      <section className="bg-[#1f1f1f] text-[#fff] leading-4 uppercase text-[14px] tracking-[0.8px] p-[16px] text-center">
        Livraison Gratuite à Partir de
        <span className="font-bold">1000 Dhs</span> d'Achat
      </section>
      <section>
        <Wrapper>
          <div className="bg-[#fff] h-[80px] flex justify-between	items-center text-[19px]	 ">
            {/* menu-bar*/}
            {/* header_left */}
            <div className="flex gap-[30px] items-center relative ">
              {status === "loading" ? (
                "loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-[#272626] bg-[#fff9f4]">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute left-0 z-20 w-56 origin-top-right bg-[#fff9f4]  shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <Link
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <span className="ri-user-line text-[23px]"></span>
                </Link>
              )}

              <Link href="/" className="ri-star-line text-[23px] "></Link>
              <span className=" item_floating_header ">7</span>
            </div>
            {/* header_center */}
            <div className="flex items-center gap-[137px] ">
              <nav className="md:hidden">
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
                Asmaa
              </Link>
              <nav className="md:hidden">
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
              {/* start search_icon */}
              <form
                onSubmit={submitHandler}
                className="mx-auto  hidden w-full justify-center mdm:flex"
              >
                <input
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  className="rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0"
                  placeholder="Search products"
                />
                <button
                  className="rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black"
                  type="submit"
                  id="button-addon2"
                >
                  <span className="ri-search-line text-[23px]"></span>
                </button>
              </form>
              {/* end search_icon */}
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
