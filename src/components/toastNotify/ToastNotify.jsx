import React from "react";
import { useEffect, useState } from "react";
import "./ToastNotify.css";

/// https://coding-front.github.io/ToastNotification1/
/// https://github.com/coding-front/ToastNotification1/blob/main/index.html

const ToastNotify = () => {
  const [first, setfirst] = useState({ type: "", icon: "", title: "" });
  useEffect(() => {
    console.log(`log : ${first.type} ${first.icone} ${first.title}`);
  }, [first]);

  const handleClic = (type, icon, title) => {
    setfirst({ type, icon, title });
  };

  return (
    <>
      <div>ToastNotify</div>
      {first.icon !== "" && (
        <div className="box">
          <div className={`notification ${first.type}`}>
            <div className="icon">
              <i className={`${first.icon}`}></i>
            </div>
            <div className="title">
              <h1>${first.title}</h1>
              <h6>This is a ${first.type}</h6>
            </div>
            <div
              className="close"
              onclick="(this.parentElement.parentElement).remove()"
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      )}

      <button
        className="btn"
        id="succses"
        onClick={() =>
          handleClic("succses", "fa-solid fa-circle-check", "Succses")
        }
      >
        Succses
      </button>
      <button
        className="btn"
        id="error"
        onClick={() =>
          handleClic("error", "fa-solid fa-circle-exclamation", "Error")
        }
      >
        Error
      </button>
      <button
        className="btn"
        id="warning"
        onClick={() =>
          handleClic("warning", "fa-solid fa-triangle-exclamation", "Warning")
        }
      >
        Warning
      </button>
      <button
        className="btn"
        id="info"
        onClick={() => handleClic("info", "fa-solid fa-circle-info", "Info")}
      >
        Info
      </button>
    </>
  );
};

export { ToastNotify };
