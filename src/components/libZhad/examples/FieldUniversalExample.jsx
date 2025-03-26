// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { FieldUniversal } from "../fieldUniversal/componentFields/FieldUniversal";
import { FORM_WIZARD } from "./objectFormExample";

export const FieldUniversalExample = () => {
  const newObj = FORM_WIZARD.filter((item) => item.VISIBLE);

  const getValueField = (id, value, isValid, textField) => {
    /*  console.log(
      `id: ${id} || value: ${value} || isValid: ${isValid} || textField: ${textField}`
    ); */
  };

  const onCreateFrg = (value) => {
    console.log("create value: ", value);
  };

  const clrPrimary = "#ea5f23";
  const clorBckg = "#fff";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateAreas: "'title' 'formz' 'btns'",
          gridTemplateRows: "50pt auto 40pt",
          width: "90%",
          height: "90%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridArea: "title",
            fontSize: "2rem",
            fontFamily: "Roboto",
            justifyContent: "center",
            padding: "5pt 0pt 5pt 0pt",
            backgroundColor: clrPrimary,
            color: "#fff",
            //		width: '90%',
          }}
        >
          Formulario Ejemplo
        </div>
        <div
          style={{
            display: "grid",
            gridArea: "formz",
            position: "relative",
            backgroundColor: clorBckg,
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              position: "absolute",
              height: "100%",
              overflowY: "auto",
            }}
          >
            {newObj.map((newObj) => {
              return (
                <div key={newObj.KEY}>
                  <FieldUniversal
                    key={newObj.KEY}
                    id={newObj.ID}
                    label={newObj.LABEL}
                    type={newObj.TYPE}
                    maxlength={newObj.MAX_LENGTH}
                    minStr={newObj.LOW_LENGTH}
                    maxStr={newObj.MAX_LENGTH}
                    mandatory={newObj.MANDATORY}
                    iconMndtory={newObj.MANDATORY}
                    visible={newObj.VISIBLE}
                    disabled={newObj.DISABLED}
                    value={newObj.VALUE}
                    expReg={newObj?.EXP_REG}
                    getValue={getValueField}
                    onCreateFrg={onCreateFrg}
                    autoComplete={newObj?.AUTO_COMPLETE}
                    foreignDao={newObj.FOREING_DAO}
                    readOnly={!newObj.TYPE.includes[("foreign", "LOCATION")]}
                    permissionsCreateFrg={["Barrio", "CrdPrincipal"].includes(
                      newObj.ID
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridArea: "btns",
            backgroundColor: clrPrimary,
          }}
        ></div>
      </div>
    </div>
  );
};

FieldUniversalExample.propTypes = {
  id: PropTypes.any,
  value: PropTypes.any,
  isValid: PropTypes.bool,
};
