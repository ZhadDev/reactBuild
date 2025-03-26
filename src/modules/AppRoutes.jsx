import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom"; // Asegúrate de usar react-router-dom
import { useSelector, useDispatch } from "react-redux";

import { Home } from "./Common/home/Home";
import Loaders from "../components/loaders/Loaders";
import Menu from "../components/Menu/Menu";
import { useEffect, useState } from "react";
import { setFtnProgress } from "../common/redux/slices/utilSlice";

const Users = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Users</h2>
    </main>
  );
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

const Navigation = () => {
  const location = useLocation(); // Hook para obtener la ubicación actual
  const [menuTitle, setMenuTitle] = useState("Menu"); // Estado para el título del menú

  // Actualiza el título del menú según la ruta actual
  useEffect(() => {
    var path = location.pathname;
    var url = path.split("/");
    var titleURL = url[1];
   setMenuTitle(titleURL);  
  }, [location.pathname]);

  const menu = {
    menuTitle, // Usa el título dinámico
    menuOptionsBackgroundColor: "red",
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
  const { ftnProgress } = useSelector((state) => state.utilSlice);

  const { roles } = useSelector((state) => state.securitySlice);
  const dispatch = useDispatch();
  console.log("roles", roles);
  console.log("ftnProgress", ftnProgress);

  useEffect(() => {
    console.log("AppRoutes useEffect");
    setTimeout(() => {
      dispatch(setFtnProgress(true));
      console.log("AppRoutes setTimeout");
    }, 4000);
  }, []);

  return (
    <>
      {!ftnProgress && <Loaders />}

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="home"
            element={
              <ProtectedRoute
                user={roles}
                redirectPath={"/users"}
                isAllowed={roles.includes("admin")}
              >
                <Home />
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