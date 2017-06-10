import Vue from 'vue'
import Router from 'vue-router'
import ListTab from '@/components/ListTab'
import MovieInfo from '@/components/MovieInfo'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'ListTab',
			component: ListTab
		},
		{
			path: '/moveInfo/:id',
			name: 'MovieInfo',
			component: MovieInfo
		}
	]
})