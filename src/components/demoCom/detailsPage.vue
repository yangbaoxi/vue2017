<template>
    <div>
        <Header></Header>

        <div class="main">
            <h1>我是新闻详情页面的title</h1>
            <p>这是详情页面的内容，但是需要往后台 传递 id 去查找 对于的数据！！！</p>
            <span>获取url中的id值：{{this.$route.params}}</span>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    export default {
        components: {
            Header
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
        text-align: center;
    }
</style>
