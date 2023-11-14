import PageHero from "../../PageHero";
import PageHeader from "../../PageHeader";
import ContactDetails from "./sections/ContactDetails";
import Form from "./sections/Form";

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us">
        <h1 className="text-lightGray">Contact</h1>
      </PageHero>
      <PageHeader title="Contact detail" text="COME HAVE A LOOK" />
      <ContactDetails />
      <Map />
      <Form />
    </>
  );
}

const Map = () => {
  return (
    <div className="flex justify-center my-28">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12075.373648696992!2d-74.084402!3d40.831403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f866a80dcc27%3A0x3e3160910d4d5045!2sHoliday%20Inn%20Express%20%26%20Suites%20Meadowlands%20Area%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2seg!4v1699765025146!5m2!1sen!2seg"
        width="60%"
        height="600"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
