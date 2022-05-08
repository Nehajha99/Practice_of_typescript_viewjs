
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <CreatingComponent data="Start Vue" msg="Hello from Neha" /> -->
  <!-- <conditional-rendering/> -->
  <!-- <LOOP/> -->
  <!-- <Home /> -->
  <!-- <Template/> -->
  <!-- <Classes /> -->
  <!-- <DataBinding/> -->

  <!-- v-bind function help us to display data -->
  <!-- <props v-bind:users="users"/>   -->

  <!-- Child to parent passing data -->
  <!-- <h1>{{title}}</h1>
  <ChildToParent v-on:changeTitle="updateTitle($event)"/> -->


  <!-- <Button/> -->
  <!-- <ValidationForm/> -->
  <FetchData/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CreatingComponent from "./components/CreatingComponent.vue";
// import ConditionalRendering from "./components/ConditionalRendering.vue"
// import LOOP from "./components/Loop.vue"
// import Home from "./components/Home.vue"
// import Template from "./components/Template.vue"
// import Classes from "./components/Classes.vue"
// import DataBinding from './components/DataBinding.vue';
// import Props from "./components/Props.vue" 
// import ChildToParent from "./components/ChildToParent.vue"
// import Button from "./components/Button.vue"
// import ValidationForm from "./components/ValidationForm.vue"
import FetchData from "./components/Fetch.vue"

export default {
  name: "App",
  components: {
    
    // HelloWorld,
    // CreatingComponent
    // ConditionalRendering
    // LOOP
    // Home
    // Template
    // Classes,
    // DataBinding
    // Props,
    // ChildToParent
    // Button
    // ValidationForm
    FetchData

    
  },

  // part of parent to child
  // data(){
  //   // return {userName:"Madhu"}
  //   return {users:[
  //     {name : "Neha"},
  //     {name : "Amisha"},
  //     {name : "Sanju"},
  //     {name : "Madhu"},
  //     ]}
  // }


  // Child to parent Data
  // data(){
  //   return{title:"Props Tutorial"}
  // },
  // methods:{
  //   updateTitle(title)
  //   {
  //     this.title=title
  //   }
  // }
};
</script>

<style>
body{
  background-color: teal;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* background-color: rgb(202, 183, 202); */
  
}
table{
  text-align: center;
  margin: auto;
}
</style>
