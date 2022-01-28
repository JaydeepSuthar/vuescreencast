<template>
	<div>
		<div v-for="video in $store.state.videos" :key="video.id">
			<Nuxt-Link :to="`/videos/${video.id}`">{{ video.title }}</Nuxt-Link>
		</div>
	</div>
</template>

<script>
	export default {
		head: {
			title: 'Videos list'
		},
		// async fetch({ $axios, store }) {
		// 	let response = await $axios.get(`/course`);
		// 	let videos = await response.data;

		// 	store.commit('SET_VIDEOS', videos);
		// }

		// ? this is an asyncData() hook method for fetching video from backend
		// async asyncData({ $axios }) {
		// 	let response = await $axios.get(`/course`);
		// 	let videos = await response.data;

		// 	return {
		// 		videos
		// 	}
		// }
	}
</script>
