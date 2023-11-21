import tw from "tailwind-styled-components";
import CardElements from "./CardElements";
import { ProductBody } from "./pages/single product/sections/ProductFullDetails";
import { addToCart } from "../state/slices/client/UsersSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useUserState } from "../state/useStates";
import LazyImage from "./LazyImage";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Card({ product, gridCols }) {
  const { id, title, discountPercentage, price, thumbnail } = product;
  // the pro price before the discount
  const orignalPrice = Math.floor(
    price / (1 - Math.floor(discountPercentage) / 100)
  );

  return (
    <CardContainer id={id} {...cardVariants} layout $oneColumn={gridCols}>
      <ItemImage
        gridCols={gridCols}
        productID={product.id}
        thumbnail={{ img1: thumbnail, img2: product.images[1] }}
      >
        <CardElements product={product} />
      </ItemImage>
      {/* -cardproductduct body or information shit */}
      {gridCols === 1 ? (
        <ProductBody product={product} />
      ) : (
        <div className="flex flex-col gap-y-4 justify-end mt-4 h-[20%]">
          <ItemDetails
            sharedBtnText="to cart"
            name={title}
            small1={"$" + orignalPrice}
            small2={"$" + price}
            product={product}
          />
        </div>
      )}
    </CardContainer>
  );
}

export const ItemImage = (props) => {
  const { gridCols, thumbnail, children, productID } = props;

  return (
    <div
      className={`${
        gridCols === 1 && "!h-full [&_img]:!object-fill"
      } h-[80%] overflow-hidden relative`}
    >
      {/* ------------images------ */}
      <div
        className={`${
          gridCols === 1 ? "h-[500px]" : "h-[300px]"
        } cursor-pointer relative`}
      >
        <NavLink className="[&_img]:object-cover" to={"/shop/" + productID}>
          <LazyImage
            src={thumbnail.img1}
            placeholder
            effect
            styles="img-1 z-[2] absolute w-full !h-full"
          />
          <div className="transition-all duration-700 absolute img-2 opacity-0 top-0 w-full h-full">
            <LazyImage
              src={thumbnail.img2}
              styles="w-full !h-full"
              placeholder
              effect
            />
          </div>
        </NavLink>
      </div>
      {children}
    </div>
  );
};

export const ItemDetails = (props) => {
  const { sharedBtnText, name, small1, small2, product } = props;
  const dispatch = useDispatch();
  const { cart } = useUserState();
  const [btnText, setBtnText] = useState("+ Add to cart"); /*context*/

  // check if the product is already added and update the button text

  // a big function resuable 
  const findedProduct = cart.find((pro) => pro.id === Number(product.id));
  useEffect(() => {
    if (findedProduct) {
      setBtnText("+ Added to cart");
      if (findedProduct.QTY === findedProduct.stock) {
        setBtnText("- Out of stock");
      }
    }
  }, [findedProduct]);

  const handleAddToCart = (product,qty=1) => {
    if (findedProduct) {
      if (findedProduct.QTY === findedProduct.stock) {
        console.log("out of stock");
        return;
      }
    }
    dispatch(addToCart({product,qty}));
  };

  return (
    <>
      {/*cardProduct name & buy btn */}
      <NameWrapper>
        <h1 className="block text-lg font-semibold text-lightGray">{name}</h1>
        <RedTextBtn>
          {sharedBtnText === "to cart" ? (
            <button
              className={findedProduct && "text-black"}
              onClick={() => handleAddToCart(product)}
            >
              {btnText}
            </button>
          ) : (
            <NavLink to="/shop">+ Online store</NavLink>
          )}
        </RedTextBtn>
      </NameWrapper>
      {/* price */}
      <p className="flex items-center space-x-2 font-bold">
        <small className="line-through opacity-50">
          {small1 ?? <Smallline />}
        </small>
        <small>{small2}</small>
      </p>
    </>
  );
};

const RedTextBtn = tw.span`
min-w-max 
font-medium 
text-lg 
-bottom-4 
absolute
opacity-0 
text-[#d7122a]
`;

const Smallline = tw.span`
w-10
h-[1px]
bg-[#777777]
block
`;

const NameWrapper = tw.div`
btn-visible
duration-700 
transition-all 
relative
[&>*]:transition-all
[&>*]:duration-700
`;

const CardContainer = tw(motion.div)`
[&_.img-1]:hover:opacity-0
[&_.img-2]:hover:!opacity-100
[&_.img-2]:hover:brightness-95
[&_.options]:hover:!opacity-100
[&_.options]:hover:gap-y-4
[&_.options]:hover:mt-4
[&_.btn-visible]:hover:-translate-y-4
[&_h1]:hover:opacity-0
[&_h1]:hover:invisible
[&_span]:hover:!opacity-100
rounded-sm
h-fit
overflow-hidden
relative
${({ $oneColumn }) =>
  $oneColumn === 1 && "grid grid-cols-2 gap-x-6 items-center"}
`;
const cardVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { type: "tween" } },
  exit: { opacity: 0 },
};
export default Card;
