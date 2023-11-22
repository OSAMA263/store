import tw from "tailwind-styled-components";
import PageHeader from "../../../PageHeader";
import MainButton from "../../../shared/MainButton";

export default function Form() {
  return (
    <Container>
      <PageHeader title="Get in touch" text="" />
      <FormWrapper>
        <div className="flex gap-x-4">
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            placeholder="First Name *"
          />
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Email *"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          autoComplete="off"
        />
        <textarea
          rows={6}
          name="message"
          placeholder="Message"
          autoComplete="off"
        ></textarea>
        <MainButton>
          <button>SUBMIT</button>
        </MainButton>
      </FormWrapper>
    </Container>
  );
}

const Container = tw.div`
space-y-12
text-center
w-[60%]
mx-auto
[&_input]:w-full
[&_textarea]:w-full
my-28
`;

const FormWrapper = tw.form`
flex
flex-col
gap-y-20
w-[80%]
mx-auto
`;
