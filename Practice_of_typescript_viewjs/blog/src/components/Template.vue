// Template in vue
//     what is Template
//     Dispaly normal propert
//     make button click
//     constant tag value 
//     operators
//     add html as property
//     disable button

<template>
    <p v-html="rowHtml"></p>
    <h3 v-once>{{name}}</h3> <!-- constant --> 
    <h3>{{name}}</h3>
    <h3>{{a+b}}</h3>
    <h3>{{ok?"yes":"No"}}</h3>
    <button v-on:click="updateText">Click Me</button>
    <button v-bind:disabled="disableBtn" v-on:click="Change">Change</button>

</template>

<script>


export default {
    name: "template",
    data()
    {
        return{
            name:"Neha",
            a:10,
            b:20,
            ok:true,
            rowHtml:"<h1>Template In Vue.js</h1>", //Add html properties
            disableBtn:true
        }
    },
    methods:{
        updateText(){
            this.name="Amisha"
            
        },
        Change(){
            this.ok=!this.ok
        }
    }
}
</script>
