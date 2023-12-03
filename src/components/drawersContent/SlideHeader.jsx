import { AiOutlineClose } from "react-icons/ai";
import tw from "tailwind-styled-components";

export default function SlideHeader({ handleCloseDrawer, drawer }) {
  return (
    <Container>
      {drawer === "navlinks" ? (
        <img src="logo.webp" height={32} width={32} alt="logo" />
      ) : (
        <h1>{drawer === "cart" ? "Cart" : "Wishlist"}</h1>
      )}
      <button
        aria-label="close-drawer"
        onClick={handleCloseDrawer}
        className="hover:[&>svg]:rotate-90"
      >
        <AiOutlineClose />
      </button>
    </Container>
  );
}

const Container = tw.div`
flex 
border-b
justify-between
font-semibold
pb-2
`;
