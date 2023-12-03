import PageHero from "../../PageHero";
import ContentContainer from "../../layout/ContentContainer";
import NavigateAnimation from "../../layout/NavigateAnimation";
import Form from "./sections/Form";
import tw from "tailwind-styled-components";

export default function Customer() {
  return (
    <NavigateAnimation>
      <PageHero title="Customer Login">
        <h1 className="text-lightGray">Register & Login</h1>
      </PageHero>
      {/* forms */}
      <ContentContainer>
        im still working on it mate:)
        <Container>
          <LoginForm />
          <RegisterForm />
        </Container>
      </ContentContainer>
    </NavigateAnimation>
  );
}

const LoginForm = () => {
  const formProps = {
    bg: "bg-[#f7f7f7]",
    title: "Login",
    text: "Good to have you back!",
    btn: "LOGIN",
  };

  return (
    <Form {...formProps}>
      <input name="name" type="text" placeholder="Username or email address" />
      <input name="password" type="text" placeholder="Password" />
    </Form>
  );
};

const RegisterForm = () => {
  const formProps = {
    bg: "",
    title: "Register",
    text: "If you don’t have an account, register now!",
    btn: "CREATE ACCOUNT",
  };

  return (
    <Form {...formProps}>
      <input name="name" type="text" placeholder="Username" />
      <input name="email" type="text" placeholder="Email address" />
      <input name="password" type="text" placeholder="Password" />
    </Form>
  );
};

const Container = tw.div`
grid 
md:grid-cols-2
gap-y-8
lg:gap-x-20
gap-x-3
`;
