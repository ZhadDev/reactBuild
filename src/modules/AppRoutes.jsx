import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router";
import { useSelector } from "react-redux";

import { Home } from "./Common/home/Home";
import Menu from "../components/Menu/Menu";

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

const menu = {
  menuTitle: "Menu",
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

const Navigation = () => {
  return (
    <>
      <Menu {...menu} />
      {/*
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
         */}
    </>
  );
};

const AppRoutes = () => {
  //  const roles = ["admin"];
  const { roles } = useSelector((state) => state.securitySlice);
  console.log("roles", roles);

  return (
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
  );
};

const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default AppRoutes;
