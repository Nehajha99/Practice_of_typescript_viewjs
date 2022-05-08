// How to make form in vue js 
//     make a component and import in app.vue file
//     make some fields
//     make function
//     add error validation

<template>
  <div>
    <h1>Form validation</h1>
    <p v-if="error.length">
        <b>Please correct the following errors</b>
        <ul>
            <li v-for="e in error" v-bind:key="e.id">
                {{e}}
            </li>
        </ul>
    </p>  
    <form @submit="login">
        <input type="text" placeholder="enter name" v-model="name"/> <br />
    <br />
    <input type="password" placeholder="enter password" v-model="password"/> <br />
    <br />
    <button type="submit">Login</button>
    </form>
    
  </div>
</template>

<script>
export default {
  name: "FormValidation",
  data(){
      return{
          error:[],
          name:null,
          password:null
      }

  },
  methods:{
      login(e){
          this.error=[]
          if(this.name && this.password){
              console.log("no error")
          }
          if(!this.name){
              this.error.push("user name is required")
          }
          if(!this.password){
              this.error.push("user Password is required")
          }
          console.log("Hello",this.error)
          e.preventDefault();
      }
  }
};
</script>
