<template>
<div>
  <h1>Your Cart</h1>
  <CartItemCard
  v-for="product in items"
  :key="product.id"
  :product="product"
   />
 <CartSummaryPayment /> 
</div>
</template>

<script>
import CartItemCard from '@/components/Cart/CartItemCard'

import CartSummaryPayment from '@/components/Cart/CartSummaryPayment'
export default {
  components: {
    CartItemCard,
    CartSummaryPayment
  },
  computed: {
    items() {
      return this.$store.getters.CartItems
    }
  }
  

}
</script>

<style>

</style>