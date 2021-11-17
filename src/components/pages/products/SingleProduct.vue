<template>
    <div class="card">
        <router-link :to="{ name:'ProductTemplate', params: { slug: product.slug, name: product.name, id: product.id, price: product.price, image: product.image, imagetwo: product.imagetwo, imagethree: product.imagethree, desc: product.desc, quantity: product.quantity } }">
            <div class="text-center product-image">
                <img v-bind:src="'/static/images/products/' + product.image" alt="Product image" /> 
            </div>
            <div class="card-body"> 
                <h5 class="card-title">{{product.name}}</h5> 
                <p class="card-text"><b>${{product.price}}</b></p> 
            </div>
        </router-link> 
        <!-- <div class="products-bottom-content text-center">
            <p>{{product.desc}}</p>
            <button 
                class="btn mt-3"
                :class="inCartQuantity ? 'addtocartbtn' :  'addtocartbtn'"
                @click="addToCart(product.id)"
                :disabled="!inCartQuantity">
                {{inCartQuantity ? "Add to Cart" : "Out of stock"}}
            </button>
        </div> -->
    </div>
</template>

<script>
    export default{
        props: ["product"],
        data(){
            return{
               
            }
        },
        computed: {
            inCartQuantity() {
                return this.product.quantity;
            },
            products(){
                return this.$store.state.products;
            }
        },
        methods: {
            addToCart(id){
                this.$store.dispatch("addToCart", id);
            }
        }

    }
</script>