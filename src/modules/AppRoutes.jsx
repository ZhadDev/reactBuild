import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom"; // Asegúrate de usar react-router-dom
import { useSelector, useDispatch } from "react-redux";
import Loaders from "../components/loaders/Loaders";
import Menu from "../components/Menu/Menu";
import { useEffect } from "react";
import { setFtnProgress } from "../common/redux/slices/utilSlice";

// Modules COMMON
import { Home } from "./Common/home/Home";
import { NoMatch } from "./Common/noMatch/NoMatch";
import { ToastNotify } from "../components/toastNotify/ToastNotify";
import Example from "./example/Example";

const Users = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Users</h2>
    </main>
  );
};

const Navigation = () => {
  const menu = {
    menuTitle: "zhad", // Usa el título dinámico
    menuOptionsBackgroundColor: "",
    menuTextColor: "white",
    dataMenuOptions: [
      { title: "home" },
      { title: "login" },
      {
        title: "users",
        subMenuOptions: [{ title: "profile" }, { title: "logout" }],
      },
    ],
  };

  return (
    <>
      <Menu {...menu} />
    </>
  );
};

const AppRoutes = () => {
  const { ftnProgress, ftnDialogAlert } = useSelector(
    (state) => state.utilSlice
  );

  const { roles } = useSelector((state) => state.securitySlice);
  const dispatch = useDispatch();
  const notify = { type: ftnDialogAlert.title, message: ftnDialogAlert.msn };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setFtnProgress(true));
    }, 1800);
  }, [dispatch]);

  return (
    <>
      {!ftnProgress && <Loaders />}
      {Object.keys(ftnDialogAlert).length > 0 && <ToastNotify {...notify} />}
      <BrowserRouter>
        {!["/login", "/*"].includes(location.pathname) ? <Navigation /> : null}
        <Routes>
          <Route
            path="home"
            element={
              <ProtectedRoute
                user={roles}
                redirectPath={"/users"}
                isAllowed={roles.includes("admin")}
              >
                <Example />
              </ProtectedRoute>
            }
          />
          <Route path="users" index element={<Users />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default AppRoutes;
