import "./NewExpenses.css";
import ExpenseForms from "./ExpenseForm";
import { useState } from "react";

const NewExpenses = (props) => {
  const [buttonValue, setButtonValue] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setButtonValue(false);
  };

  const startEditingHandler = () => {
    setButtonValue(true);
  };

  const stopEditingHandler = () => {
    setButtonValue(false);
  };

  return (
    <div className="new-expense">
      {!buttonValue && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {buttonValue && (
        <ExpenseForms
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
