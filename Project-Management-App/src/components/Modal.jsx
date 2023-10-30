import { React, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonLabel }, ref) {
  const dialog = useRef();

  // Expose open() function for components that use this custom Modal to use without having to know that a dialog tag is used internally.
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // HTML dialog tag has built in showModal() function.
      },
    };
  });

  // Insert modal at a different place in the DOM.
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonLabel}</Button>
      </form>
      </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
