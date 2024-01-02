import { useState } from "react";
import { Table, TableCaption } from "@chakra-ui/react";

const TableItems = (props) => {
  const { children, currPage, pages, setCurrPage } = props;

  return (
    <Table variant="simple" className="[&_td]:!text-start [&_th]:!text-start">
      <TableCaption>
        <div className="flex justify-center items-center gap-x-4">
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
                className="disabled:opacity-50 disabled:bg-gray-400 border px-4 py-2"
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
  );
};

const useItemsPerPage = ({ data, itemsPerPage = 15 }) => {
  // checkboxes
  const [checkedItems, setCheckedItems] = useState(
    Array(itemsPerPage).fill(false)
  );
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  // update displayed items in page in page
  const [currPage, setCurrPage] = useState(1);

  const lastIndex = currPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const displayedData = data.slice(firstIndex, lastIndex);
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

  return {
    currPage,
    displayedData,
    pages,
    setCurrPage,
    checkedItems,
    setCheckedItems,
    allChecked,
    isIndeterminate,
    itemsPerPage,
    checkboxHandler,
  };
};


export { useItemsPerPage, TableItems };
