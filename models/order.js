const { Schema, model } = require("mongoose");

const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const orderSchema = new Schema(
  {
    customerName: {
      type: String,
      required: [true, "Set customer name"],
    },
    customerLocation: {
      type: String,
      required: true,
    },
    shop: {
      type: String,
    },
    products: {
      type: Array,
    },
    customerPhone: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    priceAll: {
      type: Number,
      required: true,
    },
    
  },
  { versionKey: false, timestamps: true }
);
orderSchema.post("save", handleSchemaErrors);


const Order = model("order", orderSchema);

module.exports = Order;
