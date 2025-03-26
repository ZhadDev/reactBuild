import React from "react";
import { Checkbox } from "../components/Checkbox";
import PropTypes from "prop-types";

export const FieldBoolean = ({ id, value, label, reference, onChange }) => {
  return (
    <div className="zcontainer-Boolean zinputBase-input">
      <label className="zformLabel-root" htmlFor="">
        {label}
      </label>
      <Checkbox
        id={id}
        checked={value}
        reference={reference}
        onChange={onChange}
        type={"switch"}
      />
    </div>
  );
};

FieldBoolean.propTypes = {
  id: PropTypes.any,
  value: PropTypes.any,
  label: PropTypes.string,
  reference: PropTypes.object,
  onChange: PropTypes.func,
};
