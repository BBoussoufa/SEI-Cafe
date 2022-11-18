const mongoose = require("mongoose");
// Ensure the Category model is processed by Mongoose
require("./Category");

const itemSchema = require("./ItemSchema");

module.exports = mongoose.model("Item", itemSchema);
