import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { TIMER_NTFY } from "../../config";

const lang = window.navigator.language.split("-")[0];

export const delayedAction = createAsyncThunk(
  "utilSlice/delayedAction",
  async (payload, { dipatch }) => {
    const timerAsync = TIMER_NTFY * 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(payload);
        console.log("timer", TIMER_NTFY);
      }, timerAsync);
    });
  }
);

let initialStateUtilSlice = {
  i18n: lang,
  ftNotify: null,
  ftnProgress: false,
  ftnDialogAlert: {},
};

export const utilSlice = createSlice({
  name: "utilSlice",
  immer: false,
  initialState: initialStateUtilSlice,
  reducers: {
    setFtNotify: (state, action) => {
      if (action.payload !== null && state.ftNotify === null) {
        const dataArr = action.payload.slice();
        const data = {
          type: dataArr[0],
          msn: dataArr[1],
        };
        state.ftNotify = data;
      } else state.ftNotify = null;
      initialStateUtilSlice = current(state);
    },
    setFtnDialogAlert: (state, action) => {
      if (Object.keys(state.ftnDialogAlert).length > 0) {
        const data = {
          title: action.payload[0],
          msn: action.payload[1],
        };
        state.ftnDialogAlert = data;
      } else state.ftnDialogAlert = {};
      initialStateUtilSlice = current(state);
    },
    setFtnProgress: (state, action) => {
      if (state.ftnProgress !== action.payload) {
        state.ftnProgress = action.payload;
      }
      initialStateUtilSlice = current(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(delayedAction.pending, (state, action) => {
        const delayData = action.meta.arg;

        const data = {
          title: delayData[0],
          msn: delayData[1],
        };
        state.ftnDialogAlert = data;
      })
      .addCase(delayedAction.fulfilled, (state) => {
        state.ftnDialogAlert = {};
      });
  },
});

export const { setFtNotify, setFtnDialogAlert, setFtnProgress } =
  utilSlice.actions;
export default utilSlice.reducer;
