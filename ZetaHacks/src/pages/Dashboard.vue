<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>verified_user</md-icon>
          </template>

          <template slot="content">
            <h3 class="title"><a href="#/typography">Make Payment</a></h3>
            <!--<p class="category">
              Last Campaign Performance
            </p>-->
          </template>

        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          data-background-color="purple"
        >
          <template slot="content">
            <h4 class="title"><a href="#/table">Profit Trend</a></h4>
          </template>

        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dataCompletedTasksChart.data"
          :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Line'"
          data-background-color="purple"
        >
          <template slot="content">
            <h4 class="title"><a href="https://www.bseindia.com/sensex/code/16/" target="_blank">BSE Sensex</a></h4>
          </template>

        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">Wallet</p>
            <h3 class="title" style="font-weight:bold">{{walletMoney}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              This money needs to be Invested
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">Invested Value</p>
            <h3 class="title">{{investedValue}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
            <button type="button" class="btn btn-primary" style="background-color:purple">Withdraw Investments</button>
              
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">Account Balance</p>
            <h3 class="title">{{accountBalance}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">Investments</p>
            <h3 class="title">{{totalInvestement}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
            </div>
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">Multiplier</p>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Multiplier" v-model="multiplier">
            <button type="button" class="btn btn-primary" style="background-color:purple" v-on:click="updateMultiplier()">Update</button>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              The Multiplying factor for the Investment
            </div>
          </template>
          
        </stats-card>
      </div>


      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Stocks Stats</h4>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="purple"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  OrderedTable
} from "@/components";

import axios from 'axios';

export default {
  components: {
    StatsCard,
    ChartCard,
    OrderedTable
  },
  data() {
    return {
      totalInvestement : 0,
      walletMoney:0,
      investedValue : 0,
      accountBalance : 0,
      multiplier : 1,
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  },
  methods: {
      updateMultiplier () {
        axios.put('http://localhost:3000/user/updateMuliplier',{
          "userId":localStorage.getItem("userId"),
          "multiplier":this.multiplier
        })
      }
  },
  beforeMount(){
    axios.get('http://localhost:3000/investments/'+localStorage.getItem("userId"))
    .then(data=>{
      this.totalInvestement = data.data.length;
      let sum = 0;
      data.data.map((d)=>{
        sum+= d.amount
      })
      this.investedValue = sum;
      return axios.get('http://localhost:3000/user/'+localStorage.getItem("userId"))
    })
    .then((d)=>{
      this.walletMoney = d.data.wallet;
      this.multiplier = d.data.multiplier;
      return axios.get('http://localhost:3000/getBalance/'+d.data.account_id)
    })
    .then((d)=>{
      this.accountBalance = d.data.balance
    })
    
  }
};
</script>
