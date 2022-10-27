<template>
  <div class="payment-background">
    <div class="add-card-background">
        <h4>Add a new card</h4>

    </div>
    <form @submit.prevent="save">
        <div>
            <input v-model="number"  type="text" id="number" placeholder="Card number">
        </div>
        <div>
            <input v-model="cardname" type="text" id="cardName" placeholder="CardHolder Name">
        </div>
        <div>
        <input v-model="exp" type="year" id="exp" placeholder="EXP-Year">
        </div>
        <div>
            <input v-model="cvv"  type="number" id="cvv" placeholder="CVV">
        </div>
        <p>save card details</p>
    <h3>Your order will processsed in USD</h3>
    <button type="submit" class= "btn-pay">Pay Now</button>
    </form>
    
  </div>
 
</template>

<script>
export default {
    data () {
   return{
        number: "",
        year: "",
        cvv: "",
        cardname: ""
    
   }
    },
    methods: {
       save() {
        if(!this.number) {
            alert("invalid transaction pin you are a mumu man")
        }
        else if(!this.cardname){
            alert("you no get name abi")
        }
        else if(!this.cvv) {
            alert("if them slap u now put CVV joor")
        }
        
        else{
                return this.$router.push({ name:"sucessfull"})
        }

        
      
       } 
    }
 
}
</script>

<style lang="scss">
 .payment-background{
    width: 100%;
    height: 100vh;
    background: grey;

    .add-card-background {
        width: 100%;
        height: 45px;
        background: whitesmoke;
        padding: 10px;
        font-size: bold;
        color: black;
    }
    form{
        margin-top: 40px;
    }
    input {
        margin: 10px;
        padding: 10px;
        width: 400px;
    }
    .btn-pay{
        padding: 15px 25px;
        background: blue;
        border: none;
         cursor: pointer;
         border-radius: 5px;
    }

 }
</style>