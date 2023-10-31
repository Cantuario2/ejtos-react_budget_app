import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_Currency",
      payload: val,
    });
  };

  return (
    <div className="alert alert-success">
      {" "}
      Currency{" "}
      {
        <select
          name="Currency"
          id="Currency"
          onChange={(event) => changeCurrency(event.target.value)}
          style={{ background: "rgb(150,228,155)", borderRadius: "0.3em", border: "0.1em" }}
        >
          <option style={{ background: "rgb(150,228,155)" }} value="$">
            $ Dollar
          </option>
          <option style={{ background: "rgb(150,228,155)" }} value="£">
            £ Pound
          </option>
          <option style={{ background: "rgb(150,228,155)" }} value="€">
            € Euro
          </option>
          <option style={{ background: "rgb(150,228,155)" }} value="₹">
            ₹ Ruppee
          </option>
        </select>
      }
    </div>
  );
};

export default Currency;
