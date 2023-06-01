const { Schema, model } = require('mongoose');

const handleSchemaErrors = require('../middlewares/handleSchemaErrors');

const productSchema = new Schema({
  nameProduct: {
    type: String,
  },
  priceP: {
    type: Number,
  },
  owner: {
    type: String,
  },
  imgProd: {
    type: String,
  },
  
});

productSchema.post('save', handleSchemaErrors);

const Product = model('product', productSchema);

module.exports = Product;