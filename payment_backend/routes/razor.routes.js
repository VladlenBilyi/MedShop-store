const express = require("express");
const app = express.Router();
const Razorpay = require("razorpay");
const nodemailer = require("nodemailer");
const fs = require("fs");
const razorModel = require("./razor.model");
const crypto = require("crypto");
const hbs = require("handlebars");

const template = hbs.compile(fs.readFileSync(__dirname + "/mail.hbs", "utf-8"));

var transporter = nodemailer.createTransport({
  port: process.env.SMTP_PORT,
  service: "gmail",
  host: process.env.SMTP_MAIL,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  secure: false,
});

const instance = new Razorpay({
  key_id: process.env.RAZOR_KEY,
  key_secret: process.env.RAZOR_SECRET_KEY,
});

app.post("/payment", async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount) * 100,
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    res.status(200).send(order);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

app.get("/key", (req, res) => {
  res.status(200).json({
    key: process.env.RAZOR_KEY,
  });
});

app.post("/verification", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZOR_SECRET_KEY)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    const new_payment = new razorModel({
      razorpay_order_id: razorpay_order_id,
      razorpay_payment_id: razorpay_payment_id,
      razorpay_signature: razorpay_signature,
      email: req.query.email,
      amount: req.query.amount,
    });
    await new_payment.save();

    const mailData = {
      from: "umangarora0134@gmail.com",
      to: req.query.email,
      subject: "Amount Deducted",
      text: "Amount Deducted",
      html: template({ amount: req.query.amount }),
    };

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        res.status(404).send(error);
      } else {
        res.redirect(
          `https://medshoppe.netlify.app/paymentsuccess?reference=${razorpay_payment_id}`
        );
      }
    });
  } else {
    res.redirect(
      `https://medshoppe.netlify.app/paymentfailure`
    );
  }
});

module.exports = app;
