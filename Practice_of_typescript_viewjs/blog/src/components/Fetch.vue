// Fetch Get API
//     install Axios and vue-Axios
//     make component
//     use mounted life cycle hooks for call API
//     fetch API with Axios 
//     use v-for for show list of data 

<template>
    <div>
        <h1>Fetch API</h1>
    </div>
</template>

<script>
    import Vue from "vue";
    import VueAxios from 'vue-axios'
    import axios from "axios";
    Vue.use(VueAxios,axios)
    export default{
        name : "FetchData",
        mounted(){
            Vue.axios.get("https://fakestoreapi.com/products")
            .then(resp=>{
                console.log(resp)
            })
        }
    }
</script>