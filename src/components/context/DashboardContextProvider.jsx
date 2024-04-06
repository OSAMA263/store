import { useState } from "react";
import DashboardContext from "./DashboardContext";

export default function DashboardContextProvider({ children,dataArray }) {
  const [currPage, setCurrPage] = useState(1);
  const data=dataArray

  const itemsPerPage = 15;
  const lastIndex = currPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const [displayedData, setDisplayedData] = useState([
    ...data.slice(firstIndex, lastIndex),
  ]);

  // update the displayed items
  // useEffect(() => {
  //   setDisplayedData();
  // }, [currPage,data]);

  let pages = [];
  if (data.length > 0) {
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pages.push(i);
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        currPage,
        setCurrPage,
        data,
        itemsPerPage,
        lastIndex,
        firstIndex,
        displayedData,
        setDisplayedData,
        pages,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
