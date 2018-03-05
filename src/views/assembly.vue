<template>
    <div>
        <Header></Header>
        <div class="main">
            <h1>组件</h1>
            <p>以下所有Demo全部按照 <span>脚手架工具</span> 来进行讲解！！！</p>
        </div>
        <div class="AllBox">
            <ul>
                <li>
                    <h4># 组件结构</h4>
                    <p class="introduce"></p>
                    <div class="box">
                        <div class="box_left">
                            <pre><p>文件名以 .vue 结尾</p><p>{{listOne.shell}}</p></pre>
                        </div>
                    </div>
                </li>
                <li>
                    <h4># 组件嵌套组件</h4>
                    <p class="introduce"></p>
                    <div class="demonstration">
                        <demo-one></demo-one>
                    </div>
                    <div class="box">
                        <div class="box_left">
                            <pre><p>父级组件：</p><p>{{listTwo.shell}}</p></pre>
                        </div>
                        <div class="box_right">
                            <pre><p>子级组件</p><p>{{listTwo.shell2}}</p></pre>
                        </div>
                    </div>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. 首先创建俩个.vue 文件 （上面代码 &lttemplate&gt &lt/template&gt）</p>
                        <p>2. @就是src目录 可以在 config 配置修改</p>
                        <p>3. 引入组件方法 import xxx（定义名称） from ' 路径 ' </p>
                        <p>4. 使用组件，在components:{  xxx,xxx,xxx  // 将引入时定义的名称写入 }</p>
                        <p>5. 驼峰式写法，如果定义的组件名字内有大写字母 如：demoOneChildren 在html使用时 用驼峰写法:&ltdemo-one-children&gt &lt/demo-one-children&gt </p>
                    </div>
                </li>
                <li>
                    <h4># 使用插槽</h4>
                    <p class="introduce"></p>
                    <div class="box">
                        <div class="box_left">
                            <pre><p>把当前页面作为父级：</p><p>{{listThree.shell}}</p></pre>
                        </div>
                        <div class="box_right">
                            <pre><p>子级组件：</p><p>{{listThree.shell2}}</p></pre>
                        </div>
                    </div>
                    <div class="demonstration">
                        <demo-two>
                            <span style="color:green;" slot='title'>{{listThree.msg}}</span>
                        </demo-two>
                        <input type="text" placeholder="输入文字点击确定，尝试修改文字内容" v-model="listThree.text">
                        <a href="javascript:;" @click='modifyBtn'>保存</a>
                    </div>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. 如果子组件只需要一个插槽可以不使用name定义 （建议使用）</p>
                        <p>2. 在子组件中使用  &ltslot name='title'&gt  &lt/slot&gt name属性是自定义的</p>
                        <p>3. 插槽可以模仿任何标签，也可以直接添加属性，插槽的作用域在父级组件中（数据渲染，事件等等）</p>
                        <p>4. 在子组件中使用插槽 父组件中的元素 只需要添加属性 slot='title' 对应子组件内定义的name值就可以了</p>
                        <p>5. 父组件添加插槽的位置 在子组件标签内部，（可以添加多个插槽）</p>
                    </div>
                </li>
                <li>
                    <h4># 父子组件传值</h4>
                    <p class="introduce"></p>
                    <div class="demonstration">
                        <p>我是父组件的值num:    {{listFour.num}}</p>
                        <demo-three :parents-list="listFour.parents" @add-num='addnum' @deleted-num='deletednum'></demo-three>
                    </div>
                    <div class="box">
                        <div class="box_left">
                            <pre><p>把当前页面作为父级：</p><p>{{listFour.shell}}</p></pre>
                        </div>
                        <div class="box_right">
                            <pre><P>子级组件：</P><p>{{listFour.shell2}}</p></pre>
                        </div>
                    </div>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. 父组件传递子组件值， 在子组件标签行内 自定义名字 如： :aaa='parents'  （别忘记前面加 ‘ ：’ aaa可以自定义 双引号内部是 data（） 返回的值）</p>
                        <p>2. 子组件接受父组件的值，在js内部用 props：[ 'aaa' ] 跟一个数组 （注意 这里数组内部写的 需要跟 子组件标签里面 父级组件定义的名字一样）</p>
                        <p>3. 子组件接受过后，就可以直接 this.aaa  所以这里 我用了一个 钩子函数 去打印了一下。</p>
                        <p>4. 子组件传递父组件 只能通过事件去传递！！！ 在子组件内部的俩个 a 标签分别定义 点击事件  在事件内部用 this.$emit('add-num') 传递给父级</p>
                        <p>5. 父组件则需要在 子标签行内 写  @add-num='addnum' （这里一定要注意子组件跟父组件一定要保持一样的名字） 然后在父组件 methods 事件触发 写入 addnum(){ }</p>
                        <p>6. 看起来可能有点乱，但是一定要注意一点 驼峰式写法，大小写一定要注意 <span style="color:red">不管是子标签还是什么 在行里自定义的属性都不允许出现大写字母</span></p>
                    </div>
                </li>
                <li>
                    <h4># 动态组件</h4>
                    <div class="demonstration">
                        <component :is='listFive.view'></component>
                        <a href="javascript:;" @click='switchComponents'>点击切换组件（不是tab选项卡）</a>
                    </div>
                    <div class="box">
                        <div class="box_left" style="width:90%">
                            <pre><p>页面代码：</p><p>{{listFive.shell}}</p></pre>
                        </div>
                        <!-- <div class="box_right">
                            <pre><p>子级组件</p><p>{{listTwo.shell2}}</p></pre>
                        </div> -->
                    </div>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. 什么是动态组件，说简单点就是通过data（变量）里面的值改变页面正在渲染那个组件</p>
                        <p>2. 在页面中 使用 <span style="color:red">&ltcomponent&gt&ltcomponent&gt</span>在属性中 用<span style="color:red">v-bind:is</span> 动态 绑定 某一个组件</p>
                        <p>3. 动态组件可以模拟子路由，或者table选项卡。</p>

                    </div>
                </li>
                <li>
                    <h4># 未完待续</h4>
                    <p class="introduce">后期深入研究，进行高级组件讲解</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue'
    import demoOne from '@/components/demoCom/demoOne'
    import demoTwo from '@/components/demoCom/demoTwo'
    import demoThree from '@/components/demoCom/demoThree'
    import dynamicOne from '@/components/demoCom/dynamicOne'
    import dynamicTwo from '@/components/demoCom/dynamicTwo'
    export default {
        data(){
            return{
                listOne:{
                    shell:"<template>\n     <div>\n             注意template 里面必须嵌套一个div或者一个父元素\n     </div>\n</template>\n <script>\n export default {\n      data( ){\n       },\n      methods:{\n      },\n       ...... \n } \n< /script> \n<style scoped>\n       h1:{ color : red;}\n        /* style 标签可以添加scoped 声明样式 是全局还是局部（局部只针对这个组件）*/ \n</style>"
                },
                listTwo:{
                    shell:"<template>\n     <div>\n             <h1> I am a parent component </h1>\n             <div class='children'>\n                     <demo-one-children></demo-one-children> \n             </div> \n     </div>\n</template>\n<script>\n          import demoOneChildren from '@/components/demoOneChildren'\n          export default{\n               components:{\n                      demoOneChildren \n               } \n          }\n<\/script>\n<style scoped>\n        h1{\n               color: purple;\n               font-size: 18px;\n        }\n        .children{\n              margin-top: 20px;\n        } \n</style>",
                    shell2:"<template>\n     <div>\n             <h1> I am a children component </h1>\n     </div>\n</template>\n<style scoped>\n     h1{\n           color: red;\n           font-size: 16px; \n     }\n</style>"
                },
                listThree:{
                    msg:"你好吗？",
                    text:"",
                    shell:"<div>\n      <demo-two>\n            <span style='color:green;' slot='title'>{{msg}}</span>\n      </demo-two>\n      <input type='text'  v-model='text'>\n      <a href='javascript:;' @click='modifyBtn'>保存</a> \n</div>\n <script>\n         import demoTwo from '@/components/demoTwo'\n         data( ){ \n                return {\n                      msg : ' 你好吗？ ',\n                      text:' ' \n                }\n         },\n        methods:{\n                modifyBtn( ) {\n                      this.msg = this.text;\n                      this.text = ' ' \n                } \n        } \n <\/script>",
                    shell2:"<template>\n        <div>\n                 <p>假如说我们要定义一个标题：<slot name='title'></slot></p>\n        </div>\n</template>"
                },
                listFour:{
                    num:1,
                    parents:'我是父亲传过来的一个字符串，我要告诉子组件，你将要执行俩个点击事件，并且要触发父组件内部num值',
                    shell:"<div>\n      <p>我是父组件的值num: {{num}}</p>\n      <demo-three  \n               : parents-list='parents' \n               @add-num='addnum' \n               @deleted-num='deletednum'></demo-three> \n</div>\n <script>\n         import demoThree from '@/components/demoThree'\n         data( ){ \n                return {\n                      parents : '我是父亲传过来的一个字符串，我要告诉子组件....',\n                      num : 1\n                }\n         },\n        methods:{\n                addnum( ) {\n                      this.num += 1;\n                },\n                deletednum( ){\n                      this.num -= 1;\n                } \n        } \n <\/script>",
                    shell2:"<template>\n        <div>\n                 <a href='javascript:;' @click='add'>点击 加</a>\n                 <a href='javascript:;' @click='deleted'>点击 减</a>\n                 <p>{{parentsList}}</p>\n        </div>\n</template>\n<script>\n       export default{\n               props:['parents-list'],\n               mounted ( ) {\n                        console.log(this.parentsList) \n               },\n               methods:{\n                       add( ){\n                             this.$emit('add-num'); \n                       },\n                       deleted( ){\n                             this.$emit('deleted-num');\n                       }\n               } \n       } \n<\/script>"
                },
                listFive:{
                    view:dynamicOne,
                    shell:"<div class='demonstration'>\n        <component :is='view'></component>\n        <a href='javascript:;' @click='switchComponents'>点击切换组件（不是tab选项卡）</a>\n</div>\n JS 代码：\n<script>\n          import dynamicOne from '@/components/dynamicOne'\n          import dynamicTwo from '@/components/dynamicTwo'\n          data( ){\n               return{\n                      view : dynamicOne\n               }\n          },\n          methods:{\n                switchComponents( ){\n                      if( this.view == dynamicOne ){\n                            this.view = dynamicTwo\n                      }else{\n                            this.view = dynamicOne\n                      }\n               }\n          }\n<\/script>"
                }
            }
        },
        components: {
            Header,
            demoOne,
            demoTwo,
            demoThree
        },
        methods: {
            modifyBtn(){
                this.listThree.msg = this.listThree.text;
                this.listThree.text = "";
            },
            addnum(){
                this.listFour.num += 1;
            },
            deletednum(){
               this.listFour.num -= 1; 
            },
            switchComponents(){
                if(this.listFive.view == dynamicOne){
                    this.listFive.view = dynamicTwo;
                }else{
                    this.listFive.view = dynamicOne
                }
            }
        }
    }
</script>
<style scoped>
    .main{
        max-width: 1200px;
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
        max-width: 1200px;
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
        background: #f8f8f8;
    }
    .AllBox ul li .box .box_left pre{
        font-size: 14px;
        color: #2973b7;
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
        background: #f8f8f8;
    }
    .AllBox ul li .box .box_right pre{
        color: #525252;
        font-size: 14px;
        line-height: 25px;
        padding: 15px;
    }
    .explain{
        max-width: 100%;
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
        background:#8dc8da;
        color: #fff;
        margin-top: 10px;
    }
    .demonstration p{
        font-size: 14px;
        color: #2b333b;
        font-weight: bold;
        margin-bottom: 10px;
    }
    @media (max-width:768px){
        .main{
            padding: 20px 15px;
        }
        .main h1{
            font-size: 18px;
        }
        .main p{
            font-size: 14px;
        }
        .AllBox ul li .box .box_left{
            float: none;
            width: 100%;
        }
        .AllBox ul li h4{
            font-size: 14px;
        }
        .AllBox ul li .box .box_left pre{
            font-size: 12px;
            white-space: pre-wrap;
        }
        .AllBox ul li .box .box_right{
            float: none;
            width: 100%;
            margin-top: 20px;
        }
        .AllBox ul li .box .box_right pre{
            font-size: 12px;
            white-space: pre-wrap;
        }

        .demonstration{
            border-color: #b6b6ec;
        }

        .explain p{
            font-size: 13px;
            color: #000;
        }
    }
</style>