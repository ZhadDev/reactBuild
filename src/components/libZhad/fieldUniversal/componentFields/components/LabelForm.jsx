// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

export const LabelForm = ({ labelFocus, id, label }) => {
  return (
    <label
      className={`zformLabel-root zinputLabel-root zinputLabel-formCtrl zinputLabel-animated ${
        labelFocus ? "zinputLabel-shrink" : ""
      }`}
      data-shrink={labelFocus}
      htmlFor={id}
    >
      {label}
    </label>
  );
};

LabelForm.propTypes = {
  labelFocus: PropTypes.bool,
  id: PropTypes.any,
  label: PropTypes.string,
};
