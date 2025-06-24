const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const sendEmail = require("../utils/emailservice"); // 👈 Correct import

router.post("/orders", async (req, res) => {
  const { name, email, products, totalPrice, phone, address, paymentMethod } =
    req.body;

  try {
    const newOrder = new Order({
      name,
      email,
      products,
      totalPrice,
      phone,
      address,
      paymentMethod,
    });
    await newOrder.save();

    await sendEmail({
      to: email,
      subject: "Thank you for your order!",
      text: `Hi ${name},\n\nThanks for your order of ₹${totalPrice}!\nWe will process it shortly.\n\nRegards,\nIsha International`,
    });

    await sendEmail({
      to: "yogathing0@gmail.com",
      subject: "New Order Received",
      text: `
New order received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}
Payment Method: ${paymentMethod}
Products: ${JSON.stringify(products, null, 2)}
Total Price: ₹${totalPrice}
      `,
    });

    res.status(201).json({ message: "Order placed and emails sent!" });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ message: "Failed to place order" });
  }
});

module.exports = router;
