const express = require("express");
var cors = require("cors");
const app = express();
const PORT = 3001;

const expenseRouter = require("./routes/expense-router");

app.use(express.json());

app.use(cors());

app.use("/api/expenses", expenseRouter);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
