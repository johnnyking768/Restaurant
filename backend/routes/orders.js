const express = require("express");
const Order = require("../models/Order");
const { requireAdmin } = require("../middleware/auth");

const router = express.Router();
const STATUSES = ["received", "confirmed", "preparing", "on_the_way", "completed"];

function normalizeOrder(order) {
  return {
    id: order.id,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
    customer: order.customer,
    note: order.note,
    deliveryMethod: order.deliveryMethod,
    paymentMethod: order.paymentMethod,
    paymentStatus: order.paymentStatus,
    status: order.status,
    items: order.items,
    totals: order.totals
  };
}

router.get("/", requireAdmin, async (req, res, next) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).lean();
    res.json(orders.map(normalizeOrder));
  } catch (error) {
    next(error);
  }
});

router.get("/:id/status", async (req, res, next) => {
  try {
    const order = await Order.findOne({ id: req.params.id }).lean();
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({
      id: order.id,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      deliveryMethod: order.deliveryMethod,
      paymentMethod: order.paymentMethod,
      paymentStatus: order.paymentStatus,
      status: order.status,
      totals: { total: order.totals?.total || 0 }
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", requireAdmin, async (req, res, next) => {
  try {
    const order = await Order.findOne({ id: req.params.id }).lean();
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(normalizeOrder(order));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(normalizeOrder(order.toObject()));
  } catch (error) {
    next(error);
  }
});

router.patch("/:id/status", requireAdmin, async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!STATUSES.includes(status)) {
      return res.status(400).json({ message: "Invalid order status" });
    }

    const currentOrder = await Order.findOne({ id: req.params.id }).lean();
    if (!currentOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    const update = { status };
    if (
      currentOrder.paymentMethod !== "cash"
      && currentOrder.paymentStatus !== "paid"
      && ["confirmed", "preparing", "on_the_way", "completed"].includes(status)
    ) {
      update.paymentStatus = "confirmed";
    }

    const order = await Order.findOneAndUpdate(
      { id: req.params.id },
      update,
      { new: true }
    ).lean();

    res.json(normalizeOrder(order));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", requireAdmin, async (req, res, next) => {
  try {
    const order = await Order.findOneAndDelete({ id: req.params.id }).lean();
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
