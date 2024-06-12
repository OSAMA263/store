import { useDispatch } from "react-redux";
import MainButton from "../../../shared/MainButton";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../../../state/slices/client/UsersSlice";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { LuGitCompare } from "react-icons/lu";
import tw from "tailwind-styled-components";
import { useUserState } from "../../../../state/useStates";
import ProductQuantity from "../../../ProductQTY";
import { useState } from "react";
import Toast from "../../../Toast";
import { useNavigate } from "react-router";

export default function ProductFullDetails() {
  return null;
}

export const ProductBody = ({ quantity, product }) => {
  const { title, discountPercentage, price, description, rating, brand } =
    product;
  const { auth } = useUserState();
  const [qty, setQty] = useState(1);
  const orignalPrice = Math.floor(
    price / (1 - Math.floor(discountPercentage) / 100)
  );

  const foundInCart = auth.cart.find((pro) => pro.id === Number(product.id));
  const availableQTY = foundInCart
    ? foundInCart.stock - (foundInCart.QTY ?? 0)
    : product.stock;

  return (
    <div className="sm:space-y-6 space-y-2">
      {/* product name & price */}
      <div className="flex flex-col font-semibold gap-y-2">
        <Rating rating={rating} />
        <h2 className="text-2xl sm:text-3xl">{title}</h2>
        <small>{brand}</small>
        <p>available stocks:{availableQTY}</p>
      </div>
      <h2 className="space-x-3 font-semibold">
        <span className="line-through text-lightGray">
          ${orignalPrice.toLocaleString("en")}
        </span>
        <span>${price.toLocaleString("en")}</span>
      </h2>

      {/* product description */}
      <p className="leading-relaxed sm:font-medium text-lightGray">
        {description}
      </p>
      {/* prodcut button options */}
      <div className="flex items-center gap-x-20">
        {quantity && (
          <>
            <h1 className="font-semibold">Quantity</h1>
            <ProductQuantity {...{ qty, setQty, availableQTY, foundInCart }} />
          </>
        )}
      </div>
      <ModalButtons {...{ product, qty, setQty }} />
    </div>
  );
};

// modal action buttons--------
const ModalButtons = ({ product, qty, setQty }) => {
  const dispatch = useDispatch();
  const { auth } = useUserState();
  const navigate = useNavigate();
  const foundInCart = auth.cart.find((pro) => pro.id === Number(product.id));
  const inWishlist = auth.wishlist.find((pro) => pro.id === Number(product.id));

  const toastProps = {
    title: product.title,
    state: "cart",
    action: "add",
    qty,
  };

  const handleWishlist = () => {
    if (auth.isLoggedIn) {
      if (inWishlist) {
        Toast({ ...toastProps, state: "wishlist", action: "remove" });
        dispatch(removeFromWishlist(product.id));
      } else {
        Toast({ ...toastProps, state: "wishlist", action: "add" });
        dispatch(addToWishlist(product));
      }
    } else {
      navigate("/customer");
    }
  };

  // toast and adding th product to the satet and stuff ..yeah
  const handleAddToCart = () => {
    if (auth.isLoggedIn) {
      if (foundInCart) {
        if (foundInCart.QTY === foundInCart.stock) {
          Toast({ ...toastProps, action: "maxmum" });
          return;
        } else {
          dispatch(addToCart({ product, qty }));
          Toast({ ...toastProps, action: "added" });
        }
      } else {
        dispatch(addToCart({ product, qty }));
        Toast({ ...toastProps });
      }
    } else {
      navigate("/customer");
    }
    setQty(1);
  };

  return (
    <div className="flex justify-start gap-x-3">
      <MainButton>
        <button onClick={handleAddToCart}>
          {foundInCart ? "ADDED IN CART" : "ADD TO CART"}
        </button>
      </MainButton>
      <OptionBtn
        className={inWishlist && "bg-[#333333] text-white"}
        onClick={handleWishlist}
        aria-label="wishlist"
      >
        <AiOutlineHeart />
      </OptionBtn>
      {/* <OptionBtn aria-label="compare">
        <LuGitCompare />
      </OptionBtn> */}
    </div>
  );
};

// rating stars
const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 });
  const rate = Math.floor(Number(rating));

  return (
    <span className="flex text-2xl gap-1">
      {stars.slice(0, rate).map((_, i) => (
        <small key={"star" + i}>
          <IoIosStar className="!text-yellow-300" />
        </small>
      ))}
      {stars.slice(rate, stars.length).map((_, i) => (
        <small key={"unfilled star" + i}>
          <IoIosStarOutline />
        </small>
      ))}
    </span>
  );
};

const OptionBtn = tw.button`
sm:p-3
p-2
border
border-gray-500
`;
