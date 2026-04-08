const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'products.json');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// helper: baca data dari json
const readProducts = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

// helper: simpan data ke json
const writeProducts = (products) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2), 'utf8');
};

// GET semua produk
app.get('/api/products', (req, res) => {
    const products = readProducts();
    res.json(products);
});

// GET satu produk
app.get('/api/products/:id', (req, res) => {
    const products = readProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    res.json(product);
});

// POST tambah produk
app.post('/api/products', (req, res) => {
    const { name, price, stock, description } = req.body;
    if (!name || price === undefined || stock === undefined) {
        return res.status(400).json({ message: 'Nama, harga, stok wajib diisi' });
    }
    const products = readProducts();
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProduct = {
        id: newId,
        name,
        price: parseFloat(price),
        stock: parseInt(stock),
        description: description || ''
    };
    products.push(newProduct);
    writeProducts(products);
    res.status(201).json(newProduct);
});

// PUT update produk
app.put('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price, stock, description } = req.body;
    const products = readProducts();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    products[index] = {
        ...products[index],
        name: name || products[index].name,
        price: price !== undefined ? parseFloat(price) : products[index].price,
        stock: stock !== undefined ? parseInt(stock) : products[index].stock,
        description: description !== undefined ? description : products[index].description
    };
    writeProducts(products);
    res.json(products[index]);
});

// DELETE produk
app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let products = readProducts();
    const newProducts = products.filter(p => p.id !== id);
    if (products.length === newProducts.length) {
        return res.status(404).json({ message: 'Produk tidak ditemukan' });
    }   
    writeProducts(newProducts);
    res.json({ message: 'Produk berhasil dihapus', id });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});