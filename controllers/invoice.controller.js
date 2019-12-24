'use strict'
var mongoosePaginate = require('mongoose-pagination');
var ObjectId = require('mongodb').ObjectId;
var Invoice = require('../models/invoice.model');

//saving invoice from post
function saveInvoice(req, res) {
    var invoice = new Invoice();
    var params = req.body;
    invoice.date = new Date().toString("yyyyMMddHHmmss");
    invoice.invoiceNumber = params.invoice;
    invoice.net = params.net;
    invoice.tax = params.tax;
    invoice.total = params.total;


    invoice.save((err, invoiceStored) => {
        if (err) {
            res.status(500).send({
                message: 'Error, get more details.',
                error: err
            });

        } else {
            if (!invoiceStored) {
                res.status(404).send({
                    message: "Invoice Can't be saved"
                });
            } else {
                res.status(200).send({
                    invoice: invoiceStored,
                });


            }
        }
    });
}

//get invoices
function getInvoices(req, res) {
    var find = Invoice.find({});
    find.exec((err, invoices) => {
        if (err) {
            res.status(500).send({
                message: 'error',
                error: err
            });
        } else {
            if (!invoices) {
                res.status(404).send({
                    message: 'there arent any invoices yet'
                });
            } else {
                res.status(200).send({
                    invoices
                });
            }
        }
    })
}


//Detele Invoices
function deleteInvoice(req, res) {

    var id = req.params.id;
    Invoice.findByIdAndRemove(id, (err, invoiceDeleted) => {
        if (err) {
            res.status(500).send({
                message: 'Cannot delete this invoice, check with admin',
                error: err
            });
        } else {
            if (!invoiceDeleted) {
                res.status(404).send({
                    message: 'Invoice cant be deleted, check if data is correct'
                });
            } else {
                res.status(200).send({
                    invoice: invoiceDeleted
                });

            }
        }

    });


}

module.exports = {
    saveInvoice,
    getInvoices,
    deleteInvoice
}