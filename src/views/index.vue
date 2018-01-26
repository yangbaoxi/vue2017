<template>
    <div>
        <Header></Header>
        <div class="introduce">
            <div class="main">
                <h1>安装教程 and 服务器npm语法</h1>
                <ul>
                    <li v-for='item in installList'>
                        <h2>{{item.title}}</h2>
                        <div class="shell">
                            <span v-for='list in item.grammar'>{{list}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue'
    export default {
        data(){
            return{
               installList:[
                    {
                       "title":"一：安装淘宝镜像",
                       "grammar":["$ npm install -g cnpm --registry=https://registry.npm.taobao.org"]
                    },
                    {
                        "title":"二：安装webpack",
                        "grammar":["$ cnpm install webpack -g"]
                    },
                    {
                        "title":"三：安装live-server服务器",
                        "grammar":["$ cnpm install live-server -g","$ live-server"]
                    },
                    {
                        "title":"四：Vue脚手架安装",
                        "grammar":["$ cnpm install vue-cli -g","$ vue init webpack","$ cnpm install","$ npm run dev"]
                    }
               ] 
            }
        },
        components: {
            Header
        }
    }
</script>
<style scoped>
    .introduce{
        width: 1000px;
        margin:  70px auto 0;
    }
    .introduce .main{
        padding: 20px 0;
    }
    .introduce .main h1{
        font-size: 20px;
        color:#333;
        font-weight: 600;
    }
    .introduce .main ul{
        margin-top: 40px;
    }
    .introduce .main li{
        padding: 20px 0;
    }
    .introduce .main li h2{
        font-size: 15px;
        color: rgb(42, 116, 226);
        font-weight: bold;
    }
    .introduce .main li .shell{
        width: 600px;
        padding: 20px;
        background: #2b333b;
        margin-top: 15px;
    }
    .introduce .main li .shell span{
        color: #fff;
        display: block;
        padding: 5px 0;
        font-size: 14px;
    }
</style>
