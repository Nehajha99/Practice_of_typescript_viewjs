// Class and style bindings
//     how to use class
//     how to use style
//     class with object
//     class with array
//     classwith condition
//     stle with property


<template>
    <div>
        <h1 class="homestyle">Class and style binding</h1>
        <h1 v-bind:style="{color:'blue'}">Class and style binding</h1>
        <h1 v-bind:class="{display:show,displayColor:show}">class Binding with object</h1>
        <h1 v-bind:class="[aclass]">Class bindings with array</h1>
    </div>
</template>

<script>
export default{
    name: "ClassComponent",
    data(){
        return{
            show:true,
            aclass:"arrayClass"
        }
    }
};
</script>
<style scoped>
.homestyle{
    color: orange;
}
.display{
    background-color: brown;
}
.arrayClass{
    background-color: aqua;
}

</style>
