import tw from "tailwind-styled-components";

export default function ContentContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = tw.div`
space-y-24
my-40
w-[60%] 
mx-auto
`;
