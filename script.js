import Product, {calculateVat,calculateTotalVat} from '/Product.js'
 
const product = new Product('simple pc', 100);
 
document.getElementById('ShowProduct').innerHTML=`
  name: ${product.name} <br/>
  unit price: ${product.price} € <br/>
  vat: ${calculateVat(product,21)} € <br/>
  Total price : ${calculateTotalVat(product,21)} €
`