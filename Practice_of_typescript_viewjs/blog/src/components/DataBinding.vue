// Data Binding in vuejs
//     what is data binding
//     make a component
//     define property
//     make data binding
//     data binding with multi-line

<template>
    <div>
        <h1>Data Binding</h1>
        <h2 style="white-space:pre-line">{{message}}</h2>
        <!-- <input type="text" v-model="message"> -->
        <textarea type="text" v-model="message"></textarea>
    </div>
</template>

<script>
export default{
    name : "dataBinding",
    data(){
        return{
            message:"Hi"
        }
    }
}
</script>
