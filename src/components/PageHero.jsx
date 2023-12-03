import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import React, { cloneElement } from "react";
import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components";

export default function PageHero({ title, children }) {
  return (
    <Hero>
      <Container>
        <h1 className="text-xl lg:text-5xl sm:text-3xl">{title}</h1>
        <Breadcrumb>
          <BreadcrumbItem>
            <NavLink to="/">Home</NavLink>
          </BreadcrumbItem>
          {React.Children.map(children, (child) => {
            return <BreadcrumbItem>{cloneElement(child)}</BreadcrumbItem>;
          })}
        </Breadcrumb>
      </Container>
    </Hero>
  );
}

const Hero = tw.div`
bg-[url('/home/page-hero-bg.webp')]
bg-cover 
bg-center
py-28
overflow-hidden
relative
`;

const Container=tw.div`
2xl:w-[65%]
xl:w-[80%]
lg:w-[90%]
md:w-[95%]
container
sm:mx-auto 
mx-4
space-y-10
`