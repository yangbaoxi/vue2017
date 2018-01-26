<template>
    <div class="main">
        <ul>
            <li v-for='item in basicsList'>
                <h3><span>#</span> {{item.title}} </h3>
                <div class="shell">
                    <span>{{item.output}}</span>
                </div>
                <div class="code">
                    <pre>{{item.HtmlCode}}</pre>
                </div>
                <div class="jsCode">
                    <pre>{{item.jsCode}}</pre>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                basicsList:[
                    {
                        title:"文本",
                        output:"Hello World",
                        HtmlCode:"<span> {{msg}} </span>",
                        jsCode:"data ( ) { \n      return { \n             msg: ' Hello World ' \n       } \n }"
                    },
                    {
                        title:"原始HTML",
                        output:"Hello World (原始HTML)",
                        HtmlCode:"<span v-html='msg'></span>",
                        jsCode:"data ( ) { \n      return { \n             msg: ' <span>Hello World(原始HTML)</span> ' \n       } \n }"
                    },
                    {
                        title:"特性",
                        output:"我的id是 ： 1 ",
                        HtmlCode:"<span v-bind:id='ID'>我的id是 ：{{ID}}</span>",
                        jsCode:"data ( ) { \n      return { \n             ID: '1' \n       } \n }"
                    },
                    {
                        title:"使用 JavaScript 表达式",
                        output:"yes",
                        HtmlCode:"<span>{{ ok ? 'yes' : 'no'}}</span>",
                        jsCode:"data ( ) { \n      return { \n             ok : true \n       } \n }"
                    }

                ]
            }
        },  
    }
</script>

<style scoped>
    .main{
        width: 1000px;
        margin: 30px auto 0;
        padding: 20px 0;
    }
    .main h1{
        font-size: 20px;
        color: #333;
        font-weight: 600;
    }
    .main ul{
        margin-top: 10px;
    }
    .main li{
        padding: 20px 0;
    }
    .main li h3{
        font-size: 16px;
        color: #333;
        font-weight: 700;
    }
    .main li h3 span{
        color: #42b983;
    }
    .main li .shell{
        width: 700px;
        background: #4eb3b9;
        padding: 10px 20px;
        margin-top: 15px;
    }
    .main li .shell span{
        color: #fff;
        display: block;
        padding: 5px 0;
        font-size: 13px;
    }

    .main li .code{
        width: 700px;
        background: #2b333b;
        padding: 10px 20px;
        margin-top: 15px;
    }
    .main li .code pre{
        color: #fff;
        display: block;
        padding: 6px 0;
        font-size: 13px;
    }
    .main li .jsCode{
        width: 700px;
        background: #ff0097;
        padding: 10px 20px;
        margin-top: 15px;
    }
    .main li .jsCode pre{
        color: #fff;
        display: block;
        padding: 6px 0;
        font-size: 13px;
    }
</style>