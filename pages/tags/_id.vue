<template>
	<div>
		<div class="display-4 ma-4 d-flex justify-center">
			All Videos With Tag "{{ this.$route.params.id }}"
		</div>

		<div class="d-flex flex-wrap">
			<div v-for="video in videosOnTag" :key="video.id">
				<video-list-video :video="video" />
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import VideoListVideo from '~/components/VideoListVideo.vue'

	export default {
		components: { VideoListVideo },
		computed: {
			...mapState({
				videos: state => state.videos.videos
			}),
			videosOnTag() {
				return this.videos.filter((v) =>
					v.tags.includes(this.$route.params.id)
				)
			},
			tag() {
				return this.tags.find((t) => t == this.$route.params.id)
			},
		},

	}
</script>

