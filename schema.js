const mongoose = require('mongoose');

// Define Product_Category schema
const productCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: Date
});

// Define Product_Inventory schema
const productInventorySchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: Date
});

// Define Discount schema
const discountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: String,
    discount_percent: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: Date
});

// Define Product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: String,
    SKU: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product_Category',
        required: true
    },
    inventory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product_Inventory',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discount'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: Date
});

// Define models
const Product_Category = mongoose.model('Product_Category', productCategorySchema);
const Product_Inventory = mongoose.model('Product_Inventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = { Product_Category, Product_Inventory, Discount, Product };
