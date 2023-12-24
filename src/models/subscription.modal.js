const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    subscriber: {
      type: mongoose.Schema.Types.ObjectId, //who is subscribing
      ref: "User",
    },
    channel: {
      type: mongoose.Schema.Types.ObjectId, //to whom subscribing
      ref: "User",
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
