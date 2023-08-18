import mongoose from "mongoose";
const toDoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      default: "todo",
      enum: ["todo", "inprogress", "complete"],
    },
  },
  { timestamps: true }
);

export const toDoModel = mongoose.model("ToDo", toDoSchema);
