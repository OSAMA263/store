import { useEffect } from "react";

export default function LoadingPage() {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "";
    };
  }, []);

  return (
    <div className="bg-white h-[100dvh] w-full flex justify-center items-center">
      <img src="loading.gif" alt="loading please wait" />
    </div>
  );
}
