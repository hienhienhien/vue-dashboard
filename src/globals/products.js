export const products =  [
  {id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100},
  {id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100},
  {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100}
]



export function findProduct(productId){
  return products[findProductKey(productId)];
}


export function findProductKey(productId){
   for (var key = 0; key < products.length; key++) {
    if (products[key].id == productId) {
      return key;
    }
  }

}
