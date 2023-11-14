import tw from "tailwind-styled-components";
import Card from "../../../Card";
import PageHeader from "../../../PageHeader";

export default function NewProducts() {
  return (
    <Container>
      <PageHeader
        text="This is where to find your satisfactory products"
        title="New Products"
      />
      <Grid />
      <div className="flex justify-center">
        <button className="mt-10 font-bold transition-all hover:text-[#d7122a]">
          + SEE MORE ...
        </button>
      </div>
      {/* the button will load more new products */}
    </Container>
  );
}

const Grid = () => {
  return (
    <GridWrapper>
      {Array.from({ length: 9 }).map((_, i) => (
        <Card imgH="h-[500px]" key={i} />
      ))}
    </GridWrapper>
  );
};

const GridWrapper = tw.div`
grid
grid-cols-3
gap-12
`;

const Container = tw.div`
my-40
w-[65%]
mx-auto
container
`;
