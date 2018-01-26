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
                        <p>4. </p>
                    </div> 
                </li>
                <li>
                    <h4># 多个组件的过渡</h4>
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
                        <p>4. </p>
                    </div> 
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue'
    import animate from 'animate.css'
    import  Velocity from 'velocity-animate'
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
            }
        },
        components:{
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
</style>
