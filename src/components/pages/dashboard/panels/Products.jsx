import {
  Tbody,
  Thead,
  Tr,
  Td,
  Th,
  Checkbox,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverFooter,
  PopoverBody,
} from "@chakra-ui/react";
import { useItemsPerPage, TableItems } from "../TablePagination";
import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ADD,
  DELETE,
  EDIT,
} from "../../../../state/slices/admin/ProductsSlice";
import { useProductsState } from "../../../../state/useStates";

export default function Products() {
  const dispatch = useDispatch();
  const products = useProductsState();
  const {
    checkedItems,
    setCheckedItems,
    allChecked,
    isIndeterminate,
    itemsPerPage,
    checkboxHandler,
    currPage,
    pages,
    setCurrPage,
    displayedData,
  } = useItemsPerPage({
    data: products,
  });

  // update item values
  const [edit, setEdit] = useState({});
  const updateItemHandler = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  // apply product updates
  const handleApply = () => {
    if (!Object.values(edit).some((val) => val === "")) {
      dispatch(EDIT(edit));
      setEdit({});
    }
  };
  return (
    <div className="my-2 [&_td]:!text-start [&_th]:!text-start ">
      <TableOptions {...{ displayedData, checkedItems, products }} />
      <TableItems {...{ currPage, pages, setCurrPage }}>
        <Thead>
          <Tr>
            <Th>
              <Checkbox
                borderColor="blackAlpha.400"
                className="[&_*]:!shadow-none"
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) => {
                  setCheckedItems(Array(itemsPerPage).fill(e.target.checked));
                }}
              ></Checkbox>
            </Th>
            <Th>image</Th>
            <Th>title</Th>
            <Th>price</Th>
            <Th>category</Th>
            <Th>option</Th>
          </Tr>
        </Thead>
        <Tbody>
          {displayedData.map(({ thumbnail, title, price, category, id }, i) => (
            <Tr key={"product" + id}>
              <Td>
                <Checkbox
                  borderColor="blackAlpha.400"
                  className="[&_*]:!shadow-none"
                  isChecked={checkedItems[i]}
                  name={"checkbox" + id}
                  onChange={(e) => {
                    checkboxHandler(e, i);
                  }}
                ></Checkbox>
              </Td>
              {edit.id === id ? (
                <>
                  <Td>
                    <Input required type="file" name="thumbnail" />
                  </Td>
                  <Td>
                    <Input
                      required
                      name="title"
                      type="text"
                      onChange={updateItemHandler}
                      defaultValue={edit.title}
                      placeholder="title"
                    />
                  </Td>
                  <Td>
                    <Input
                      required
                      name="price"
                      type="number"
                      onChange={updateItemHandler}
                      defaultValue={edit.price}
                      placeholder="price"
                    />
                  </Td>
                  <Td>
                    <Input
                      required
                      type="text"
                      name="category"
                      onChange={updateItemHandler}
                      defaultValue={edit.category}
                      placeholder="category"
                    />
                  </Td>
                  <Td>
                    <div className="flex flex-col">
                      <Button colorScheme="red" onClick={() => setEdit({})}>
                        cancel
                      </Button>
                      <Button colorScheme="green" onClick={handleApply}>
                        apply
                      </Button>
                    </div>
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
                  <Td>
                    {title.length > 16 ? title.slice(0, 16) + "..." : title}
                  </Td>
                  <Td color="#87be56">{price}$</Td>
                  <Td>{category}</Td>
                  <Td>
                    <Button
                      colorScheme="blue"
                      onClick={() => setEdit(displayedData[i])}
                    >
                      edit
                    </Button>
                  </Td>
                </>
              )}
            </Tr>
          ))}
        </Tbody>
      </TableItems>
    </div>
  );
}

const TableOptions = memo((props) => {
  const { products, checkedItems, displayedData } = props;
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // update displayed items
  const [removedProducts, setRemovedProducts] = useState([]);
  useEffect(() => {
    const newItems = displayedData.filter((item, i) => checkedItems[i] && item);
    setRemovedProducts([...newItems]);
  }, [checkedItems]);
  // Add new product
  const [newPro, setNewPro] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    setNewPro({});
    dispatch(
      ADD({
        ...newPro,
        thumbnail: "default-product.png",
        new: true,
        images: [
          "default-product.png",
          "default-product.png",
          "default-product.png",
        ],
      })
    );
  };
  // collecting product data
  const handleChange = (e) => {
    setNewPro({
      ...newPro,
      [e.target.name]:
        e.target.type === "number"
          ? parseFloat(e.target.value)
          : e.target.value,
    });
  };
  // delete selected products
  const handleDelete = () => {
    checkedItems.some(Boolean) && dispatch(DELETE(removedProducts));
  };
  return (
    <>
      <div className="flex items-center gap-x-2">
        <h1>
          ({displayedData.length})item - All({products.length})
        </h1>
        <PopoverConfirmgDelete handleDelete={handleDelete} />
        <Button colorScheme="green" onClick={onOpen} type="submit">
          new
        </Button>
      </div>
      {/* modal new product */}
      <AlertDialog
        {...{ isOpen, onClose }}
        size="3xl"
        motionPreset="slideInTop"
        isCentered
        closeOnOverlayClick={false}
      >
        <AlertDialogOverlay zIndex={69696969}>
          <AlertDialogContent>
            <AlertDialogCloseButton />
            <AlertDialogBody py={12}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {inputsProps.map(({ name, type }) => (
                  <Input
                    key={name}
                    name={name}
                    placeholder={name}
                    type={type}
                    required={type !== "file"}
                    min={type === "number" ? 1 : null}
                    step="any"
                    onChange={handleChange}
                  />
                ))}
                <Button type="submit">submit</Button>
              </form>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      {/* filter by category && seacrh by name */}
    </>
  );
});

const PopoverConfirmgDelete = ({ handleDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>
        <Button colorScheme="red">delete</Button>
      </PopoverTrigger>
      <PopoverContent bg="gray.500">
        <PopoverArrow bg="gray.500" />
        <PopoverBody>
          are you sure u wanna delete the selected products?
        </PopoverBody>
        <PopoverFooter>
          <Button onClick={onClose}>cancel</Button>
          <Button
            onClick={() => {
              handleDelete();
              onClose();
            }}
            colorScheme="red"
            ml={2}
          >
            delete
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
const inputsProps = [
  { type: "text", name: "title" },
  { type: "text", name: "description" },
  { type: "number", name: "price" },
  { type: "number", name: "discountPercentage" },
  { type: "text", name: "brand" },
  { type: "text", name: "category" },
  { type: "number", name: "rating" },
  { type: "number", name: "stock" },
  { type: "file", name: "thumbnail" },
  { type: "file", name: "images", images: ["", "", ""] },
];
// allow to edit multiple product at one time?
