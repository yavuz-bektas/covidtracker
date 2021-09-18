<template>
<select @change="onChange()" v-model="selected" class="form-select mt-1 block w-full border p-3 rounded mt-10">
    <option value="0">Select Country</option>
    this.$store.state.stats
    <option v-for="i in this.$store.state.countries" :key="i.id" :value="i.ID">{{i.Country}}</option>
</select>
</template>

<script>
export default {

    data(){
        return{
            selected:""
        }
    },


    methods:{
        onChange(){
            const country = this.$store.state.countries.find((item) => item.ID === this.selected)
            this.$store.commit('setStatsData',country)

        }
    }


}
</script>

<style>

</style>