<template>
	<div>
		<mt-header title="标题过长">
			<mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>

</style>