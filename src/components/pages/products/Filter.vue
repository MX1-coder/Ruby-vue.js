<template>
    <div>
       <div id="filter">
            <div>
                <label><input type="checkbox" value="php" v-model="selectedTags">php</label>
                <label><input type="checkbox" value="js" v-model="selectedTags">js</label>
            </div>
            <ul>
                <li v-for="card in activeCards" :key="card">{{ card.name }}</li>
            </ul>
            </div>

        <section class="products">
        <div class="container-fluid mt-5 py-2">
            <div class="row">
                <div class="col-sm-3">
                    <div class="filter-sidebar">
                        <h2 class="mb-5">Filter by</h2>
                        
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
    </div>
</template>
<script>
 import SingleProduct from "./SingleProduct.vue"
export default {
    name: 'Filter',
     components: {
        SingleProduct
    },
    data(){
        return{
            tags: ['php', 'js'],
            cards: [
            {
                tags: ['php'],
                name: 'PHP Project'
            },
            {
                tags: ['php', 'js'],
                name: 'Laravel Project'
            },
            {
                tags: ['js'],
                name: 'Node Project'
            }
            ],
            selectedTags: []
        }
    },
	computed: {
		activeCards: function() {
            if(this.selectedTags.length == 0) return this.cards;
            
            var activeCards = [];
            var filters = this.selectedTags;
            
            this.cards.forEach(function(card) {
                
                function cardContainsFilter(filter) {
                return card.tags.indexOf(filter) != -1;
                }
                
                if(filters.every(cardContainsFilter)) {
                activeCards.push(card);
                }
            });
            
            return activeCards;
        },
        products(){
            return this.$store.state.products;
        }
	},
    created(){
        this.$store.dispatch("fetchProducts");
    }
}
</script>