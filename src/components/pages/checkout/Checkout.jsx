import NavigateAnimation from "../../layout/NavigateAnimation";
import ContentContainer from "../../layout/ContentContainer";
import PageHero from "../../PageHero";
import MainButton from "../../shared/MainButton";
import { useUserState } from "../../../state/useStates";
import { clearCart } from "../../../state/slices/client/UsersSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function Checkout() {
  return (
    <NavigateAnimation>
      <PageHero title="Checkout">
        <h1 className="text-lightGray">Checkout</h1>
      </PageHero>
      <ContentContainer>
        <div className="grid gap-y-10 lg:grid-cols-2 gap-x-4">
          <Form />
          <CheckoutCart />
        </div>
      </ContentContainer>
    </NavigateAnimation>
  );
}
// form niputs-----------------
const Form = () => {
  const dispatch = useDispatch();
const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(clearCart());
    navigate("/")
  };
  return (
    <div>
      <h1 className="mb-10 text-lg font-bold border-b-2 border-black w-fit">
        Billing Address
      </h1>
      <form onSubmit={handleSubmit} className="space-y-10">
        {formInputs.map((inp, i) => (
          <div className="space-y-4 text-lg sm:space-y-0 sm:flex gap-x-4" key={i}>
            {inp.map(({ name, label, type }) => (
              <div className="flex flex-col w-full" key={name}>
                <label
                  className="text-sm font-medium tracking-wider uppercase"
                  htmlFor={name}
                >
                  {label}*
                </label>
                <input
                  name={name}
                  type={type}
                  id={name}
                  required
                  className="placeholder:text-sm"
                  placeholder={label}
                />
              </div>
            ))}
          </div>
        ))}
        <MainButton>
          <button type="submit">SUBMIT</button>
        </MainButton>
      </form>
    </div>
  );
};
// user products information
const CheckoutCart = () => {
  const { cart } = useUserState();
  const TOTAL = cart
    .reduce((acc, pro) => acc + Math.floor(pro.price * pro.QTY), 0)
    .toLocaleString("en");

  return (
    <div>
      <h1 className="mb-10 text-lg font-bold border-b-2 border-black w-fit">
        Cart Total
      </h1>
      <div className="p-8 space-y-3 [&_div]:flex [&_div]:justify-between bg-[#f2f2f2]">
        <div className="mb-5 text-2xl font-bold">
          <h1>Product</h1>
          <h1>Total</h1>
        </div>
        {/* products names and prices */}
        {cart.map(({ title, QTY, price }) => (
          <div className="text-sm" key={title}>
            <h1 className="font-medium capitalize text-lightGray">
              {title} <small className="font-bold text-black"> x{QTY}</small>
            </h1>
            <h1 className="font-medium">
              ${Math.floor(price * QTY).toLocaleString("en")}
            </h1>
          </div>
        ))}
        {/* sub total------- */}
        <div className="py-2 font-semibold text-gray-500 border-gray-700 border-y">
          <h1>Sub Total</h1>
          <h1>${TOTAL}</h1>
        </div>
        <div className="text-2xl font-bold">
          <h1>Grand Total</h1>
          <h1>${TOTAL}</h1>
        </div>
      </div>
    </div>
  );
};

const formInputs = [
  [
    { label: "First Name", type: "text", name: "first-name" },
    { label: "Last Name", type: "text", name: "last-name" },
  ],
  [
    { label: "Email Address", type: "email", name: "email" },
    { label: "Phone Number", type: "number", name: "phone" },
  ],
  [{ label: "Address", type: "text", name: "address1" }],
  [
    { label: "Country", type: "text", name: "country" },
    { label: "Twon/City", type: "text", name: "city" },
  ],
  [
    { label: "State", type: "text", name: "state" },
    { label: "Zip Code", type: "number", name: "z-code" },
  ],
];
