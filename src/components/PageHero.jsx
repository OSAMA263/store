import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import React, { cloneElement } from "react";
import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components";

export default function PageHero({ title, children }) {
  return (
    <Hero>
      <div className="w-[60%] mx-auto space-y-10">
        <h1 className="text-5xl">{title}</h1>
        <Breadcrumb>
          <BreadcrumbItem>
            <NavLink to="/">Home</NavLink>
          </BreadcrumbItem>
          {React.Children.map(children, (child) => {
            return <BreadcrumbItem>{cloneElement(child)}</BreadcrumbItem>;
          })}
        </Breadcrumb>
      </div>
    </Hero>
  );
}

const Hero = tw.div`
bg-[url('/bg.png')]
bg-cover 
bg-center
py-28
`;
