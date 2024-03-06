/* eslint-disable */
import stylesLarge from "./LargeButton.module.css";
import stylesMedium from "./MediumButton.module.css";
import stylesSmall from "./SmallButton.module.css";
import stylesModal from "./ModalButton.module.css";

const SIZE = {
  Small: stylesSmall.SmallButton,
  Medium: stylesMedium.MediumButton,
  Large: stylesLarge.LargeButton,
  Modal: stylesModal.ModalButton,
};

const BottomButton = ({ size, type, disabled, onClick, children }) => {
  const selectedSize = SIZE[size];
  return (
    <button
      className={selectedSize}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BottomButton;
