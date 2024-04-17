import React, { Fragment, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  useMediaQuery,
} from "@chakra-ui/react";
import { CiMenuKebab } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { LogOut } from "../../state/slices/client/UsersSlice";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [drawer, setDrawer] = useState("");
  const [isMedium] = useMediaQuery("(max-width: 800px)");
  // which drawer is clicked
  const handleClick = (label) => {
    label != "customer" && setDrawerIsOpen(true);
    setDrawer(label);
  };
  useEffect(() => {
    drawerIsOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "");
  }, [drawerIsOpen]);

  // navbar become sticky
  const handleScroll = () => {
    window.scrollY > 10 ? setIsSticky(true) : setIsSticky(false);
  };
  // scroll to top button
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
          <NavLink aria-label="home" to="/">
            <img src="logo.webp" height={48} width={48} alt="logo" />
          </NavLink>
          {/* navbar links */}
          {!isMedium && (
            <ul className="flex py-6 gap-x-10">
              {navigationLinks.map((link) => (
                <Link link={link} key={"nav" + link.label}></Link>
              ))}
            </ul>
          )}
          {/* navbar icon buttons */}
          <NavbarButtons handleClick={handleClick} />
          {/* toggle navbar button */}
          {isMedium && (
            <button
              className="text-3xl"
              aria-label="toggle-navlinks-menu"
              onClick={() => handleClick("navlinks")}
            >
              <CiMenuKebab />
            </button>
          )}
        </Nav>
      </Header>
      {/* DRAWERs */}
      <SideDrawer {...{ drawerIsOpen, setDrawerIsOpen, drawer }} />
    </>
  );
};

const NavbarButtons = ({ handleClick }) => {
  const { auth } = useUserState();
  const { wishlist, cart, isLoggedIn, name } = auth;

  return (
    <div className="flex text-xl gap-x-6">
      {navIcons.map(({ label, svg }, i) => (
        <Fragment key={"navicon" + i}>
          {label === "customer" && !isLoggedIn ? (
            <NavLink
              className="hover:scale-110"
              aria-label={label}
              to="/customer"
            >
              {svg}
            </NavLink>
          ) : label === "customer" && isLoggedIn ? (
            <PopoverCustomer icon={svg} authName={name} />
          ) : (
            <button
              onClick={() => handleClick(label)}
              className="relative hover:scale-110"
              aria-label={label === "search" && "search"}
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

// customer popover
const PopoverCustomer = ({ icon, authName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogOut());
    navigate("/customer");
  };

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <button>{icon}</button>
      </PopoverTrigger>
      <PopoverContent bg="#dfdfdd" w="fit-content" px={6} py={2} fontSize={18}>
        <div className="space-y-1">
          <PopoverArrow bg="#dfdfdd" />
          <h2 className="text-lg text-[#335f55] font-semibold"> {authName}</h2>
          <h1 className="text-sm text-[#a1a1af]">
            <button onClick={handleLogout} className="hover:text-black">
              logout?
            </button>
          </h1>
        </div>
      </PopoverContent>
    </Popover>
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
${({ $isSticky }) =>
  $isSticky
    ? "!bg-white border-b-gray-300"
    : "backdrop-blur-sm border-b-transparent"}
transition-all
duration-700
fixed
border-b
w-full
z-[69696969]
shadow
`;

const Nav = tw.nav`
flex
items-center
justify-between
w-[95%]
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

export const navigationLinks = [
  { label: "Home", url: "/" },
  { label: "Shop", url: "/shop" },
  { label: "Categories", url: "/categories" },
  { label: "About", url: "/about-us" },
  { label: "Contact", url: "/contact-us" },
  { label: "Dashboard", url: "/dashboard" },
];

export default React.memo(Navbar);
