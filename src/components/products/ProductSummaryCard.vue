<template>
<div class="card">
  <h3>{{product.name}}</h3>

  <h5 class="price">price: ${{product.price.toFixed(2) }}</h5>
  <p class="description">description: {{ description }}</p>
  <p class="text-muted">category: {{ product.category }}</p>
  <button @click="$emit('view-product', product)" class="view-product-button">View Product</button>
</div>

</template>

<script>
export default {
props: ["product"],
computed: {
    description() {
        return this.product.description.substring(0, 150)
    }
}
}
</script>

<style lang="scss" >
.card{
    width:80%;
    margin: 10%;
    padding: 10px;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 5px gray;

    h5.price{
        color: grey;
    }
    p.description{
        font-size: .85rem;
    }
    p.text-muted{
        color: gray;
    }
    button.view-product-button{
        padding: 10px;
        background: rgb(79, 160, 87);
        color: white;
        border: none;
        font-weight: bold;
        font-size: 1.15rem;
        border-radius: 5px;
        cursor: pointer;
}
}
// @media(min-width: 500px) {
//     .card{
//         width:350px;
//         margin: 10px
//     }
// }
</style>