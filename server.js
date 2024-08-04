const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  try {
    console.log(req.body);
    let lineItems = [];
    const items = req.body.items;
    items.forEach((item) => {
      lineItems.push({ price: item.id, quantity: item.quantity });
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.send(JSON.stringify({ url: session.url }));
  } catch (error) {
    console.error("Error creating checkout session", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(4000, () => console.log("Listening on port 4000"));
