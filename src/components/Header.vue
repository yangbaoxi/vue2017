<template>
    <div class="header">
        <header>
            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="nav" :class="{active:navActive}">
                <ul>
                    <li :class="{active:active == index}" v-for='(nav,index) in navLink' @click='linkPath(nav,index)'><router-link :to="nav.path">{{nav.name}}</router-link></li>
                </ul>
            </div>
            <div class="enlarge" @click="navBtn">
                <div class="icon" :class="{active:navBtnActive}"></div>
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
                navBtnActive:false,
                navActive:false
            }
        },
        methods:{
            linkPath(nav,index){
                this.$store.commit('headerClick',index)
            },
            navBtn(){
                this.navActive = !this.navActive;
                this.navBtnActive = !this.navBtnActive;
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
        max-width: 1000px;
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
        color: #34495e;
        text-align: center;
        font-size: 16px;
        line-height: 60px;
        font-weight: bold;
        transition: all 0.35s;
    }
    .nav ul li.active a{
        color: rgb(123, 24, 216);
    }
    .nav ul li a:hover{
        color:rgb(123, 24, 216);
    }
    .enlarge{
        position: relative;
        float: right;
        cursor: pointer;
        z-index: 30;
        height: 36px;
        width: 36px;
        right: 15px;
        top: 24px;
        border-radius: 2px;
        display: none;
    }
    .enlarge .icon{
        background-color: #2c3e50;
        border-radius: 2px;
        height: 3px;
        position: absolute;
        top: 18px;
        transition-duration: 0.5s;
        width: 83%;
    }
    .enlarge .icon::before{
        top: -9px;
    }
    .enlarge .icon::after{
        top: 9px;
    }
    .enlarge .icon::before, .enlarge .icon::after{
        background-color: #2c3e50;
        border-radius: 2px;
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        transition-duration: 0.5s;
        width: 36px;
    }
    .enlarge .icon.active {
        width: 0;
    }
    .enlarge .icon.active::before{
        transform: translateY(9px) rotate(45deg);
    }
    .enlarge .icon.active::after{
        transform: translateY(-9px) rotate(-45deg);
    }
    @media (max-width:768px){
        .enlarge{
            display: block;
        }
        .nav{
            position: absolute;
            float: none;
            margin-left: 0;
            padding: 5px 0;
            background: #ffffff;
            z-index: 99;
            width:150px;
            top: 73px;
            left: -155px;
            transition: all 0.5s;
            box-shadow: 1px 1px 4px #7b18d8;
            border-radius: 0 5px 5px 0;
        }
        .nav.active{
            left:0;
        }
        .nav ul li {
            float: none;
        }
        .nav ul li a{
            font-size: 14px;
            line-height: 40px;
        }
        .logo{
            margin-left: 20px;
        }
    }
</style>
