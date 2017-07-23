<template>
<div>
    <h2>Delete product {{ product.name }}</h2>
    <form @submit="deleteProduct">
      <p>The action cannot be undone.</p>
      <button type="submit" class="btn btn-danger">Delete</button>
      <router-link class="btn btn-default" v-bind:to="'/product'">Cancel</router-link>
    </form>
  </div>

</template>

<script>
//template product delete var product delete
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
      product:findProduct(this.$route.params.product_id)
    }
  },
  methods:{
    deleteProduct(){
      products.splice(findProductKey(this.$route.params.product_id),1);
      router.push('/product');
    }
  }

}
</script>

<style>

</style>
