import { useDispatch } from "react-redux";
import { delayedAction } from "../../../common/redux/slices/utilSlice";

const Home = () => {
  const dispatch = useDispatch();
  const handleClic = () => {
    const data = ["success", "PROBANDO CAPACIDAD"];
    dispatch(delayedAction(data));
  };

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
      <button className="btn" id="error" onClick={handleClic}>
        TOAST NOTIFY
      </button>
    </main>
  );
};

export { Home };
