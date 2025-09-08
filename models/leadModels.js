const mongoose = require("mongoose");
const leadSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CustomerModel",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "lost", "converted"],
      default: "new",
    },
    value: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);
const leadModel = mongoose.model("LeadModel", leadSchema);
module.exports = leadModel;
