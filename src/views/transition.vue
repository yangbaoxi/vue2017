<template>
    <div>
        <Header></Header>
        <div class="main">
            <h1>动画</h1>
        </div>
        <div class="animation">
            <ul>
                <li>
                    <h4># 单个元素过度动画</h4>
                    <div class="box">
                        <div class="effect">
                            <h5>特效：</h5>
                            <transition name='fade'>
                                <p v-show='One.show'>如果不努力，永远不知道自己有多废物</p>
                            </transition>  
                            <a href="javascript:;" @click='OneBtn'>点击开始动画</a>
                        </div>
                        <div class="jscode">
                            <pre><p>js代码:</p><p>{{One.shell}}</p></pre>
                        </div>
                        <div class="csscode">
                            <pre><p>HTML</p><p>{{One.shell2}}</p><p>CSS</p><p>{{One.shell3}}</p></pre>
                        </div>
                    </div>
                    <div class="text">
                        <p>注释：</p>
                        <p>1. 已经测试 <span class="red">v-if</span>  也可以实现</p>
                        <p>2. 使用 <span class="red">&lttransition&gt&lttransition&gt </span>标签给元素加动画</p>
                        <p>3. 这个Demo 使用的是 transition 标签的属性 <span class="red">name</span>来绑定css 中的动画</p>
                        <p>4. 这里 定义 name 为 fade  在css 中 对应的 类 <span class="red">v-enter v-enter-active v-leave-active v-leave</span> 详细看css中的注释</p>
                        <p>5. 前面这个<span class="red"> v </span>就是对应 给 <span class="red">&lttransition&gt&lttransition&gt </span> 标签定义的 <span class="red">name</span>属性的<span class="red">   值</span></p>
                    </div>  
                </li>
                <li>
                    <h4># 元素 + css3中的animation使用</h4>
                    <div class="box">
                        <div class="effect">
                            <h5>特效：</h5>
                            <transition name='fadeTwo'>
                                <p v-show='Two.show'>In fact, you don't understand</p>
                            </transition>
                            <a href="javascript:;" @click='TwoBtn'>点击开始动画</a>
                        </div>
                        <div class="jscode">
                            <pre><p>js代码:</p><p>{{Two.shell}}</p></pre>
                        </div>
                        <div class="csscode">
                            <pre><p>HTML</p><p>{{Two.shell2}}</p><p>CSS</p><p>{{Two.shell3}}</p></pre>
                        </div>
                    </div>
                    <div class="text">
                        <p>注释：</p>
                        <p>1. 已经测试 <span class="red">v-if</span> 可以实现</p>
                        <p>2. 在<span class="red">v-enter-active and v-leave-active</span>直接添加 <span class="red">animation 动画</span>指定 <span class="red">animation 动画名 写 @keyframes动画即可</span> </p>
                    </div> 
                </li>
                <li>
                    <h4># 元素 + animate.css 动画库</h4>
                    <div class="box">
                        <div class="effect">
                            <h5>特效：</h5>
                            <transition enter-active-class='animated tada' leave-active-class="animated bounceOutRight">
                                <p v-show='Three.show'>Come on</p>
                            </transition>
                            <a href="javascript:;" @click='ThreeBtn'>点击开始动画</a>
                        </div>
                        <div class="jscode">
                            <pre><p>引入 animate.css动画库：</p><p>{{Three.shell}}</p><p>js代码：</p><p>{{Three.shell2}}</p></pre>
                        </div>
                        <div class="csscode">
                            <pre><p>HTML</p><p>{{Three.shell3}}</p></pre>
                        </div>
                    </div>
                    <div class="text">
                        <p>注释：</p>
                        <p>1. 已经测试 <span class="red">v-if</span>  也可以实现</p>
                        <p>2. 引入animate 动画库，方法在js部分。</p>
                        <p>3. 直接给<span class="red">&lttransition&gt&lttransition&gt </span>标签绑定类 <span class="red">enter-active-class </span>  and <span class="red"> leave-active-class</span></p>
                        <p>4. 使用animate 就不需要给 &lttransition&gt 定义 name 值。</p>
                    </div> 
                </li>
                <li>
                    <h4># javascript 钩子函数实现 动画 （需要使用Velocity.js）</h4>
                    <div class="box">
                        <div class="effect">
                            <h5>特效：</h5>
                            <transition 
                                v-on:before-enter='beforeEnter'
                                v-on:enter="enter"
                                v-on:leave="leave"
                                v-bind:css = "false"
                            >
                                <p v-if='Four.show'>javascript钩子函数执行动画</p>
                            </transition>  
                            <a href="javascript:;" @click='FourBtn'>点击开始动画</a>
                        </div>
                        <div class="jscode">
                            <pre><p>引入Velocity.js :</p><p>{{Four.shell}}</p><p>js代码：</p><p>{{Four.shell2}}</p></pre>
                        </div>
                        <div class="csscode">
                            <pre><p>HTML</p><p>{{Four.shell3}}</p></pre>
                        </div>
                    </div>
                    <div class="text">
                        <p>注释：</p>
                        <p>1. 已经测试 <span class="red">不支持 v-show</span></p>
                        <p>2. 动画部分不做详细解释  可以去官网去查看文档  <a href="http://www.velocityjs.org/">Velocity.js</a></p>
                        <p>3. 给transition 标签使用js钩子函数 必须使用 v-on 去动态绑定 事件 <span class="red">不能使用简写</span> </p>
                        <p>4. <span class="red"> v-bind:css='false'</span> 解释：Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。</p>
                        <p>5. 钩子函数用的参数 el 就是代表的 绑定的 当前元素。 done是vue一个内置回调函数 如果不加回调函数 过度离开过度动画不会执行。</p>
                    </div>  
                </li>
                <li>
                    <h4># 多个元素的过渡 （俩个）</h4>
                    <div class="box">
                        <div class="effect">
                            <h5>特效：</h5>
                            <transition name='tran' mode='out-in'>
                                <p :key="Five.show">{{Five.show ? 'yes' : 'no'}}</p>
                            </transition>
                            <a href="javascript:;" @click='FiveBtn'>点击开始动画</a>
                        </div>
                        <div class="jscode">
                            <pre><p>js代码:</p><p>{{Five.shell}}</p></pre>
                        </div>
                        <div class="csscode">
                            <pre><p>HTML</p><p>{{Five.shell2}}</p><p>CSS</p><p>{{Five.shell3}}</p></pre>
                        </div>
                    </div>
                    <div class="text">
                        <p>注释：</p>
                        <p>1. 已经测试 <span class="red">v-show v-if</span>  也可以实现</p>
                        <p>2. p元素的绑定类似于v-if 这里只是写成一个元素另一种写法就是分开写俩个p元素（这里不在演示）</p>
                        <p>3. 注意几个地方，mode ?? mode 有俩种， <span class="red">in-out :新元素先进行过渡，完成之后当前元素过渡离开。</span><span class="red">out-in：当前元素先进行过渡，完成之后新元素过渡进入。</span></p>
                    </div> 
                </li>
                <li>
                    <h4># 多个组件的过渡（动态组件）</h4>
                    <div class="box">
                        <div class="effect">
                            <h5>特效：</h5>
                            <transition name='tran' mode='out-in'>
                                <component :is='six.complete'></component>
                            </transition>
                            <a href="javascript:;" @click='Acom'>A组件</a>
                            <a href="javascript:;" @click='Bcom'>B组件</a>
                        </div>
                        <div class="jscode">
                            <pre><p>js代码:</p><p>{{six.shell}}</p></pre>
                        </div>
                        <div class="csscode">
                            <pre><p>HTML</p><p>{{six.shell2}}</p></pre>
                        </div>
                    </div>
                    <div class="text">
                        <p>注释：</p>
                        <p>1. css代码是上面demo代码</p>
                        <p>2. 这里做了俩个按钮，点击切换不同的组件</p>
                        <p>3. 重要一点，组件不要忘记 先 import 引入当前这个组件中</p>
                    </div>
                </li>
                <li>
                    <h4># 列表过度</h4>
                    <div class="box">
                        <div class="effect">
                            <h5>特效：</h5>
                            <transition-group name='list-complete' tag='div'>
                                <p v-for='item in seven.items' v-bind:key="item" class="list-complete-item">{{item}}</p>
                            </transition-group>
                            <a href="javascript:;" @click='shuffle'>排序</a>
                            <a href="javascript:;" @click='add'>添加</a>
                            <a href="javascript:;" @click='remove'>删除</a>
                        </div>
                        <div class="jscode" style="width:51%">
                            <pre><p>js代码:</p><p>{{seven.shell}}</p></pre>
                        </div>
                        <div class="csscode" style='width:51%;margin-top:10px;margin-left:25%'>
                            <pre><p>HTML</p><p>{{seven.shell2}}</p><p>CSS</p><p>{{seven.shell3}}</p></pre>
                        </div>
                    </div>
                    <div class="text">
                        <p>1. 首先用到了一个 <span class="red">lodash.min.js</span>在这个Demo中只是用到了 他的重新组合数组，在 <span class="red">shuffle 事件中的 _.shuffle</span></p>
                        <p>2. 引入方法： $ cnpm install lodash 使用：import _ from 'lodash'</p>
                        <p>3. <span class="red">randomIndex 函数就是一个 获取随机数</span></p>
                        <p>4. 在css中的 <span class="red">v-leave-active 中的  position: absolute;</span>作用就是删除元素时，让整个列有一个过度效果，可以注释一下，看一下效果</p>
                        <p>5. 这种动画在vue中叫做 FLIP队列动画 （不用去查看aip文档没有用） 注意一点动画元素不能设置为 <span class="red">display: inline</span> 可以设置为 <span class="red">display: inline-block</span> </p>
                    </div>
                </li>
                <li>
                    <h4># 列表过度 -- FLIP 动画Demo</h4>
                    <div class="box">
                        <div class="effect">
                            <h5>特效：</h5>
                            <transition-group name='flip-list' tag='div' class="sudoku-container">
                                <span class="cell" v-for='(item,index) in eight.items' :key='item.id'>{{item.num}}</span>
                            </transition-group>
                            <a href="javascript:;" @click='shuffle2'>排序</a>
                        </div>
                        <div class="jscode" style="width:51%">
                            <pre><p>js代码:</p><p>{{eight.shell}}</p></pre>
                        </div>
                        <div class="csscode" style='width:51%;margin-top:10px;margin-left:25%'>
                            <pre><p>HTML</p><p>{{eight.shell2}}</p><p>CSS</p><p>{{eight.shell3}}</p></pre>
                        </div>
                    </div>
                    <div class="text">
                        <p>1. 这个Demo是官网的一个Demo，但是并没有代码展示。上面就是自己写的代码展示</p>
                        <p>2. 一个小坑，列表在绑定 <span class="red">key值</span>的时候，我最初的想法用 index （下标）去绑定，也就是data的返回值 就是 <span>items:[1,2,3,4,5.....]</span>,我发现这么绑定不报错，但是过渡效果并没有实现，然后改成 item的内容值，发现 1~9很多key值是重复的，一直在报错，所以这里用了 数组对象的方式 key渲染的是不同的id</p>
                        <p>3. 这个问题我还没有详细的研究，可能是 vue中内部的原因吧。注意一下。</p>
                        <p>4. 可能会误导很多人去查看 FLIP文档，其实 <span class="red">FLIP只是vue官网的一个名称而已</span></p>
                        <p>5. <span class="red"> v-move</span> 其实就是css样式，也就给所有内部的元素添加 <span class="red">transition:all 0.35s</span>如果说不想去了解 v-move  那就直接定义 所有类 有一个 transition 过度效果即可。</p>
                    </div>
                </li>
                <li>
                    <h4># 列表的交错过渡</h4>
                    <div class="box">
                        <div class="effect">
                            <h5>特效：</h5>
                            <input type="text" placeholder="输入字母搜索内容" v-model='nine.query' />
                            <transition-group name='' tag='ul' v-bind:css="false" v-on:before-enter='beforeEnter2' v-on:enter='enter2' v-on:leave='leave2'>
                                <li v-for='(item,index) in computedList' :key='item.msg' v-bind:data-index="index">{{item.msg}}</li>
                            </transition-group>
                        </div>
                        <div class="jscode" style="width:55%">
                            <pre><p>js代码:</p><p>{{nine.shell}}</p></pre>
                        </div>
                        <div class="csscode" style='width:80%;margin-top:10px;margin-left:10%'>
                            <pre><p>HTML</p><p>{{nine.shell2}}</p></pre>
                        </div>
                    </div>
                    <div class="text">
                        <p>1. 这个Demo使用 <span class="red">Velocity.js</span> 加 钩子函数 实现的动画</p>
                        <p>2. 计算属性，可以改成监听 watch 也可以实现。 <span class="red">indexOf 是匹配字符串</span></p>
                        <p>3. <span class="red">el.dataset.index</span>没有见过？ console.log一下  <span class="red">，在input输入字母后，下面所有字符串又这个字母的元素对应的下标。</span></p>
                        <p>4. <span class="red">.toLowerCase() 将所有 字母转变成小写字母。</span></p>
                        <p>5. v-bind:data-index='index' 删除后 并不影响效果，所以我认为应该是 Velocity.js 自带的一个区分列表的属性或者说 跟 key 一样</p>
                    </div>
                </li>
                <li>
                    <h4># 未完待续（后期添加 tween.js 配合vue组成状态过渡）</h4>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue'
    import animate from 'animate.css'
    import _ from 'lodash'

    import Velocity from 'velocity-animate'
    import dynamicOne from '@/components/demoCom/dynamicOne'
    import dynamicTwo from '@/components/demoCom/dynamicTwo'
    export default {
        data () {
            return {
                One:{
                    show:true,
                    shell:"<script>\n       export default {\n              data(){\n                       show:true \n              },\n              methods:{\n                       OneBtn(){\n                               this.show = !this.show \n                       } \n              }\n       }\n<\/scripy>",
                    shell2:"<transition name='fade'>\n      <p v-show='show'>如果不努力，永远不知道自己有多废物</p>\n</transition>\n<a href='javascript:;' @click='OneBtn'>点击开始动画</a>\n",
                    shell3:".fade-enter-active {    /* 进入动画 整个过程 */ \n       transition: all .5s; \n}\n.fade-enter {    /*进入时 触发的动画*/\n      opacity: 0;\n      transform: translateX(10px); \n}\n.fade-leave-active{   /*整个离开动画 整个过程*/\n       transition: all .5s;\n}\n.fade-leave-to{    /*离开时 触发的动画*/\n      opacity: 0;\n      transform: translateX(10px);\n}"
                },
                Two:{
                    show:true,
                    shell:"<script>\n       export default {\n              data(){\n                       show:true \n              },\n              methods:{\n                       TwoBtn(){\n                               this.show = !this.show \n                       } \n              }\n       }\n<\/scripy>",
                    shell2:"<transition name='fade'>\n      <p v-show='show'>In fact, you don't understand</p>\n</transition>\n<a href='javascript:;' @click='TwoBtn'>点击开始动画</a>\n",
                    shell3:".fadeTwo-enter-active {\n        animation:rotateIn 2s;\n}\n.fadeTwo-leave-active{\n        animation: lightSpeedOut 1s;\n}\n @keyframes lightSpeedOut{\n       from {\n              opacity: 1; \n       }\n       to {\n              transform: translate3d(100%, 0, 0) skewX(30deg);\n              opacity: 0; \n       } \n}\n@keyframes rotateIn {\n       from {\n              transform-origin: center;\n              transform: rotate3d(0, 0, 1, -200deg);\n              opacity: 0; \n       }\n       to {\n              transform-origin: center;\n              transform: none;\n              opacity: 1; \n       }\n}"
                },
                Three:{
                    show:true,
                    shell:"$ cnpm install animate.css --save\n js部分：\n import animate from 'animate.css'",
                    shell2:"<script>\n       export default {\n              data(){\n                       show:true \n              },\n              methods:{\n                       ThreeBtn(){\n                               this.show = !this.show \n                       } \n              }\n       }\n<\/scripy>",
                    shell3:"<transition \n      enter-active-class='animated tada' \n      leave-active-class='animated bounceOutRight'\n>\n      <p v-show='show'>Come on</p>\n</transition>\n<a href='javascript:;' @click='ThreeBtn'>点击开始动画</a>",
                },
                Four:{
                    show:false,
                    shell:"$ cnpm install velocity-animate --save-dev\njs部分：\nimport  Velocity from 'velocity-animate'",
                    shell2:"<script>\n       export default {\n              data(){\n                       show:true \n              },\n              methods:{\n                       FourBtn(){\n                               this.show = !this.show \n                       },\n                       beforeEnter(el){\n                           el.style.opacity = 0;\n                           el.style.transformOrigin = 'left';\n                       },\n                       enter(el,done){\n                           Velocity(el, { \n                                 opacity: 1, \n                                 fontSize: '1.4em' \n                           }, { duration: 300 });\n                           Velocity(el, { fontSize: '1em' }, \n                           { complete: done }); \n                        },\n                       leave:(el,done){\n                            Velocity(el, {\n                                 translateX: '15px',\n                                 rotateZ: '50deg'\n                            }, { duration: 600 });\n                            Velocity(el, { rotateZ: '100deg' },\n                            { loop: 2 });\n                            Velocity(el, {\n                                 rotateZ: '45deg',\n                                 translateY: '30px',\n                                 translateX: '30px',\n                                 opacity: 0\n                            }, { complete: done }); \n                      }\n              }\n       }\n<\/scripy>",
                    shell3:"<transition \n      v-on:before-enter='beforeEnter' \n      v-on:enter='enter'\n      v-on:leave='leave'\n      v-bind:css = 'false'\n>\n      <p v-if='show'>javascript钩子函数执行动画</p>\n</transition>\n<a href='javascript:;' @click='FourBtn'>点击开始动画</a>"
                },
                Five:{
                    show:true,
                    shell:"<script>\n       export default {\n              data(){\n                       show:true \n              },\n              methods:{\n                       FiveBtn(){\n                               this.show = !this.show \n                       } \n              }\n       }\n<\/scripy>",
                    shell2:"<transition name='tran' mode='out-in'>\n        <p :key='show'>{{show ? 'yes' : 'no'}}</p>\n</transition>\n<a href='javascript:;' @click='FiveBtn'>点击开始动画</a>",
                    shell3:".tran-enter-active,.tran-leave-active{\n        transition: all .5s;\n}\n.tran-enter{\n        opacity: 0;\n        transform: translateX(10px);\n}\n.tran-leave-to{\n        opacity: 0;\n        transform: translateX(-10px);\n}",
                },
                six:{
                    complete:dynamicOne,
                    shell:"<script>\n       import One from '@/components/One'\n        import Two from '@/components/Two'\ndata(){\n        return{\n              complete:One \n        }\n},\nmethods:{\n       Acom(){\n               this.complete = One\n       },\n       Bcom(){\n               this.complete = Two\n       }\n}\n<\/script>",
                    shell2:"<transition name='tran' mode='out-in'>\n        <component :is='complete'></component>\n</transition>\n<a href='javascript:;' @click='Acom'>A组件</a>\n<a href='javascript:;' @click='Bcom'>B组件</a>",
                },
                seven:{
                    items:[1,2,3,4,6,7,8,9,10],
                    itemslength:11,
                    shell:"<script>\ndata(){\n        return:{\n              items:[1,2,3,4,6,7,8,9,10],\n              itemslength:11,\n        }\n},\nmethods:{\n        randomIndex(){\n              return Math.floor(Math.random() * this.items.length);\n        },\n        add(){\n              this.items.splice(this.randomIndex(), 0, this.itemslength++);\n        },\n        remove(){\n              this.items.splice(this.randomIndex(), 1);\n        },\n        shuffle(){\n              this.items = _.shuffle(this.items)\n        }\n}\n<\/script>",
                    shell2:"<transition-group name='list-complete' tag='div'>\n         <p v-for='item in items' v-bind:key='item' class='list-complete-item'>{{item}}</p>\n</transition-group>\n<a href='javascript:;' @click='shuffle'>排序</a>\n<a href='javascript:;' @click='add'>添加</a>\n<a href='javascript:;' @click='remove'>删除</a>",
                    shell3:".list-complete-enter, .list-complete-leave-to{\n        opacity: 0;\n        transform: translateY(30px);\n}\n.list-complete-leave-active {\n       position: absolute;\n}"
                },
                eight:{
                    items:[
                        {id:0,num:1},
                        {id:1,num:2},
                        {id:2, num:3},
                        {id:3, num:4},
                        {id:4, num:5},
                        {id:5, num:6},
                        {id:6, num:7},
                        {id:7, num:8},
                        {id:8, num:9},
                        {id:9,num:1},
                        {id:10,num:2},
                        {id:11, num:3},
                        {id:12, num:4},
                        {id:13, num:5},
                        {id:14, num:6},
                        {id:15, num:7},
                        {id:16, num:8},
                        {id:17, num:9},
                        {id:18,num:1},
                        {id:19,num:2},
                        {id:20, num:3},
                        {id:21, num:4},
                        {id:22, num:5},
                        {id:23, num:6},
                        {id:24, num:7},
                        {id:25, num:8},
                        {id:26, num:9},
                        {id:27,num:1},
                        {id:28,num:2},
                        {id:29, num:3},
                        {id:30, num:4},
                        {id:31, num:5},
                        {id:32, num:6},
                        {id:33, num:7},
                        {id:34, num:8},
                        {id:35, num:9},
                        {id:36,num:1},
                        {id:37,num:2},
                        {id:38, num:3},
                        {id:39, num:4},
                        {id:40, num:5},
                        {id:41, num:6},
                        {id:42, num:7},
                        {id:43, num:8},
                        {id:44, num:9}
                    ], 
                    shell:"<script>\ndata(){\n      items:[\n          {id:'0',num:1},\n          {id:'1',num:2},\n          {id:'2',num:3},\n          {id:'3',num:4},\n          ......\n      ]\n},\nmethods:{\n         shuffle(){\n               this.items = _.shuffle(this.items)\n         }\n}\n<\/script>",
                    shell2:"<transition-group name='flip-list' tag='div' class='sudoku-container'>\n        <span class='cell' v-for='item in items' :key='item.id'>{{item.num}}</span>\n</transition-group>\n<a href='javascript:;' @click='shuffle'>排序</a>",
                    shell3:".flip-list-move {\n       transition: all 1s;\n}",
                },
                nine:{
                    query:"",
                    list:[
                        {msg:"Yang Xiao Bao"},
                        {msg:"Zhai Min Qian"},
                        {msg:"Kung Fury"},
                        {msg:"Chuck Norris"}
                    ],
                    shell:"<script>\ndata(){\n        return:{\n                query:' '\n                list:[\n                     {msg:'Yang Xiao Bao'},\n                     {msg:'Zhai Min Qian'},\n                     {msg:'Kung Fury'},\n                     {msg:'Chuck Norris'},\n                ]\n        }\n},\nmethods:{\n         beforeEnter(el){\n                el.style.opacity = 0;\n                el.style.height = 0;\n         },\n        enter(el,done){\n                var delay = el.dataset.index * 150;\n                setTimeout(()=>{\n                        Velocity(el,{opacity:1,height:'1.6em'},{complete:done});\n                },delay)\n        },\n        leave(el,done){\n                var  delay = el.dataset.index * 150;\n                setTimeout(()=>{\n                      Velocity(el,{opacity:0,height:0},{complete:done})\n                },delay)\n        }\n},\ncomputed:{\n      computedList(){\n             return this.list.filter((item)=>{\n                    return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1;\n             })\n       }\n}\n<\/script>",
                    shell2:"<input type='text' placeholder='输入字母搜索内容' v-model='query' />\n<transition-group tag='ul' v-bind:css='false' v-on:before-enter='beforeEnter' v-on:enter='enter' v-on:leave='leave'>\n            <li v-for='(item,index) in computedList' :key='item.msg' v-bind:data-index='index'>{{item.msg}}</li>\n</transition-group>",
                }
            }
        },
        methods: {
            OneBtn(){
                this.One.show = !this.One.show;
            },
            TwoBtn(){
                this.Two.show = !this.Two.show;
            },
            ThreeBtn(){
                this.Three.show = !this.Three.show;
            },
            FourBtn(){
                this.Four.show = !this.Four.show;
            },
            beforeEnter(el){
                console.log(el);
                el.style.opacity = 0;
                el.style.transformOrigin = 'left';
            },
            enter(el,done){
				Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
				Velocity(el, { fontSize: '1em' }, { complete: done })
            },
            leave(el,done){
				Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
			    Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
			    Velocity(el, {
			        rotateZ: '45deg',
			        translateY: '30px',
			        translateX: '30px',
			        opacity: 0
			    }, { complete: done })
			},
            FiveBtn(){
                this.Five.show = !this.Five.show;
            },
            Acom(){
                this.six.complete = dynamicOne;
            },
            Bcom(){
                this.six.complete = dynamicTwo;
            },
            randomIndex(){
                return Math.floor(Math.random() * this.seven.items.length);
            },
            add(){
                this.seven.items.splice(this.randomIndex(), 0, this.seven.itemslength++);
            },
            remove(){
                this.seven.items.splice(this.randomIndex(), 1);
            },
            shuffle(){
                this.seven.items = _.shuffle(this.seven.items)
            },
            shuffle2(){
                this.eight.items = _.shuffle(this.eight.items);
            },
            beforeEnter2(el){
                el.style.opacity = 0;
                el.style.height = 0;
            },
            enter2(el,done){
                var delay = el.dataset.index * 150;
                console.log(delay)
                setTimeout(()=>{
                    Velocity(el,{opacity:1,height:'1.6em'},{complete:done});
                },delay)
            },
            leave2(el,done){
                var  delay = el.dataset.index * 150;
                console.log(el.dataset.index);
                setTimeout(()=>{
                    Velocity(el,{opacity:0,height:0},{complete:done})
                },delay)
            }
        },
        components:{
            Header
        },
        computed: {
            computedList(){
                return this.nine.list.filter((item)=>{
                    return item.msg.toLowerCase().indexOf(this.nine.query.toLowerCase()) !== -1;
                })
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
    .animation{
        width: 1200px;
        margin:  30px auto;
    }
    .animation h4{
        font-size: 16px;
        color: green;
    }
    .animation li{
        border-bottom: 2px solid #000;
        margin-bottom: 20px;
        padding: 20px 0;
    }
    .animation .box{
        margin-top: 30px;
    }
    .animation .box::before{
        content: "";
        clear: both;
        display: block;
        height: 0;
    }
    .animation .box::after{
        content: "";
        clear: both;
        display: block;
        height: 0;
    }
    .animation .effect{
        width: 20%;
        border:2px solid #0000ff;
        float: left;
        margin-right: 2%;
        padding: 15px;
    }
    .animation .effect h5{
        font-size: 16px;
        color: #000;
    }
    .animation .effect a{
        padding: 8px 35px;
        display: inline-block;
        background:purple;
        color: #fff;
        margin-top: 10px;
    }
    .animation .effect p{
        font-size: 14px;
        margin-top: 15px;
    }
    .animation .effect::before{
        clear: both;
        contain: "";
        height: 0;
        display: block;
    }
    .animation .effect::after{
        clear: both;
        contain: "";
        height: 0;
        display: block;
    }
    .animation .effect li{
        display: block;
        float:none;
        margin-bottom: 0px;
    }
    .animation .jscode{
        width: 30%;
        background: #2b333b;
        float: left;
        margin-right: 2%;
    }
    .animation .csscode{
        width: 43%;
        background: #22af2e;
        float: left;        
    }
    .animation .text p{
        font-size: 16px;
        color: #0000ff;
        line-height: 25px;
    }
    .animation .text .red{
        color: red;
    }
    pre{
        color: #fff;
        font-size: 14px;
        line-height: 25px;
        padding: 15px;
        word-break: break-all;
    }
    /* 第一个特效 */
    .fade-enter-active{ /*整个进入动画 整个过程*/
        transition: all .5s;
    }
    .fade-enter{   /*进入时 触发的动画*/
        opacity: 0;
		transform: translateX(10px);
    }
    .fade-leave-active{  /*整个离开动画 整个过程*/
        transition: all .5s;
    }
    .fade-leave-to{/*离开时 触发的动画*/
        opacity: 0;
		transform: translateX(10px);
    }
    /* 第二个特效 */
    .fadeTwo-enter-active{
        animation:rotateIn 2s;
    }
    .fadeTwo-leave-active{
        animation: lightSpeedOut 1s;
    }
    @keyframes  rotateIn{
        from {
            transform-origin: center;
            transform: rotate3d(0, 0, 1, -200deg);
            opacity: 0;
        }
        to {
            transform-origin: center;
            transform: none;
            opacity: 1;
        }
    }
    @keyframes lightSpeedOut {
        from {
            opacity: 1;
        }
        to {
            transform: translate3d(100%, 0, 0) skewX(30deg);
            opacity: 0;
        }
    }
    /* 第三个特效 */
    .tran-enter-active,.tran-leave-active{  /* 进入动画，离开动画的整个过程*/
        transition: all .5s;
    }
    .tran-enter{
        opacity: 0;
        transform: translateX(10px);
    }


    .tran-leave-to{  /*进入动画 以什么形式进入  离开以什么形式离开*/
        opacity: 0;
        transform: translateX(-10px);
	}
    /* 第四个特效 */
    .list-complete-item{
        transition: all 1s;
        display: inline-block;
        margin-right: 10px;
    }
    .list-complete-enter, .list-complete-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }
    /* 第五个特效 */
    .sudoku-container{
        width: 238px;
        margin-top: 10px;
    }
    .cell{
        display: inline-block;
        text-align: center;
        line-height: 25px;
        width: 25px;
        height: 25px;
        border: 1px solid #aaa;
        margin-right: -1px;
        margin-bottom: -1px;
    }
    .flip-list-move {
        transition: all 1s;
    }
    .effect input{
        display: block;
        width: 100%;
        height: 25px;
        margin-top: 10px;
        font-size: 14px;
        color: #333;
    }
</style>
