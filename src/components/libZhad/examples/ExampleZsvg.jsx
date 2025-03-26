import { Zsvg } from "../zSvg/Zsvg";
import iconsFtlo from "../zSvg/icons.png";
const icons = [
  "trash",
  "plus",
  "pencil",
  "right",
  "left",
  "up-open",
  "down-open-1",
  "sort-up",
  "sort-down",
  "th",
  "th-list",
  "menu",
  "eye",
  "eye-off",
  "user",
  "users",
  "user-circle",
  "user-circle-o",
  "user-secret",
  "user-plus",
  "user-times",
  "ok",
  "camera",
  "map",
  "map-1",
  "location",
];

const style = { padding: "5pt" };

export const ExampleZsvg = () => {
  return (
    <>
      <Zsvg icon={"trash"} fontSize={"15pt"} color={"red"} />
      <Zsvg icon={"pencil"} fontSize={"55pt"} color={"blue"} />
      <Zsvg icon={"camera"} fontSize={"85pt"} color={"#d57611"} />
      <Zsvg />
      <img src={iconsFtlo} alt="iconos al momento" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 80pt)",
          alignItems: "center",
          justifyItems: "center",
          rowGap: "10pt",
        }}
      >
        {icons.map((ico, index) => {
          
          return (
            <div key={index}>
              {ico}
              <Zsvg
                icon={ico}
                fontSize={"15pt"}
                color={"green"}
                styles={style}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
