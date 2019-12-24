'use strict'
var express = require('express');
var InvoiceController = require('../controllers/invoice.controller');
var api = express.Router();

api.post('/invoice/save',InvoiceController.saveInvoice);
api.get('/invoice/getall',InvoiceController.getInvoices);
api.delete('/invoice/delete/:id',InvoiceController.deleteInvoice);

module.exports = api;