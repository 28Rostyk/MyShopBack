const { Schema, model } = require("mongoose");
const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const couponsSchema = new Schema(
  {
    name: {
      type: String,
    },
    diskont: {
      type: Number,
    },
    imgD: {
      type: String,
    },
  },
  { versionKey: false }
);
couponsSchema.post("save", handleSchemaErrors);

const Coupons = model("coupons", couponsSchema);

module.exports = Coupons;
