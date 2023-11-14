import tw from "tailwind-styled-components";

export default function MainButton({ children ,label}) {
  return (
    <Button aria-label={label}>
      <Line className="w-[2px] bottom-0 right-0" id="r-line" />
      <Line className="h-[2px] left-0 bottom-0" id="b-line" />
      <Line className="w-[2px] top-0 left-0" id="l-line" />
      <Line className="h-[2px] right-0 top-0" id="t-line" />
      {children}
    </Button>
  );
}

const Button = tw.button`
px-10
py-3
text-center
bg-[#333333]
text-white
font-semibold
!text-sm
tracking-widest
hover:bg-transparent
hover:text-[#333333]
w-fit
mx-auto
relative
[&>#r-line]:hover:h-full
[&>#b-line]:hover:w-full
[&>#l-line]:hover:h-full
[&>#t-line]:hover:w-full
`;

const Line = tw.div`
absolute
bg-[#333333]
transition-all 
duration-[1.2s]
delay-200
w-0
h-0
`;

