import CategoryCard from "./sections/CategoryCard";
import PageHero from "../../PageHero";
import tw from "tailwind-styled-components";
import PageHeader from "../../PageHeader";
import SpecialDeal from "./sections/SpecialDeal";

export default function Categories() { 

  return (
    <>
      <PageHero title="Product Categories">
        <h1 className="text-lightGray">Categories</h1>
      </PageHero>
      <PageHeader
        text="This is where to find your satisfactory products"
        title="Categories"
      />
      <GridSection />
      <SpecialDeal />
    </>
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
            className={(i + 1) % 2 == 0 ? "flex-col-reverse" : "flex-col"}
            key={i}
          >
            <CategoryCard productsAmount={20} name={cat}></CategoryCard>
          </CardContainer>
        ))
      ) : (
        <span className="h-screen">loading</span>
      )}
    </Grid>
  );
};
// function returns span > "pls wait loading "*after 1sec* "if this taking too long relod bitch"<
const Grid = tw.div`
grid
grid-cols-4
gap-x-10
gap-y-20
w-[95%]
mx-auto
`;

const CardContainer = tw.div`
[&_.btn-visible]:hover:-translate-y-4
[&_h1]:hover:opacity-0
[&_h1]:hover:invisible
[&_button]:hover:!opacity-100
[&_img]:hover:scale-150
[&_img]:hover:brightness-90
[&_.img-border]:hover:border-white
flex
`;
