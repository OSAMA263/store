import PageHero from "../../PageHero";
import ShopHeader from "./sections/ShopHeader";
import ShopProducts from "./sections/ShopProducts";
import tw from "tailwind-styled-components";
import FilterCategories from "./sections/FilterCategories";
import ShopContextProvider from "../../context/ShopContextProvider";
import NavigateAnimation from "../../layout/NavigateAnimation";
import ContentContainer from "../../layout/ContentContainer";

export default function Shop() {

  return (
    <NavigateAnimation>
      <ShopContextProvider>
        <PageHero title="Shopping Products">
          <h1 className="text-lightGray">Shop</h1>
        </PageHero>
        {/* header */}
        <ShopHeader />
        {/* products grid && filter categories */}
        <ContentContainer>
          <MainSection>
            <FilterCategories />
            {/* products grid */}
            <ShopProducts />
          </MainSection>
        </ContentContainer>
      </ShopContextProvider>
    </NavigateAnimation>
  );
}

const MainSection = tw.div`
flex 
gap-x-4
`;
