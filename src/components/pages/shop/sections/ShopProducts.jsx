import Card from "../../../Card";
import tw from "tailwind-styled-components";
import SingleProduct from "../../../SingleProduct";

export default function ShopProducts({ gridCols }) {
  return (
    <Container $columns={gridCols}>
      {Array.from({ length: 9 }).map((card, i) =>
        gridCols === 1 ? (
          <SingleProduct key={"card" + i} />
        ) : (
          <Card key={"card" + i} imgH="h-[300px]" />
        )
      )}
    </Container>
  );
}

const Container = tw.div`
${({ $columns }) =>
  $columns === 3
    ? "grid-cols-3"
    : $columns === 4
    ? "grid-cols-4"
    : "grid-cols-1"}
grid 
gap-x-4
gap-y-8
w-[80%]
`;
