import { createContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider (){
    const [budgetMode, setBudgetMode] = useState(false);
    
    return (
        <h1>BudgetContext</h1>

    );
}

export { BudgetContext, BudgetProvider};