<template>
	<div>

		<mt-navbar>
			<mt-tab-item @click="chooseTab1">正在热映</mt-tab-item>
			<mt-tab-item @click="chooseTab2">即将上映</mt-tab-item>
		</mt-navbar>
		<!-- tab-container -->
		<div v-model="active">
			<ul id="tab-container1">
				<li v-for="item in arr">
					<img :src="item.images.small" alt="" />
					<h4>{{item.title}}</h4>
					<p>{{item.rating.average}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	export default {
		name: 'ListTab',
		data() {
			return {
				arr: "",
				active: "tab-container1"
			}
		},
		methods: {
			chooseTab1() {
				this.active = "tab-container1"
			},
			chooseTab2() {
				this.active = "tab-container2"
			}
		},
		created() {
			// 接口地址 https://api.douban.com
			// 正在热映 /v2/movie/in_theaters?callback=JSON_CALLBACK
			Vue.axios.get('../static/newshow.json').then((res) => {
				return res.data.subjects
			}).then((data) => {
				this.arr = data;
				this.arr.forEach((item) => {
					if(item.title.length<5){
						this.arr = data;
					}else{
						item.title = item.title.substring(0, 5) + "..."
					}
					return item.title
				})
			})
		}
	}
</script>

<style>
	html {
		font-size: 15.625vw
	}
	
	h4,
	p {
		font-weight: normal;
		font-size: 0.2rem;
		margin: 0.1rem;
	}
	
	li {
		list-style: none;
	}
	
	#tab-container1 {
		width: 100vw;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		padding: 0;
	}
	
	li {
		width: 25%;
		text-align: center;
	}
</style>