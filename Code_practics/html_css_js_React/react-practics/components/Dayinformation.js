import { Button, Card, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";

const ExpenseTracker = () => {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [items, setItems] = useState([]);



    const handleAddExpenses = () => {
        if (itemName && itemPrice) {
            const newItem = {name: itemName, price: parseFloat(itemPrice),date:new Date().toGMTString() };
            setItems([...items, newItem]);
            setItemName("");
            setItemPrice("");
        }
    };




    const deleteItem = (index) => {
        const updatedItems = [...items];
        const deletedItem = updatedItems.splice(index, 1)[0];
        setItems(updatedItems);
    };




    const IncomeComponent = () => {
        const calculateIncome = () => {
            const income = items.reduce((total, item) => {
                if (item.price > 0) {
                    return total + item.price;
                }
                return total;
            }, 0);

            return income;
        };

        const calculateExpense = () => {
            const expense = items.reduce((total, item) => {
                if (item.price < 0) {
                    return total + item.price;
                }
                return total;
            }, 0);

            return expense;
        };

        const income = calculateIncome();
        const expense = calculateExpense();


        return (
            <>
                <div className="d-flex">
                    <div style={{ flex: "1 1 50%", textAlign: "center", padding: "10px",borderRight: "3px solid black"  }}>
                        <Typography mt={2} > Income </Typography>
                        <p style={{ color: "green" }}>{income}$</p>
                    </div>
                    <div style={{flex: "1 1 50%", textAlign: "center", padding: "10px", }}  >
                        <Typography mt={2}  > Expense </Typography>
                        <p style={{ color: "red" }}>{expense}$</p>
                    </div>
                </div>
            </>
        );
    };

    const calculateTotalAmount = () => {
        const totalAmount = items.reduce((total, item) => {
            return total + item.price;
        }, 0);

        return totalAmount;
    };

    const totalAmount = calculateTotalAmount();

    return (
        <div
            style={{display: "flex",background: "gray",justifyContent: "center",alignItems: "center",  }}  >
            <Card style={{ width: 490, padding: "16px" }}>
                <Typography sx={{ my: 2 }} variant="h6" component="h2"> Expense Tracker  </Typography>
                <label htmlFor="amount" sx={{ my: 2 }}>YOUR BALANCE: ${totalAmount.toFixed(2)} </label>
                <IncomeComponent />
                <hr />
                <Typography sx={{ my: 2 }} variant="h6" component="h2"> Add Transaction</Typography>
                <TextField sx={{ my: 2 }}  fullWidth label="  Name" id="item-name"  value={itemName}   onChange={(event) => setItemName(event.target.value)}  />

                <TextField
                    sx={{ my: 2 }} fullWidth  label="Amount"   type="number" id="item-price"  value={itemPrice} onChange={(event) => setItemPrice(event.target.value.slice(0, 3))} />

                <Button sx={{ my: 2 }} size="large" variant="contained"  fullWidth onClick={handleAddExpenses} > Add Expenses </Button>

                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{ borderRight: "2px solid red",  margin: "5px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid black", }} >
                        <div>
                            <p style={{ marginBottom: "0" }}>{item.name}</p>
                            <p style={{ marginBottom: "0" }}> {item.date}   </p>
                        </div>
                        <div style={{ display: "flex" }}> <p style={{ padding: "10px", marginBottom: "0" }}> {item.price}  </p>
                            <IconButton aria-label="delete">
                                <DeleteIcon onClick={() => deleteItem(index)} />
                            </IconButton>
                        </div>
                    </div>
                ))}
            </Card>
        </div>
    );
};

export default ExpenseTracker;
