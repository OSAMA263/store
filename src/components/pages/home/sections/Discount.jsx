import tw from "tailwind-styled-components";
import MainButton from "../../../shared/MainButton";

function Discount() {
  return (
    <Container>
      <img src="public/bg.png" alt="" />
      <div className="text-4xl text-center">
        <h1 className="mb-1">Up To 40% Off Final Sale Items.</h1>
        <h1>Caught in the moment! </h1>
      </div>
      <MainButton>SHOP NOW</MainButton>
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
my-20
`;
