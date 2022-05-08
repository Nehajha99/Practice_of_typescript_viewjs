// How to make form in vue js 
//     Make a component and imput in app.vue file 
//     Make input fields
//     Add checkbox and radio button
//     Define property for form
//     bind input field with property
//     dubmit form


<template>
    <div>
        <h1>Hello Button</h1>
        <input type="text" placeholder="enter your name" v-model="signup.username"/> <br><br>
        <input type="password" placeholder="enter your password" v-model="signup.password"/> <br><br>

        <p>Choose Hobbies</p>
        <input type="checkbox" id="circket" value="circket" v-model="signup.hobbies"/>
        <label for="circket"> Circket
        </label>

        <input type="checkbox" id="football" value="football" v-model="signup.hobbies"/>
        <label for="football"> Football
        </label>
        <br><br>
        <p>Select Gender</p>
        <input type="radio" id="male" value="male" v-model="signup.gender"/>
        <label for="circket"> Male
        </label>

        <input type="radio" id="female" value="female" v-model="signup.gender"/>
        <label for="female"> Female
        </label>
        <br> <br>
        <button v-on:click="signupUser">Sign Up</button>
    </div>
</template>

<script>
export default{
    name : "ClickButton",
    data(){
        return{
            signup:{
                username:null,
                password:null,
                hobbies:[],
                gender:null
            }
        }
    },
    methods:{
        signupUser(){
            console.log(this.signup)
        }
    }
}
</script>
