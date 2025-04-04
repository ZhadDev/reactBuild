import AppRoutes from "./modules/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./common/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
