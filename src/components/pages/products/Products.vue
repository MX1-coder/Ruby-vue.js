<template>

    <section class="products px-5 py-5">
        <div class="container-fluid">
            <div class="sortby">
                <h3>Sort by</h3>
                <select class="form-select">
                    <option selected>Newest</option>
                    <option value="Relevance">Relevance</option>
                    <option value="Best selling">Best selling</option>
                    <option value="Highest price">Highest price</option>
                    <option value="Lowest price">Lowest price</option>
                </select>
            </div>
            <div class="row">
                <div class="col-sm-3">
                     <div class="filter-sidebar">
                        <h3 class="mb-5">Filter by</h3>
                        <div class="filter">
                            <h6 class="mb-3">Category</h6>
                            <label><input type="checkbox" value="Artificial flower" /> Artificial flower</label><br/>
                            <label><input type="checkbox" value="Wall painting" /> Wall painting</label><br/>
                            <label><input type="checkbox" value="Wall decor" /> Wall decor</label><br/>
                            <label><input type="checkbox" value="Sculpture" /> Sculpture</label><br/>
                            <label><input type="checkbox" value="Vase" /> Vase</label><br/>
                            <label><input type="checkbox" value="Table decoR" /> Table decoR</label><br/>
                            <label><input type="checkbox" value="Gifts" /> Gifts</label>
                        </div>
                        <div class="price">
                            <h6 class="mb-3">Price</h6>
                            <div class="top-price">
                                <label class="form-label">$200</label>
                                <label class="form-label">$1200</label>
                            </div>
                            <input type="range" class="form-range" min="200" max="1200" step="60" id="customRange2">
                        </div>
                    </div>
                </div>
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-sm-4" v-for="product in products" :key="product.id">
                            <SingleProduct :product="product" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  
   
</template>   

<script>
    import SingleProduct from "./SingleProduct.vue"
    export default{
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