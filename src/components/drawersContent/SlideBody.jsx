import { AiOutlineClose } from "react-icons/ai";
import tw from "tailwind-styled-components";

export default function SlideBody({ drawer }) {
  return (
    <Container>
      <Product>
        {/* {product details} */}
        <div className="flex gap-x-2 items-start">
          <img className="w-20 h-24" src="/bg.png" alt="" />
          <div>
            <h1>the name pro</h1>
            <p>
              {drawer === "cart" && <small className="text-xs">1 x </small>}
              <span className="font-bold text-sm">$10.00</span>
            </p>
          </div>
        </div>
        {/* remove button */}
        <button className="text-xs hover:text-thickRed duration-75">
          <AiOutlineClose />
        </button>
      </Product>
    </Container>
  );
}

const Product = tw.div`
flex 
items-start 
justify-between 
py-4
`;

const Container = tw.div`
overflow-auto
border-b
divide-y-[1px]
`;

