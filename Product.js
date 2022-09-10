export default class Product{
    constructor(name,price){
      this.name = name
      this.price = price
    }
  }

  export function calculateVat(product,vat){
    return product.price *(vat/100);
  }
   
  export function calculateTotalVat(product,vat){
    return product.price + calculateVat(product,vat);
  }