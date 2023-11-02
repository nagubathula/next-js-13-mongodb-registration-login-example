import getConfig from 'next/config';
import { db } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();
const Product = db.Product;

export const productsRepo = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Product.find();
}

async function getById(id) {
    return await Product.findById(id);
}

async function create(params) {
    const product = new Product(params);
    await product.save();
}

async function update(id, params) {
    const product = await Product.findById(id);

    // validate
    if (!product) throw 'Product not found';

    // copy params properties to product
    Object.assign(product, params);

    await product.save();
}

async function _delete(id) {
    await Product.findByIdAndRemove(id);
}
