import { CiFaceFrown } from "react-icons/ci";
import NavigateAnimation from "../../layout/NavigateAnimation";

export default function NotFound() {
  return (
    <NavigateAnimation>
      <div className="h-[100dvh] w-full flex justify-center items-center flex-col gap-y-6">
        <i className="text-7xl">
          <CiFaceFrown />
        </i>
        <h1 className="text-center">
          The page you are looking for may have been moved, deleted, <br /> or
          possibly never existed.
        </h1>
      </div>
    </NavigateAnimation>
  );
}
