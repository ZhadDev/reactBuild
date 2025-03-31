import AppRoutes from "./modules/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./common/redux/store";
// AQUI SE INSTANCIA EL TOAST_NOTIFICATION
const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
