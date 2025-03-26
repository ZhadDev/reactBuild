/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LabelForm } from "../components/componentIndex";
import { Zsvg } from "../../../zSvg/Zsvg";
import { Button } from "../components/componentIndex";

const ICONS = {
  HAMBURGUER: "th-list",
  CLEAN_INPUT: "window-close",
  SEARCH: "search-circled",
};

/**
 * @name FieldForeign
 * @id {any || null }
 * @label {string || null }
 * @onChange {func || null }
 * @value {string || null }
 * @reference {object || null }
 * @disabled {bool || null }
 * @autoComplete {string || null }
 * @maxIntStr {number || null }
 * @mandatory {bool || null }
 * @i18n {string || null }
 * @foreignDao {object || null }
 * @permissionsCreateFrg {bool || null }
 * @readOnly {bool || null }
 * @nameBtnClose {string || null }
 * @nameBtnCreate {string || null }
 * @returns
 */

export const FieldForeign = ({
  id,
  label,
  onChange,
  value,
  reference,
  disabled,
  autoComplete,
  maxIntStr,
  mandatory,
  i18n,
  foreignDao,
  permissionsCreateFrg,
  readOnly,
  nameBtnClose,
  nameBtnCreate,
}) => {
  const [labelFocus, setlabelFocus] = useState(false);
  const [labFocStyle, setlabFocStyle] = useState(false);
  const [StyleError, setStyleError] = useState(false);
  const [showList, setShowList] = useState(false);

  const lblFocus = (event) => {
    const typeEvent = event.type;
    if (typeEvent === "click") {
      if (value === "") {
        if (!showList) {
          setlabelFocus(true);
          setlabFocStyle(true);
          setShowList(!showList);
        }
        if (showList) {
          setlabelFocus(false);
          setlabFocStyle(false);
          setShowList(!showList);
        }
      }
      if (value !== "") {
        if (!showList) {
          setlabFocStyle(true);
          setShowList(!showList);
        }
        if (showList) {
          setlabFocStyle(false);
          setShowList(!showList);
        }
      }
    }
  };

  const onClickItemForeign = (event) => {
    const element = event.currentTarget;
    const elementValue = element.getAttribute("value");
    const elementContext = element.textContent;
    const dataValue = [elementValue, elementContext];

    if (dataValue.length > 0) {
      const valueForeign = dataValue[0];
      const nameForeign = dataValue[1];

      onChange(valueForeign, nameForeign);
      setlabelFocus(true);
      setlabFocStyle(false);
      setShowList(false);
    }
  };

  const onCreateFrg = (value) => {
    onChange(null, value);
  };

  useEffect(() => {
    if (value === "" && mandatory) {
      setStyleError(true);
    }

    if (value !== "" && mandatory) {
      setStyleError(false);
    }
    if (value !== "") {
      setlabelFocus(true);
    }

    return () => {};
  }, [value]);

  const style = { marginInlineEnd: "-5pt" };

  const cleanInput = (_) => {
    onChange("", "");
  };

  return (
    <>
      <div className="zdivContainInput">
        <LabelForm labelFocus={labelFocus} id={id} label={label} />
        <div
          className={`zinputBase-root zinput-root zinputBase-fullWidth zinput-formCrtl zinput-underline ${
            labFocStyle
              ? "zinput-underline-focusAF"
              : "zinput-underline-focusOFF"
          } ${StyleError ? "zinput-underline-focus-error" : ""}`}
        >
          <input
            className={"zinputBase-input zinput-input"}
            id={id}
            ref={reference}
            type={"text"}
            value={value}
            placeholder={label}
            disabled={disabled}
            autoComplete={autoComplete}
            aria-invalid="true"
            maxLength={maxIntStr}
            readOnly={readOnly}
            min="0"
            onChange={(event) => {
              onChange(event.target.value);
            }}
            onBlur={lblFocus}
            onClick={lblFocus}
          />
          <div className={"zinputAdornment-root zinputAdornment-positionStart"}>
            <Zsvg
              onClick={lblFocus}
              icon={ICONS.HAMBURGUER}
              fontSize={"15pt"}
              color={StyleError ? "red" : "gray"}
              styles={style}
            />
            {!["", null, undefined].includes(value) && (
              <Zsvg
                onClick={cleanInput}
                icon={ICONS.CLEAN_INPUT}
                fontSize={"16pt"}
                color={"gray"}
                styles={{ position: "absolute", right: "42px" }}
              />
            )}
          </div>
        </div>
      </div>
      {showList && (
        <ComponentSelectFrg
          dataElements={foreignDao}
          i18n={i18n}
          valFgn={value}
          onClicDtaFgn={onClickItemForeign}
          onCreateFrg={onCreateFrg}
          permissionsCreateFrg={permissionsCreateFrg}
          nameBtnClose={nameBtnClose}
          nameBtnCreate={nameBtnCreate}
          onCloseList={lblFocus}
        />
      )}
    </>
  );
};
FieldForeign.propTypes = {
  id: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  reference: PropTypes.object,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  maxIntStr: PropTypes.number,
  mandatory: PropTypes.bool,
  i18n: PropTypes.string,
  foreignDao: PropTypes.object,
  permissionsCreateFrg: PropTypes.bool,
  readOnly: PropTypes.bool,
};

const ComponentSelectFrg = ({
  dataElements,
  i18n,
  valFgn,
  onClicDtaFgn,
  onCloseList,
  onCreateFrg,
  permissionsCreateFrg,
  nameBtnClose,
  nameBtnCreate,
}) => {
  const [valFilter, setValFilter] = useState("");
  const [btnCreate, setBtnCreate] = useState(false);

  const onChangeFilter = (value) => {
    const arrDtElements = Object.values(dataElements);
    const arrDtFilter = [];
    const valFilter = value.toLowerCase();
    for (const dtElem of arrDtElements) {
      arrDtFilter.push(dtElem.toLowerCase());
    }

    const validateFilter = arrDtFilter.filter((item) =>
      item.includes(valFilter)
    );

    if (validateFilter.length === 0 && !btnCreate && permissionsCreateFrg) {
      setBtnCreate(true);
    }

    if (validateFilter.length > 0 && btnCreate) {
      setBtnCreate(false);
    }

    setValFilter(value);
  };

  return (
    <div className={"zstyleContainerFgn"}>
      <div className="ztitle-select-icon">{"Seleccione un registro"}</div>
      <input
        className="zform-control-Search"
        type="text"
        placeholder={"Buscar"}
        onChange={(event) => {
          onChangeFilter(event.target.value);
        }}
      />
      <Zsvg
        icon={ICONS.SEARCH}
        fontSize={"14pt"}
        color={"rgb(142 152 152 / 59%)"}
        styles={{ position: "absolute", top: "1.65rem", right: "0.5rem" }}
      />
      <div className="zselectBody">
        <div className="zlist-groups">
          {Object.keys(dataElements).map((key) => {
            const isActive = valFgn === dataElements[key];
            const datakey = dataElements[key]
              .toLowerCase()
              .indexOf(valFilter.toLowerCase());

            return (
              <div key={key}>
                {datakey !== -1 && (
                  <button
                    type="button"
                    value={key}
                    className={`zlist-group-items zlist-group-items-action ${
                      isActive ? "zitemCheck" : ""
                    }`}
                    onClick={(event) => {
                      onClicDtaFgn(event);
                    }}
                  >
                    {dataElements[key]}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={btnCreate ? "zselect-btnFgns" : "zselect-btnFgn"}>
        {btnCreate && (
          <Button
            onClick={() => onCreateFrg(valFilter)}
            variant="contained"
            nameBtn={nameBtnCreate}
            style={{ padding: "1pt 12pt" }}
          />
        )}

        <Button
          onClick={onCloseList}
          variant="outlined"
          nameBtn={nameBtnClose}
          style={{ padding: "1pt 12pt" }}
        />
      </div>
    </div>
  );
};

ComponentSelectFrg.propTypes = {
  dataElements: PropTypes.object,
  i18n: PropTypes.string,
  valFgn: PropTypes.string,
  onClicDtaFgn: PropTypes.func,
  onCloseList: PropTypes.func,
  onCreateFrg: PropTypes.func,
  permissionsCreateFrg: PropTypes.bool,
};
