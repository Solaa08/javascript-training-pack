// import Product, {calculateVat,calculateTotalVat} from '/Product.js'

class Product{
  constructor(name,price){
    this.name = name
    this.price = price
  }
}

function calculateVat(product,vat){
  return product.price *(vat/100);
}
 
function calculateTotalVat(product,vat){
  return product.price + calculateVat(product,vat);
}
 
const product = new Product('simple pc', 100);
console.log(product)
 
document.getElementById('ShowProduct').innerHTML=`
  name: ${product.name} <br/>
  unit price: ${product.price} € <br/>
  vat: ${calculateVat(product,21)} € <br/>
  Total price : ${calculateTotalVat(product,21)} €
`