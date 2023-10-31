import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  const handleMinBudget = (expenses) => {
    return expenses.reduce((a, b) => a + b.cost, 0);
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}{budget}</span>
      <input
        type="number"
        step="10"
        max={20000}
        min={handleMinBudget(expenses)}
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;