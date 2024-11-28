const item = require("../models/item");

exports.createItem = async (req, res) => {
  try {
    const item = new item(req.body);
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await item.findById(id);
    res.json(item);
    if (!item) {
      res.status(404).json({ message: "Item not found" });
    } else {
      res.json(item);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedItem = await item.findByIdAndUpdate(id, req.body);
    if (!updatedItem) {
      res.status(404).json({ message: "Item not found" });
    } else {
      res.json(updatedItem);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedItem = await item.findByIdAndDelete(id);
    if (!deletedItem) {
      res.status(404).json({ message: "Item not found" });
    } else {
      res.json(deletedItem);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
