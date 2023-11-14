import PageHero from "../../PageHero";
import Form from "./sections/Form";
import tw from "tailwind-styled-components";

export default function Customer() {
  return (
    <>
      <PageHero title="Customer Login">
        <h1 className="text-lightGray">Register & Login</h1>
      </PageHero>
      {/* forms */}
      <Container>
        <LoginForm />
        <RegisterForm />
      </Container>
    </>
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
w-[60%]
mx-auto
my-28
grid 
grid-cols-2
gap-x-20
`;
