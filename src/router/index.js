import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import basics from '@/views/basics'
import assembly from '@/views/assembly'
import hook from '@/views/hook'
import routes from '@/views/routes'
import transition from '@/views/transition'
import vuex from '@/views/vuex'
import four from '@/views/four'
// 基础语法
import interpolation from '@/components/knowledge/interpolation'
import instructions from '@/components/knowledge/instructions'
import computational from '@/components/knowledge/computational'
import styleClass from '@/components/knowledge/styleClass'
import rendering from '@/components/knowledge/rendering'
import listloop from '@/components/knowledge/listloop'
import filter from '@/components/knowledge/filter'
import eventFun from '@/components/knowledge/eventFun'
import model from '@/components/knowledge/model'
// 路由
import detailsPage from '@/components/demoCom/detailsPage'
import acceptData from '@/components/demoCom/acceptData'
// vuex
import vuexDemo from '@/components/demoCom/vuexDemo'
Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{
			path: '/',
			component: index,
		},
		{
			path:"/basics",
			component:basics,
			redirect:"/basics/interpolation",
			children:[
				{
					path:"interpolation",
					component:interpolation,
				},
				{
					path:"instructions",
					component:instructions
				},
				{
					path:"computational",
					component:computational
				},
				{
					path:"styleClass",
					component:styleClass
				},
				{
					path:'rendering',
					component:rendering
				},
				{
					path:'listloop',
					component:listloop
				},
				{
					path:'filter',
					component:filter
				},
				{
					path:'eventFun',
					component:eventFun
				},
				{
					path:'model',
					component:model
				}
			]
		},
		{
			path:'/assembly',
			component:assembly
		},
		{
			path:'/hook',
			component:hook
		},
		{
			path:'/routes',
			component:routes
		},
		{
			path:'/details/:id',
			component:detailsPage
		},
		{
			path:'/acceptData',
			component:acceptData
		},
		{
			path:'/transition',
			component:transition
		},
		{
			path:'/vuex',
			component:vuex
		},
		{
			path:"/vuexDemo",
			component:vuexDemo
		},
		{
			path:"*",
			component:four
		}
	]
})
