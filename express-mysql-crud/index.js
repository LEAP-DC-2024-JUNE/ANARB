const express = require("express");
const app = express();
const PORT = 3001;

const expenseRouter = require("./routes/expense-router");

app.use(express.json());

app.use("/api/expenses", expenseRouter);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
