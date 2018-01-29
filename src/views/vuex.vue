<template>
    <div>
        <Header></Header>
        <div class="main">
            <h1>Vuex 状态管理</h1>
        </div>
        <div class="contentBox">
            <ul>
                <li>
                    <h4># 引入vuex （初始化）</h4>
                    <div class="jsCode">
                        <pre>{{One.shell}}</pre>
                    </div>
                </li>
                <li>
                    <h4># 储存数据 state</h4>
                    <div class="demo">
                        <p v-for='item in Storage'>{{item.name}} -- {{item.author}}</p>
                    </div>
                    <div class="jsCode">
                        <pre><p>JS代码：</p><p>{{Two.shell}}</p></pre>
                    </div>
                    <div class="vxCode">
                        <pre><p>Store.js代码：</p><p>{{Two.shell2}}</p></pre>
                    </div>
                    <div class="htmlCode">
                        <pre><p>HTML代码：</p><p>{{Two.shell3}}</p></pre>
                    </div>
                    <div class="text">
                        <p>1. 我们把数据写在store.js中（写死的数据，为了演示）</p>
                        <p>2. 在js代码中 使用 <span class="red">computed 计算属性 进行赋值 （我的理解是计算属性 中的 函数名就是 var 变量，里面return出store.js的值）</span></p>
                        <p>3. 直接将 我们赋值的 '变量' 在页面中 循环出来即可 <span class="red">（说通俗点，这个 加引号的变量 就相当于data里面的 数据）</span></p>
                    </div>
                </li>
                <li>
                    <h4># 获取数据 getters</h4>
                    <div class="demo">
                        <p v-for='item in AfterList'>{{item.name}} -- {{item.author}}</p>
                        <!-- <p><input type="text" placeholder="随便输入文字"/></p>
                         -->
                    </div>
                    <div class="jsCode">
                        <pre><p>JS代码：</p><p>{{Three.shell}}</p></pre>
                    </div>
                    <div class="vxCode">
                        <pre><p>Store.js代码：</p><p>{{Three.shell2}}</p></pre>
                    </div>
                    <div class="htmlCode">
                        <pre><p>HTML代码：</p><p>{{Three.shell3}}</p></pre>
                    </div>
                    <div class="text">
                        <p>1. getters 跟 state 一样啊？ 我们这么看确实一模一样，一样的获取方法，一样的渲染页面。</p>
                        <p>2. 我的理解是这样的 getters 就是 vuex中的 <span class="red">'计算属性'</span> ，或者说是 <span class="red">'监听'</span></p>
                        <p>3. getters对象下面的所有函数都有一个参数 state  也就是上面 对面里面所有的数据。</p>
                        <p>4. 假如100个组件都要使用到 <span class="red">state.list</span> 这些数据每一个组件并且都要里面的数据等等。那么我们就要在每一个组件中都要去写一个方法去改变值，这样太麻烦，所以我们可以直接用getters 这个对象 里面写一个方法 调用这个对象的数据就可以了。</p>
                    </div>
                </li>
                <li>
                    <h4># 修改数据/严格模式 mutations</h4>
                    <div class="demo">
                        <p>{{mags}}</p>
                        <p><input type="text" placeholder="随便输入点内容" v-model="Four.getData"  /></p>
                        <a href="javascript:;" @click='addData'>点击修改vuex数据</a>
                    </div>
                    <div class="jsCode">
                        <pre><p>JS代码：</p><p>{{Four.shell}}</p></pre>
                    </div>
                    <div class="vxCode">
                        <pre><p>Store.js代码：</p><p>{{Four.shell2}}</p></pre>
                    </div>
                    <div class="htmlCode">
                        <pre><p>HTML代码：</p><p>{{Four.shell3}}</p></pre>
                    </div>
                    <div class="text">
                        <p>1. 首先说一下什么是严格模式，其实我们可以不通过 <span class="red">mutations</span> 来改变vuex中的值，我们可以直接在组件中写点击事件去改变，但是如果加上 严格模式 <span class="red">strict:true</span> vue就是报错，这是不正确的行为，注意一点，在做项目必须加严格模式</p>
                        <p>2. 在页面JS代码中 我们使用 <span class="red">this.$store.commit('AddData',this.getData);</span> 其中的 <span class="red">commit是固定写法</span> 参数一：要跟vuex中的 mutations 定义的事件名 一致 。参数二：可以向 vuex传递 数据  在 mutations中 修改 state 里面的数据</p>
                        <p>3. 介绍全所有基础后，我会模拟几个场景写几个Demo</p>
                        <p>4. 参数传递到vuex中 用 <span class="red">payload 去接受 可以 console.log 查看</span></p>
                    </div>
                </li>
                <li>
                    <h4># Actions （类似于mutations，支持任何的异步操作） </h4>
                    <div class="demo">
                        <p>今天学习了 ：{{mags2}} 小时</p>
                        <p><input type="text" placeholder="请输入几小时" v-model.number='five.num'></p>
                        <a href="javascript:;" @click='addTime'>点击修改学习时间（延迟2秒触发）</a>
                    </div>
                    <div class="jsCode">
                        <pre><p>JS代码：</p><p>{{five.shell}}</p></pre>
                    </div>
                    <div class="vxCode">
                        <pre><p>Store.js代码：</p><p>{{five.shell2}}</p></pre>
                    </div>
                    <div class="htmlCode">
                        <pre><p>HTML代码：</p><p>{{five.shell3}}</p></pre>
                    </div>
                    <div class="text">
                        <p>1. 当看到这个Demo的代码是不是已经乱了，一步步分析把：</p>
                        <p>2. 首先，我们使用 <span class="red">computed 计算属性获取 vuex中的 msgs2的值  3</span>在渲染到页面</p>
                        <p>3. 第二步：我们写一个点击事件，要通过input输入的内容进行传递给vuex然后改变数据， 这里我们转到 store.js中去看 我们在 <span class="red">mutations 写好了一个方法去改变vuex中的数据</span></p>
                        <p>4. 第三步：刚刚说过了 如果我们直接把 定时器写在 mutations 内部 在严格模式下就会报错，虽然能运行，但是是错误的写法。我们要通过 <span class="red">actions</span>去实现这个方法，在对象里面写一个方法 参数 <span class="red">context 就是在页面的 this.$store</span>用它 调用 mutations 里面的 <span class="red">modifyTime</span>函数  </p>
                        <p>5. 最后使用 actions去执行js 事件，就不能跟原来的写法一样了  就要使用  this.$store.dispatch ('xxx',参数)  参数一：<span class="red">actions 里面的方法</span> 第二个参数：传给vuex 的数据 </p>
                    </div>
                </li>
                <li>
                    <h4># 数据传参=>改变=>获取(另外一个组件)Demo</h4>
                    <div class="demo">
                        <p><input type="text" placeholder="出发城市" v-model="six.depCity"></p>
                        <p><input type="text" placeholder="达到城市" v-model="six.arrCity"></p>
                        <p><input type="text" placeholder="出发时间" v-model="six.depTime"></p>
                        <p><input type="text" placeholder="达到时间" v-model="six.arrTime"></p>
                        <p><input type="text" placeholder="姓名" v-model="six.name"></p>
                        <a href="javascript:;" @click='JumpPage'>填好数据后点击跳转新页面（组件）</a>
                    </div>
                    <div class="jsCode">
                        <pre><p>JS代码：</p><p>{{seven.shell}}</p></pre>
                    </div>
                    <div class="vxCode">
                        <pre><p>Store.js代码：</p><p>{{seven.shell2}}</p></pre>
                    </div>
                    <div class="htmlCode">
                        <pre><p>HTML代码：</p><p>{{seven.shell3}}</p></pre>
                    </div>
                    <div class="text">
                        <p>1. 这个实现了通过vuex 进行传递参数的 Demo</p>
                        <p>2. 首先将写空值的'变量'写在vuex中，随后 通过页面中的事件将 我们输入的内容传递进去并且跳转另外一个组件</p>
                        <p>3. 在另一个路由中直接 computed 接受vuex 里面的数据 渲染到页面。 </p>
                        <p>4. 后期继续添加新知识内容。</p>
                    </div>
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
                One:{
                    shell:"$ cnpm install vuex --save\n在src新建一个文件夹名为 （store） \n再这个store 文件下创建一个js 名为（store.js）\n第一步：在store.js初始化代码：\n         import Vue from 'vue' \n         import Vuex from 'vuex'\n         Vue.use(Vuex);\n         export const store = new Vuex.Store({\n               state:{\n                       list:[\n                              {name:'成都',author:'赵雷'},\n                              ......\n                       ]\n               }\n         })\n第二步：在main.js 设置vuex的使用：\n        import {store} from './store/store' \n        new Vue({\n             el:'#app',\n              ......\n              store:store\n        })",
                },
                Two:{
                    shell:"<script>\n       export default {\n              compouted:{\n                     Storage(){\n                              return this.$store.state.list;\n                     } \n              }\n       }\n<\/script>",
                    shell2:"export const store = new Vuex.Store({\n         state:{\n               list:[\n                      {name:'成都',author:'赵雷'},\n                      {name:'童话镇',author:'陈一发儿'},\n                      {name:'亲爱的你',author:'葛雨晴'},\n                      {name:'灰色头像',author:'许嵩'},\n               ]\n         }\n})",
                    shell3:"<div>\n     <p v-for='item in Storage'>{{item.name}} -- {{item.author}}</p>\n</div>",
                },
                Three:{
                    shell:"<script>\n       export default {\n              compouted:{\n                     AfterList(){\n                              return this.$store.getters.saleList;\n                     } \n              }\n       }\n<\/script>",
                    shell2:"export const store = new Vuex.Store({\n         state:{\n               list:[\n                      {name:'成都',author:'赵雷'},\n                      {name:'童话镇',author:'陈一发儿'},\n                      {name:'亲爱的你',author:'葛雨晴'},\n                      {name:'灰色头像',author:'许嵩'},\n               ]\n         },\n         getters:{\n                 saleList:(state)=>{\n                       let saleList = state.list.map((list)=>{\n                               return{\n                                       name:'歌名：' + list.name,\n                                       author:'作者：' + list.author\n                               }\n                       })\n                       return saleList\n                 }\n         }\n})",
                    shell3:"<div>\n     <p v-for='item in AfterList'>{{item.name}} -- {{item.author}}</p>\n</div>"
                },
                Four:{
                    getData:"",
                    shell:"<script>\n       export default {\n              data(){\n                     return{\n                             getData:''\n                     }\n              },\n              compouted:{\n                     mags(){\n                              return this.$store.msg;\n                     },\n              }\n              methods:{\n                      addData(){\n                              this.$store.commit('AddData',this.getData);\n                      }\n              }\n       }\n<\/script>",
                    shell2:"export const store = new Vuex.Store({\n         strict:true,,\n         state:{\n               msg:'我是store.js中的一条数据。'\n         },\n         mutations:{\n               AddData:(state,payload)=>{\n                       state.msg = payload;\n               }\n         }\n})",
                    shell3:"<div>\n         <p>{{mags}}</p>\n         <p><input type='text' placeholder='随便输入点内容' v-model='getData'  /></p>\n         <a href='javascript:;' @click='addData'>点击修改vuex数据</a>\n</div>"
                },
                five:{
                    num:"",
                    shell:"<script>\n       export default {\n              data(){\n                     return{\n                             num : ''  ''\n                     }\n              },\n              compouted:{\n                     mags2(){\n                              return this.$store.msg2;\n                     },\n              }\n              methods:{\n                      addTime(){\n                              this.$store.dispatch('addTime',this.num);\n                      }\n              }\n       }\n<\/script>",
                    shell2:"export const store = new Vuex.Store({\n         strict:true,,\n         state:{\n               msg2:3\n         },\n         mutations:{\n               modifyTime:(state,payload)=>{\n                       state.msg2 = payload;\n               }\n         },\n         actions:{\n               addTime:(context,payload)=>{\n                     setTimeout(()=>{\n                          context.commit('modifyTime',payload)\n                     },2000)\n               }\n         }\n})",
                    shell3:"<div>\n         <p>今天学习了 ：{{mags2}} 小时</p>\n         <p><input type='text' placeholder='请输入几小时' v-model='num'></p>\n         <a href='javascript:;' @click='addTime'>点击修改学习时间（延迟2秒触发）</a>\n</div>"
                },
                six:{
                    depCity:"",
                    arrCity:"",
                    depTime:"",
                    arrTime:"",
                    name:""
                },
                seven:{
                    shell:"<script>\n       export default {\n              data(){\n                     return{\n                             AllData : {\n                                   depCity:'',\n                                   arrCity:'',\n                                   depTime:'',\n                                   arrTime:'',\n                                   name:'' \n                             }\n                     }\n              },\n              methods:{\n                      JumpPage(){\n                              this.$store.commit('ticketData',this.AllData);\n                              this.$router.push('/vuexDemo')\n                      }\n              }\n       }\n<\/script>",
                    shell2:"export const store = new Vuex.Store({\n         strict:true,,\n         state:{\n               ticketData:{\n                       depCity:' ' \n                       arrCity:' ',\n                       depTime:' ' ,\n                       arrTime:' ',\n                       name:' '\n               }\n         },\n         mutations:{\n               ticketData:(state,payload)=>{\n                       Object.assign(state.ticketData,payload);\n               }\n         }\n})",
                    shell3:"<div>\n         <p><input type='text' placeholder='出发城市' v-model='AllData.depCity'></p>\n         <p><input type='text' placeholder='达到城市' v-model='AllData.arrCity'></p>\n         <p><input type='text' placeholder='出发时间' v-model='AllData.depTime'></p>\n         <p><input type='text' placeholder='达到时间' v-model='AllData.arrTime'></p>\n         <p><input type='text' placeholder='姓名' v-model='AllData.name'></p>\n         <a href='javascript:;' @click='JumpPage'>填好数据后点击跳转新页面（组件）</a>\n</div>",
                }
            }
        },
        computed:{
            Storage(){
                return this.$store.state.list;
            },
            AfterList(){
                return this.$store.getters.saleList;
            },
            mags(){
                return this.$store.state.msg;
            },
            mags2(){
                return this.$store.state.msg2;
            }
        },
        methods: {
            addData(){
                this.$store.commit('AddData',this.Four.getData);
            },
            addTime(){
                this.$store.dispatch('addTime',this.five.num);
            },
            JumpPage(){
                this.$store.commit('ticketData',this.six);
                this.$router.push('/vuexDemo');
            }
        },
        components: {
            Header
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
    .contentBox{
        max-width: 1200px;
        margin: 0 auto;
    }
    .contentBox li{
        border-bottom: 2px solid purple;
        margin-bottom: 20px;
    }
    .contentBox li h4{
        font-size: 16px;
        color: green;
        margin-bottom: 20px;
    }
    .demo{
        border: 2px solid #333;
        margin-bottom: 10px;
        width: 100%;
        padding: 20px;
    }
    .demo p{
        margin-bottom: 10px;
    }
    .demo input{
        height: 30px;
        width: 200px;
        text-indent: 1em;
        display: block;

    }
    .demo a{
        padding: 8px 35px;
        display: inline-block;
        background: purple;
        color: #fff;
        margin-top: 10px;
    }
    pre{
        font-size: 14px;
        color: #ffffff;
        line-height: 30px;
    }
    .jsCode {
        padding: 20px;        
        width: 100%;        
        background:#2b333b;
        margin-bottom: 10px;        
    }
    .vxCode{
        padding: 20px;        
        width: 100%;        
        background:rgb(230, 11, 84);
        margin-bottom: 10px; 
    }
    .htmlCode{
        padding: 20px;        
        width: 100%;        
        background:rgb(0, 170, 142);
        margin-bottom: 10px; 
    }
    .text{
        margin-bottom: 20px; 
    }
    .text p{
        font-size: 16px;
        color: #0000ff;
        line-height: 25px;
    }
    .demo p{
        font-size: 14px;
        color: #000000;
        line-height: 25px;
        font-weight: bold;
    }
    .red{
        color: red;
    }
</style>
