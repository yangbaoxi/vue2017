<template>
    <div class="main">
        <ul>
            <li>
                <h3><span>#</span> 文本</h3>
                <div class="shell">
                    <pre><p><input type="text" v-model="list1.shell" placeholder="edit me"/><span style="padding-left:20px;">{{list1.shell}}</span></p></pre>
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
                <h3><span>#</span> 复选框</h3>
                <div class="shell">
                    <pre><p v-for='item in list2.shell'><input type="checkbox" :id="item.name" :value="item.name" v-model="list2.checkedNames"><label :for="item.name">{{item.name}}</label></p><p>选中的人：{{list2.checkedNames}}</p></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list2.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list2.jsCode}}</pre>
                </div>
            </li>
            <li>
                <h3><span>#</span> 单选按钮</h3>
                <div class="shell">
                    <pre><p v-for='item in list3.shell'><input type="radio" :id="item.name" :value="item.name" v-model="list3.sex">  <label :for="item.name">{{item.name}}</label></p><p>选中的性别：{{list3.sex}}</p></pre>
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
                <h3><span>#</span> 选择框</h3>
                <div class="shell">
                    <pre><p><select v-model="list4.selected"><option disabled value="">请选择</option><option v-for='item in list4.shell'>{{item}}</option></select></p><p>选中：{{list4.selected}}</p></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list4.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list4.jsCode}}</pre>
                </div>
            </li>
            <li>
                <h3><span>#</span> 修饰符</h3>
                <div class="shell">
                    <pre><p v-for="item in list5.shell">{{item}}</p></pre>
                </div>
                <!-- html 代码 -->
                <div class="code">
                    <pre>{{list5.HtmlCode}}</pre>
                </div>
                <!-- js代码 -->
                <div class="jsCode">
                    <pre>{{list5.jsCode}}</pre>
                </div>
                <div class="msg">
                    输入内容后 失去焦点触发   
                    <input type="text" v-model.lazy="list5.msg" placeholder="输入内容后 失去焦点触发"/> -- > {{list5.msg}}
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
                    shell:'',
                    HtmlCode:"<input type='text' v-model='list1.shell' placeholder='edit me'/>\n<span style='padding-left:20px;'>{{shell}}</span>",
                    jsCode:"data ( ) { \n      return { \n             shell: ' ' \n       } \n }"
                },
                list2:{
                    shell:[{name:"Jack"},{name:"john"},{name:"Mike"}],
                    checkedNames:[],
                    HtmlCode:"<p v-for='item in shell'>\n       <input type='checkbox' :id='item.name' :value='item.name' v-model='checkedNames'>\n       <label :for='item.name'>{{item.name}}</label>\n</p>\n<p>选中的人：{{checkedNames}}</p>",
                    jsCode:"data ( ) { \n      return { \n             shell: [{name:'Jack'},{name:'john'},{name:'Mike'}],\n             checkedNames:[ ] \n       } \n }"
                },
                list3:{
                    shell:[{name:"男"},{name:"女"}],
                    sex:"",
                    HtmlCode:"<p v-for='item in shell'>\n       <input type='radio' :id='item.name' :value='item.name' v-model='sex'>\n       <label :for='item.name'>{{item.name}}</label>\n</p>\n<p>选中的人：{{sex}}</p>",
                    jsCode:"data ( ) { \n      return { \n             shell: [{name:'男'},{name:'女'}],\n             sex: ' '   // 如果要默认选中某一个 sex:'男' \n       } \n }"
                },
                list4:{
                    shell:['A','B','C'],
                    selected:"",
                    HtmlCode:"<p>\n     <select v-model='selected'>\n             <option disabled value=' '>请选择</option>\n             <option v-for='item in shell'>{{item}}</option>\n      </select>\n</p>\n<p>选中：{{selected}}</p>",
                    jsCode:"data ( ) { \n      return { \n             shell: ['A','B','C'],\n             selected: ' ' \n       } \n }"
                },
                list5:{
                    shell:['.lazy : 失去焦点后','.number : 自动将用户输入的值转为number类型','.trim : 自动过滤用户输入的首尾空白字符'],
                    msg:"",
                    HtmlCode:"<input type='text' v-model.lazy='msg' placeholder='输入内容后 失去焦点触发'/> -- >  {{msg}}",
                    jsCode:"data ( ) { \n      return { \n             msg: ' ',\n       } \n }"
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
    input[type='text']{
        padding: 3px 0;
        text-indent: 5px;
        border: none;
    }
    input[type='checkbox']{
        border: none;
        margin-right: 5px;
        background: none;
    }
    .msg{
        margin-top: 20px;
    }
    .msg input{
        border: 1px solid rgb(0, 195, 255);
        color: rgb(0, 195, 255);
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
    }
</style>