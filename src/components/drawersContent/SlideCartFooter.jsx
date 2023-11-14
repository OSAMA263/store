import tw from "tailwind-styled-components";

export default function SlideCartFooter({children}) {
  return (
    <>
      <Container>
        <h1>Subtotal:</h1>
        <h1>$300.2</h1>
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
