import tw from "tailwind-styled-components";
import { CardContainer, ItemImage } from "./Card";
import MainButton from "./MainButton";

export default function SingleProduct() {
  return <OneColumn />;
}

const OneColumn = () => {
  return (
    <>
      <CardContainer $oneColumn="grid grid-cols-2 gap-x-6">
        <ItemImage shopOneColumn="!h-full" imgH="h-[400px]" />
        <CardBody>
          <div>
            <h2 className="text-xl">product name</h2>
            <p>
              <small>11</small>
              <small className="!text-black">64</small>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam
            numquam. Expedita, repellendus quisquam? Sint, similique minima
            recusandae porro quibusdam nulla, aliquid esse necessitatibus optio
            tempora excepturi suscipit natus magnam.
          </p>
          <MainButton>ADD TO CART</MainButton>
        </CardBody>
      </CardContainer>
    </>
  );
};

const CardBody = tw.div`
space-y-6
`;
