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
import { navigationLinks } from "../shared/Navbar";

export default function SlideBody({ drawer }) {
  const { auth } = useUserState();
  const {cart,wishlist}=auth
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  // handle removeing product
  const removeProductHandler = (id) => {
    drawer === "cart"
      ? dispatch(removeFromCart(id))
      : dispatch(removeFromWishlist(id));
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
      {/*display the navbar links only */}
      {drawer === "navlinks" ? (
        <NavLinks>
          {navigationLinks.map(({ label, url }) => (
            <li key={label + "side link"}>
              <NavLink to={url}>{label}</NavLink>
            </li>
          ))}
        </NavLinks>
      ) : (
        // cart || wishlist sides slider
        <AnimatePresence>
          {products.length > 0 ? (
            products.map(({ id, thumbnail, title, brand, QTY, price }) => (
              <Product {...productVarints} layout key={id}>
                {/* {product details} */}
                <div className="flex items-start gap-x-2">
                  <NavLink to={"/shop/" + id}>
                    <img
                      className="object-cover w-20 h-24"
                      src={thumbnail}
                      alt="product-image"
                    />
                  </NavLink>
                  <div className="space-y-1">
                    <h1 className="font-bold ">{title}</h1>
                    <p>{brand}</p>
                    <p>
                      <span className="text-sm font-semibold">
                        ${price.toLocaleString("en")}
                      </span>
                      {drawer === "cart" && (
                        <small className="text-xs"> x{QTY} </small>
                      )}
                    </p>
                  </div>
                </div>
                {/* remove button */}
                <button
                  aria-label="remove-product"
                  onClick={() => removeProductHandler(id)}
                  className="text-xs duration-75 hover:text-thickRed"
                >
                  <AiOutlineClose />
                </button>
              </Product>
            ))
          ) : (
            <span className="text-lightGray">Your {drawer} is empty.</span>
          )}
        </AnimatePresence>
      )}
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
divide-y-[1px]
mb-auto
pe-1
h-full
`;

const NavLinks=tw.ul`
p-10
space-y-8
[&_a.active]:text-black
[&_a]:text-lightGray
text-xl
`
