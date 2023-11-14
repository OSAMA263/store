import tw from "tailwind-styled-components";
import CategoryCard from "./CategoryCard";

export default function GridSection(){
  const category = JSON.parse(localStorage.categories);

  return (
    <Grid>
      {category.length > 0 ? (
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
}
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
