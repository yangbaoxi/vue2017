<template>
    <div>
        <Header></Header>
        <div class="main">
            <h1>路由</h1>
        </div>
        <div class="AllBox">
            <ul>
                <li>
                    <h4># 简单路由实例</h4>
                    <p class="introduce">我们的整个页面的导航就是通过路由实现跳转链接！（接下来把所有代码写在下面）</p>
                    <div class="box">
                        <div class="box_left">
                            <pre><p>主（index）组件：</p><p>{{listOne.shell}}</p></pre>
                        </div>
                        <div class="box_right">
                            <pre><p>Router文件下的index.js</p><p>{{listOne.shell2}}</p></pre>
                        </div>
                    </div>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. 首先，使用 router-link 组件来导航 通过传入 `to` 属性指定链接 &ltrouter-link&gt 默认会被渲染成一个 `&lta&gt` 标签</p>
                        <p>2. &ltrouter-view&gt&lt/router-view&gt 路由出口 路由匹配到的组件将渲染在这里</p>
                        <p>3. js部分：用 import （自定义名字） from '路径' （建议自定义名字与组件名一致）</p>
                        <p>4. 路由部分： 在routes这个数组中 用对象 { path:"跳转的路径", component:（渲染的组件 ） }</p>
                    </div>
                </li>
                <li>
                    <h4># 动态路由匹配</h4>
                    <p class="introduce"></p>
                    <div class="demonstration">
                        <ol>
                            <li v-for='list in listTwo.newsLits'>
                                <h3><router-link :to="'/details/' + list.id">{{list.title}}</router-link></h3>
                                <p>{{list.content}}</p>
                            </li>
                        </ol>
                    </div>
                    <div class="box">
                        <div class="box_left">
                            <pre><p>新闻列表：</p><p>{{listTwo.shell}}</p></pre>
                        </div>
                        <div class="box_right">
                            <pre><p>新闻详情页面：</p><p>{{listTwo.shell2}}</p></pre>
                        </div>
                        <div class="box_right other">
                            <pre><p>router文件下的index.js：</p><p>{{listTwo.shell3}}</p></pre>
                        </div>
                    </div>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. 新闻列表页： router-link 中的 to 要加 `<span class="red"> : </span>` 后面拼接参数 用 "" 双引号 不是用``（我这边代码显示不出来）</p>
                        <p>2. 新闻列表所都的数据也是请求后台，id也是从后台获取过来的。</p>
                        <p>3. 在新闻详情页中通过 <span class="red">this.$route.params</span> 来获取传过来的key 以及 value </p>
                        <P>4. 如果需要传递多个参数  可以在 router文件下的index继续配置  <span class="red">path:'/details/:id/user/:uasename',</span></P>
                    </div>
                </li>
                <li>
                    <h4># 嵌套式路由</h4>
                    <p class="introduce">基础语法里面就是用的嵌套式路由（我们将基础语法里面的代码整理到下面）</p>
                    <div class="box">
                        <div class="box_left">
                            <pre><p>基础语法组件：</p><p>{{listThree.shell}}</p></pre>
                        </div>
                        <div class="box_right">
                            <pre><p>Router文件下的index.js：</p><p>{{listThree.shell2}}</p></pre>
                        </div>
                    </div>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. 在基础组件语法组件中： 使用 <span class="red">router-link</span>  标签跳转组件（在组件中写过），使用to 填写路径地址，这里注意一点要写绝对路径 因为我们是 basics下面的子路由所以使用 <span class="red">/basics/interpolation</span> </p>
                        <p>2. 在基础组件中 使用 <span class="red">router-view</span> 渲染标签，将我们想要渲染的组件渲染到页面中</p>
                        <p>3. router文件下的index.js   import 是es6语法（往后看es6整理） 使用import引入组件在路由中，在 <span class="red">basics</span> 这个对象中配置子路由</p>
                        <p>4. 配置子路由使用 <span class="red">children :  [ ]</span>   数组里面放对象  参数  path 路径  component 组件  name 组件名字 </p>
                        <p>5. 注意在一点 children 里面写子路由的时候 不要写 <span class="red">/</span> 比如：<span class="red">path:'/computational',这是错误写法</span> </p>
                        <p>6. <span class="red">redirect</span>  这个参数是 重定向 下面会详细讲解</p>
                    </div> 
                </li>
                <li>
                    <h4># 编程式路由</h4>
                    <p class="introduce">编程式路由说简单点就是通过js进行传参，不使用 router-link，做一个提交数据的demo吧！ </p>
                    <div class="demonstration">
                        <input type="text" placeholder="请输入您的手机号" v-model="listFour.phone"> <br />
                        <input type="text" placeholder="请输入您的姓名" v-model="listFour.name"> <br />
                        <a href="javascript:;" @click='btnData'>点击提交</a>
                    </div>
                    <div class="box">
                        <div class="box_left">
                            <pre><p>提交Demo代码：</p><p>{{listFour.shell}}</p></pre>
                        </div>
                        <div class="box_right">
                            <pre><p>接受数据的页面</p><p>{{listFour.shell2}}</p></pre>
                        </div>
                        <div class="box_right other">
                            <pre><p>router文件下的index.js：</p><p>{{listFour.shell3}}</p></pre>
                        </div>
                    </div>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. 点击提交后 页面url地址路径就会变成 <span class="red">xxx? id....</span>   这种形式的拼接</p>
                        <p>2. 在提交事件中 我们使用多种方法进行跳转 其中有 （1）<span class="red">this.$router.push('/acceptData')</span>（2）<span class="red">this.$router.push('/acceptData?id=123')</span>还有俩种，常用的就是我们上面这种。</p>
                        <p>3. 在接受数据页面 我们使用 <span class="red"> $route.query </span>来接受数据</p>
                        <p>4. 多提一个知识点 <span class="red"> this.$router.go(-1);</span> 跟浏览器自带的上一层下一层一样，这里我们同样尅用js实现  -1 回跳 1 正跳</p>
                    </div>
                </li>
                <li>
                    <h4># 命名式路由和命名视图</h4>
                    <p class="introduce">这里不做demo演示了文字介绍一下吧</p>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. 命名式路由是什么？我们路由对象里面还有一个参数是name记得吗？ 假如说我们定义 一个组件 <span class="red">path:'/aaa', name:'bbb' , component:aaa</span> </p>
                        <p>2. 使用 <span class="red">&ltrouter-link :to="{name:'bbb'}"&gt&ltrouter-link&gt</span>  就可以跳转我们的 aaa组件。</p>
                        <p>3. 如果需要传递参数： <span class="red">&ltrouter-link :to="{name:'bbb',params:{id:1}}"&gt&ltrouter-link&gt</span>（注意这里不能使用query传参，也不能使用path配合 params传参）</p>
                        <p>4. 命名视图就是 使用 <span class="red">&ltrouter-view name='组件的name'&gt</span></p>
                        <p>5. 这时候要注意一点index.js的配置了   <span class="red">{path:"/",components:{  default:index , title: Title}}</span>因为我们多个视图渲染同一个页面，需要在配置里面告诉路由我的默认输出是 index 还有一点就是 component 要改成 <span class="red">components</span> 每一个key 对应的是name value对应的是组件。</p>
                    </div>
                </li>
                <li>
                    <h4># 重定向和别名</h4>
                    <div class="box">
                        <div class="box_left">
                            <pre><p>重定向：</p><p>{{listFive.shell}}</p></pre>
                        </div>
                        <div class="box_right">
                            <pre><p>别名：</p><p>{{listFive.shell2}}</p></pre>
                        </div>
                    </div>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. 重定向就是访问 <span class="red"> / </span> 路径 会直接 给重定向到 <span class="red">/index</span>路径</p>
                        <p>2. 别名： 看代码，我们访问 <span class="red">/aaa</span> 也就是相当于访问 <span class="red"> / </span> （首页，入口页）  </p>
                    </div>
                </li>
                <li>
                    <h4># History 模式和 404 页面</h4>
                    <div class="box">
                        <div class="box_left">
                            <pre><p>History模式：</p><p>{{listSix.shell}}</p></pre>
                        </div>
                        <div class="box_right">
                            <pre><p>404 页面：</p><p>{{listSix.shell2}}</p></pre>
                        </div>
                    </div>
                    <div class="explain">
                        <p>// 注释： </p>
                        <p>1. History模式： 在new Router 对象里面参数 mode:'history' 当你使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，也好看！<span class="red">不过这种模式要玩好，还需要后台配置支持。</span></p>
                        <p>2. 404页面设置  使用 <span class="red">" * "</span>   代表找不到的页面  配置一个组件，就会跳转 404页面</p>
                    </div>
                </li>
                <li>
                    <h4># 未完待续</h4>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue'
    export default {
        data(){
            return{
                listOne:{
                    shell:"<template>\n     <div>\n          <div class='nav'>\n                <router-link to='/'>安装</router-link>\n                <router-link to='/basics'>基础语法</router-link>\n                <router-link to='/assembly'>组件</router-link>\n                ......\n          </div>\n          <div>\n                <router-view></router-view> \n          </div> \n     </div>\n</template>",
                    shell2:"import index from '@/views/index' \nimport basics from '@/views/basics'\nimport assembly from '@/views/assembly'\n...... \n\n\n export default new Router({\n       routes:[\n              { path:'/', component:index },\n              { path:'/basics', component:basics },\n              { path:'/assembly', component:assembly }\n              ......\n       ]\n})"
                },
                listTwo:{
                    newsLits:[
                        {
                            "id":0,
                            "title":"我是新闻列表一",
                            "content":"我是新闻列表一的内容"
                        },
                        {
                            "id":1,
                            "title":"我是新闻列表二",
                            "content":"我是新闻列表二的内容"
                        },
                        {
                            "id":2,
                            "title":"我是新闻列表三",
                            "content":"我是新闻列表三的内容"
                        },
                        {
                            "id":3,
                            "title":"我是新闻列表四",
                            "content":"我是新闻列表四的内容"
                        },
                    ],
                    shell:"<div>\n      <ol>\n              <li v-for='list in newsLits'>\n                     <h3>\n                          <router-link :to=`'/details/' + list.id`>{{list.title}}</router-link>\n                     </h3>\n                     <p>{{list.content}}</p>\n              </li>\n          </ol>\n</div>\n<script>\n       data( ){\n              return{\n                    newsLits:[\n                           {'id':0,'title':'我是新闻列表一',content:'我是新闻列表一的内容'},\n                           {'id':1,'title':'我是新闻列表二',content:'我是新闻列表二的内容'},\n                           {'id':2,'title':'我是新闻列表三',content:'我是新闻列表三的内容'},\n                           {'id':3,'title':'我是新闻列表四',content:'我是新闻列表四的内容'}\n                    ]\n              }\n       }\n<\/script>",
                    shell2:"<div class='main'>\n        <h1>我是新闻详情页面的title</h1>\n        <p>这是详情页面的内容，但是需要往后台 传递 id 去查找 对于的数据！！！</p>\n        <span>获取url中的id值：{{this.$route.params}}</span>\n</div>",
                    shell3:"import detailsPage from '@/components/detailsPage'\n routes:[\n     {\n             path:'/details/:id,\n             component:detailsPage'\n     }\n]"
                },
                listThree:{
                    shell:"<div class='main'>\n         <h1>基础语法</h1>\n         <div class='children-router'>\n                 <router-link to='/basics/interpolation'>插值</router-link>\n                 <router-link to='/basics/instructions'>指令</router-link>\n                 <router-link to='/basics/computational'>计算属性 and 监听</router-link>\n                 <router-link to='/basics/styleClass'>class and style 绑定</router-link>\n                 <router-link to='/basics/rendering'>条件渲染</router-link>\n                 <router-link to='/basics/listloop'>列表渲染</router-link>\n                 <router-link to='/basics/filter'>过滤器</router-link>\n                 <router-link to='/basics/eventFun'>事件处理</router-link>\n                 <router-link to='/basics/model'>input表单输入绑定</router-link>\n         </div>\n         <router-view></router-view>\n</div>",
                    shell2:"import interpolation from '@/components/knowledge/interpolation'\nimport instructions from '@/components/knowledge/instructions'\nimport computational from '@/components/knowledge/computational'\nimport styleClass from '@/components/knowledge/styleClass'\nimport rendering from '@/components/knowledge/rendering'\nimport listloop from '@/components/knowledge/listloop'\nimport filter from '@/components/knowledge/filter'\nimport eventFun from '@/components/knowledge/eventFun'\nimport model from '@/components/knowledge/model'\n\nroutes:[\n      {\n             path:'/basics',\n             component:basics,\n             redirect:'/basics/interpolation',\n             children:[\n                    {\n                         path:'interpolation',\n                         component:interpolation\n                    },\n                    {\n                         path:'computational',\n                         component:computational\n                    },\n                    ......\n             ]\n      } \n]"
                },
                listFour:{
                    phone:"",
                    name:"",
                    shell:"<div class='demonstration'>\n        <input type='text' placeholder='请输入您的手机号' v-model='phone'>\n        <input type='text' placeholder='请输入您的姓名' v-model='name'>\n        <a href='javascript:;' @click='btnData'>点击提交</a>\n</div>\n<script>\n        data(){\n                return:{\n                       phone : ' ' , \n                       name : ' '\n                }\n        },\n        methods:{\n                btnData(){\n                       this.$router.push({\n                               path:'/acceptData',\n                               query:{\n                                       phone:this.phone,\n                                       name:this.name\n                               }\n                      })\n                }\n        }\n<\/script>",
                    shell2:"<div class='main'>\n        <h1>我是一个接受数据的页面，</h1>\n        <span>获取传递过来的手机号跟name值：{{$route.query}}</span>\n</div>\n<div class='btn'>\n        <a href='javascript:;' @click='goback'>点击返回上一层页面</a>\n</div>\n<script>\n          methods: {\n                goback(){\n                       this.$router.go(-1);\n                }\n          }\n<\/script>",
                    shell3:"import acceptData from '@/components/acceptData'\n routes:[\n     {\n             path:'/acceptData,\n             component:acceptData'\n     }\n]"
                },
                listFive:{
                    shell:"routes:[\n       {\n             path:'/',\n             component:'index',\n             redirect:'/index'\n       }\n]",
                    shell2:"routes:[\n       {\n             path:'/',\n             component:'index',\n             alias:'/aaa'\n       }\n]",
                },
                listSix:{
                    shell:"export default new Router({\n        mode:'history',\n        routes:[....] \n})",
                    shell2:"routes:[\n       {\n             path:'*',\n             component:'404',\n       }\n]",
                }
            }
        },
        components: {
            Header
        },
        methods: {
            btnData(){
                // this.$router.push('/acceptData');
                if(this.listFour.phone != "" && this.listFour.name !=""){
                    this.$router.push({
                        path:'/acceptData',
                        query:{
                            phone:this.listFour.phone,
                            name:this.listFour.name
                        }
                    })
                }else{
                    if(this.listFour.phone == ""){
                        alert('手机号没填就想跳转页面？？？');
                    }else if(this.listFour.name == ""){
                        alert('姓名没填就想跳转页面？？？');
                    }
                }
            }
        }
    }
</script>
<style scoped>
    .main{
        width: 1200px;
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
        width: 1200px;
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
        background: #2b333b;
    }
    .AllBox ul li .box .box_left pre{
        font-size: 14px;
        color: #fff;
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
        background: purple;
    }
    .AllBox ul li .box .other{
        background: rgb(8, 138, 95);
        margin-top: 10px;
    }
    .AllBox ul li .box .box_right pre{
        color: #fff;
        font-size: 14px;
        line-height: 25px;
        padding: 15px;
    }
    .explain{
        width: 100%;
        margin-top: 20px;
        padding: 20px;
    }
    .explain p{
        font-size: 14px;
        color: #0000ff;
        line-height: 25px;
    }
    .explain .red{
        color: red;
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
        background:purple;
        color: #fff;
        margin-top: 10px;
    }
    .demonstration p{
        font-size: 14px;
        color: #2b333b;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .introduce{
        margin-top: 20px;
    }
    .demonstration ol li{
        border-bottom: 1px solid red;
        padding: 10px  0;
    }
    .demonstration ol li h3{
        font-size: 16px;
    }
    .demonstration ol li h3 a{
        color: #272727;
        background: none;

    }
    .demonstration ol li  p{
        font-size: 13px;
        color: #666;
        margin-top: 10px;
    }
</style>