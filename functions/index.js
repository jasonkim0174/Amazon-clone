const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51PcwCpGpqB2u0sO40mSKZddEkrbHc6tTskr422hz7NgLQpi89GK008a333" +
    "GqmNGA2YTUnHGygTvCg0h88k4r4oBR00GxLmmDN6",
);

// API

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log(
      "Payment Request Received BOOM!!! for this amount >>> ",
      total,
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://127.0.0.1:5001/clone-53f4b/us-central1/api

// Minor change to force deployment
