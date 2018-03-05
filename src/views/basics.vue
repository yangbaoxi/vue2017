<template>
    <div>
        <Header></Header>
        <div class="main">
            <h1>基础语法</h1>
            <div class="children-router">
                <router-link to="/basics/interpolation">插值</router-link>
                <router-link to="/basics/instructions">指令</router-link>
                <router-link to="/basics/computational">计算属性 and 监听</router-link>
                <router-link to="/basics/styleClass">class and style 绑定</router-link>
                <router-link to="/basics/rendering">条件渲染</router-link>
                <router-link to="/basics/listloop">列表渲染</router-link>
                <router-link to="/basics/filter">过滤器</router-link>
                <router-link to="/basics/eventFun">事件处理</router-link>
                <router-link to="/basics/model">input表单输入绑定</router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue'
    export default {
        data(){
            return{
            }
        },
        components: {
            Header
        }
    }
</script>
<style scoped>
    .main{
        max-width: 1000px;
        margin: 70px auto 0;
        padding: 20px 0;
    }
    .main h1{
        font-size: 20px;
        color: #333;
        font-weight: 600;
    }
    .main .children-router{
        margin-top: 50px;
    }
    .main .children-router a{
        padding: 8px 50px;
        background: #ebebeb;
        border-radius: 16px;
        color: #666;
        font-size: 14px;
        display: inline-block;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .main .children-router a.router-link-exact-active{
        color: #fff;
        background: #0099ff;
    }
    @media (max-width:768px){
        .main{
            padding: 15px;
        }
        .main h1{
            font-size: 16px;
        }
        .main .children-router{
            text-align-last: justify;
            text-align: justify;
        }
        .main .children-router a{
            padding: 8px 25px;
            font-size: 12px;
            border-radius: 5px;
            margin-right: 15px;
            margin-bottom: 15px;
        }
    }
</style>
