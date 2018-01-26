<template>
    <div>
        
        <a href="javascript:;" @click='add'>点击 加</a>
        <a href="javascript:;" @click='deleted'>点击 减</a>
        <p>{{parentsList}}</p>
    </div>
</template>
<script>
    export default {
        props:['parents-list'],
        mounted () {
            console.log(this.parentsList)
        },
        methods: {
            add(){
                this.$emit('add-num');
            },
            deleted(){
                this.$emit('deleted-num');
            }
        }
    }
</script>
<style scoped>
    a{
        padding: 8px 35px;
        display: inline-block;
        background:purple;
        color: #fff;
    }
    p{
        color: red;
        font-size: 14px;
        margin-top: 10px;
    }
</style>
