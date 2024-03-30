import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    publishYear: {
      type: "number",
      required: true,
    },
  },
  {
    timeStamp: true,
  }
);

export const Book = mongoose.model("Cat", bookSchema);
