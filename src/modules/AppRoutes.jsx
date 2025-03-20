import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
    </main>
  );
};

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
  //  const roles = ["admin"];
  const { roles } = useSelector((state) => state.securitySlice);
  //const dev = useSelector((state) => state.security);
  const dev2 = useSelector((state) => state.utilSlice);
  console.log("dev2", dev2);
  console.log("roles", roles);

  //  const dev3 = useSelector((state) => state.userSlice);

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
