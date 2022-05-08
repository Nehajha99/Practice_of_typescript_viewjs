// composing with components in vue 
//     what is component
//     make home component
//     make child components for home components


// Parant copmpnent
<template>
    <div>
        <h1>Home components</h1> 
        <User/>
        <product/>
    </div>
    
</template>
<script>
import User from "./User.vue"
import Product from "./Product.vue"
export default{
    name : "PerantCompnent",
    components:{
        User,
        Product
    } 
    
    
}
</script>
<style>
div{
    background-color: teal;
    height: 500px;
}

</style>
