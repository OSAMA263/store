import { Td, Th } from "@chakra-ui/react";
import PageHero from "../../PageHero";
import ProductsTable from "../../ProductsTable";
import MainButton from "../../MainButton";
import { MdFavorite } from "react-icons/md";
import NoProductsAdded from "./NoProductsAdded";

export default function Wishlist() {
  return (
    <>
      <PageHero title="My wishlist">
        <h1 className="text-lightGray">wishlist</h1>
      </PageHero>
      <div className="my-28">
        <ProductsTable
          {...{
            TBodyContent,
            THeadContent,
            TFootContent,
            ClearAllBtn: "CLEAR CART",
          }}
        />
      </div>
      <NoProductsAdded title="No items found in wishlist" Icon={<MdFavorite />} />
    </>
  );
}

const THeadContent = () => {
  return (
    <>
      <Th></Th>
      <Th></Th>
    </>
  );
};
const TBodyContent = () => {
  return (
    <>
      {/* ADD BUTTON */}
      <Td className="!text-center !align-middle">
        <MainButton>ADD TO CART</MainButton>
      </Td>
    </>
  );
};

const TFootContent = () => {
  return null;
};
