import tw from "tailwind-styled-components";

export default function ContentContainer({ children, className = "" }) {
  return <Container className={className}>{children}</Container>;
}

const Container = tw.div`
sm:space-y-24
space-y-14
my-40
2xl:w-[70%]
xl:w-[80%]
lg:w-[90%]
md:w-[95%]
sm:mx-auto
mx-4
`;
