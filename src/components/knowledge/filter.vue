<template>
    <div class="main">
        <ul>
            <li>
                <h3><span>#</span> 过滤器案例演示</h3>
                <div class="shell">
                    <pre><p>{{list1.shell | capitalize}}</p></pre>
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
                <!-- <div class="on_Btn">
                    <a href="javascript:;">点击改变text值</a>
                </div> -->
                <div class="careful">
                    <p> // 注意 过滤意思就是封装好方法后 直接在 页面的 "插值" 里面 用 | 添加 这个方法即可     如：上面Demo演示 如果需要添加多个方法  { { shell | capitalize | a | b } }</p>
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
                    shell:'Hello, welcome to the code world',
                    HtmlCode:"<p>{{shell | capitalize}}</p>",
                    jsCode:"data ( ) { \n      return { \n             shell: 'Hello, welcome to the code world' \n       } \n }, \n filters:{ \n       capitalize ( value ) {\n             if(value!=null){\n                     let array = value.toLocaleLowerCase().split(' ');\n                     for (var i = 0; i < array.length; i++) {\n                          array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);\n                     }\n                     let string = array.join(' ');\n                     return  string;\n              } \n       }\n}"
                }
            }
        },
        methods: {
            
        },
        filters:{
            capitalize(value){
                if(value != null){
                    let array = value.toLocaleLowerCase().split(" ");
                    for (var i = 0; i < array.length; i++) {
                        array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
                    }
                    let string = array.join(" ");
                    return string;
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
    }
    .careful p{
        margin-top: 20px;
        color: red;
        font-size: 14px;
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
            white-space: pre-wrap;
        }
        .main{
            margin: 0 auto 0;
        }
        .careful p{
            font-size: 13px;
        }
    }
</style>