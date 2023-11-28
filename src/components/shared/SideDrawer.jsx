import { Slide } from "@chakra-ui/react";
import tw from "tailwind-styled-components";
import { NavLink, useLocation } from "react-router-dom";
import SlideBody from "../drawersContent/SlideBody";
import SlideCartFooter from "../drawersContent/SlideCartFooter";
import SearchDrawer from "../drawersContent/SearchDrawer";
import SlideHeader from "../drawersContent/SlideHeader";
import React, { useEffect } from "react";

function SideDrawer(props) {
  const { isOpen, setIsOpen, drawer, setDrawer } = props;
  const { pathname } = useLocation();

  const handleCloseDrawer = () => {
    setIsOpen(false);
    setDrawer("");
  };

  useEffect(() => {
    handleCloseDrawer();
  }, [pathname]);

  return (
    <>
      {drawer !== "search" && (
        <Overlay $isOpen={isOpen} onClick={handleCloseDrawer} />
      )}
      <Slide
        className={`z-[6969696996] !h-screen ${
          drawer !== "search" ? "!max-w-[380px]" : "bg-white w-screen"
        }`}
        direction="right"
        in={isOpen}
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
              {drawer === "wishlist" ? (
                <NavLink onClick={handleCloseDrawer} to="/wishlist">
                  VIEW WISHLIST
                </NavLink>
              ) : (
                <SlideCartFooter>
                  <NavLink onClick={handleCloseDrawer} to="/cart">
                    VIEW CART
                  </NavLink>
                  <NavLink onClick={handleCloseDrawer} to="/checkout">
                    CHECKOUT
                  </NavLink>
                </SlideCartFooter>
              )}
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
${({ $isOpen }) =>
  $isOpen ? "bg-opacity-25" : "bg-opacity-0 invisible !-z-10"}
`;
export default React.memo(SideDrawer);
