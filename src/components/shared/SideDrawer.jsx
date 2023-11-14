import { Slide } from "@chakra-ui/react";
import tw from "tailwind-styled-components";
import { NavLink } from "react-router-dom";
import SlideBody from "../drawersContent/SlideBody";
import SlideCartFooter from "../drawersContent/SlideCartFooter";
import SearchDrawer from "../drawersContent/SearchDrawer";
import SlideHeader from "../drawersContent/SlideHeader";

export default function SideDrawer(props) {
  const { isOpen, setIsOpen, drawer } = props;

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {drawer !== "search" && (
        <Overlay $isOpen={isOpen} onClick={handleClick} />
      )}
      <Slide
        className={`z-[6969696996] !h-screen ${
          drawer !== "search" ? "!max-w-[380px]" : "bg-white w-screen"
        }`}
        direction="right"
        in={isOpen}
      >
        {drawer === "search" ? (
          <SearchDrawer handleClick={handleClick} />
        ) : (
          <SlideContainer>
            {/* HEADER */}
            <SlideHeader {...{ handleClick, drawer }}></SlideHeader>
            {/* BODY */}
            <SlideBody drawer={drawer}></SlideBody>
            {/* FOOTER */}
            <SlideFooter>
              {drawer === "wishlist" ? (
                <NavLink onClick={handleClick} to="/wishlist">
                  VIEW WISHLIST
                </NavLink>
              ) : (
                <SlideCartFooter>
                  <NavLink onClick={handleClick} to="/cart">
                    VIEW CART
                  </NavLink>
                  <NavLink onClick={handleClick} to="/">
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
