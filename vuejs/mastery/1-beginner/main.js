const app = Vue.createApp({
    data() {
        return {
            cart:[],
            premium:false,
        }
    },
    methods: {
      updateCart(id,action){
          console.log(action);
          switch(action){
              case 'add':
                  this.cart.push(id)
                  break;
               case 'remove':
                      this.cart.pop(id)
                      break;
          }
          
      }
    },

    computed:{
        nbProd(){
            return this.cart.length
        }
    }


})