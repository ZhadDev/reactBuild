// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Checkbox, LabelForm } from "../components/componentIndex";
import { Zsvg } from "../../../zSvg/Zsvg";
import { Button } from "../components/componentIndex";

/*
base del select
const base = {zhd: ['Zhad', false],
dlc: ['Delacroix', true],
drk: ['Drark', false],
hyb: ['Hayabusa', true],}
*/

export const FieldForeingMulti = ({
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
  iconSelect = "th",
}) => {
  const [labelFocus, setlabelFocus] = useState(false);
  const [labFocStyle, setlabFocStyle] = useState(false);
  const [StyleError, setStyleError] = useState(false);
  const [showList, setShowList] = useState(false);
  const [dataSelect, setdataSelect] = useState({});
  const [valuekey, setValuekey] = useState(value);
  const [valueLabel, setvalueLabel] = useState("");

  useEffect(() => {
    const base = {};
    const values = [];
    for (const dataNew in foreignDao) {
      if (valuekey.includes(Number(dataNew))) {
        values.push(foreignDao[dataNew]);
      }
      const validate = valuekey.includes[("", null, undefined)]
        ? false
        : valuekey.includes(Number(dataNew));

      base[dataNew] = [foreignDao[dataNew], validate];
    }
    setdataSelect(base);
    setvalueLabel(values);
  }, []);

  const lblFocus = (event) => {
    const typeEvent = event?.type !== undefined ? event.type : "click";
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

  const onClickItemForeign = (dataKey) => {
    const icoCheck = document.querySelector(`#checkZhad_${dataKey}`);
    const localCK = dataSelect[dataKey][1];
    dataSelect[dataKey][1] = !localCK;
    icoCheck.checked = !localCK;
    setdataSelect(dataSelect);

    const arrKeys = [];
    const arrValues = [];
    for (const newVal in dataSelect) {
      if (dataSelect[newVal][1]) {
        arrKeys.push(Number(newVal));
        arrValues.push(dataSelect[newVal][0]);
      }
    }
    setValuekey(arrKeys);
    setvalueLabel(arrValues);
    onChange(arrKeys, arrValues);
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
          onBlur={(e) => lblFocus(e)}
          onClick={(e) => lblFocus(e)}
        >
          <input
            className={"zinputBase-input zinput-input"}
            id={id}
            ref={reference}
            type={"text"}
            value={valueLabel}
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
          />
          <div
            className={
              "zinputAdornment-root zmakeStyles-inputAdornment-13 zinputAdornment-positionStart"
            }
            onClick={(e) => lblFocus(e)}
          >
            <Zsvg
              icon={iconSelect}
              fontSize={"15pt"}
              color={StyleError ? "red" : "gray"}
              styles={style}
            />
          </div>
        </div>
      </div>
      {showList && (
        <ComponentSelectFrg
          dataElements={dataSelect}
          i18n={i18n}
          valFgn={valuekey}
          onClicDtaFgn={onClickItemForeign}
          onCreateFrg={onCreateFrg}
          permissionsCreateFrg={permissionsCreateFrg}
          nameBtnClose={nameBtnClose}
          nameBtnCreate={nameBtnCreate}
          onCloseList={(e) => lblFocus(e)}
        />
      )}
    </>
  );
};
FieldForeingMulti.propTypes = {
  value: PropTypes.any,
  maxStr: PropTypes.number,
  minStr: PropTypes.number,
  maxNum: PropTypes.number,
  mandatory: PropTypes.bool,
  getValue: PropTypes.func,
  id: PropTypes.any,
  label: PropTypes.string,
  visible: PropTypes.bool,
  iconMndtory: PropTypes.bool,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  maxIntStr: PropTypes.number,
  reference: PropTypes.object,
  foreignDao: PropTypes.object,
  i18n: PropTypes.string,
  readOnly: PropTypes.bool,
  onCreateFrg: PropTypes.func,
  iconSelect: PropTypes.string,
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
  const ref = useRef(null);

  const onChangeFilter = (value) => {
    const arrDtElements = Object.values(dataElements);
    const arrDtFilter = [];
    const valFilter = value.toLowerCase();
    for (const dtElem of arrDtElements) {
      arrDtFilter.push(dtElem[0].toLowerCase());
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
        placeholder={"BUSCAR"}
        onChange={(event) => {
          onChangeFilter(event.target.value);
        }}
      />
      <Zsvg
        icon={"search-circled"}
        fontSize={"14pt"}
        color={"rgb(142 152 152 / 59%)"}
        styles={{ position: "absolute", top: "1.65rem", right: "0.5rem" }}
      />
      <div className="zselectBody">
        <div className="zlist-groups">
          {Object.keys(dataElements).map((key) => {
            const isActive = valFgn.includes(Number(key));
            const datakey = dataElements[key][0]
              .toLowerCase()
              .indexOf(valFilter.toLowerCase());

            return (
              <div key={key}>
                {datakey !== -1 && (
                  <div className="ztxtField_cf_ffm__itemSelectCheck">
                    <Checkbox
                      id={`checkZhad_${key}`}
                      checked={dataElements[key][1]}
                      onChange={() => onClicDtaFgn(key)}
                      type={"squared"}
                      iconCheck="ok"
                      icondefault="plus"
                    />
                    <button
                      type="button"
                      value={key}
                      className={`zlist-group-items zlist-group-items-action ${
                        isActive ? "zitemCheck" : ""
                      }`}
                      onClick={() => onClicDtaFgn(key)}
                    >
                      {dataElements[key]}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="zselect-btnFgn">
        <Button
          type="button"
          onClick={() => onCloseList()}
          variant="outlined"
          nameBtn={nameBtnClose}
          style={{ padding: "1pt 12pt", fontSize: "1.2rem" }}
        />
        {btnCreate && (
          <Button
            type="button"
            onClick={() => onCreateFrg(valFilter)}
            variant="contained"
            nameBtn={nameBtnCreate}
            style={{ padding: "1pt 12pt", fontSize: "1.2rem" }}
          />
        )}
      </div>
    </div>
  );
};

ComponentSelectFrg.propTypes = {
  i18n: PropTypes.string,
  dataElements: PropTypes.object,
  onClicDtaFgn: PropTypes.func,
  onCloseList: PropTypes.func,
  onCreateFrg: PropTypes.func,
};
