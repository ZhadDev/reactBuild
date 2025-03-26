import React, { useState } from "react";
import { PopUpTitle, PopUp } from "../modal/PopUpTitle";

export const ExampleModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = (_) => {
    setTimeout(() => {
      console.log("onSubmit");
      setIsOpen(false);
    }, 400);
  };

  const onClose = (_) => {
    console.log("onClose");
    setIsOpen(false);
  };
  const activeModal = (_) => {
    setIsOpen(true);
  };
  return (
    <>
      <button onClick={() => activeModal()}>ACTIVAR PopUp</button>
      <PopUp isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
    </>
  );
};
