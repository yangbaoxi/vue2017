<template>
    <div>
        <Header></Header>
        <div class="main">
            <h1>生命周期</h1>
        </div>
        <div class="AllBox">
            <ul>
                <li>
                    <h4># 钩子函数</h4>
                    <p class="introduce"></p>
                    <div class="box">
                        <div class="box_left">
                            <pre><p>{{listOne.shell}}</p></pre>
                        </div>
                    </div>
                    <div class="demonstration">
                        <p>{{listOne.msg}}</p>
                        <a href="javascript:;" @click='modifyBtn'>点击修改 上面内容</a>
                        <a href="javascript:;" @click='destroyBtn'>点击销毁 vue对象</a>
                    </div>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. 还有俩个钩子函数在高级部分讲解！</p>
                        <p>2. 如果所有的子组件一起被重绘，要使用 this.$nextTick(function( ){ <span style="color:red">只有在整个视图重新呈现后才运行的代码。</span> })</p>
                        <p>3. 请求后台数据，最好在mounted的函数内部进行请求数据，后面我们看<span  style="color:red">axios模块</span> </p>
                        <p>4. 先点击销毁vue对象后，点击修改内容将不会执行（vue销毁后内部所有事件全部销毁）</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue'
    export default {
        data(){
            return{
                listOne:{
                    shell:"<template>\n     <div>\n             <p>{{msg}}</p>\n             <a href='javascript:;' @click='modifyBtn'>点击修改 上面内容</a>\n             <a href='javascript:;' @click='destroyBtn'>点击销毁 vue对象</a>\n     </div>\n</template>\n<script>\n export default {\n      data( ){\n           return:{ \n                 msg:'我讨厌北京！'\n           }\n       },\n      methods:{\n            modifyBtn(){\n                  this.msg = '我爱北京！' \n            },\n            destroyBtn(){\n                  this.$destroy(); \n            }      \n      },\n      beforeCreate ( ) {    alert('vue实例初始化后');    },\n      created ( ) {    alert('在实例创建完成后触发');    },\n      beforeMount () {    alert('在挂载开始之前被触发');    },\n      mounted () {    alert('在挂载开始之后被触发');    },\n      beforeUpdate () {    alert('数据更新时触发');    },\n      updated () {    alert('数据更新后触发');    },\n      beforeDestroy () {    alert('实例销毁之前触发');    },\n      destroyed () {    alert('vue 实例销毁后触发');    },\n \n } \n< /script>",
                    msg:"我讨厌北京！"
                }
            }
        },
        components: {
            Header
        },
        methods: {
            modifyBtn(){
                this.listOne.msg = '我爱北京！'
            },
            destroyBtn(){
                this.$destroy();
            }
            
        },
        beforeCreate () {
            alert('vue实例初始化后')
        },
        created () {
            alert('在实例创建完成后触发')
        },
        beforeMount () {
            alert('在挂载开始之前被触发')
        },
        mounted () {
            alert('在挂载开始之后被触发')
        },
        beforeUpdate () {
            alert('数据更新时触发')
        },
        updated () {
            alert('数据更新后触发')
        },
        beforeDestroy () {
            alert('实例销毁之前触发');
        },
        destroyed () {
            alert('Vue 实例销毁后触发');
        }
    }
</script>
<style scoped>
    .main{
        width: 1200px;
        margin: 70px auto 0;
        padding: 20px 0;
    }
    .main h1{
        font-size: 20px;
        color: #333;
        font-weight: 600;
    }
    .main p{
        font-size: 15px;
        margin-top: 20px;
    }
    .main p span{
        color: red;
    }
    .AllBox {
        width: 1200px;
        height: 1000px;
        margin:  20px auto 0;
    }
    .AllBox ul li {
        padding: 25px 15px;
        border-bottom: 1px solid purple;
    }
    .AllBox ul li h4{
        font-size: 16px;
        color: green;

    }
    .AllBox ul li .introduce{
        font-size: 14px;
        color:red;
    }
    .AllBox ul li .box{
        margin-top: 30px;
    }
    .AllBox ul li .box::before{
        content: "";
        display: block;
        height: 0;
        clear: both;
    }
    .AllBox ul li .box::after{
        content: "";
        display: block;
        height: 0;
        clear: both;
    }
    .AllBox ul li .box .box_left{
        width: 50%;
        float: left;
        background: #2b333b;
    }
    .AllBox ul li .box .box_left pre{
        font-size: 14px;
        color: #fff;
        line-height: 25px;
        padding: 15px;
    }

    .demonstration{
        margin-top: 20px;
        border: 2px solid #0000ff;
        padding: 20px;
    }

    .AllBox ul li .box .box_right{
        width: 49%;
        float: right;
        background: purple;
    }
    .AllBox ul li .box .box_right pre{
        color: #fff;
        font-size: 14px;
        line-height: 25px;
        padding: 15px;
    }
    .explain{
        width: 100%;
        margin-top: 20px;
        padding: 20px;
    }
    .explain p{
        font-size: 14px;
        color: #0000ff;
        line-height: 25px;
    }
    .demonstration input{
        padding: 5px;
        width: 300px;
        display: block;
        margin-top: 10px;
    }
    .demonstration a{
        padding: 8px 35px;
        display: inline-block;
        background:purple;
        color: #fff;
        margin-top: 10px;
    }
    .demonstration p{
        font-size: 14px;
        color: #2b333b;
        font-weight: bold;
        margin-bottom: 10px;
    }
</style>