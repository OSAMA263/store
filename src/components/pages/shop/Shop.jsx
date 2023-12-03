import PageHero from "../../PageHero";
import ShopHeader from "./sections/ShopHeader";
import ShopProducts from "./sections/ShopProducts";
import tw from "tailwind-styled-components";
import FilterCategories from "./sections/FilterCategories";
import ShopContextProvider from "../../context/ShopContextProvider";
import NavigateAnimation from "../../layout/NavigateAnimation";
import ContentContainer from "../../layout/ContentContainer";
import { useMediaQuery } from "@chakra-ui/react";

export default function Shop() {
  const [isMdDevice] = useMediaQuery("(max-width: 1024px)", {
    ssr: false,
  });

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
            {!isMdDevice && <FilterCategories />}
            {/* products grid */}
            <ShopProducts />
          </MainSection>
        </ContentContainer>
      </ShopContextProvider>
    </NavigateAnimation>
  );
}
// header >filter on click dropdown with the filter cats
//
const MainSection = tw.div`
flex 
gap-x-4
lg:justify-between
justify-center
`;
