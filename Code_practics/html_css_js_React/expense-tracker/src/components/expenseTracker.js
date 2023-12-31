import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ExpenseTracker = () => {
    const [Income, SetIncome] = useState("");
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
        <div style={{ background: "gray", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card style={{ width: 390,border:"4px solid black", background: "white", padding: "16px" }}>
                <Typography sx={{ my: 2 }} variant="h6" component="h2">
                    Expense Tracker
                </Typography>
                <div  style={{display:"flex"}}>
                    <IncomeComponent value={"Debit"} debitTotal={debitTotal} />
                    <IncomeComponent value={"Account Balance"} debitTotal={Income - debitTotal} />
                </div>
                <label htmlFor="amount"  >
                    TOTAL BALANCE: $ {Income}
                </label>
                <TextField sx={{ my: 2 }} inputProps={{ min: "0", step: "any" }} type="number" fullWidth label="Enter Your Income($)" id="amount" value={Income} onChange={handleIncomeChange} />
                <label   htmlFor="amount">
                    Item Name
                </label>
                <TextField sx={{ my: 2 }} fullWidth label="Enter Item Name" id="item-name" value={itemName} onChange={(event) => setItemName(event.target.value)} />
                <label   htmlFor="amount">
                    Item Price
                </label>
                <TextField sx={{ my: 2 }} fullWidth label="Enter Item Price ($)" inputProps={{ min: "0", step: "any" }} type="number" id="item-price" value={itemPrice} onChange={(event) => setItemPrice((event.target.value).slice(0,4))} />
                <Button   sx={{ my: 2 }} size="large" variant="contained" fullWidth onClick={handleAddExpenses}>
                    Add Expenses
                </Button>
                {items.map((item, index) => (
                    <div key={index} style={{display:"flex", justifyContent:"space-between"   }}>
                        <p style={{ padding: "6px"}}>   {item.name}</p>
                        <p style={{borderLeft:"3px solid red", width:"40px", padding: "6px"}}> <span style={{fontWeight:"bold"}}>$</span> {item.price}</p>
                    </div>
                ))}
            </Card>
        </div>
    );
};

const IncomeComponent = (props) => {
    return (
        <>
            <div style={{ flex: "1 1 50%", background: "rgb(25 118 210)", padding: "10px", borderRight: "3px solid red", borderLeft: "3px solid red",color:"white" }}>
                <Typography mt={2} variant="h6" component="h6">
                    {props.value}
                </Typography>
                <p>$ &thinsp;{props.debitTotal}</p>
            </div>
        </>
    );
};

export default ExpenseTracker;
