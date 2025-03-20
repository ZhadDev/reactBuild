import { createSlice, current } from "@reduxjs/toolkit";

const lang = window.navigator.language.split("-")[0];

let initialStateUtilSlice = {
  i18n: lang,
  ftNotify: null,
  ftnProgress: false,
  ftnDialogAlert: null,
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
      if (action.payload !== null && state.ftnDialogAlert === null) {
        const data = {
          title: action.payload[0],
          msn: action.payload[1],
        };
        state.ftnDialogAlert = data;
      } else state.ftnDialogAlert = null;
      initialStateUtilSlice = current(state);
    },
    setFtnProgress: (state, action) => {
      if (state.ftnProgress !== action.payload) {
        state.ftnProgress = action.payload;
      }
      initialStateUtilSlice = current(state);
    },
  },
});

export const { setFtNotify, setFtnDialogAlert, setFtnProgress } =
  utilSlice.actions;
export default utilSlice.reducer;
