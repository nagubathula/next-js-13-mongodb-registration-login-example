import { addProduct } from '../../path/to/db'; // Replace with the correct path to your db.js file

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, description, price, quantity } = req.body;

    try {
      const savedProduct = await addProduct(name, description, price, quantity);
      res.status(201).json({ message: 'Product added successfully', product: savedProduct });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add product', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
