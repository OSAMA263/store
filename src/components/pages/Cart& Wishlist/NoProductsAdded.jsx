import MainButton from "../../MainButton";

export default function NoProductsAdded({ Icon, title }) {
  return (
    <div className="w-[60%] mx-auto flex flex-col justify-center items-center space-y-8 my-28">
      <span className="text-6xl text-gray-800">{Icon}</span>
      <h1 className="text-2xl text-lightGray">{title}</h1>
      <MainButton>SHOP NOW</MainButton>
    </div>
  );
}
