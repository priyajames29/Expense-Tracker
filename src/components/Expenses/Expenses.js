import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearSelectHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };

  const filteredExpenses = props.expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={yearSelectHandler}
        />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </li>
  );
};

export default Expenses;
