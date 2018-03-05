<template>
    <div class="main">
        <ul>
            <li v-for='(item,index) in basicsList'>
                <h3><span>#</span> {{item.title}} </h3>
                <div class="shell">
                    <pre>{{item.output}}</pre>
                </div>
                <div class="code">
                    <pre>{{item.HtmlCode}}</pre>
                </div>
                <div class="jsCode">
                    <pre>{{item.jsCode}}</pre>
                </div>
                <div class="on_Btn">
                    <a href="javascript:;" @click.once='modifier(item,index)'>{{item.btnName}}</a>
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
                        title:"v-if",
                        output:"不是1 或 2 我就显现",
                        HtmlCode:"<span v-if='ok == 1'>如果我是1 我就显现</span> \n<span v-else-if='ok == 2'>如果我是2 我就显现</span> \n<span v-else>不是1 或 2 我就显现</span>",
                        jsCode:"data ( ) { \n      return { \n             ok: 3 \n       } \n }"
                    },
                    {
                        title:"参数",
                        output:"我的title 属性：新年快乐",
                        HtmlCode:"<p :title='msgAttr'>我的title 属性：{{msgAttr}}</p>",
                        jsCode:"data ( ) { \n      return { \n             msgAttr: '新年快乐' \n       } \n }"
                    },
                    {
                        title:"修饰符",
                        output:".prevent : 提交事件不再重载页面 \n.stop : 阻止单击事件冒泡 \n.self : 当事件发生在该元素本身而不是子元素的时候会触发 \n.capture : 事件侦听，事件发生的时候会调用 \nonce : 跟v-once作用类似，只渲染一次，第二次不会执行",
                        HtmlCode:"<a href='javascript:;' @click.once='Onbtn'>请多次点击（因为加上修饰符 仅=> 执行一次）</a>",
                        jsCode:"methods : { \n      Onbtn ( ) { \n              alert('你点击了一个加修饰符的点击事件,再次点击事件，将不会弹出') \n        } \n }",
                        btnName:"请多次点击（因为加上修饰符 仅=> 执行一次）"
                    }
                ]
            }
        },
        methods: {
            modifier(item,index){
                if(index == 2){
                    alert('你点击了一个加修饰符的点击事件,再次点击事件，将不会弹出')
                }else{
                    return ;
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