"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bill = new Schema({
  id_user: {
    type: String,
    required: [true, "can't be blank"],
    index: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  products: {
    type: [
      {
        id_category: String,
        name: String,
        price: Number,
        release_date: Date,
        img: String,
        describe: String,
        id_nsx: String,
        id_nsx: String,
        count: Number,
        _id: String
      }
    ],
    required: true,
    minlength: 1
  },
  city: String,
  district: String,
  ward: String,
  address: String,
  phone: String,
  name: String,
  token: String,
  issend: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model("bill", bill);
