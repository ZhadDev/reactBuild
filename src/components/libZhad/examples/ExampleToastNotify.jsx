import React from "react";
import { ToastNotify } from "../toastNotify/ToastNotify";

export const ExampleToastNotify = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToastNotify
        type="warning"
        message="Zhad is the best"
        //  durationTime = 3
      />
      <button
        style={{
          padding: "10px 20px",
          fontSize: "20px",
          outline: "none",
          border: "none",
          backgroundColor: "#4070f4",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        show notify
      </button>
    </div>
  );
};
