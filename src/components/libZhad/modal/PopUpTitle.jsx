import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "../theme/componentStyles.scss";

export const PopUpTitle = ({ title = "Zhad Croix" }) => {
  /*  const fnt = (id) => {
    let popupNode = "document....";
    let overlay = popupNode + "overley(.overlay)";
  }; */
  return (
    <div className="popup" id="popup">
      <div className="overlay"></div>
      <div className="popup-content">
        <h2>{title}</h2>
        <p>lorem ipsum dolor</p>
        <div className="controls">
          <button className="close-btn">Close</button>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

PopUpTitle.propTypes = {
  title: PropTypes.string,
};

export const PopUp = ({
  children,
  isOpen,
  onClose,
  onSubmit,
  width = "90%",
  maxWidth,
  nameBtnClose = "Close",
  nameBtnSubmit = "Submit",
}) => {
  const handleModalClick = (event) => event.stopPropagation();
  const container = document.getElementById("portal-root");

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? onClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  const body = (
    <div
      className={`popup ${isOpen && "active"}`}
      id="popup"
      onClick={handleModalClick}
    >
      <div className="overlay"></div>
      <div className="popup-content" style={{ width, maxWidth }}>
        {
          children

          //  <h2>{"Zhad is The BEST"}</h2>
          //  <p>lorem ipsum dolor</p>
        }

        <div className="controls">
          <button className="close-btn" onClick={onClose}>
            {nameBtnClose}
          </button>
          <button className="submit-btn" onClick={onSubmit}>
            {nameBtnSubmit}
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(body, container);
};

PopUp.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};
