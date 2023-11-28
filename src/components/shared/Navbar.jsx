import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import SideDrawer from "./SideDrawer";
import ScrollTopButton from "./ScrollTopButton";
import { useUserState } from "../../state/useStates";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [drawer, setDrawer] = useState("");

  // which drawer is clicked
  const handleClick = (label) => {
    label != "customer" && setIsOpen(true);
    setDrawer(label);
  };
  useEffect(() => {
    isOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "");
  }, [isOpen]);

  // navbar become sticky
  const handleScroll = () => {
    window.scrollY > 10 ? setIsSticky(true) : setIsSticky(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* SCROLL TO TOP BUTTON */}
      <ScrollTopButton isSticky={isSticky} />
      <Header $isSticky={isSticky}>
        <Nav>
          <NavLink to="/">
            <img height={60} width={60} src="/logo.png" alt="logo" />
          </NavLink>
          {/* navbar links */}
          <ul className="flex py-6 gap-x-10">
            {navigation.map((link) => (
              <Link link={link} key={"nav" + link.label}></Link>
            ))}
          </ul>
          {/* navbar icon buttons */}
          <NavbarButtons handleClick={handleClick} />
        </Nav>
      </Header>
      {/* DRAWER */}
      <SideDrawer {...{ isOpen, setIsOpen, drawer, setDrawer }} />
    </>
  );
};

const NavbarButtons = ({ handleClick }) => {
  const { wishlist, cart } = useUserState();

  return (
    <div className="flex text-xl gap-x-6">
      {navIcons.map(({ label, svg }, i) => (
        <Fragment key={"navicon" + i}>
          {label === "customer" ? (
            <NavLink
              className="hover:scale-110"
              aria-label={label}
              to="/customer"
            >
              {svg}
            </NavLink>
          ) : (
            <button
              onClick={() => handleClick(label)}
              className="hover:scale-110 relative"
              aria-label={label}
            >
              {label === "cart" ? (
                <ItemsNum>{cart.length}</ItemsNum>
              ) : label === "wishlist" ? (
                <ItemsNum>{wishlist.length}</ItemsNum>
              ) : null}
              {svg}
            </button>
          )}
        </Fragment>
      ))}
    </div>
  );
};

const Link = ({ link }) => {
  const { label, url } = link;

  return (
    <li>
      <LinkItem>
        <NavLink className="under-line" to={url}>
          {label}
        </NavLink>
        <MdKeyboardArrowRight />
      </LinkItem>
    </li>
  );
};
// ---------tailwind
const Header = tw.header`
${({ $isSticky }) => ($isSticky ? "!bg-white shadow" : "backdrop-blur-sm")}
transition-all
duration-700
fixed
border-b
border-b-gray-300
w-full
z-[69696969]

`;

const Nav = tw.nav`
flex
items-center
justify-between
w-[90%]
mx-auto
`;

const LinkItem = tw.span`
flex
items-center
[&>svg]:opacity-10
[&>a:hover+svg]:opacity-100
[&>a:hover+svg]:translate-x-1
[&>a.active::after]:w-full
[&>a.active+svg]:opacity-100
`;

const ItemsNum = tw.span`
absolute
-top-2
-right-2
rounded-full 
bg-thickRed
text-white
px-1
text-xs
`;

const navIcons = [
  { label: "search", svg: <AiOutlineSearch /> },
  { label: "customer", svg: <AiOutlineUser /> },
  { label: "wishlist", svg: <AiOutlineHeart /> },
  { label: "cart", svg: <AiOutlineShoppingCart /> },
];

const navigation = [
  { label: "Home", url: "/" },
  { label: "Shop", url: "/shop" },
  { label: "Categories", url: "/categories" },
  { label: "About", url: "/about-us" },
  { label: "Contact", url: "/contact-us" },
];

export default React.memo(Navbar);
