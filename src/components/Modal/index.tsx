import React from "react";
import Modal from "react-modal";

interface Props {
  isOpen: boolean;
  reqClose: any
}

const ModalComponents: React.FC<Props> = (props) => {
    
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      background: "#161A2B",
      color: "#fff",
      width: "50%",
      height: "40%",
      border: "none",
      borderRadius: "15px",
    },
  };

  return (
    <Modal
      ariaHideApp={false}
      style={customStyles}
      isOpen={props.isOpen}
      onRequestClose={props.reqClose}
    >
      {props.children}
    </Modal>
  );
};

export default ModalComponents;
