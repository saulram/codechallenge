'use strict'

var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var InvoiceSchema = Schema({
    date : String,
    invoiceNumber: Number,
    net: Number,
    tax: Number,
    total: Number,
});
module.exports = mongoose.model('Invoice',InvoiceSchema);