const { Schema, model } = require("mongoose");

const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const shopSchema = new Schema({
  name: {
    type: String,
  },
});

shopSchema.post("save", handleSchemaErrors);

const Shop = model("shop", shopSchema);

module.exports = Shop;