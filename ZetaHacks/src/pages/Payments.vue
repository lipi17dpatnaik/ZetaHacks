<template>
  
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <!-- <h4 class="title">Payments</h4> -->
        <!--<p class="category">Complete your profile</p>-->
        <h5 class="title">Search Phone No. to Pay</h5>
            <div class="active-pink-3 active-pink-4 mb-3">
              <input
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                v-model="searchPhone"
              />
            </div>
               <md-button class="md-raised md-success" data-background-color="blue" v-on:click="searchUserByPhone()">Search</md-button>

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
              <label>Name</label>
              <md-input v-model="name" type="text"></md-input>

          
          <div class="md-layout-item md-small-size-100 md-size-25" style="text-align:center">
            <md-field style="margin-left:50vh;">
              <label>Name</label>
              <md-input v-model="name" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-25">
            <br/>
            <br/><br/><br/>
            <md-field style="margin-left:15vh;">
              <label>Amount to Pay</label>
              <md-input v-model="amount" type="text"></md-input>

            </md-field>
          </div>
          
          
          </div>
          <div class="md-layout-item md-size-50 text-right">
            <md-button class="md-raised md-success" data-background-color="purple" :disabled='isDisabled'  v-on:click="makePayment()">Pay</md-button>
          </div>

          <b-modal id="modal-1">
            <div class="d-block" style="color:green;font-size:2em;font-weight:bold">Success Hurray!</div>
            <div class="d-block">{{amount}} is Transfeered Succesfully </div>

          </b-modal>

          <b-modal id="modal-2">
            <div class="d-block" style="color:red;font-size:2em;font-weight:bold">Failure!! Sorry :(</div>
            <div class="d-block">Try Again After Some time !!</div>
          </b-modal>

          
        <!-- </div> -->
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
      last_name: null,
      first_name: null,
      middle_name:null,
      amount:0,
      phoneNumber:null,
      micro_invest:false,
      searchPhone:"",
      merchantAccountId:null,
      userAccountId:null,
      name:""

    };
  },
  computed: {
      isDisabled() {
        return this.amount <= 0
      },
    },
  methods:{
    searchUserByPhone(){
      axios.get('http://localhost:3000/users/'+this.searchPhone)
      .then((user)=>{
        
        user = user.data[0];
        
        this.name = user.first_name + " " + user.last_name;
        this.merchantAccountId = user.account_id;
        this.userAccountId = localStorage.getItem('accountId');
      })
    },
    showModal(modelId) {
      this.$root.$emit('bv::show::modal', modelId, '#btnShow')
    },
    hideModal(modelId) {
      this.$root.$emit('bv::hide::modal', modelId, '#btnShow')
    },
    makePayment(){
      // this.showModal('modal-1')
      axios.post('http://localhost:3000/makePayment',
        {
            "userId":localStorage.getItem("userId"),
            "merchantId":this.merchantAccountId,
            "userAccountId":this.userAccountId,
            "amount":{
                "currency":"INR",
                "amount":this.amount
            }
        }
      )
      .then((payment)=>{
        if(payment.data == "SUCCESS"){
            this.showModal('modal-1')
        }
        else{
            this.showModal('modal-2')

        }
      })
    }
  }
};
</script>