<template>
    <div class="main">
        <ul>
            <li>
                <h3><span>#</span> 监听事件</h3>
                <p style="font-size:14px;margin-top:20px;line-height: 20px;color:red;">简介：<br />v-on指令 + 调用的事件名 即： v-on:click='Add' 简写：@click='Add'</p>
                <div class="shell">
                    <pre><p>The button above has been clickd {{list1.shell}} times</p></pre>
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
                    <a href="javascript:;" v-on:click='add'>Add</a>
                </div>
                
            </li>
            <li>
                <h3><span>#</span> 事件形参</h3>
                <p style="font-size:14px;margin-top:20px;line-height: 20px;color:red;">在之前的Demo 案例也触及到点击事件，你可能会发现 为什么可以不用写 （） ？？ 如： @click='btn( )' and @click='btn'</p>
                <p style="font-size:14px;margin-top:20px;line-height: 20px;color:red;">俩者是一样的，这里简单说一下，如果不添加形参（参数） vue可以默认不用去写 （） ！也不会报错。</p>
                <div class="shell">
                    <pre>{{list2.shell}}</pre>
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
                    <a href="javascript:;" v-on:click="say('hi')">say hi</a>
                    <a href="javascript:;" v-on:click="say('what')">say what</a>
                </div>
            </li>
            <li>
                <h3><span>#</span> 事件修饰符</h3>
                <p style="font-size:14px;margin-top:20px;line-height: 20px;color:red;">在之前的Demo 写过一个 .once的修饰符事件，这个Demo写一个 阻止事件冒泡的</p>
                <div class="shell">
                    <pre>{{list3.shell}}</pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list3.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list3.jsCode}}</pre>
                </div>
                <!-- 辅助事件 -->
                <div class="bubble">
                    <div class="bubble_left">
                        <h2>没有添加阻止事件冒泡</h2>
                        <div class="parent" @click='parentBtn'>
                            我是父元素
                            <a href="javascript:;" @click='childBtn'>我是子元素请点击我！</a>
                        </div>
                    </div>
                    <div class="bubble_right">
                        <h2>添加阻止事件冒泡</h2>
                        <div class="parent" @click='parentBtn'>
                            我是父元素
                            <a href="javascript:;" @click.stop='childBtn'>我是子元素请点击我！</a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <h3><span>#</span> 键盘事件修饰符</h3>
                <div class="shell">
                    <pre><p>全部的按键别名：</p><p v-for='item in list4.shell'>{{item}}</p></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list4.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list4.jsCode}}</pre>
                </div>
                <!-- 辅助事件 -->
                <div class="on_Btn">
                    <p class="submit"><input type="text" placeholder="请输入文字后按回车键" @keyup.enter='submit'>   请输入文字后按回车键</p>
                </div>
                <div>
                    <p style="font-size:14px;color:red;margin-top:20px;">// 注意： 还可以通过 键盘code 表来写事件 如： @keyup.13 = 'submit'  (code值里面 13 对应是 回车键)</p>
                </div>
            </li>
            <li>
                <h3><span>#</span> 鼠标事件修饰符</h3>
                <div class="shell">
                    <pre><p>全部的按键别名：</p><p v-for='item in list5.shell'>{{item}}</p></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list5.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list5.jsCode}}</pre>
                </div>
                <!-- 辅助事件 -->
                <div class="on_Btn">
                    <a href="javascript:;" @click.right='RightClick' @click.left='LeftClick'>点击鼠标的右键试试？？？</a>
                </div>
                <div>
                    <p style="font-size:14px;color:red;margin-top:20px;">// 注意： 如果需要默认阻止浏览器右键的事件可以试试修饰符来解决！</p>
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
                    shell:1,
                    HtmlCode:"<p>The button above has been clickd {{num}} times</p>\n <a href='javascript:;' v-on:click='add'>Add</a>",
                    jsCode:"data ( ) { \n      return { \n             num: 1 \n       } \n },\n methods:{\n      add( ){\n            this.num += 1; \n      }\n}"
                },
                list2:{
                    shell:'请点击下面俩个按钮，查看Demo演示',
                    HtmlCode:" <a href='javascript:;' v-on:click='say('hi')'>say hi</a>\n <a href='javascript:;' v-on:click='say('what')'>say what?</a>",
                    jsCode:"methods : { \n      say ( message ) { \n             alert(message) \n       } \n }"
                },
                list3:{
                    shell:'左侧是没有添加阻止冒泡，右侧是添加冒泡。',
                    HtmlCode:"<div class='parent' @click='parentBtn'>\n         我是父元素\n         <a href='javascript:;' @click.stop='childBtn'>我是子元素请点击我！</a> \n </div>",
                    jsCode:"methods : { \n      parentBtn ( ) { \n             alert('我是父级元素触发的事件'); \n       } \n      childBtn( ){\n              alert('我是子级元素触发的事件'); \n       } \n }"
                },
                list4:{
                    shell:['.enter : 回车','.tab : Tab','.delete : 删除','.esc : 退出','.space : 空格','.up : 上','.down : 下','.left : 左','.right : 右'],
                    HtmlCode:"<input type='text' placeholder='请输入文字后按回车键' @keyup.enter='submit'>",
                    jsCode:"methods : { \n      submit ( ) { \n             alert('你已经回车提交了数据') \n       } \n }"
                },
                list5:{
                    shell:['.left:鼠标左键','.right:鼠标右键','.middle:滚轮'],
                    HtmlCode:"<a href='javascript:;' @click.right='RightClick' @click.left='LeftClick'>点击鼠标的右键试试？？？</a>",
                    jsCode:"methods : { \n      RightClick ( ) { \n             alert('我点击右键触发了！'); \n       } \n      LeftClick( ){\n              alert('点错了！！点击右键试试呗！！'); \n       } \n }"
                }
            }
        },
        methods: {
            add (){
                this.list1.shell += 1;
            },
            say(message){
                alert(message);
            },
            parentBtn(){
                alert('我是父级元素触发的事件');
            },
            childBtn(){
                alert('我是子级元素触发的事件');
            },
            submit(){
                alert('你已经回车提交了数据');
            },
            RightClick(){
                alert('我点击右键触发了！')
            },
            LeftClick(){
                alert('点错了！！点击右键试试呗！！')
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

    .bubble{
        width: 100%;
        margin-top: 20px;
        border: 2px solid purple;
        padding: 15px;
    }
    .bubble::before{
        content: "";
        display: block;
        height: 0;
        clear: both;
    }
    .bubble::after{
        content: "";
        display: block;
        height: 0;
        clear: both;
    }
    .bubble .parent{
        width: 160px;
        height: 80px;
        border: 1px solid black;
        position: relative;
    }
    .bubble .parent a{
        position: absolute;
        background: #0000ff;
        color: #fff;
        display: inline-block;
        padding: 5px;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    .bubble_left {
        float: left;
    }
    .bubble_right{
        float: right;
    }
    .bubble h2{
        font-size: 14px;
        color: red;
        margin-bottom: 10px;
    }

    input{
        border: 1px solid #ccc;
        outline: none;
        padding: 5px 0;
        text-indent: 5px;
    }
    .on_Btn .submit{
        margin-top: 20px;
    }
</style>