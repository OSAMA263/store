import { useEffect, useState } from "react";
import { Table, TableCaption, TableContainer } from "@chakra-ui/react";
const TableItems = (props) => {
  const { children, currPage, pages, setCurrPage } = props;

  return (
    <TableContainer>
      <Table
        variant="simple" 
        className="[&_input]:!p-0"
      >
        <TableCaption>
          <div className="flex items-center justify-center gap-x-4">
            <button
              className="disabled:opacity-50"
              disabled={currPage === 1}
              onClick={() => setCurrPage((prev) => prev - 1)}
            >
              prev
            </button>
            <div className="space-x-2">
              {pages.map((pageNum) => (
                <button
                  className="px-4 py-2 border disabled:opacity-50 disabled:bg-gray-400"
                  disabled={currPage === pageNum}
                  onClick={() => setCurrPage(pageNum)}
                  key={"page" + pageNum}
                >
                  {pageNum}
                </button>
              ))}
            </div>
            <button
              className="disabled:opacity-50"
              disabled={currPage === pages.length}
              onClick={() => setCurrPage((prev) => prev + 1)}
            >
              next
            </button>
          </div>
        </TableCaption>
        {/* end of pagination controls */}
        {children}
      </Table>
    </TableContainer>
  );
};

const useItemsPerPage = ({ data, itemsPerPage = 15 }) => {
  const [currPage, setCurrPage] = useState(1);
  const lastIndex = currPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const [displayedData, setDisplayedData] = useState(
    data.slice(firstIndex, lastIndex)
  );

  // checkboxes
  const [checkedItems, setCheckedItems] = useState(
    Array(itemsPerPage).fill(false)
  );
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  let pages = [];
  if (data.length > 0) {
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pages.push(i);
    }
  }
  // update checked item box
  const checkboxHandler = (e, i) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[i] = e.target.checked;
    setCheckedItems(updatedCheckedItems);
  };
  // reset selected items if user used pagination
  // update displayed items in page in page
  useEffect(() => {
    setCheckedItems(Array(itemsPerPage).fill(false));
    setDisplayedData(data.slice(firstIndex, lastIndex));
  }, [currPage, data]);
  return {
    currPage,
    pages,
    setCurrPage,
    checkedItems,
    setCheckedItems,
    allChecked,
    isIndeterminate,
    itemsPerPage,
    checkboxHandler,
    displayedData,
  };
};

export { useItemsPerPage, TableItems };
