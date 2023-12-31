import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ExpenseTracker = () => {
    const [Income, SetIncome] = useState("");
    const [balance, setBalance] = useState(0);
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [items, setItems] = useState([]);
    const [debitTotal, setDebitTotal] = useState(0);

    const handleIncomeChange = (event) => {
        SetIncome(event.target.value.slice(0, 10));
    };



    const handleAddExpenses = () => {
        if (itemName && itemPrice) {
            const newItem = {
                name: itemName,
                price: itemPrice,
            };
            setItems([...items, newItem]);
            setDebitTotal(debitTotal + parseFloat(itemPrice));
            setItemName("");
            setItemPrice("");
        }
    };

    return (
        <div style={{ height: "100vh ", background: "ivory", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card style={{ width: 390, background: "white", padding: "16px" }}>
                <Typography sx={{ my: 2 }} variant="h6" component="h2">
                    Expense Tracker
                </Typography>

                <div className="d-flex">
                    <IncomeComponent value={"Debit"} debitTotal={debitTotal} />
                    <IncomeComponent value={"Account Balance"} debitTotal={Income - debitTotal} />
                </div>

                <label htmlFor="amount" sx={{ my: 2 }}>
                    TOTAL BALANCE: $ {Income}
                </label>
                <TextField sx={{ my: 2 }} inputProps={{ min: "0", step: "any" }} type="number" fullWidth label="Enter Your Income" id="amount" value={Income} onChange={handleIncomeChange} />

                <label sx={{ my: 2 }} htmlFor="amount">
                    Item Name
                </label>
                <TextField sx={{ my: 2 }} fullWidth label="Enter Item Name" id="item-name" value={itemName} onChange={(event) => setItemName(event.target.value)} />

                <label sx={{ my: 2 }} htmlFor="amount">
                    Item Price
                </label>
                <TextField sx={{ my: 2 }} fullWidth label="Enter Item Price ($)" inputProps={{ min: "0", step: "any" }} type="number" id="item-price" value={itemPrice} onChange={(event) => setItemPrice((event.target.value).slice(0,3))} />

                <Button   sx={{ my: 2 }} size="large" variant="contained" fullWidth onClick={handleAddExpenses}>
                    Add Expenses
                </Button>

                {items.map((item, index) => (
                    <div key={index} style={{display:"flex", justifyContent:"space-between"   }}>
                        <p style={{ padding: "6px"}}>   {item.name}</p>
                        <p style={{borderLeft:"3px solid red", width:"40px", padding: "6px"}}>  {item.price}</p>
                    </div>
                ))}
            </Card>
        </div>
    );
};

const IncomeComponent = (props) => {
    return (
        <>
            <div style={{ flex: "1 1 50%", background: "green", padding: "10px", borderRight: "3px solid red", borderLeft: "3px solid red" }}>
                <Typography mt={2} variant="h6" component="h6">
                    {props.value}
                </Typography>
                <p>{props.debitTotal}</p>
            </div>
        </>
    );
};

export default ExpenseTracker;
