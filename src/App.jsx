import SetDailyBudget from './components/SetDailyBudget';
import ExpenseTable from './components/ExpenseTable';
import AddExpense from './components/AddExpense';
import {useState, useEffect} from 'react';

function App() {
  const [dailyBudget, setDailyBudget] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    if (totalExpenses > dailyBudget) {
      alert("You have exceeded your daily budget!");
      setExpenses([]);
      setTotalExpenses(0);
      setDailyBudget(null);
      // API call to store the transactions in db
    }
  }, [totalExpenses]);

  return (
    <div>
      <h1>Expense Tracker - Airtribe</h1>
      {dailyBudget > 0 ? <p> Your Daily Budget is : {dailyBudget} </p> : <p>Please set your daily budget</p>}
      {totalExpenses > 0 ? <p style={{color: totalExpenses < dailyBudget/2 ? 'green' : 'orange'}}> Total Expenses are : {totalExpenses} </p> : null}
      <SetDailyBudget dailyBudget={dailyBudget} changeDailyBudget={setDailyBudget} />
      {
        dailyBudget > 0 ?
        <div>
        <ExpenseTable expenses={expenses} />
        <AddExpense setExpenses={setExpenses} setTotalExpenses={setTotalExpenses}/>
        </div>
      : null
      }
    </div>
  );
}

export default App;
