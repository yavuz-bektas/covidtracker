<template>


<!-- box -- 1 -->
<div class="grid md:grid-cols-2 gap-4 p-4">
    <div class="shadow-md bg-blue-100 p-10 text-center rounded">
        <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
        <div class="text-2xl mb-4">
            <span class="font-bold">New:</span>
                {{numberWithCommas(this.$store.state.stats.NewConfirmed)}}
        </div>
          <div class="text-2xl mb-4">
            <span class="font-bold">Total:</span>
                {{numberWithCommas(this.$store.state.stats.TotalConfirmed)}}
        </div>
    </div>
</div>
<!-- box -- 1 -->


<!-- box -- 2 -->
<div class="grid md:grid-cols-2 gap-4 p-4">
    <div class="shadow-md bg-blue-100 p-10 text-center rounded">
        <h3 class="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>
        <div class="text-2xl mb-4">
            <span class="font-bold">New:</span>
                {{numberWithCommas(this.$store.state.stats.NewDeaths)}}
        </div>
          <div class="text-2xl mb-4">
            <span class="font-bold">Total:</span>
                {{numberWithCommas(this.$store.state.stats.TotalDeaths)}}
        </div>
    </div>
</div>
<!-- box -- 2 -->
</template>

<script>
export default {

    methods:{
        numberWithCommas(x){
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }

}
</script>

<style>

</style>