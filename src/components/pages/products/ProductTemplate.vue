<template>
    <div>
        <section class="product-template">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7">
                        <div class="product-single-image">
                            <div class="main-image">
                                <img v-bind:src="'/static/images/products/' + productImage" alt="main-image">
                            </div>
                            <div class="other-image">
                                <div class="bg-image">
                                    <img v-bind:src="'/static/images/products/' + productImageTwo" alt="side-image">
                                </div>
                                <div class="bg-image">
                                    <img v-bind:src="'/static/images/products/' + productImageThree" alt="side-image">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="prodcuts-details">
                            <h2 class="mb-2">{{productName}}</h2>
                            <p class="price mb-4">${{productPrice}}</p>
                            <div class="line"></div>
                            <div class="size">
                                <p>Size</p>
                                <p>D27cmx H10cm</p>
                            </div>
                            <div class="line"></div>
                            <div class="button-size">
                                <button class="size-name">D16cmx H3cm</button>
                                <button class="size-name">D16cmx H3cm</button>
                                <button class="size-name">D16cmx H3cm</button>
                            </div>
                            <div class="line"></div>
                            <div class="size">
                                <p>Color</p>
                                <p>White</p>
                            </div>
                            <div class="line"></div>
                            <div class="color">
                                <button class="colorbtn"><img src="/static/images/products/color.png" alt="color"></button>
                                <button class="colorbtn"><img src="/static/images/products/color.png" alt="color"></button>
                                <button class="colorbtn"><img src="/static/images/products/color.png" alt="color"></button>
                            </div>
                            <div class="line"></div>
                            <div class="shipping-world">
                                <img src="/static/images/products/globe.png" alt="globe">
                                <p>Worlwide shipping available</p>
                            </div>
                            <div class="line"></div>
                            <div class="quantity-cart my-4">
                                <div class="addt-cart">
                                    <button 
                                        class="btn"
                                        :class="inCartQuantity ? 'addtocartbtn' :  'addtocartbtn'"
                                        @click="addToCart(productdId)"
                                        :disabled="!inCartQuantity">
                                        {{inCartQuantity ? "Add to Bag" : "Out of stock"}}
                                    </button>
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="description my-3">
                                <p>{{productDescription}}</p>
                            </div>
                            
                        </div>
                        <div class="shipping-returns">
                           <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="Shipping">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ShippingReturns" aria-expanded="false" aria-controls="ShippingReturns">
                                        Shipping and Returns
                                    </button>
                                    </h2>
                                    <div id="ShippingReturns" class="accordion-collapse collapse" aria-labelledby="Shipping" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="style-this py-5">
            <div class="container">
                <h2 class="mb-5">Style this with</h2>
                <ProductSlider/>
            </div>
        </section>

        <section class="review py-5">
            <div class="container">
                <h2 class="mb-3">Reviews</h2>
                <div class="row">
                    <div class="col-sm-3" v-for="(review,index) in reviewData" :key="index">
                        <div class="review-content">
                            <div class="rating my-2">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p class="name mb-3">{{review.name}}</p>
                            <p class="desc mb-5">{{review.desc}}</p>
                            <p class="location">{{review.location}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import ProductSlider from './ProductSlider.vue'
export default {
    name: 'ProductTemplate',
    props: ['slug','id'],
    components: {
        ProductSlider
    },
    data(){
        return{
            productdId: this.$route.params.id,
            productSlug: this.$route.params.slug,
            productImage: this.$route.params.image,
            productImageTwo: this.$route.params.imagetwo,
            productImageThree: this.$route.params.imagethree,
            productName: this.$route.params.name,
            productPrice: this.$route.params.price,
            productDescription: this.$route.params.desc,
            productdQuantity: this.$route.params.quantity,
            reviewData:[
                {name:'Fabulous frame!', desc:'Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous!.', location:'Julie M, London, UK'},
                {name:'Fabulous frame!', desc:'Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous!.', location:'Julie M, London, UK'},
                {name:'Fabulous frame!', desc:'Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous!.', location:'Julie M, London, UK'},
                {name:'Fabulous frame!', desc:'Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous!.', location:'Julie M, London, UK'},
            ],
            
        }
    },
    computed: {
        inCartQuantity() {
            return this.$route.params.quantity;
        },
        products(){
            return this.$store.state.products;
        }
    },
    methods: {
        addToCart(id){
            this.$store.dispatch("addToCart", id);
        },
    },
    created(){
       this.$store.dispatch("fetchProducts");
    },
    mounted(productdId){
        this.fetchProducts(productdId);
    },
}
</script>