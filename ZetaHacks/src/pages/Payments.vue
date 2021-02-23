<template>
  
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <!-- <h4 class="title">Payments</h4> -->
        <!--<p class="category">Complete your profile</p>-->
        <h5 class="title">Search Phone No.</h5>
            <div class="active-pink-3 active-pink-4 mb-3">
              <input
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
               <md-button class="md-raised md-success" data-background-color="blue">Search</md-button>

      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-25">
            <md-field>
              <label>Phone No.</label>
              <md-input v-model="phoneNumber"></md-input>
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
          
          <div class="md-layout-item md-size-50 text-right">
            <md-button class="md-raised md-success" data-background-color="purple">Pay</md-button>
          </div>
          
        <!-- </div> -->
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
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
      // salutation:null,
      //username: null,
      //disabled: null,
      //emailadress: null,
      last_name: null,
      first_name: null,
      middle_name:null,
      // dob:null,
      phoneNumber:null,
      // multiplier:null,
      // gender:null,
      // password:null,
      micro_invest:false
      //address: null,
      //city: null,
      //country: null,
      //code: null,
      //aboutme: ""
    };
  }
};
</script>