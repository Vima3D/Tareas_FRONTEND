import ReactDOM from "react-dom";
import "./modal.css";

function Modal({
  children,
  visible,
}: {
  children: React.ReactNode;
  visible: boolean;
}) {
  const modalRoot = document.getElementById("modal-root");

  return modalRoot
    ? ReactDOM.createPortal(
        <div className={`modal ${visible ? "show" : "hide"}`}>{children}</div>,
        modalRoot
      )
    : null;
}

export default Modal;
