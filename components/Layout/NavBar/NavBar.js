import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/disney-hotstar-logo-dark.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <Image src={logo} width={90} height={50} alt="app logo"></Image>
      </Link>
    </div>
  );
};

export default NavBar;
