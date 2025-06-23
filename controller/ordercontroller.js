app.post('/order', async (req, res) => {
  try {
    // code to save order in DB

    // code to send email
    await sendOrderConfirmation(req.body.email, orderDetails);

    res.status(200).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ message: 'error failed to place order' });
  }
});
