<template>
    <section class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3">
                    <div class="footer-content">
                        <h5 class="mb-5">Contacts</h5>
                        <p>+38 (067) 374 36 92<br/>@rubydecor.com.ua<br/>Opening hours: Mon-Fri 10:00-19:00<br/>Sat 10: 00-18: 00; Sun - day off</p>
                    </div>
                </div>
                <div class="col-sm-3" v-for="(footer,index) in footerLinks" :key="index">
                    <div class="footer-content">
                        <h5 class="mb-5">{{footer.title}}</h5>
                        <ul>
                            <li v-for="(link,index) in footer.links" :key="index">
                                <router-link to="#">{{link.name}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-12">
                    <p>Ruby | home decoration and gifts</p>
                    <p>All rights reserved © 2021</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Footer',
    data(){
        return{
            
            footerLinks : [
                {
                    title : 'Information',
                    links : [
                        { name : 'Vacancies' },
                        { name : 'Public offer agreement' },
                        { name : 'Terms of exchange & return of goods' },
                    ]
                },
                {
                    title : 'Menu',
                    links : [
                        { name : 'About us' },
                        { name : 'Payment and delivery' },
                        { name : 'Store' },
                        { name : 'Contact us' },
                    ]
                },
                {
                    title : 'We are in social networks',
                    links : [
                        { name : 'Instagram' },
                        { name : 'Facebook' },
                        { name : 'Telegram' },
                        { name : 'Pinterest' },
                    ]
                },
            ]
        }
    }
}
</script>