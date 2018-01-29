<template>
    <div>
        <p>{{ticketData}}</p>
    </div>
</template>
<script>
    export default {
        computed: {
            ticketData(){
                return this.$store.state.ticketData
            }
        }
    }
</script>
<style scoped>
    p{
        margin-top: 40px;
        font-size: 30px;
        color: #000;
        text-align: center;
    }
</style>