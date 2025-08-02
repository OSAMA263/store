import { useState } from "react";
import ContentContainer from "../../layout/ContentContainer";
import MainButton from "../../shared/MainButton";
import { InputsWrapper } from "../customer/sections/Form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function Authentication() {
  const [showPasswrod, setShowPassword] = useState("password");
const [err,setErr]=useState(false)

  const showPasswordhanlder = () => {
    setShowPassword(showPasswrod === "password" ? "text" : "password");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const password = formData.get("password");

    if (demo_admin.name === name && demo_admin.password == password) {
      localStorage.setItem("demo_admin", JSON.stringify(true));
      window.location.reload();
    }else{
      setErr("name or password isnt correct")
    }
  };

  return (
    <ContentContainer className="my-0 flex items-center justify-center min-h-[100dvh]">
      <form onSubmit={onSubmit} className="w-1/2 mx-auto">
        <InputsWrapper className="flex flex-col items-center [&_input]:text-black">
          <input required type="text" placeholder="admin" name="name" />
          <div className="w-full relative">
            <input
              required
              type={showPasswrod}
              placeholder="admin@123"
              name="password"
            />
            <button
              className="text-xl bg-white absolute right-0"
              onClick={showPasswordhanlder}
              type="button"
              aria-label="show password"
            >
              {showPasswrod === "password" ? <IoIosEyeOff /> : <IoIosEye />}
            </button>
          </div>
          {err&&<div className="self-start text-red-600 !mt-0">{err}</div>}
          <MainButton>
            <button type="submit"> submit</button>
          </MainButton>
        </InputsWrapper>
      </form>
    </ContentContainer>
  );
}

const demo_admin = {
  name: "admin",
  password: "admin@123",
};
