<template> 
    <div class="products row py-5">
        <div class="col-sm-6" v-for="product in products.slice(0,4)" :key="product.id">
            <SingleProduct :product="product" />
        </div>
    </div>
   
</template>   

<script>
    import SingleProduct from "./SingleProduct.vue"
    export default{
        name: 'TopProducts',
        components: {
            SingleProduct
        },
        computed: {
            products(){
                return this.$store.state.products;
            }
        },
        created(){
            this.$store.dispatch("fetchProducts");
        }
    }
</script>