<template>
<form>
    <md-card> 
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title"> Login Page</h4>
        <!--<p class="category">Complete your profile</p>-->
      </md-card-header>

      <md-card-content>
  <div class="md-layout-item md-small-size-100 md-size-25">
            <md-field>
              <label>Phone No.</label>
              <md-input v-model="phoneNumber" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-25">
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 text-left">
            <md-button class="md-raised md-success" data-background-color="purple" @click="goToDashboard">Login</md-button>
          </div>
      </md-card-content>
    </md-card>
</form>
  
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



