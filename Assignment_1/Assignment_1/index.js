// 1. Create a nodejs app and import express, fs and url module.
const express = require('express');
const fs = require('fs');
const url = require('url');

var app = express();

app.get('/', (req, res) => {
  console.log('Hello World')
  res.send('Hello World')
});

//2. Create a file ‘doc.txt’ add following text in it ‘Products List’.
const filePath = 'docx.txt';
const fileContent ='Productlist';
fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File "doc.txt" has been created with the content: "Products List"');
    }
});

  //3. Create an endpoint to get the data from the user in query params and create a new file( delete if already there), write the data to it.

app.get('/create-fs',(req, res) => {
    const data = req.query;
    if (!data) {
        return res.status(400).send('Data parameter is required.');
    }
    const filePath = 'data.txt';

    // Delete the file if it already exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
});

//5.Create a dummy data file to use for further tasks.
// Pattern: 
// {
// id: number,
// productName: string,
// quantity: number,
// active: boolean
// }
const products = [
  { id: 1, name: 'Product A', active: true },
  { id: 2, name: 'Product B', active: false },
  { id: 3, name: 'Product C', active: true },
]
//  6. Create a GET endpoint to fetch all active products.
app.get('/api/products', (req, res) => {
  const activeProducts = products.filter((product) => product.active);
  res.json(activeProducts);
});
 // 7. Create a GET endpoint to fetch product by productName using params only.
 app.get('/api/products', (req, res) => {
  const productName = req.query.name;

  if (productName) {
    const product = products.find((p) => p.name === productName);
    res.send(product);   
  }else{
    res.send({
      message:'Invalid Product'
    })
  }
});
 
// 8.Create a GET endpoint to fetch product by id.
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  if (productId) {
    const product = products.find((p) => p.id === productId);
    res.send(product);
  }else{
     res.send({
      message:'Product not found.' 
    });
  }
});

//9. Create a GET endpoint to search data based on productName and quantity.
const filteredProducts = products.filter((product) => {
  let matchesName = true;
  let matchesQuantity = true;

  if (productName) {
    matchesName = product.name.toLowerCase().includes(productName.toLowerCase());
  }

  if (!isNaN(quantity)){
    matchesQuantity = product.quantity === quantity;
  }
  return matchesName && matchesQuantity; 
});
if (filteredProducts.length === 0) {
return res.status(404).json({ error: 'No products match the search criteria.' });
}  
res.json(filteredProducts);

app.listen (3000);