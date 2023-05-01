import { useEffect } from "react";
import { useGlobalContext } from "../../../context/GobalContext";
import { insertComma } from "../../../utilities/insertComma";
import { roundNumber } from "../../../utilities/roundNumber";

const CustomTooltip = (props) => {
  const { activeSymbol } = useGlobalContext();

  useEffect(() => {
    console.log(activeSymbol);
  }, []);

  const { payload } = props;
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #bebebe",
        padding: "0px 10px",
      }}
    >
      {payload.map((entries, index) => {
        return (
          <div key={index} style={{ margin: "0", fontSize: "14px" }}>
            <p style={{ paddingBottom: "0", marginBottom: "0" }}>
              {entries.payload.time}
            </p>
            <p style={{ paddingTop: "0", marginTop: "5px" }}>
              Price:
              {` ${activeSymbol} ${insertComma(roundNumber(entries.value))}`}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CustomTooltip;
