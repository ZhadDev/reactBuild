import React from "react";
import PropTypes from "prop-types";

export const Button = ({
  onClick,
  type = "button",
  style = {},
  clasess = "",
  color = null,
  variant = "contained" || "outlined",
  disabled = false,
  nameBtn = "nombreBoton",
}) => {
  const newColor = {};
  if (variant === "contained" && color !== null) {
    newColor["background"] = color;
    newColor["borderColor"] = color;
  }

  if (variant === "outlined" && color !== null) {
    newColor["borderColor"] = color;
    newColor["color"] = color;
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`zbtn zbtn--${variant} ${clasess}`}
      disabled={disabled}
      style={{ ...style, ...newColor }}
      value={""}
    >
      {nameBtn}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  style: PropTypes.object,
  clasess: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  nameBtn: PropTypes.string,
};
