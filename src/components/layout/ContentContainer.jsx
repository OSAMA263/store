import tw from "tailwind-styled-components";

export default function ContentContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = tw.div`
space-y-24
my-40
2xl:w-[70%]
xl:w-[80%]
lg:w-[90%]
md:w-[95%]
sm:mx-auto
mx-4
`;
