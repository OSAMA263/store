import { Tbody, Thead, Tr, Td, Th, Checkbox } from "@chakra-ui/react";
import { useItemsPerPage, TableItems } from "../TablePagination";
import { useEffect, useRef, useState } from "react";

export default function Products() {
  const products = JSON.parse(localStorage.getItem("products"));
  const {
    displayedData,
    checkedItems,
    setCheckedItems,
    allChecked,
    isIndeterminate,
    itemsPerPage,
    checkboxHandler,
    currPage,
    pages,
    setCurrPage,
    setDisplayedData,
  } = useItemsPerPage({
    data: products,
  });
  //update fired method
  const [method, setMethod] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  // useEffect(() => {
  //   const items = displayedData.filter(
  //     (item, i) => checkedItems[i] && item
  //   );
  //   setSelectedItems([...items])
  //   console.log(selectedItems);
  // }, [checkedItems]);
  const updateItemsHandler = (e) => {
    setDisplayedData([...displayedData, { [e.target.name]: e.target.value }]);
  };
  return (
    <div className="my-2">
      <TableOptions />
      <TableItems {...{ currPage, pages, setCurrPage }}>
        <Thead>
          <Tr>
            <Th>
              <Checkbox
                borderColor="blackAlpha.400"
                className="[&_*]:!shadow-none"
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) =>
                  setCheckedItems(Array(itemsPerPage).fill(e.target.checked))
                }
              ></Checkbox>
            </Th>
            <Th>image</Th>
            <Th>title</Th>
            <Th>price</Th>
            <Th>category</Th>
            <Th>publiched data?</Th>
          </Tr>
        </Thead>
        <Tbody>
          {displayedData.map(({ thumbnail, title, price, category }, i) => (
            <Tr key={"product" + title}>
              <Td>
                <Checkbox
                  borderColor="blackAlpha.400"
                  className="[&_*]:!shadow-none"
                  isChecked={checkedItems[i]}
                  onChange={(e) => checkboxHandler(e, i)}
                ></Checkbox>
              </Td>
              {method === "edit" && checkedItems[i] ? (
                <>
                  <Td>img</Td>
                  <Td>
                    <input onChange={updateItemsHandler} value={title} />
                  </Td>
                  <Td>
                    <input onChange={updateItemsHandler} value={price} />
                  </Td>
                  <Td>
                    <input onChange={updateItemsHandler} value={category} />
                  </Td>
                  <Td>
                    <input value={"publiched data?"} />
                  </Td>
                </>
              ) : (
                <>
                  <Td>
                    <img
                      src={thumbnail}
                      alt={title}
                      className="!w-[50px] object-cover !h-[50px]"
                    />
                  </Td>
                  <Td>{title}</Td>
                  <Td>{price}$</Td>
                  <Td>{category}</Td>
                  <Td>publiched data?</Td>
                </>
              )}
            </Tr>
          ))}
        </Tbody>
        <button onClick={() => setMethod("edit")}>Edit</button>
      </TableItems>
    </div>
  );
}

const TableOptions = () => {
  return (
    <>
      <div className="flex gap-x-2 items-end">
        <h1>Products</h1>
        <select>
          <option>action...</option>
          <option value="post">Add New</option>
          <option value="delete">Delete</option>
          <option value="put">Update</option>
        </select>
        <button type="submit">Apply</button>
      </div>
      {/* filter by category && seacrh by name */}
    </>
  );
};
