import { Slide } from "@chakra-ui/react";
import tw from "tailwind-styled-components";
import { NavLink, useLocation } from "react-router-dom";
import SlideBody from "../drawersContent/SlideBody";
import SlideCartFooter from "../drawersContent/SlideCartFooter";
import SearchDrawer from "../drawersContent/SearchDrawer";
import SlideHeader from "../drawersContent/SlideHeader";
import React, { useEffect } from "react";
import { SocialContact } from "./Footer";

function SideDrawer(props) {
  const { drawerIsOpen, setDrawerIsOpen, drawer } = props;
  const { pathname } = useLocation();

  const handleCloseDrawer = () => {
    setDrawerIsOpen(false);
  };

  useEffect(() => {
    handleCloseDrawer();
  }, [pathname]);

  return (
    <>
      {drawer !== "search" && (
        <Overlay $drawerIsOpen={drawerIsOpen} onClick={handleCloseDrawer} />
      )}
      <Slide
        className={`z-[6969696996] !h-screen ${
          drawer !== "search"
            ? "!w-full md:!max-w-[380px]"
            : "bg-white w-screen"
        }`}
        direction="right"
        in={drawerIsOpen}
        transition={{ enter: { duration: 0.5 }, exit: { duration: 0.5 } }}
      >
        {drawer === "search" ? (
          <SearchDrawer handleClick={handleCloseDrawer} />
        ) : (
          <SlideContainer>
            {/* HEADER */}
            <SlideHeader {...{ handleCloseDrawer, drawer }}></SlideHeader>
            {/* BODY */}
            <SlideBody {...{ drawer }}></SlideBody>
            {/* FOOTER */}
            <SlideFooter>
              {/* wishlist side slider */}
              {drawer === "wishlist" ? (
                <NavLink onClick={handleCloseDrawer} to="/wishlist">
                  VIEW WISHLIST
                </NavLink>
              ) : // cart side slider
              drawer === "cart" ? (
                <SlideCartFooter>
                  <NavLink onClick={handleCloseDrawer} to="/cart">
                    VIEW CART
                  </NavLink>
                  <NavLink onClick={handleCloseDrawer} to="/checkout">
                    CHECKOUT
                  </NavLink>
                </SlideCartFooter>
              ) : drawer === "navlinks" ? (
                // side navbar social links
                <div className="flex flex-col gap-y-8 items-center !text-black">
                  <h1>get in touch with us </h1>
                  <SocialContact />
                </div>
              ) : null}
            </SlideFooter>
          </SlideContainer>
        )}
      </Slide>
    </>
  );
}

const SlideContainer = tw.div`
h-[100dvh]
bg-white
p-5
flex 
flex-col
gap-y-4
`;

const SlideFooter = tw.div`
space-y-4
text-white
flex
flex-col
[&>a:hover]:bg-thickRed
[&>a]:bg-[#333333]
[&>a]:font-semibold
[&>a]:py-2
[&>a]:text-sm
[&>a]:text-center
`;

const Overlay = tw.div`
bg-black
absolute
left-0
z-[69699969]
w-screen
h-full
transition-all
duration-300
${({ $drawerIsOpen }) =>
  $drawerIsOpen ? "bg-opacity-25" : "bg-opacity-0 invisible !-z-10"}
`;
export default React.memo(SideDrawer);
