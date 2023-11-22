import { AiOutlineClose } from "react-icons/ai";
import tw from "tailwind-styled-components";
import { useUserState } from "../../state/useStates";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  removeFromWishlist,
} from "../../state/slices/client/UsersSlice";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function SlideBody({ drawer }) {
  const { cart, wishlist } = useUserState();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  // handle removeing product
  const removeProductHandler = (product) => {
    drawer === "cart"
      ? dispatch(removeFromCart(product))
      : dispatch(removeFromWishlist(product));
  };

  // which products to display and updateing the array
  useEffect(() => {
    if (drawer === "cart") {
      setProducts(cart);
    } else if (drawer === "wishlist") {
      setProducts(wishlist);
    } else if (drawer === "") {
      setProducts([]);
    }
  }, [drawer, cart, wishlist]);

  return (
    <Container className="drawer-scrollbar">
      <AnimatePresence >
        {products.length > 0 ? (
          products.map((pro) => (
            <Product {...productVarints} layout key={pro.id}>
              {/* {product details} */}
              <div className="flex items-start gap-x-2">
                <NavLink to={"/shop/"+pro.id}>
                  <img
                    className="object-cover w-20 h-24"
                    src={pro.thumbnail}
                    alt="product-image"
                  />
                </NavLink>
                <div className="space-y-1">
                  <h1 className="font-bold ">{pro.title}</h1>
                  <p>{pro.brand}</p>
                  <p>
                    <span className="text-sm font-semibold">${pro.price}</span>
                    {drawer === "cart" && (
                      <small className="text-xs"> x{pro.QTY} </small>
                    )}
                  </p>
                </div>
              </div>
              {/* remove button */}
              <button
                onClick={() => removeProductHandler(pro)}
                className="text-xs duration-75 hover:text-thickRed"
              >
                <AiOutlineClose />
              </button>
            </Product>
          ))
        ) : (
          <span className="text-lightGray">No items foun in {drawer}</span>
        )}
      </AnimatePresence>
    </Container>
  );
}

const productVarints = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Product = tw(motion.div)`
flex
items-start 
justify-between 
py-4 
`;

const Container = tw.div`
drawer-scrollbar
overflow-y-scroll
border-b
divide-y-[1px]
mb-auto
pe-1
`;
