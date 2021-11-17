<template>
    <div>
        <section class="cart">
            <div class="container">
                <div class="cart-header">
                    <div v-if="!cartSize" class="alert alert-warning mb-4" role="alert"> 
                        Cart is empty! Please add some products. 
                    </div>
                    <router-link class="blackbtn" to="/products">Go to Shopping</router-link>
                </div>
                <table class="my-5">
                    <thead>
                        <tr>
                            <th scope="col">SI No</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in cart" :key="product.id">
                            <td scope="row">{{index + 1}}</td>
                            <td><img v-bind:src="'/static/images/products/' + product.image" alt="Product image" /></td>
                            <td>{{product.name}}</td>
                            <td>$ {{product.price}}</td>
                            <td>
                                <button 
                                    @click="removeFromCart(product.id)"
                                    :disabled="product.quantity === 1"
                                    class="btn btn-outline-danger btn-small">
                                    -
                                </button>
                                <span class="mx-2">{{product.quantity}}</span>
                                <button 
                                    @click="addToCart(product.id)" 
                                    :disabled="product.quantity === product.stock"
                                    class="btn btn-outline-success btn-small">
                                    +
                                </button>
                            </td>
                            <td><button 
                                @click="deleteFromCart(product.id)"
                                class="btn btn-danger btn-small">
                                Delete
                            </button></td>
                            <td>$ {{product.quantity* product.price}}</td>
                        </tr>
                        <tr class="total"> 
                            <td colspan="5" class="total">Total:</td> 
                            <td>$ {{cartTotalAmount}}</td> 
                        </tr>
                    </tbody>
                </table>
                <div class="checkoutbtn">
                    <router-link class="blackbtn" to="/checkout">Proceed to checkout</router-link>
                </div>
            </div>
        </section>
    </div>    
</template>
 
<script>
    import {mapState, mapGetters} from 'vuex'
    export default{
        data() {
            return{
            
            };
        },
        computed: {
            ...mapState([
                "cart"
            ]),
            ...mapGetters([
                "cartSize",
                "cartTotalAmount"
            ])
        },
        methods: {
            addToCart(id) {
                this.$store.dispatch("addToCart", id);
            },
            removeFromCart(id) {
                this.$store.dispatch("removeFromCart", id);
            },
            deleteFromCart(id) {
                this.$store.dispatch("deleteFromCart", id);
            }
        }
    } 
</script> 
