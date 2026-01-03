const SetDailyBudget = (props) => {
    const {dailyBudget, changeDailyBudget} = props;

    const setBudget = (e) => {
        e.preventDefault();
        console.log(e);
        changeDailyBudget(e.target[0].value);
        e.target[0].value = null;
    }

    const resetBudget = (e) => {
        e.preventDefault();
        changeDailyBudget(null);
    }

    return ( 
        <form onSubmit = {setBudget}>
            <input type="number" name="" id="" />
            {!dailyBudget ? <button type="submit">Set Daily Budget</button> : null }
            {dailyBudget > 0 ? <button onClick={resetBudget}>Reset Daily Budget</button> : null}
        </form>
     );
}
 
export default SetDailyBudget;