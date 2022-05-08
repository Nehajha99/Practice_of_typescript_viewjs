<template>
    <div>
        <button v-on:click="updateTitle">Update parent title</button>
    </div>
</template>

<script>
export default{
    name:"ChildToParent",
    methods:{
        updateTitle(){
            this.$emit("changeTitle","Parent data")
        }
    }
}
</script>
