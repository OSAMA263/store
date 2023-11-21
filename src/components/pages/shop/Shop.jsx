import PageHero from "../../PageHero";
import ShopHeader from "./sections/ShopHeader";
import ShopProducts from "./sections/ShopProducts";
import tw from "tailwind-styled-components";
import FilterCategories from "./sections/FilterCategories";
import ShopContextProvider from "../../context/ShopContextProvider";

export default function Shop() {

  return (
    <ShopContextProvider>
      <div>
        <PageHero title="Shopping Products">
          <h1 className="text-lightGray">Shop</h1>
        </PageHero>
        {/* header */}
        <ShopHeader />
        {/* products grid && filter categories */}
        <MainSection>
          <FilterCategories />
          {/* products grid */}
          <ShopProducts />
        </MainSection>
      </div>
    </ShopContextProvider>
  );
}

const MainSection = tw.div`
my-28 
w-[60%] 
mx-auto
flex 
gap-x-4
`;
