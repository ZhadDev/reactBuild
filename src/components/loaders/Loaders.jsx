import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "./Loaders.css";

const Loaders = ({ show = true }) => {
  const container = document.getElementById("portal-root");
  const handleModalClick = (event) => event.stopPropagation();
  // const colorCelsia = true;

  const body = (
    <>
      {show && (
        <div
          onClick={handleModalClick}
          //    id={props.id}
          className="loader"
          //  style={colorCelsia ? { backgroundColor: "rgb(0 0 0 / 77%)" } : {}}
        />
      )}
    </>
  );

  return createPortal(body, container);
};

PropTypes.Loaders = {
  show: PropTypes.bool,
};

export default Loaders;
