<template>
  <!-- <div class="container"> -->
  <!-- <div class="row"></div> -->
  <div class="container">
    <br />
    <br />
    <br />
    <h1>Login Page</h1>

    <br />
    <br />
    <br />
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="phoneNumber"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="password"
          />
        </div>

        <button type="submit" class="btn btn-primary" @click="goToDashboard">Login</button>
      </form>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  
  data: function() {
    return {
    isAdmin:true,
    phoneNumber:"",
    password:""
   }
  },
  methods: {
    goToDashboard: function(){
      axios.post('http://localhost:3000/user/login',{
          "phoneNumber" : this.phoneNumber,
          "password" : this.password
      })
      .then((data)=>{
        if(data.data.isAdmin){
          localStorage.setItem("userId",data.data.id);
          localStorage.setItem("accountId",data.data.account_id);
          localStorage.setItem("isLoggedIn",true);
          localStorage.setItem("role","ADMIN");
          this.$router.push("/admin");
        }
        else{
          localStorage.setItem("userId",data.data.id);
          localStorage.setItem("accountId",data.data.account_id);
          localStorage.setItem("isLoggedIn",true);
          localStorage.setItem("role","USER");
          this.$router.push("/dashboard");
        }
      })
    
    }
  }
};
</script>

