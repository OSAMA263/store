import { CardContainer, ItemImage } from "./Card";
import MainButton from "./shared/MainButton";

export default function ProductFullWidth({ imgH = "h-[400px]" }) {
  return (
    <CardContainer $oneColumn="grid grid-cols-2 gap-x-6">
      <ItemImage fullHImg="!h-full" imgH={imgH} />
      <CardBodyFullWidth></CardBodyFullWidth>
    </CardContainer>
  );
}

export const CardBodyFullWidth = ({ QTY, moreOptionBtns }) => {
  return (
    <div className="space-y-8">
      {/* product name & price */}
      <h2 className="text-3xl font-semibold">product name</h2>
      <p className="space-x-3 font-semibold">
        <span className="text-lightGray line-through">$11</span>
        <span>$64</span>
      </p>
      {/* product description */}
      <p className="leading-relaxed text-lightGray font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam
        numquam. Expedita, repellendus quisquam? Sint, similique minima
        recusandae porro quibusdam nulla, aliquid esse necessitatibus optio
        tempora excepturi suscipit natus magnam.
      </p>
      {/* prodcut button options */}
      <div className="gap-x-20 flex items-center">
        <h1 className="font-semibold">Quantity</h1>
        <div> {QTY}</div>
      </div>
      <div className="flex gap-x-3 justify-start">
        <MainButton>ADD TO CART</MainButton>
        {moreOptionBtns}
      </div>
    </div>
  );
};
