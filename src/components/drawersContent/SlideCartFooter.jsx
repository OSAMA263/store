import tw from "tailwind-styled-components";
import { useUserState } from "../../state/useStates";

export default function SlideCartFooter({ children }) {
  const { auth } = useUserState();

  const TOTAL = auth.cart.reduce((acc, pro) => acc + pro.price * pro.QTY,0).toLocaleString("en");
  return (
    <>
      <Container>
        <h1>Subtotal:</h1>
        <h1>${TOTAL}</h1>
      </Container>
      {children}
      <h1 className="font-semibold text-lightGray">
        Free Shipping on All Orders Over $100!
      </h1>
    </>
  );
}

const Container = tw.div`
flex 
text-black 
justify-between 
border-y 
py-2 
font-bold 
text-base
`;
