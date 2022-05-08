// Loop
//     make data fuction
//     define a array of object
//     make a table
//     use v-for directive for loop


<template>
  <h1>For loop in vue js</h1>
  <table border="1px">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Email</td>
    </tr>
    <tr v-for="i in users" :key="i.id">
      <td>{{i.id}}</td>
      <td>{{i.name}}</td>
      <td>{{i.email}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "LOOP", //// name of paasing compnent
  ///// way of passing props
  props: {
    data: String,
    msg: String,
  },
  data() {
    return {
      users: [
        { id: 1, name: "peter", email: "peter@gmail.com" },
        { id: 2, name: "Neha", email: "Neha@gmail.com" },
        { id: 3, name: "Amisha", email: "Amisha@gmail.com" },
        { id: 4, name: "Sanju", email: "Sanju@gmail.com" },
        { id: 5, name: "bhagye", email: "bhagye@gmail.com" },
      ],
    };
  },
};
</script>
