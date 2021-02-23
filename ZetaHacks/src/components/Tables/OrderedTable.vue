<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Stocks">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Returns">{{ item.salary }}</md-table-cell>
        <md-table-cell md-label="Current">{{ item.country }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        
      ]
    };
  },
  beforeMount(){
    axios.get('http://localhost:3000/stocks')
    .then(data=>{
      data.data.map((d)=>{
        this.users.push({
          id:d.id,
          name:d.stock_name,
          salary : d.interest,
          country : d.stock_value
        })
      })
    })
  }
};
</script>
