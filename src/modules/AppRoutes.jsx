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
import Loaders from "../components/loaders/Loaders";

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
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

const AppRoutes = () => {
  const { ftnProgress } = useSelector((state) => state.utilSlice);

  //  const roles = ["admin"];
  const { roles } = useSelector((state) => state.securitySlice);
  console.log("roles", roles);
  console.log("ftnProgress", ftnProgress);

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
