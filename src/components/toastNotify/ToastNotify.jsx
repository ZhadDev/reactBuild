import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "./ToastNotify.css";
import { Zsvg } from "../libZhad/zSvg/Zsvg";
import { TIMER_NTFY } from "../../common/config";

const iconToast = (type) => {
  const objIcon = {};
  const resUpp = type.toUpperCase();
  objIcon["SUCCESS"] = "ok-squared";
  objIcon["WARNING"] = "attention";
  objIcon["INFO"] = "info-circled";
  objIcon["ERROR"] = "exclamation";
  objIcon["CLOSE"] = "cancel";

  const result = objIcon[resUpp];

  return result;
};

const objToast = (type) => {
  const objRes = {};
  const resUpp = type.toUpperCase();
  const resLow = type.toLowerCase();
  const icon = iconToast(type);
  const fontSize = "21pt";
  objRes["SUCCESS"] = { type: resLow, icon, fontSize };
  objRes["WARNING"] = { type: resLow, icon, fontSize };
  objRes["ERROR"] = { type: resLow, icon, fontSize };
  objRes["INFO"] = { type: resLow, icon, fontSize };
  objRes["CLOSE"] = { type: resLow, icon, fontSize };

  const result = objRes[resUpp];

  return result;
};

const ToastNotify = ({
  type = "error",
  message = "Zhad is the best.",
  durationTime = TIMER_NTFY || 5,
}) => {
  const container = document.getElementById("portal-root");
  const objNotify = objToast(type);

  const onClicCancel = () => {
    console.log("cancelando");

    ("(this.parentElement.parentElement).remove()");
  };

  const body = (
    <>
      {objNotify.icon !== "" && (
        <div className="box">
          <div
            className={`notification ${objNotify.type}`}
            style={{ "--zNtfy-timer": `${durationTime}s` }}
          >
            <div className="icon">
              <Zsvg color="#fff" icon={objNotify.icon} fontSize="15pt" />
            </div>
            <div className="title">
              <h1>{objNotify.type}</h1>
              <h6>{message}</h6>
            </div>
            <div className="close" onclick={onClicCancel}>
              <Zsvg color="white" icon={"cancel"} fontSize="15pt" />
            </div>
          </div>
        </div>
      )}
    </>
  );

  return createPortal(body, container);
};

PropTypes.ToastNotify = {
  type: PropTypes.string,
  message: PropTypes.string,
  durationTime: PropTypes.number,
};

export { ToastNotify };
