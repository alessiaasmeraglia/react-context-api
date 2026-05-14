import { createContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider (){
    return (
        <h1>BudgetContext</h1>

    );
}

export { BudgetContext, BudgetProvider};