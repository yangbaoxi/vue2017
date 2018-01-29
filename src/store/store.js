import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict:true,
    state:{
        list:[
            {name:"成都",author:"赵雷"},
            {name:"童话镇",author:"陈一发儿"},
            {name:"亲爱的你",author:"葛雨晴"},
            {name:"灰色头像",author:"许嵩"}
        ],
        msg:"我是store.js中的一条数据。",
        msg2:3,
        index:0,
        ticketData:{
            depCity:"",
            arrCity:"",
            depTime:"",
            arrTime:"",
            name:"" 
        }
    },
    getters:{
        saleList:(state)=>{
            let saleList = state.list.map((list)=>{
                return{
                    name:"歌名：" + list.name,
                    author:'作者：' + list.author
                }
            })
            return saleList
        }
    },
    mutations:{
        AddData:(state,payload)=>{
            console.log(payload);
            state.msg = payload;
        },
        modifyTime:(state,payload)=>{
            state.msg2 = payload;
        },
        headerClick(state,payload){
            state.index = payload;
        },
        ticketData(state,payload){
            Object.assign(state.ticketData,payload);
        }
    },
    actions:{
        addTime:(context,payload)=>{
            setTimeout(()=>{
                context.commit('modifyTime',payload)
            },2000)
        }
    }
})