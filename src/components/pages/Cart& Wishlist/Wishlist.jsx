import { Td, Th } from "@chakra-ui/react";
import PageHero from "../../PageHero";
import ProductsTable from "../../ProductsTable";
import { useUserState } from "../../../state/useStates";
import MainButton from "../../shared/MainButton";

export default function Wishlist() {
  const { wishlist } = useUserState();

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
            products: wishlist,
          }}
        />
      </div>
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
const TBodyContent = ({product}) => {
  return (
    <>
      {/* ADD BUTTON */}
      <Td>
        <span className="flex justify-center">
          <MainButton>
            <button>ADD TO CART</button>
          </MainButton>
        </span>
      </Td>
    </>
  );
};

const TFootContent = () => {
  return null;
};
