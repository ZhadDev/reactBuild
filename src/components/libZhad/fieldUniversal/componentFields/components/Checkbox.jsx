// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Zsvg } from "../../../zSvg/Zsvg";

/**
 * @name Checkbox
 * @description componente tipo Checkbox
 * @id {string o number} identificador unico
 * @checked {boolean} por defecto viene false
 * @onChange {function} props propiedades o parámetros del componente
 * @type {string} 'switch' ||  'squared' por defecto viene squared
 * @reference {object} no obligatorio
 * @className {string} si necesitas agregar clases adicionales
 * @styles {object}  si necesitas agregar estilos adicionales ej. { backgroundColor: "#fff" }
 * @return {}
 */
export const Checkbox = ({
  id,
  checked = false,
  onChange,
  type = "squared",
  reference,
  className = "",
  styles = null,
  iconCheck = "ok",
  icondefault = "plus",
}) => {
  const [checkDef, setChecked] = useState(checked);

  const checkChange = (_) => {
    const check = reference?.current?.checked;
    onChange(check);
    setChecked(check);
  };

  return (
    <div>
      <input
        ref={reference}
        type="checkbox"
        name=""
        id={id}
        defaultChecked={checkDef}
        onClick={checkChange}
        className="zbtn-checkbox"
      />
      <label
        className={`zlbl-${type} ${className !== "" ? className : ""}`}
        htmlFor={id}
        style={styles}
      >
        {type === "squared" && (
          <Zsvg
            icon={checked ? iconCheck : icondefault}
            fontSize={"12pt"}
            color={"#fff"}
            styles={null}
            clasess={null}
          />
        )}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.any,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.string,
  reference: PropTypes.object,
  className: PropTypes.string,
  styles: PropTypes.object,
  iconCheck: PropTypes.string,
  icondefault: PropTypes.string,
};
