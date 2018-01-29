<template>
    <div class="header">
        <header>
            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="nav">
                <ul>
                    <li :class="{active:active == index}" v-for='(nav,index) in navLink' @click='linkPath(nav,index)'><router-link :to="nav.path">{{nav.name}}</router-link></li>
                </ul>
            </div>
        </header>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                navLink:[
                    {
                        path:"/",
                        name:"安装"
                    },
                    {
                        path:"/basics",
                        name:"基础语法"
                    },
                    {
                        path:"/assembly",
                        name:'组件'
                    },
                    {
                        path:"/hook",
                        name:"生命周期"
                    },
                    {
                        path:"/routes",
                        name:"路由"
                    },
                    {
                        path:'/transition',
                        name:"动画"
                    },
                    {
                        path:'/vuex',
                        name:"vuex"
                    }
                ],
            }
        },
        methods:{
            linkPath(nav,index){
                this.$store.commit('headerClick',index)
            }
        },
        computed: {
            active(){
                return this.$store.state.index;
            }
        }
    }
</script>

<style scoped>
    .header{
        position: fixed;          
        top: 0;
        width: 100%;
        height: 70px;
        box-shadow: 0 4px 8px 0 rgba(7,17,27,.1); 
        background: #fff;
        z-index: 99;     
    }
    header{
        width: 1000px;
        margin:  0 auto;
    }
    header::before{
        content: "";
        display: block;
        clear: both;
        height: 0;
    }
    header::after{
        content: "";
        display: block;
        clear: both;
        height: 0;
    }
    .logo{
        float: left;
        padding: 10px 0;
    }
    .logo img{
        width: 50px;
        height: 50px;
        vertical-align: middle;
    }
    .nav{
        float: left;
        margin-left: 40px;
        padding: 5px 0;
    }
    .nav ul::after{
        content: "";
        display: block;
        clear: both;
        height: 0;
    }
    .nav ul::before{
        content: "";
        display: block;
        clear: both;
        height: 0;
    }
    .nav ul li{
        float: left;
    }
    .nav ul li a{
        padding: 0 20px;
        display: block;
        color: #4D555D;
        text-align: center;
        font-size: 16px;
        line-height: 60px;
        font-weight: bold;
        text-shadow:  0 0 6px rgb(123, 24, 216);
    }
    .nav ul li.active a{
        text-shadow:  0 0 6px rgb(230, 11, 84);
    }
</style>
