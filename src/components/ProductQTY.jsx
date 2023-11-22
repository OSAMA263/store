import tw from "tailwind-styled-components";

export default function ProductQuantity ({product}) {
  
  return (
    <QuentityWrapper>
      <button>-</button>
      <span>{product.QTY??1}</span>
      <button>+</button>
    </QuentityWrapper>
  );
}

const QuentityWrapper = tw.div`
[&>button]:text-black
[&>button]:text-2xl
[&>button:hover]:text-thickRed
flex 
items-center 
justify-between 
text-lg
font-semibold 
border-b 
border-black
gap-x-10
pb-2
`;
