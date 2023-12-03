import CategoryCard from "./sections/CategoryCard";
import PageHero from "../../PageHero";
import tw from "tailwind-styled-components";
import PageHeader from "../../PageHeader";
import SpecialDeal from "./sections/SpecialDeal";
import NavigateAnimation from "../../layout/NavigateAnimation";
import { Spinner } from "@chakra-ui/react";
import { images } from "./data";

export default function Categories() {
  return (
    <NavigateAnimation>
      <PageHero title="Product Categories">
        <h1 className="text-lightGray">Categories</h1>
      </PageHero>
      <PageHeader
        text="This is where to find your satisfactory products"
        title="Categories"
      />
      <GridSection />
      <SpecialDeal />
    </NavigateAnimation>
  );
}

const GridSection = () => {
  const category = localStorage.categories
    ? JSON.parse(localStorage.categories)
    : null;

  return (
    <Grid>
      {category != null ? (
        category.map((cat, i) => (
          <CardContainer
            className={i % 2 == 0 ? "flex-col-reverse" : "flex-col"}
            key={i}
          >
            <CategoryCard thumbnail={images[i]} cat={cat}></CategoryCard>
          </CardContainer>
        ))
      ) : (
        <span className="flex items-center justify-center h-screen">
          <Spinner />
        </span>
      )}
    </Grid>
  );
};
const Grid = tw.div`
grid
lg:grid-cols-4
sm:grid-cols-3
grid-cols-2
gap-x-10
gap-y-20
w-[95%]
mx-auto
`;

const CardContainer = tw.div`
[&_.btn-visible]:hover:-translate-y-4
[&_h1]:hover:opacity-0
[&_h1]:hover:invisible
[&_a]:hover:!opacity-100
[&_img]:hover:scale-150
[&_img]:hover:brightness-50
[&_.img-border]:hover:border-white
flex

`;
