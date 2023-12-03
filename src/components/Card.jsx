import tw from "tailwind-styled-components";
import CardElements from "./CardElements";
import { ProductBody } from "./pages/single product/sections/ProductFullDetails";
import { addToCart } from "../state/slices/client/UsersSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useUserState } from "../state/useStates";
import LazyImage from "./LazyImage";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Toast from "./Toast";

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
          <ItemDetails {...{ title, orignalPrice, price, product }} />
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
          gridCols !== 1 ? "h-[300px]":"lg:h-[500px] h-[400px]"
        } cursor-pointer relative`}
      >
        <NavLink className="[&_img]:object-cover" to={"/shop/" + productID}>
          <LazyImage
            src={thumbnail.img1}
            placeholder
            effect
            styles="img-1 z-[2] absolute w-full !h-full"
          />
          <div className="absolute top-0 w-full h-full transition-all duration-700 opacity-0 img-2">
            <LazyImage
              src={thumbnail.img2}
              styles="w-full !h-full"
              placeholder
              effect
            />
          </div>
        </NavLink>
      </div>
      {/* card buttons options cart/wishlist... */}
      {children}
    </div>
  );
};

export const ItemDetails = (props) => {
  const { title, orignalPrice, price, product } = props;
  const dispatch = useDispatch();
  const { cart } = useUserState();
  const [btnText, setBtnText] = useState("");

  const foundInCart = cart.find((pro) => pro.id === Number(product.id));
  const toastProps = {
    title: product.title,
    state: "cart",
    action: "add",
  };

  // update button text
  useEffect(() => {
    if (foundInCart) {
      setBtnText(`(${foundInCart.QTY}) Item in cart`);
      if (foundInCart.QTY === foundInCart.stock) {
        setBtnText("- Out of stock");
      }
    } else {
      setBtnText("+ Add to cart");
    }
  }, [foundInCart, cart]);
  // handle add to cart and the toast
  const handleAddToCart = () => {
    if (foundInCart) {
      if (foundInCart.QTY === foundInCart.stock) {
        Toast({ ...toastProps, action: "maxmum" });
        return;
      } else {
        dispatch(addToCart({ product }));
        Toast({ ...toastProps, action: "added" });
      }
    } else {
      dispatch(addToCart({ product }));
      Toast({ ...toastProps });
    }
  };

  return (
    <>
      {/*cardProduct name & buy btn */}
      <NameWrapper>
        <h1 className="block text-lg font-semibold text-lightGray">{title}</h1>
        <RedTextBtn>
          <button
            className={foundInCart && "text-black"}
            onClick={() => handleAddToCart(product)}
          >
            {btnText}
          </button>
        </RedTextBtn>
      </NameWrapper>
      {/* price */}
      <p className="flex items-center space-x-2 font-bold">
        <small className="line-through opacity-50">{orignalPrice.toLocaleString("en")}</small>
        <small>{price.toLocaleString("en")}</small>
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
  $oneColumn === 1 && "grid gap-y-4 sm:grid-cols-2 sm:gap-x-6 items-center"}
`;
const cardVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { type: "tween" } },
  exit: { opacity: 0 },
};
export default Card;
