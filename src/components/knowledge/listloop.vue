<template>
    <div class="main">
        <ul>
            <li>
                <h3><span>#</span> 数组 v-for （索引）</h3>
                <div class="shell">
                    <pre><p v-for='(item,index) in list1.shell'>{{item}}  -- 索引：{{index}}</p></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list1.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list1.jsCode}}</pre>
                </div>
            </li>
            <li>
                <h3><span>#</span> 数组 v-for （方法） 案例演示</h3>
                <div class="shell">
                    <pre><p v-for='(itemFun,index) in list2.shell'>{{itemFun}}</p></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list2.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list2.jsCode}}</pre>
                </div>
                <div class="case">
                    <div class="case_left">
                        <h4>点击下面任意一个 添加到右侧栏中</h4>
                        <ol>
                            <li v-for='(food,index) in list2.menuLits' @click='choiceFood(food,index)'><a href="javascript:;">{{food}}</a></li>
                        </ol>
                    </div>
                    <div class="case_right">
                        <ol>
                            <li v-for='(finish,index) in list2.readyList'>{{finish}}<a href="javascript:;"  @click='deleteFood(finish,index)'>删除</a></li>
                        </ol>
                    </div>
                </div>
            </li>
            <li>
                <h3><span>#</span> 对象 v-for （key,value）</h3>
                <div class="shell">
                    <pre><p v-for='(value,key) in list3.shell'>key : {{key}}  --  value : {{value}}</p></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list3.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list3.jsCode}}</pre>
                </div>
            </li>
            <li>
                <h3><span>#</span> 对象 v-for （更改注意事项） 案例演示</h3>
                <div class="shell">
                    <pre><p style="color:red">假如说我拿到数据后，已经渲染到页面，通过一个点击事件来动态添加 第四条数据里面的内容</p><p v-for='(value,key) in list4.shell'>{{key}}  --> {{value}}</p></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list4.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list4.jsCode}}</pre>
                </div>
                <div class="on_Btn">
                    <a href="javascript:;" @click='Addbtn'>点击一下给对象添加key跟value</a>
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
                    shell:['列表一','列表二','列表三'],
                    HtmlCode:"<p v-for='(item,index) in listNews'>{{item}}  -- 索引：{{index}}</p>",
                    jsCode:"data ( ) { \n      return { \n             listNews: ['列表一','列表二','列表三'] \n       } \n }"
                },
                list2:{
                    shell:[
                        'push():向数组的末尾增加一项 返回值是数组的新长度',
                        'pop():删除数组的末尾项 返回值是删除的数组项',
                        'shift():删除数组开头项 返回被删除的开头项目',
                        'unshift():向数组开头增加一项 返回值是数组的新长度',
                        'splice():删除数组中的任意项 返回值是被删除的数组项',
                        'sort():根据匿名函数进行冒泡排序 b-a倒序 a-b升序',
                        'reverse():倒序数组 返回值倒序数组 原有数组改变',
                        'concat():把一个数组和另一个数组拼接在一起 返回拼接好的数组',
                        'join():把数组中的每一项 按照指定的分隔符拼接成字符串',
                        'slice():复制数组 返回值是复制到的新数组 写上数值之后 不包含被复制的最后一项'
                    ],
                    HtmlCode:"<div class='case_left'>\n         <h4>点击下面任意一个 添加到右侧栏中</h4> \n         <ol>\n                 <li v-for='(food,index) in menuLits' @click='choiceFood(food,index)'><a href='javascript:;'>{{food}}</a></li> \n          </ol> \n</div>\n<div class='case_right'>\n        <ol>\n                <li v-for='(finish,index) in readyList'>{{finish}}<a href='javascript:;'  @click='deleteFood(finish,index)'>删除</a></li> \n        </ol> \n</div>",
                    jsCode:"data ( ) { \n      return { \n             menuLits: ['汉堡','烤翅','薯片','可乐','奶茶','全家桶'],\n             readyList:[ ] \n       } \n },\nmethods:{ \n       choiceFood(food,index){ \n             this.readyList.push(food);\n       },\n       deleteFood(finish,index){\n              this.readyList.splice(index,1)\n       } \n}",
                    menuLits:['汉堡','烤翅','薯片','可乐','奶茶','全家桶'],
                    readyList:[],

                },
                list3:{
                    shell:{a:'我是字母a',b:'我是字母b',c:'我是字母c'},
                    HtmlCode:"<p v-for='(value,key) in listNews'>key : {{key}}  --  value : {{value}}</p>",
                    jsCode:"data ( ) { \n      return { \n             listNews: {a : '我是字母a',b : '我是字母b',c : '我是字母c'} \n       } \n }"
                },
                list4:{
                    shell:{name:'杨小宝',age:'18',lover:'Not yet.'},
                    HtmlCode:"<p v-for='(value,key) in CaseList'>{{key}}  --> {{value}}</p>\n<a href='javascript:;' @click='Addbtn'>点击一下给对象添加key跟value</a>",
                    jsCode:"data ( ) { \n      return { \n             CaseList: {name:'杨小宝',age:'18',lover:'Not yet.'} \n       } \n },\n methods:{\n          Addbtn( ){\n                 this.$set(this.CaseList,'occupation','programmer');\n           }\n}"
                }
            }
        },
        methods: {
            choiceFood(food,index){
                this.list2.readyList.push(food);
            },
            deleteFood(finish,index){
                this.list2.readyList.splice(index,1);
            },
            Addbtn(){
                this.$set(this.list4.shell,'occupation','programmer');
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
        width: 800px;
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
        width: 800px;
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
        width: 800px;
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
        margin-right: 10px;
    }
    /* 案例 */
    .case{
        width: 100%;
        border: 2px solid rebeccapurple;
        padding: 10px;
        margin-top: 20px;
        ;
    }
    .case::before{
        content:"";
        display: block;
        height: 0;
        clear: both;
    }
    .case::after{
        content: "";
        display: block;
        height: 0;
        clear: both;
    }
    .case .case_left{
        width: 30%;
        float: left;
        border-right: 2px solid rebeccapurple;
    }
    .case .case_left li{
        padding: 10px 0;
        float: left;
    }
    .case .case_left li a{
        font-size: 13px;
        color:#ff0097;
        padding: 5px 15px;
        
    }
    .case .case_right{
        width: 68%;
        float: right;
    }
    .case .case_right li{
        padding: 10px;
        float: left;
        width: 200px;
        border: 1px solid blue;
        color: black;
        font-size: 13px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .case .case_right li a{
        color: red;
        float: right;
    }
</style>