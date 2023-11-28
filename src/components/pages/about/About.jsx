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
      <ContentContainer className="">
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
      <h1 className="text-5xl">Our Brands</h1>
      <ul className="flex justify-evenly gap-x-20">
        {brandsData.map((img, i) => (
          <li key={i}>
            <img src={img} alt={"brand-" + i} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-x-28">
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
