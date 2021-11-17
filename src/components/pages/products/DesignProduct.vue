<template> 
    <div class="products row">
        <div class="col-sm-6" v-for="product in products.slice(4,10)" :key="product.id">
            <SingleProduct :product="product" />
        </div>
    </div>
   
</template>   

<script>
    import SingleProduct from "./SingleProduct.vue"
    export default{
        name: 'DesignProduct',
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