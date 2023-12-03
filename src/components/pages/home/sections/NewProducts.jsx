import tw from "tailwind-styled-components";
import Card from "../../../Card";
import PageHeader from "../../../PageHeader";
import { useProductsState } from "../../../../state/useStates";

export default function NewProducts() {
  const products = useProductsState();
  const filteredProducts = products.filter((pro) => pro.new);

  return (
    <Container>
      <PageHeader
        text="This is where to find your satisfactory products"
        title="New Products"
      />
      <Grid products={filteredProducts} />
      {filteredProducts.length > 0 ? (
        <div className="flex justify-center">
          {/* the button will load more new products */}
          <button className="mt-10 font-bold transition-all hover:text-[#d7122a]">
            + SEE MORE ...
          </button>
        </div>
      ) : (
        <h1 className="text-center sm:text-3xl">no new products available</h1>
      )}
    </Container>
  );
}

const Grid = ({ products }) => {
  return (
    <GridWrapper>
      {products.map((pro, i) => (
        <Card product={pro} key={i} />
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
container
`;
