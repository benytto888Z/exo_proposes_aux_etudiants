app.component('product-display',{
  props:{
    premium:{
      type:Boolean,
      required:true
    }
  },

     template: 
    /*html*/ 
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
  
          <h4 v-if="inStock">In Stock</h4>
          <h4 v-else>Out of Stock</h4>
  
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
          </div>
           <h4>Shipping : {{shipping}}</h4>
           <product-details :details="details"></product-details>
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="addToCart">
            Add to Cart
          </button>
           <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="removeFromCart">
            Remove this product from cart
          </button>
        </div>
      </div>
       <review-list v-if="reviews.length" :reviews="reviews"></review-list>
       <review-form @review-submitted="addReview"></review-form>
    </div>`,

    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant:0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity:50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity:0 },
            ],
            reviews:[]
        }
    },
    methods: {
        addToCart() {
           this.$emit('update-cart',this.variants[this.selectedVariant].id,'add')
        },
        removeFromCart(){
          this.$emit('update-cart',this.variants[this.selectedVariant].id,'remove')
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        addReview(review){
          this.reviews.push(review)
        }
    },

    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity > 0
        },
        shipping(){
          if(this.premium){
            return 'Free'
          }
          return '2.99 €'
        }
    }
})
