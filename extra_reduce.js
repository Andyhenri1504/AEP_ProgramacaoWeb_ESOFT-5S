const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, 'products.json');

const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const totalValue = products.reduce((acc, curr) => {
    return acc + curr.qtde * curr.preco;
  }, 0);
  