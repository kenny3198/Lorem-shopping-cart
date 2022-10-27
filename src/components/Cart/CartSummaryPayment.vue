 <template>
   <div class="card-item-card">
    <h3>Cart Total: ${{ card_total.toFixed(2) }} </h3>

    <button @click="pay" class="payment-btn">Pay By Credit Card</button>
   </div>
 </template>
 
 <script>
 export default {
 computed: {
    card_total() {
        return this.$store.getters.cartTotal
    }
 },
 methods: {
    pay() {
      return this.$router.push({ name: "paymentPath"})
    }
 }
 }

 </script>
 
 <style lang="scss">
    .payment-btn {
        padding: 10px;
        background: rgb(79, 160, 87);
        color: white;
        cursor: pointer;
        border: none;
        overflow: hidden;
        font-weight: bold;
        scale: 1.1;
    }
 </style>