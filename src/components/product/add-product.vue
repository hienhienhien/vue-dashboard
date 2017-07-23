<template>
<div>
    <h2>Add new product</h2>
    <form @submit="createProduct">
      <div class="form-group">
        <label for="add-name">Name</label>
        <input class="form-control" id="add-name" v-model="product.name" required>
      </div>
      <div class="form-group">
        <label for="add-description">Description</label>
        <textarea class="form-control" id="add-description" rows="10" v-model="product.description"></textarea>
      </div>
      <div class="form-group">
        <label for="add-price">Price, <span class="glyphicon glyphicon-euro"></span></label>
        <input type="number" class="form-control" id="add-price" v-model="product.price">
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
      <router-link class="btn btn-default" v-bind:to="'/main'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
//add product template add product
function findProduct (productId) {
  return products[findProductKey(productId)];
};

function findProductKey (productId) {
  for (var key = 0; key < products.length; key++) {
    if (products[key].id == productId) {
      return key;
    }
  }
};
export default {
  data(){
    return {
      product: {name: '', description: '', price: ''}
    }
  },
  methods: {
    createProduct(){
      console.log('create product');

      products.push({
        id: Math.random().toString().split('.')[1],
        name: this.product.name,
        description: this.product.description,
        price: this.product.price
      });
      router.push('/product');
    }
  }

}
</script>

<style>

</style>
