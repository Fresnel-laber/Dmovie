<template>

	<div id="content">
		<router-view></router-view>
		<nav class="bar bar-tab">
			<router-link to='/user/foo' class="tab-item external active" href="#">
				<span class="icon icon-home"></span>
				<span class="tab-label">{{tab01}}</span>
			</router-link>
			<router-link to='/user/foo/tab02' class="tab-item external" href="#">
				<span class="icon icon-me"></span>
				<span class="tab-label">{{tab02}}</span>
				<span class="badge">2</span>
			</router-link>
			<router-link to='/user/foo/tab03' class="tab-item external" href="#">
				<span class="icon icon-star"></span>
				<span class="tab-label">{{tab03}}</span>
			</router-link>
			<router-link to='/user/foo/tab04' class="tab-item external" href="#">
				<span class="icon icon-cart"></span>
				<span class="tab-label">{{tab04}}</span>
			</router-link>
		</nav>
	</div>

</template>

<script>
	export default {
		name: 'Content',
		data() {
			return {
				tab01: '首页',
				tab02: '关于',
				tab03: '设置',
				tab04: '我的'
			}

		}
	
	const user = {
		template: `<div class="user"><router-view></router-view></div>`
	}
	const userHome = {
		template: '<div>home</div>'
	}
	const userHos = {
		template: '<div>阿达</div>'
	}
	const userPro = {
		template: '<div>profile</div>'
	}
	const userPosts = {
		template: '<div>梵蒂冈</div>'
	}
	const router = new VueRouter({
		routes: [{
			path: '/user/:id',
			component: user,
			children: [{
					path: '',
					component: userHome
				},
				{
					path: 'tab02',
					component: userHos
				},
				{
					path: 'tab03',
					component: userPro
				},
				{
					path: 'tab04',
					component: userPosts
				}
			]
		}]
	})

	const content = new Vue({
		router
	}).$mount('#content')
	}
</script>

<style>
	#content {
		width: 100%;
	}
</style>