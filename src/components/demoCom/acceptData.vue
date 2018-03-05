<template>
    <div>
        <Header></Header>

        <div class="main">
            <h1>我是一个接受数据的页面，</h1>
            <p></p>
            <span>获取传递过来的手机号跟name值：{{$route.query}}</span>
        </div>
        <div class="btn">
            <a href="javascript:;" @click='goback'>点击返回上一层页面</a>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    export default {
        components: {
            Header
        },
        methods: {
            goback(){
                this.$router.go(-1);
            }
        }
    }
</script>


<style scoped>
    h1{
        font-size: 20px;
        text-align: center;
        color: #272727;
        margin-top: 40px;
    }
    p{
        font-size: 14px;
        color: red;
        text-align: center;  
        margin-top: 80px;      
    }
    .main{
        margin-top: 110px;
    }
    span{
        font-size: 24px;
        max-width: 1100px;
        display: block;
        margin: 40px auto;

    }
    .btn{
        text-align: center;
    }
    a{
        display: inline-block;
        padding: 10px 50px;
        border:2px solid black;
        font-size: 16px;
    }
</style>