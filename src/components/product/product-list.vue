<template>
 <div>
    <div class="actions">
      <router-link class="btn btn-default" v-bind:to="{path: '/add-product'}">
        <span class="glyphicon glyphicon-plus"></span>
        Add product
      </router-link>
    </div>
    <div class="filters row">
      <div class="form-group col-sm-3">
        <label for="search-element">Product name</label>
        <input v-model="searchKey" class="form-control" id="search-element" requred>
      </div>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th class="col-sm-2">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in filteredProducts" :key="product.id">
        <td>
          <router-link v-bind:to="{name: 'main', params: {product_id: product.id}}">{{ product.name }}</router-link>
        </td>
        <td>{{ product.description }}</td>
        <td>
          {{ product.price }}
          <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
        </td>
        <td>
          <router-link class="btn btn-warning btn-xs" v-bind:to="{name: 'main/productEdit', params: {product_id: product.id}}">Edit</router-link>
          <router-link class="btn btn-danger btn-xs" v-bind:to="{name: 'product-delete', params: {product_id: product.id}}">Delete</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>


</template>

<script>
//day la product list > product list > template
import {products} from '../../globals/products.js'
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
      products: products, searchKey: ''
    }
  },
  computed: {
    filteredProducts: function () {
      return this.products.filter(function (product) {
        return this.searchKey=='' || product.name.indexOf(this.searchKey) !== -1;
      },this);
    }
  }

}
</script>

<style>

</style>
