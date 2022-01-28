<template>
	<v-main>
		<v-row>
			<v-col md="9" cols="12">
				<div
					class="video-player-box"
					ref="videoPlayer"
					v-video-player:myVideoPlayer="playerOptions"
				></div>
			</v-col>
			<v-col md="3" cols="12">
				<div class="display-1">{{ video.title }}</div>

				<!-- <div class="green--text" v-if="isPlayed(video.id)"></div> -->

				<div v-html="video.description"></div>

				<span v-for="tag in video.tags" :key="tag">
					<v-btn
						:to="`/tags/${tag}`"
						color="green lighten-2"
						class="mr-1 mb-2"
					>
						{{ tag }}
					</v-btn>
				</span>
			</v-col>
		</v-row>
	</v-main>
</template>

<script>
	import 'video.js/dist/video-js.css'

	import Vue from 'vue'
	import { mapState } from 'vuex'
	// If used in nuxt.js/ssr, you should keep it only in browser build environment
	if (process.browser) {
		const VueVideoPlayer = require('vue-video-player/dist/ssr')
		Vue.use(VueVideoPlayer)
	}

	export default {
		// components: {
		// 	videoPlayer,
		// },

		computed: {
			...mapState({
				videos: state => state.videos.videos
			}),
			video() {
				return this.videos.find(v => v.id == this.$route.params.id)
			},
			playerOptions() {
				return {
					// videojs options
					muted: true,
					language: 'en',
					playbackRates: [0.7, 1.0, 1.5, 2.0],
					sources: [
						{
							type: 'video/mp4',
							src: `http://localhost:5000/api/video/2`,
						},
					],
					poster: `http://localhost:8000/static/img/${this.video.thumnail}`,
					fluid: true,
				}
			},
			// video() {
			// 	return this.videos.find((v) => v.id == this.$route.params.id)
			// },
		},
	}
</script>
