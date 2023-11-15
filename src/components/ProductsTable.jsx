import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import tw from "tailwind-styled-components";
import MainButton from "./shared/MainButton";

export default function ProductsTable(props) {
  const { TBodyContent, THeadContent, ClearAllBtn, TFootContent } = props;

  return (
    <>
      <TableContainer
        border="1px solid #dbd9d9"
        borderRadius="20px"
        w="60%"
        mx="auto"
      >
        <Table
          style={{ borderCollapse: "separate", borderSpacing: "1rem" }}
          variant="simple"
          colorScheme="blackAlpha"
        >
          {/* TABLE HEAD */}
          <Thead>
            <Tr>
              <Th>PRODUCT</Th>
              <Th>PRICE</Th>
              {/* THE PROPS */}
              <THeadContent/>
            </Tr>
          </Thead>
          {/* TABLE BODY */}
          <Tbody className="!space-y-10">
            <Tr>
              <Td>
                <Product />
              </Td>
              <Td fontWeight="semibold">$100.0</Td>
              {/* THE PROPS */}
              <TBodyContent/>
              <Td>
                <RemoveButton>
                  <AiOutlineClose />
                </RemoveButton>
              </Td>
            </Tr>
          </Tbody>
          {/* TABLE FOOT */}
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <TFootContent/>
              <Th>
                <MainButton>{ClearAllBtn}</MainButton>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

const Product = () => {
  return (
    <div className="flex items-center gap-x-8">
      <img src="/bg.png" className="w-24 h-32" alt="" />
      <h1 className="font-semibold text-lightGray">product name</h1>
    </div>
  );
};

const RemoveButton = tw.button`
border 
border-lightGray
hover:border-thickRed 
[&>svg]:hover:text-thickRed 
p-3
rounded-sm
mx-auto
`;

// {<div className="flex items-center text-xl font-semibold border-b gap-x-8">
// <button>+</button>
// <h1>1</h1>
// <button>-</button>
// </div>

// <div className="bg-[#f7f7f7] space-y-10 p-10 w-[20%]">
// <h1 className="text-2xl text-center">Cart totals</h1>
// <div className="flex justify-between text-sm">
//   <span>SUBTOTAL</span>
//   <span className="font-semibold">$300.2</span>
// </div>
// <div className="flex justify-between">
//   <span className="">TOTAL</span>
//   <span className="text-2xl font-bold">$300.2</span>
// </div>
// <MainButton>PROCEED TO CHECKOUT</MainButton>
// </div>}
