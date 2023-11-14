import { useState } from "react";
import PageHero from "../../PageHero";
import ShopHeader from "./sections/ShopHeader";
import ShopProducts from "./sections/ShopProducts";
import tw from "tailwind-styled-components";
import FilterCategories from "./sections/FilterCategories";

export default function Shop() {
  const [gridCols, setGridCols] = useState(3);

  return (
    <div>
      <PageHero title="Shopping Products">
        <h1 className="text-lightGray">Shop</h1>
      </PageHero>
      {/* header */}
      <ShopHeader setGridCols={setGridCols} />
      {/* products grid && filter categories */}
      <MainSection>
        <FilterCategories />
        <ShopProducts gridCols={gridCols} />
      </MainSection>
    </div>
  );
}

const MainSection = tw.div`
my-28 
w-[60%] 
mx-auto
flex 
gap-x-4
`;
