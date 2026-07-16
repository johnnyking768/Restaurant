const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  image: String,
  alt: String
}, { _id: false });

const orderSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, index: true },
  customer: {
    name: { type: String, required: true },
    phone: String,
    email: String,
    address: String
  },
  note: String,
  deliveryMethod: { type: String, enum: ["delivery", "pickup"], default: "delivery" },
  paymentMethod: { type: String, enum: ["transfer", "cash", "paystack"], default: "transfer" },
  paymentStatus: { type: String, default: "pending" },
  status: {
    type: String,
    enum: ["received", "confirmed", "preparing", "on_the_way", "completed"],
    default: "received"
  },
  items: [orderItemSchema],
  totals: {
    subtotal: { type: Number, default: 0 },
    service: { type: Number, default: 0 },
    delivery: { type: Number, default: 0 },
    total: { type: Number, default: 0 }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Order", orderSchema);
