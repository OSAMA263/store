import { Fragment } from "react";
import PageHeader from "../../PageHeader";
import PageHero from "../../PageHero";
import { brandsData, contactData } from "./data";
import Testimonial from "./sections/Testimonial";
import Video from "./sections/Video";
import { NavLink } from "react-router-dom";
import MainButton from "../../shared/MainButton";
import NavigateAnimation from "../../layout/NavigateAnimation";
import ContentContainer from "../../layout/ContentContainer";
import tw from "tailwind-styled-components";

export default function About() {
  return (
    <NavigateAnimation>
      <PageHero title="About Us">
        <h1 className="text-lightGray">About</h1>
      </PageHero>
      <MainContent />
    </NavigateAnimation>
  );
}

const MainContent = () => {
  return (
    <>
      <ContentContainer>
        <h1 className="text-[#333333] text-center font-semibold">
          SIMPLY OR WHITE
        </h1>
        <PageHeader title="Clever & unique ideas" />
        <Video />
        <ContactInfo />
      </ContentContainer>
      <Testimonial />
      <Brands />
    </>
  );
};

const Brands = () => {
  return (
    <div className="my-32 space-y-20 text-center">
      <h1 className="text-3xl sm:text-5xl">Our Brands</h1>
      <BrandsGrid>
        {brandsData.map((img, i) => (
          <li className="flex justify-center" key={i}>
            <img src={img} className="w-24 sm:w-auto" loading="lazy" alt={"brand-" + i} />
          </li>
        ))}
      </BrandsGrid>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="grid gap-x-4 gap-y-12 md:grid-cols-2">
      <ul className="space-y-6 text-sm font-semibold">
        {contactData.map(({ contact, info }, i) => (
          <Fragment key={i}>
            <li>{contact}</li>
            <li className="text-lightGray">{info}</li>
          </Fragment>
        ))}
      </ul>
      <div className="space-y-6">
        <h1 className="font-semibold leading-loose text-lightGray">
          Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
          suscipit sagittis leo sit estibulum issim Lorem ipsum dolor sit amet,
          consectetur cing elit. ipsum dolor sit amet, consectetur cing elit.
          Suspe ndisse suscipit sagittis leo sit es
        </h1>
        <MainButton>
          <NavLink to="/shop">+ ONLINE STORE</NavLink>
        </MainButton>
      </div>
    </div>
  );
};

const BrandsGrid=tw.div`
grid 
items-center 
md:grid-cols-6 
grid-cols-3

space-y-2 
justify-evenly 
lg:gap-x-20
sm:gap-x-10 
`