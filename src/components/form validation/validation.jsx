import { object, string } from "yup";
// REGISTER VALIDATION
const users = JSON.parse(localStorage.getItem("users"));
const registerInitialValues = {
  name: "",
  email: "",
  password: "",
};

const registerValidationSchema = object({
  name: string()
    .min(3, "Username is too short")
    .test(
      "",
      "Username is already used",
      (value) => !users.find((user) => user.name === value)
    )
    .required("Entry your name!"),

  email: string()
    .email("Invalid email, please entry a vaild email")
    .test(
      "",
      "Email already used",
      (value) => !users.find((user) => user.email === value)
    )
    .required("Entry your email address"),

  password: string()
    .required("Entry your password")
    .min(6, "Password is too short ,atleast 6 char"),
});

// LOGIN VALIDATION
const loginInitialValues = {
  name_email: "",
  password: "",
};

const loginValidationSchema = object({
  name_email: string()
    .test("", "This username or email does not exist.", (value) =>
      users.find((user) => user.name === value || user.email === value)
    )
    .required("username or email required!"),

  password: string()
    .test("", "Incorrect passworda", function (value) {
      const name_emailVal = this.parent.name_email; // Access the password field value
      return users.find(
        (user) =>
          (user.password === value && user.name === name_emailVal) ||
          (user.password === value && user.email === name_emailVal)
      );
    })
    .required("password is required"),
});

export {
  loginInitialValues,
  loginValidationSchema,
  registerInitialValues,
  registerValidationSchema,
};
