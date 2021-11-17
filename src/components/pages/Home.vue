<template>
    <div>
        <section class="banner">
           <Banner />
        </section>

        <section class="products top-products">
            <div class="container mt-5 py-2">
                <h2 class="text-center">Our Top Products</h2>
                <TopProducts />
            </div>
        </section> 
        

        <section class="stay">
            <div class="container">
                <h2>Stay in touch</h2>
                <p>Ruby is a store of luxurious home decoration and gifts. We are passionate about doing our part to make life better. We provide high-quality merchandise, great value, and exceptional customer service. We connect people with products and services in new and unexpected ways. We do our part to create dream homes for all.</p>
                <form>
                    <div class="subscribe">
                        <input type="text" placeholder="Enter your email" class="form-control">
                        <button class="whitebtn">SUBMIT</button>
                    </div>
                </form>
            </div>
        </section>

        <section class="gems">
            <div class="container">
                <h2 class="text-center py-5">Our Gems</h2>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-design-tab" data-bs-toggle="pill" data-bs-target="#pills-design" type="button" role="tab" aria-controls="pills-design" aria-selected="true">Design section</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-wall-tab" data-bs-toggle="pill" data-bs-target="#pills-wall" type="button" role="tab" aria-controls="pills-wall" aria-selected="false">Wall painting</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-interior-tab" data-bs-toggle="pill" data-bs-target="#pills-interior" type="button" role="tab" aria-controls="pills-interior" aria-selected="false">Interior decoration</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-gift-tab" data-bs-toggle="pill" data-bs-target="#pills-gift" type="button" role="tab" aria-controls="pills-gift" aria-selected="false">Gift section</button>
                    </li>
                </ul>
                <div class="container">
                     <div class="tab-content my-5" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">
                            <DesignProduct />
                        </div>
                        <div class="tab-pane fade" id="pills-wall" role="tabpanel" aria-labelledby="pills-wall-tab">
                            <DesignProduct />
                        </div>
                        <div class="tab-pane fade" id="pills-interior" role="tabpanel" aria-labelledby="pills-interior-tab">
                            <DesignProduct />
                        </div>
                        <div class="tab-pane fade" id="pills-gift" role="tabpanel" aria-labelledby="pills-gift-tab">
                            <DesignProduct />
                        </div>
                    </div>
                </div>
               
                
            </div>
        </section>

        <section class="unique">
            <div class="container">
                <h2 class="text-center mb-5">Unique fall collection 2021</h2>
                <p class="text-center mb-5">From statement side tables to stylish cabinets and luxurious sofas, discover<br/> the curation of styles and designers for this fall.</p>
                <img src="/static/images/fall.jpg" alt="unique">
            </div>
        </section>

        <section class="newsletter">
            <div class="container">
                <div class="card">
                    <div class="row">
                        <div class="col-sm-5">
                            <h2>Stay in touch</h2>
                            <p>Sign up for emails packed with finds and inspiration</p>
                        </div>
                        <div class="col-sm-7">
                            <form>
                                <input type="text" placeholder="Enter your email" class="form-control">
                                <button class="blackbtn">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="follow">
            <div class="container-fluid">
                <h2 class="text-center">Follow us <i class="fab fa-instagram"></i></h2>
                <div class="row mt-5">
                    <div class="col-sm-2" v-for="(follow,index) in followImage" :key="index">
                        <img v-bind:src="'/static/images/' + follow.image" alt="follow">
                    </div>
                </div>
            </div>
        </section>
       
    </div>
</template>

<script>
    import Banner from '../reusable/Banner.vue'
    import TopProducts from './products/TopProducts.vue'
    import DesignProduct from './products/DesignProduct.vue'

    export default {
        name: 'Home',
        components: {
            Banner, TopProducts, DesignProduct
        },
        data(){
            return{
                followImage:[
                    {image: 'follow-1.jpg'},
                    {image: 'follow-2.jpg'},
                    {image: 'follow-3.jpg'},
                    {image: 'follow-4.jpg'},
                    {image: 'follow-5.jpg'},
                    {image: 'follow-6.jpg'},
                ]
            }
        },
        
    }
</script>