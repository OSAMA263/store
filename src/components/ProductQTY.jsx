import tw from "tailwind-styled-components";

export default function ProductQuantity(props) {
  const {
    qty,
    setQty,
    availableQTY,
    foundInCart,
    cartQty,
    cartPlus,
    cartMinus,
  } = props;
  
  const handleDecreaseQTY = () => {
    setQty((prevQTY) => prevQTY - 1);
  };
  const handleIncreaseQTY = () => {
    setQty((prevQTY) => prevQTY + 1);
  };

  const MAXMUM_QTY = foundInCart ? foundInCart.QTY === foundInCart.stock : null;
  // disable buttons----

  const disableIncrease =
    qty === availableQTY ||
    (foundInCart ? foundInCart.QTY === foundInCart.stock : false);

  const disableDecrease = qty === 1 || qty === 0;

  return (
    <QuentityWrapper>
      <button
        className={disableDecrease ? "opacity-40" : ""}
        disabled={disableDecrease}
        onClick={cartMinus ?? handleDecreaseQTY}
        aria-label="decrease-product-quantity"
      >
        -
      </button>
      <span>{cartQty ? cartQty : MAXMUM_QTY ? 0 : qty ?? 1}</span>
      <button
        className={disableIncrease ? "opacity-40" : ""}
        disabled={disableIncrease}
        onClick={cartPlus ?? handleIncreaseQTY}
        aria-label="increase-product-quantity"
      >
        +
      </button>
    </QuentityWrapper>
  );
}

const QuentityWrapper = tw.div`
[&>button]:text-black
[&>button]:text-2xl
flex 
items-center 
justify-between 
text-lg
font-semibold 
border-b 
border-black
gap-x-10
pb-2
`;
