import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/disney-hotstar-logo-dark.svg";

const NavBar = ({ account }) => {
  return (
    <div className="navbar">
      <Link href="/">
        <Image src={logo} width={150} height={50} alt="app logo"></Image>
      </Link>
      <div className="account-details">
        <p>Welcome {account.username}!</p>
        <img src={account.avatar.url} alt={account.username} />
      </div>
    </div>
  );
};

export default NavBar;
