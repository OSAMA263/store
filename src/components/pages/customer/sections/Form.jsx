import React, { useState } from "react";
import tw from "tailwind-styled-components";
import MainButton from "../../../shared/MainButton";
import { useDispatch } from "react-redux";
import { CreateUser, LogIn } from "../../../../state/slices/client/UsersSlice";
import { useUserState } from "../../../../state/useStates";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import {
  registerInitialValues,
  registerValidationSchema,
  loginInitialValues,
  loginValidationSchema,
} from "../../../form validation/validation";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function Form(props) {
  const { bg, title, text, btn, children } = props;
  const [user, setUser] = useState({});
  const { users } = useUserState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // collect form inputs data
  const updateUserData = (e) => {
    const { target } = e;
    setUser((prev) => ({ ...prev, [target.name]: target.value }));
    handleChange(e);
  };

  // check if user already exists
  const existedUser = users.find(
    (acc) =>
      acc.name === Object.values(user)[0] ||
      acc.email === Object.values(user)[0]
  );
  //  handle Onsubmit----
  const onSubmit = () => {
    // check if the user already exist
    if (btn === "LOGIN") {
      if (existedUser) {
        dispatch(LogIn(existedUser));
        navigate("/shop");
      }
    } else {
      if (!existedUser) {
        dispatch(CreateUser(user));
        navigate(0);
      }
    }
  };

  // inputs validate-----
  const formik = useFormik({
    initialValues: btn === "LOGIN" ? loginInitialValues : registerInitialValues,
    validationSchema:
      btn === "LOGIN" ? loginValidationSchema : registerValidationSchema,
    onSubmit,
  });
  const { handleChange, handleSubmit } = formik;

  return (
    <Container className={bg}>
      {/* header text */}
      <h1 className="text-2xl md:text-4xl">{title}</h1>
      <h1 className="text-lightGray">{text}</h1>
      {/* form */}
      <form onSubmit={handleSubmit} className="flex w-[80%] flex-col">
        {/* inputs */}
        <FormInputs {...{ children, formik, updateUserData }} />
        <MainButton>
          <button type="submit">{btn}</button>
        </MainButton>
      </form>
    </Container>
  );
}

// inputs with validation
const FormInputs = (props) => {
  const [showPasswrod, setShowPassword] = useState("password");
  const { children, formik, updateUserData } = props;
  const { handleBlur, values, touched, errors } = formik;

  const showPasswordhanlder = () => {
    setShowPassword(showPasswrod === "password" ? "text" : "password");
  };

  return (
    <InputsWrapper>
      {React.Children.map(children, (child) => {
        return (
          <div>
            {child.props.type === "password" ? (
              <InputGroup>
                {React.cloneElement(child, {
                  value: values[child.props.name],
                  onChange: updateUserData,
                  onBlur: handleBlur,
                  type: showPasswrod,
                })}
                <InputRightElement  justifyContent="end">
                  <button
                    className="text-xl bg-white"
                    onClick={showPasswordhanlder}
                  >
                    {showPasswrod === "password" ? (
                          <IoIosEyeOff />
                    ) : (
                      <IoIosEye />
                    )}
                  </button>
                </InputRightElement>
              </InputGroup>
            ) : (
              React.cloneElement(child, {
                value: values[child.props.name],
                onChange: updateUserData,
                onBlur: handleBlur,
              })
            )}
            {/* validate */}
            <p>
              <small>
                {touched[child.props.name] &&
                  errors[child.props.name] &&
                  errors[child.props.name]}
              </small>
            </p>
          </div>
        );
      })}
    </InputsWrapper>
  );
};

const Container = tw.div`
p-10
flex
flex-col
items-center
md:space-y-12
space-y-4
`;

const InputsWrapper = tw.div`
[&_input]:outline-none
[&_input]:border-b-2
[&_input]:pe-6
[&_input]:lowercase
[&_input]:bg-transparent
[&_input]:w-full
[&_small]:text-red-500
[&_p]:mt-4
[&>input:hover]:border-black
[&>input:focus]:border-black
md:space-y-16
space-y-4
md:my-12
my-4
`;
