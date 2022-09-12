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
 
document.getElementById('ShowProduct').innerHTML=`
  name: ${product.name} <br/>
  unit price: ${product.price} € <br/>
  vat: ${calculateVat(product,21)} € <br/>
  Total price : ${calculateTotalVat(product,21)} €
`

const products = [
  {name : "Banana", price: "2"},
  {name : "Cucumber", price: "3"},
  {name : "Tomato", price: "1"}
];

let getAll = products.map(function(element){
    return `${element.name} ${element.price} `;
})

document.getElementById('products').innerHTML = getAll