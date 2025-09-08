// 	customers: { id, name, email, phone, company, ownerId }
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    company: {
      type: String,
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AuthModel",
      required: true,
    },
  },
  { timestamps: true }
);
const customerModel = mongoose.model("CustomerModel", customerSchema);
module.exports = customerModel;
