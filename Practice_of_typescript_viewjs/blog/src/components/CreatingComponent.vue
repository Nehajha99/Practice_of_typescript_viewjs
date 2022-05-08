// what do 
//     creatong component
//     pass propes


<template>
    <div>
        <h1>Hello Vue.js</h1>
        <h2>{{data}}</h2>
        <h2>{{msg}}</h2>
        <!-- <button v-on:click="hello">Click Me</button> -->
        <button v-on:mouseover="hello">Click Me</button>  
    </div>
    
</template>
<script>
export default{
    name : "Component", //// name of paasing compnent
    ///// way of passing props
    props:{
        data:String,
        msg:String
    },
    methods: {
    hello() {
    //   alert("Hiiii Neha");
      console.log("hiiii")
    },
  }
}
</script>

