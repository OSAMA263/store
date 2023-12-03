import tw from "tailwind-styled-components";
import PageHeader from "../../../PageHeader";
import MainButton from "../../../shared/MainButton";

export default function Form() {
  return (
    <Container>
      <PageHeader title="Get in touch" text="" />
      <TheForm onSubmit={(e)=>e.preventDefault()}>
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
      </TheForm>
    </Container>
  );
}

const Container = tw.div`
text-center
[&_input]:w-full
[&_textarea]:w-full
`;

const TheForm = tw.form`
flex
flex-col
sm:gap-y-20
gap-y-6
`;
