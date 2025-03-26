/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LabelForm } from "../components/componentIndex";

export const FieldText = ({
  id,
  type,
  label,
  value,
  //	i18n,
  maxIntStr,
  mandatory,
  disabled,
  autoComplete,
  reference,
  onChange,
}) => {
  const [labelFocus, setlabelFocus] = useState(false);
  const [labFocStyle, setlabFocStyle] = useState(false);
  const [StyleError, setStyleError] = useState(false);

  const lblFocus = () => {
    const typeFocus = event.type;

    if (typeFocus === "click") {
      if (value === "" && labelFocus && labFocStyle) {
        setlabelFocus(false);
      } else {
        setlabelFocus(true);
        setlabFocStyle(true);
      }
    }

    if (typeFocus === "focusout") {
      if (value === "") {
        setlabelFocus(false);
        setlabFocStyle(false);
      }
      if (value !== "") {
        setlabFocStyle(false);
      }
    }
  };

  useEffect(() => {
    if (value === "" && mandatory) {
      setStyleError(true);
    }

    if (value !== "" && mandatory) {
      setStyleError(false);
    }

    if (value !== "" && !labelFocus) {
      setlabelFocus(true);
    }

    return () => {};
  }, [value]);

  return (
    <div className="zdivContainInput">
      <LabelForm labelFocus={labelFocus} id={id} label={label} />
      <div
        className={`zinputBase-root input-root zinputBase-fullWidth zinput-formCrtl zinput-underline ${
          labFocStyle ? "zinput-underline-focusAF" : "zinput-underline-focusOFF"
        } ${StyleError ? "zinput-underline-focus-error" : ""}`}
        onBlur={() => lblFocus()}
        onClick={() => lblFocus()}
      >
        <input
          className={"zinputBase-input zinput-input"}
          id={id}
          ref={reference}
          type={type}
          value={value}
          placeholder={label}
          disabled={disabled}
          autoComplete={autoComplete}
          aria-invalid="true"
          maxLength={maxIntStr}
          min="0"
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

FieldText.propTypes = {
  id: PropTypes.any,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  //	i18n: PropTypes.string,
  maxIntStr: PropTypes.number,
  mandatory: PropTypes.bool,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  reference: PropTypes.object,
  onChange: PropTypes.func,
  getValue: PropTypes.func,
  visible: PropTypes.bool,
  iconMndtory: PropTypes.bool,
};
