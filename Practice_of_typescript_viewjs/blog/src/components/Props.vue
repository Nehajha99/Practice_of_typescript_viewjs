// Propes in vue js 
//     what is propes
//     make a component
//     define propes
//     pass propes
//     access propes



// // Child to parent data
<template>
    <div>
        <h1>Propes</h1>
        <!-- <h3>{{name}}</h3> -->
        <p v-for="user in users" :key="user.name">
            {{user.name}}
        </p>
    </div>
</template>

<script>
export default{
    name : "PassingPropes",
    props : ["users"]
}
</script>