const express = require("express");
const router = express.Router();
const db = require("../db");

// Create
router.post("", (request, response) => {
  const { date, description, type, amount } = request.body;
  const sql =
    "INSERT INTO tb_expenses (c_date, c_description, fk_expense_type, c_amount) VALUES (?, ?, ?, ?)";
  db.query(sql, [date, description, type, amount], (error, result) => {
    if (error) {
      console.log(
        "Error occured while posting a new expense into database" +
          error.message
      );
      return response.status(500).json({ error_message: error.message });
    }
    console.log("Data posted successfully!");
    response.status(201).json({ message: "Successfully Posted!" });
  });
});
// // Read all
router.get("", (request, response) => {
  // const sql = "SELECT * FROM tb_expenses";
  const sql =
    "SELECT exp.pk_id, exp.c_date, exp.c_description, exp.c_amount, et.c_type FROM db_express.tb_expenses exp INNER JOIN db_express.tb_expense_types et ON exp.fk_expense_type = et.pk_id";
  db.query(sql, (error, result) => {
    if (error) {
      console.log("Error occured while selecting query: " + error.message);
      return response.status(500).json({ error_message: error.message });
    }
    console.log("Successfully selected!");
    response.json(result);
  });
});
// // Read a single
router.get("/:id", (request, response) => {
  const id = request.params.id;
  const sql = "SELECT * from tb_expenses WHERE pk_id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      console.log("Error occured while selecting query: " + error.message);
      return response.status(500).json({ error_message: error.message });
    }
    console.log("Successfully selected!");
    response.json(result);
  });
});
// // Update
router.put("/:id", (request, response) => {
  const id = request.params.id;
  const { date, description, type, amount } = request.body;
  const sql =
    "UPDATE tb_expenses SET c_date = ?, c_description = ?, fk_expense_type = ?, c_amount = ? WHERE pk_id = ?";
  db.query(sql, [date, description, type, amount, id], (error, result) => {
    if (error) {
      console.log("Error occured while updating query: " + error.message);
      return response.status(500).json({ error_message: error.message });
    }
    console.log("Data updated successfully!");
    response.json({ message: "Successfully Updated!" });
  });
});
// // Delete
router.delete("/:id", (request, response) => {
  const id = request.params.id;
  const sql = "DELETE FROM tb_expenses WHERE pk_id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      console.log("Error occured while deleting query: " + error.message);
      return response.status(500).json({ error_message: error.message });
    }
    console.log("Data deleted successfully!");
    response.json({ message: "Successfully Deleted!" });
  });
});

module.exports = router;
