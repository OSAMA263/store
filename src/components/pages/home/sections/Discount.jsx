import tw from "tailwind-styled-components";
import MainButton from "../../../shared/MainButton";
import { NavLink } from "react-router-dom";

function Discount() {
  return (
    <Container>
      <img src="home/discount.webp" loading="lazy" width={800} height={300} alt="dicount" />
      <div className="text-2xl text-center sm:text-4xl">
        <h1 className="mb-1">Up To 40% Off Final Sale Items.</h1>
        <h1>Caught in the moment! </h1>
      </div>
      <MainButton>
        <NavLink to="/shop">SHOP NOW</NavLink>
      </MainButton>
    </Container>
  );
}

export default Discount;

const Container = tw.div`
gap-y-10
flex 
flex-col
justify-center
items-center
`;
