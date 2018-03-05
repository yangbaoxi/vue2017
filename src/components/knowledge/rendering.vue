<template>
    <div class="main">
        <ul>
            <li>
                <h3><span>#</span> 条件渲染 v-if</h3>
                <div class="shell">
                    <pre><span v-if='list1.ok'>{{list1.shell1}}</span><span v-else>{{list1.shell2}}</span></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list1.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list1.jsCode}}</pre>
                </div>
                <div class="on_Btn">
                    <a href="javascript:;" @click='IfBtn'>点击查看p元素之间的切换</a>
                </div>
            </li>
            <li>
                <h3><span>#</span> v-show</h3>
                <div class="shell">
                    <pre><span v-show='list2.ok'>{{list2.shell1}}</span><span v-show='list2.ok2'>{{list2.shell2}}</span></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list2.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list2.jsCode}}</pre>
                </div>
                <div class="on_Btn">
                    <a href="javascript:;" @click='ShowBtn'>点击查看p元素之间的切换(display:none)</a>
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
                    shell1:'v-if 指令中提到过',
                    shell2:'v-if 再学习一边',
                    ok:true,
                    HtmlCode:"<p v-if='ok'> v-if 指令中提到过 </p> \n<p v-else> v-if 再学习一边 </p>\n<a href='javascript:;' @click='IfBtn'>点击查看p元素之间的切换</a>",
                    jsCode:"data ( ) { \n      return { \n             ok: true \n       } \n },\n methods:{\n      IfBtn ( ) { \n             if(this.ok){ \n                  this.ok = false; \n             }else{ \n                 this.ok = true; \n             }\n      }\n}"
                },
                list2:{
                    shell1:"v-show 就是css中的display:none",
                    shell2:"用法基本跟v-if 一样。",
                    ok:true,
                    ok2:false,
                    HtmlCode:"<p v-show='ok'> v-show 就是css中的display:none </p> \n<p v-show='ok2'> 用法基本跟v-if 一样。 </p>\n<a href='javascript:;' @click='ShowBtn'>点击查看p元素之间的切换(display:none)</a>",
                    jsCode:"data ( ) { \n      return { \n             ok: true,\n             ok2:false \n       } \n },\n methods:{\n      ShowBtn ( ) { \n             if(this.ok){ \n                  this.ok = false;\n                  this.ok2 = true; \n             }else{ \n                 this.ok = true;\n                 this.ok2 = false; \n             }\n      }\n}"
                }
            }
        },
        methods: {
            IfBtn(){
                if(this.list1.ok){
                    this.list1.ok = false;
                }else{
                    this.list1.ok = true;
                }
            },
            ShowBtn(){
                if(this.list2.ok){
                    this.list2.ok = false;
                    this.list2.ok2 = true;
                }else{
                    this.list2.ok = true;
                    this.list2.ok2 = false;
                }
            }
        }
    }
</script>

<style scoped>
    .main{
        max-width: 1000px;
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
        max-width: 700px;
        background: #f8f8f8;
        padding: 10px 20px;
        margin-top: 15px;
    }
    .main li .shell pre{
        color: #525252;
        display: block;
        padding: 5px 0;
        font-size: 13px;
        line-height: 20px;
    }

    .main li .code{
        max-width: 700px;
        background: #f8f8f8;
        padding: 10px 20px;
        margin-top: 15px;
    }
    .main li .code pre{
        color: #2973b7;
        display: block;
        padding: 6px 0;
        font-size: 13px;
        line-height: 20px;
    }
    .main li .jsCode{
        max-width: 700px;
        background: #f8f8f8;
        padding: 10px 20px;
        margin-top: 15px;
    }
    .main li .jsCode pre{
        color: #42b983;
        display: block;
        padding: 6px 0;
        font-size: 13px;
        line-height: 20px;
    }
    .main li .on_Btn a{
        padding: 6px 20px;
        color: #fff;
        background: #8dc8da;
        display: inline-block;
        margin-top: 20px;
        margin-right: 10px;
    }
    @media (max-width:768px){
        .main li h3{
            font-size: 14px;
        }
        .main li .jsCode pre{
            white-space: pre-wrap;
            font-size: 12px;
        }
        .main li .code pre{
            white-space: pre-wrap;
            font-size: 12px;
        }
        .main li .shell pre{
            font-size: 12px;
        }
        .main{
            margin: 0 auto 0;
        }
    }
</style>