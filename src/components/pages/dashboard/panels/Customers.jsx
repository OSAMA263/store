import {  useState } from "react";
import { useUserState } from "../../../../state/useStates";
import { TableItems, useItemsPerPage } from "../TablePagination";
import {
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Button,
  Table,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  useDisclosure,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogHeader,
} from "@chakra-ui/react";

export default function Customers() {
  const { users } = useUserState();
  const { displayedData, pages, currPage, setCurrPage } = useItemsPerPage({
    data: users,
  });
  // modal controls
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [selectedUser, setSelectedUser] = useState({});

  return (
    <TableItems {...{ pages, currPage, setCurrPage }}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email Address</Th>
          <Th>User cart/wishlist</Th>
        </Tr>
      </Thead>
      <Tbody>
        {displayedData.length > 0 ? (
          displayedData.map((user) => (
            <Tr key={user.name}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    setSelectedUser(user);
                    onOpen();
                  }}
                >
                  View details
                </Button>
              </Td>
            </Tr>
          ))
        ) : (
          <Td>0 users were found</Td>
        )}
      </Tbody>
      <ModalUserProducts {...{ isOpen, onClose, onOpen, selectedUser }} />
    </TableItems>
  );
}

const ModalUserProducts = (props) => {
  const { isOpen, onClose, onOpen, selectedUser } = props;
  const { cart, wishlist } = selectedUser;

  return (
    <AlertDialog isCentered {...{ isOpen, onClose, onOpen }}>
      <AlertDialogOverlay>
        <AlertDialogContent minW={"max-content"}>
          <AlertDialogHeader>
            <AlertDialogCloseButton />
          </AlertDialogHeader>
          <AlertDialogBody>
            <Table>
              <Thead>
                <Tr>
                  <Th>state?</Th>
                  <Th>title</Th>
                  <Th>price</Th>
                  <Th>category</Th>
                  <Th>total</Th>
                </Tr>
              </Thead>
              <Tbody>
                {wishlist && (
                  <>
                    {/* cart products */}
                    {cart.length > 0 ? (
                      <>
                        <Th rowSpan={cart.length + 1}>cart</Th>
                        {cart.map(({ title, price, category, QTY, id }) => (
                          <Tr key={id}>
                            <Td>{title}</Td>
                            <Td>
                              <span className="text-lime-600">{price}$</span> x
                              {QTY}
                            </Td>
                            <Td>{category}</Td>
                            <Td>
                              <span className="font-bold">{price * QTY}$</span>
                            </Td>
                          </Tr>
                        ))}
                      </>
                    ) : (
                      <>
                        <Th rowSpan={1}>cart</Th>
                        <Td>cart is empty</Td>
                      </>
                    )}
                    {/* wishlist products */}
                    {wishlist.length > 0 ? (
                      <>
                        <Th rowSpan={wishlist.length + 1}>wishlist</Th>
                        {wishlist.map(({ title, price, category, id }) => (
                          <Tr color={"red.600"} key={id}>
                            <Td>{title}</Td>
                            <Td>
                              <span>{price}$</span>
                            </Td>
                            <Td>{category}</Td>
                            <Td>--</Td>
                          </Tr>
                        ))}
                      </>
                    ) : (
                      <>
                        <Th rowSpan={1}>wishlist</Th>
                        <Td>wishlist is empty</Td>
                      </>
                    )}
                  </>
                )}
              </Tbody>
            </Table>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

// customers
// then click to view customer wishlist /cart ...
