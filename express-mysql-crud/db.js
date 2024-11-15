const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "expense_prj_user",
  password: "Pas#wor9",
  database: "db_express",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Successfully connected to MySQL database!");
});

module.exports = db;
