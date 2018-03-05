<template>
    <div class="main">
        <ul>
            <li>
                <h3><span>#</span> Class绑定</h3>
                <div class="shell">
                    <pre><span :class="{active:list1.active}">{{list1.shell}}</span></pre>
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
                <h3><span>#</span> Class绑定做一个选项卡</h3>
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
                    <a href="javascript:;" v-for='(tab,index) in list2.tab' @click='tabBtn(tab,index)'>{{tab}}</a>
                    <div class="tabBox" v-for='(tabBox,index) in list2.tabBoxContent' :class='{active:list2.active == index}'>{{tabBox}}</div>
                </div>
            </li>
            <li>
                <h3><span>#</span> Style绑定</h3>
                <div class="shell">
                    <pre><span :style="list3.styleObject">{{list3.shell}}</span></pre>
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
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                list1:{
                    shell:'黑色文字 (active是在css中写的一个类)',
                    active:true,
                    HtmlCode:"<p :class='{ active : color }'> 黑色文字 </p>",
                    jsCode:"data ( ) { \n      return { \n             color: true \n       } \n }"
                },
                list2:{
                    shell:"粘贴复制以下代码即可实现 （可以打开控制台查看tab内容）",
                    HtmlCode:"<a href='javascript:;' v-for='(tab,index) in tabs' @click='tabBtn(tab,index)'>{{tab}}</a> \n<div class='tabBox' v-for='(tabBox,index) in tabBoxContent' :class='{active:active == index}'>{{tabBox}}</div>",
                    tab:['tab1','tab2','tab3','tab4'],
                    tabBoxContent:['内容一','内容二','内容三','内容四'],
                    active:0,
                    jsCode:"data ( ) { \n      return { \n             tab: ['tab1','tab2','tab3','tab4'],\n             tabBoxContent:['内容一','内容二','内容三','内容四'], \n             active:0 \n       } \n }, \n methods:{ \n        tabBtn ( tab,index ) { \n             this.active = index;  \n             console.log(tab); \n       }  \n}"

                },
                list3:{
                    shell:"用对象写一个style（不经常用）",
                    HtmlCode:"<p :style='styleObject'> 用对象写一个style（不经常用） </p>",
                    styleObject:{
                        color:'red',
                        background:'black'
                    },
                    jsCode:"data ( ) { \n      return { \n             styleObject: {\n                     color:'red',\n                     background:'black' \n             } \n       } \n }"
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
            },
            tabBtn(tab,index){
                this.list2.active = index;
                console.log(tab)
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
    .main li .on_Btn .tabBox{
        font-size: 16px;
        color: #000000;
        border: 2px solid rgb(37, 17, 214);
        margin-top: 10px;
        padding: 20px;
        display: none;
        font-weight: bold;
    }
    .main li .on_Btn .tabBox.active{
        display: block;
    }
    .active{
        color: black;
    }

    @media (max-width:768px){
        .main li h3{
            font-size: 14px;
        }
        .main{
            margin:  0 auto;
        }
        .main li .shell pre{
            white-space: pre-wrap;
            font-size: 12px;
        }
        .main li .code pre{
            white-space: pre-wrap;
            font-size: 12px;
        }
        .main li .jsCode pre{
            white-space: pre-wrap;
            font-size: 12px;
        }
        .main li .on_Btn .tabBox{
            font-size: 14px;
        }
    }
</style>