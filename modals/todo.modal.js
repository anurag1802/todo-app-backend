const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
