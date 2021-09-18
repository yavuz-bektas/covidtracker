<template>
  <div class="flex flex-col align-center justify-center text-center text-2xl font-bold" v-if="!loading">
      {{title}}
  </div>
  <div class="flex flex-col align-center justify-center text-center m-2" v-if="!loading">
      {{dataDate}}
      <DataBoxes/>
      <countrySelect/>
  </div>


  <div class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <img :src="loadingImage"  class="w-24 m-auto" alt=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import DataBoxes from "@/components/DataBoxes"
import countrySelect from "@/components/countrySelect"

export default {
  name: 'Home',
  components: {
    DataBoxes,
    countrySelect
  },
  data(){
    return{
      loading: true,
      title: 'Global',
      dataDate:'',
      stats:{},
      countries: [],
      loadingImage: require('../assets/hourglass.gif'),

    }
  },
  methods:{
    async fetchCovidData(){
      const res = await fetch('https://api.covid19api.com/summary')
      const data = await res.json()
      return data
    }
  },

  async created(){
    const data = await this.fetchCovidData()
    this.dataDate = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false
    this.$store.commit('setStatsData',data.Global)
    this.$store.commit('setCountriesData',data.Countries)

  }
}
</script>
