import { combineReducers } from "redux";
import utilSlice from "./utilSlice";
import userSlice from "./userSlice";
import securitySlice from "./securtySlice";

// banco de datos
const rootReducer = combineReducers({
  utilSlice,
  userSlice,
  securitySlice,
});

export { rootReducer };
