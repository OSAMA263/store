import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import tw from "tailwind-styled-components";
import MainButton from "./shared/MainButton";
import LazyImage from "./LazyImage";
import NoProductsAdded from "./pages/Cart& Wishlist/NoProductsAdded";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  clearCart,
  removeFromCart,
  removeFromWishlist,
  clearWishlist,
} from "../state/slices/client/UsersSlice";
import { useDispatch } from "react-redux";

export default function ProductsTable(props) {
  const { TBodyContent, THeadContent, TFootContent, products } = props;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  // remove one product
  const removeProductHandler = (product) => {
    pathname === "/cart"
      ? dispatch(removeFromCart(product.id))
      : dispatch(removeFromWishlist(product.id));
  };
  // remove all the products
  const removeAllProductsHandler = () => {
    pathname === "/cart" ? dispatch(clearCart()) : dispatch(clearWishlist());
  };
  return (
    <>
      {products.length > 0 ? (
        <TableContainer border="1px solid #dbd9d9" borderRadius="20px">
          <Table
            style={{ borderCollapse: "separate", borderSpacing: "1rem" }}
            variant="simple"
            colorScheme="blackAlpha"
          >
            {/* TABLE HEAD */}
            <Thead>
              <Tr>
                <Th>PRODUCT</Th>
                <Th>PRICE</Th>
                {/* THE PROPS */}
                <THeadContent />
              </Tr>
            </Thead>
            {/* -------------------TABLE---- BODY---------------- */}
            <Tbody className="!space-y-10">
              <AnimatePresence>
                {products.map((pro) => (
                  <Tr as={motion.tr} {...productVarints} layout key={pro.id}>
                    <Td>
                      <Product pro={pro} />
                    </Td>
                    <Td fontWeight="semibold">
                      ${pro.price.toLocaleString("en")}
                    </Td>
                    {/* THE PROPS */}
                    <TBodyContent product={pro} />
                    <Td>
                      <RemoveButton
                        aria-label="remove-product"
                        onClick={() => removeProductHandler(pro)}
                      >
                        <AiOutlineClose />
                      </RemoveButton>
                    </Td>
                  </Tr>
                ))}
              </AnimatePresence>
            </Tbody>
            {/* TABLE FOOT */}
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <TFootContent />
                <Th>
                  {/* clrea all products */}
                  <MainButton>
                    <button onClick={removeAllProductsHandler}>
                      {pathname === "/cart" ? "CLEAR CART" : "CLEAR WISHLIST"}
                    </button>
                  </MainButton>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      ) : (
        //no products was found
        <NoProductsAdded />
      )}
    </>
  );
}

const Product = ({ pro }) => {
  return (
    <div className="flex items-center gap-x-8 [&>span]:!w-auto ">
      <NavLink to={"/shop/" + pro.id}>
        <LazyImage
          effect
          styles="!w-24 !h-32 object-cover"
          src={pro.thumbnail}
        />
      </NavLink>
      <div>
        <h1 className="font-semibold">{pro.title}</h1>
        <h1 className="font-sm text-lightGray">{pro.brand}</h1>
      </div>
    </div>
  );
};

const productVarints = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const RemoveButton = tw.button`
border 
border-lightGray
hover:border-thickRed 
[&>svg]:hover:text-thickRed 
p-3
rounded-sm
mx-auto
`;

// {<div className="flex items-center text-xl font-semibold border-b gap-x-8">
// <button>+</button>
// <h1>1</h1>
// <button>-</button>
// </div>

// <div className="bg-[#f7f7f7] space-y-10 p-10 w-[20%]">
// <h1 className="text-2xl text-center">Cart totals</h1>
// <div className="flex justify-between text-sm">
//   <span>SUBTOTAL</span>
//   <span className="font-semibold">$300.2</span>
// </div>
// <div className="flex justify-between">
//   <span className="">TOTAL</span>
//   <span className="text-2xl font-bold">$300.2</span>
// </div>
// <MainButton>PROCEED TO CHECKOUT</MainButton>
// </div>}
