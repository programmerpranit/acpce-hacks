"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = (): JSX.Element => {
  const [pathname, setPathname] = useState("/");
  const [toggle, setToggle] = useState(false);

  const path = usePathname();

  useEffect(() => {
    setPathname(path);
  }, [path]);

  return (
    <>
      {/* To fix "Fixed" Problem */}
      {/* {toggle && <div className="h-24"></div>} */}
      <nav
        className={` flex relative  flex-col justify-evenly md:flex-row bg-secondary`}
      >
        <div className="logo flex h-24 items-center justify-between p-5  max-md:border-b">
          <h3 className="text-white">ACPCE Hacks</h3>
          {/* <Image
            className="object-contain"
            src={"/images/logo.png"}
            alt=""
            width={200}
            height={100}
          /> */}
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="h-8 w-8 flex justify-evenly flex-col md:hidden"
          >
            <div className="line w-full h-0.5 bg-white"></div>
            <div className="line w-full h-0.5 bg-white"></div>
            <div className="line w-full h-0.5 bg-white"></div>
          </div>
        </div>
        <div
          className={`links  ${toggle ? "translate-x-0" : "max-md:translate-x-[100vw]"} right-0 max-md:top-24 flex flex-col items-center gap-10 bg-secondary 
        p-5 transition-all md:relative absolute max-md:h-[90vh]  max-md:w-2/3 max-md:border-l z-50 md:flex-row`}
        >
          <Link href="/about">
            <p
              className={`font-medium ${
                pathname === "/services" ? "text-primary" : "text-white"
              } hover:text-primary`}
            >
              About
            </p>
          </Link>
          <Link href="/services">
            <p
              className={`font-medium ${
                pathname === "/services" ? "text-primary" : "text-white"
              } hover:text-primary`}
            >
              Services
            </p>
          </Link>
          <Link href="/blogs">
            <p
              className={`font-medium ${
                pathname === "/blogs" ? "text-primary" : "text-white"
              } hover:text-primary`}
            >
              Blogs
            </p>
          </Link>
          <Link href="/contact">
            <p
              className={`font-medium ${
                pathname === "/contact" ? "text-primary" : "text-white"
              } hover:text-primary`}
            >
              Contact
            </p>
          </Link>
          <Link href="/contact">
            <button>Sign Up</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
