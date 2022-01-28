<template>
	<!-- <div>
		{{ video.name }}



	</div> -->
	<div class="video">
		{{ $store.state.currentVideo.title }}
		<div class="video-card">
			<div class="card-img">
				<img :src="$store.state.currentVideo.thumbnail" :alt="$store.state.currentVideo.thumbnail">
			</div>
			<div class="card-title">{{ $store.state.currentVideo.title }}</div>
			<div class="card-body">
				Price: {{ $store.state.currentVideo.price }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		head() {
			return {
				title: this.$store.state.currentVideo.title
			}
		},
		async fetch({ params, $axios, store }) {
			let response = await $axios.get(`/course/${params.id}`);
			let video = await response.data;
			// debugger
			// console.log(response);

			store.commit('SET_CURRENT_VIDEO', video)
		},
		// data: () => {
		// 	return {
		// 		videos: [
		// 			{
		// 				id: 1,
		// 				name: 'Nodejs Master Class',
		// 			},
		// 			{
		// 				id: 2,
		// 				name: 'Reactjs Master Class',
		// 			},
		// 			{
		// 				id: 3,
		// 				name: 'Vuejs Master Class',
		// 			},
		// 		],
		// 	}
		// },
		// computed: {
		// 	video() {
		// 		return this.videos.find((v) => v.id == this.$route.params.id)
		// 	},
		// },
	}

</script>

<style lang="scss" scoped>
</style>
