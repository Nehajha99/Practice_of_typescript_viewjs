// Conditional Rendering
//   define data function
//   use if directive (spacial key word are call directive)
//   make bitton and apply conditional with button click
//   how to use else if

<template>
    <div>
        <h1 v-if="show">Conditional Rendering</h1>
        <h1 v-else>Conditional NOT Rendering</h1>
        <button v-on:click="display">Toggle Element</button>
        
    </div>
    
</template>
<script>
export default{
    name : "ConditionalRendering", //// name of paasing compnent
    ///// way of passing props
    props:{
        data:String,
        msg:String
    },data(){
        return{show:false}
    },methods:{
        display(){
            this.show=!this.show
        }
    }
}
</script>

