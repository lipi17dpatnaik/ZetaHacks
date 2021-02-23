<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Registration Form</h4>
        <!--<p class="category">Complete your profile</p>-->
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-25">
            <md-field>
              <select class="form-control" id="exampleFormControlSelect1" v-model="salutation">
                <option>Salutation</option>
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
              </select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-25">
            <md-field>
              <label>First Name</label>
              <md-input v-model="first_name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-25">
            <md-field>
              <label>Middle Name</label>
              <md-input v-model="middle_name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-25">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="last_name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
          <md-datepicker v-model="dob">Date of Birth</md-datepicker>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
              <label>Gender</label>
              <md-radio-group>
                <md-radio v-model="gender" value="M">Male</md-radio>
                <md-radio v-model="gender" value="F">Female</md-radio>
              </md-radio-group>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Phone Number</label>
              <md-input v-model="phoneNumber" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-25">
              <label>Micro-invest</label>
                <md-switch v-model="micro_invest">Yes</md-switch>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-25">
            <md-field>
              <label>Multiplier</label>
              <md-input v-model="multiplier" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-25">
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <!--<div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>City</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Postal Code</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>About Me</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>-->
          <div class="md-layout-item md-size-50 text-right">
            <md-button class="md-raised md-success" data-background-color="purple" v-on:click="register()">Submit</md-button>
          </div>
          <div class="md-layout-item md-size-50 text-left">
            <md-button class="md-raised md-success" data-background-color="purple" @click.native="$router.push('/login')">Login</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from 'axios';

export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "purple"
    }
  },
  data() {
    return {
      salutation:null,
      last_name: null,
      first_name: null,
      middle_name:null,
      dob:null,
      phoneNumber:null,
      multiplier:null,
      gender:null,
      password:null,
      micro_invest:false
    };
  },
  methods :{
    register(){
      axios.post('http://localhost:3000/user/',
        {
          "salutation" : this.salutation,
          "first_name" : this.first_name,
          "last_name" : this.last_name,
          "middle_name" : this.middle_name,
          "dob" : this.dob,
          "gender":this.gender,
          "phoneNumber" : '+'+this.phoneNumber,
          "profile_pic":"",
          "micro_invest":this.micro_invest,
          "multiplier":this.multiplier,
          "password":this.password
      }
    )
    .then((data)=>{
          localStorage.setItem("userId",data.data.id);
          localStorage.setItem("accountId",data.data.account_id);
          localStorage.setItem("isLoggedIn",true);
          localStorage.setItem("role","USER");
          this.$router.push("/dashboard");

    })
    }
  }
};
</script>
<style></style>
