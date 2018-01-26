<template>
    <div class="main">
        <ul>
            <li>
                <h3><span>#</span> 计算属性实例</h3>
                <div class="shell">
                    <pre>{{list1.shell}}<span style="color:black">{{shell2}}</span></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list1.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list1.jsCode}}</pre>
                </div>
                <!-- 辅助事件 -->
                <div class="on_Btn">
                    <a href="javascript:;" @click='ChangeText'>点击改变text值</a>
                </div>
            </li>
            <li>
                <h3><span>#</span> 监听实例</h3>
                <div class="shell">
                    <pre>{{list2.num}} 点击下面按钮看num值的变化</pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list2.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list2.jsCode}}</pre>
                </div>
                <!-- 辅助事件 -->
                <div class="on_Btn">
                    <a href="javascript:;" @click='plus'>点击加num值</a>
                    <a href="javascript:;" @click='reduce'>点击减num值</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                list1:{
                    shell:'What are you doing ? \n',
                    HtmlCode:"<p> {{text}} </p> \n<p> {{msg}} </p> \n <button @click='ChangeText'>点击改变text值</button>",
                    jsCode:"data ( ) { \n      return { \n             text: 'What are you doing ?' \n       } \n }, \n computed:{ \n       msg ( ) {\n             return this.text + '-- Hello World' \n       } \n }, \n methods:{ \n        ChangeText ( ) { \n             this.text = 'I am writing the code' \n        } \n}"
                },
                list2:{
                    num:1,
                    HtmlCode:"<span>{{num}}</span> \n<button @click='plus'>点击加num值</button> \n<button @click='reduce'>点击减num值</button>",
                    jsCode:"data ( ) { \n      return { \n             num: 1 \n       } \n }, \n watch:{ \n       num ( newVal ) {\n           if( newVal > 3 ) {\n                alert('我已经监听到num值 比3大'); \n           }else if ( newVal < 0 ){\n                alert('我已经监听到num值 比0小') \n           }   \n       } \n }, \n methods:{ \n        plus ( ) { \n             this.num += 1; \n        }, \n        reduce ( ) { \n             this.num -= 1; \n        }  \n}"
                }
            }
        },
        methods: {
            ChangeText(){
                this.list1.shell = 'I am writing the code \n';
            },
            plus(){
                this.list2.num += 1;
            },
            reduce(){
                this.list2.num -= 1;
            }

        },
        computed: {
            shell2(){
                return this.list1.shell+'-- Hello World'
            }
        },
        watch: {
            list2:{
                handler(newVal){
                     if(newVal.num > 3){
                        alert('我已经监听到num值 比3大')
                    }else if( newVal.num < 0 ){
                        alert('我已经监听到num值 比0小')
                    }
                },deep:true
            }
        }
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
    .main li .shell pre{
        color: #fff;
        display: block;
        padding: 5px 0;
        font-size: 13px;
        line-height: 20px;
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
        line-height: 20px;
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
        line-height: 20px;
    }
    .main li .on_Btn a{
        padding: 6px 20px;
        color: #fff;
        background: #0000ff;
        display: inline-block;
        margin-top: 20px;
    }
</style>