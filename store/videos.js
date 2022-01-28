import { getData } from '@/utils/store-utils'

export const state = () => ({
	videos: [],
})

export const mutations = {
	SET_VIDEOS(state, videos) {
		state.videos = videos
	},

	ADD_VIDEO(state, video) {
		let videos = state.videos.concat(video)
		state.videos = videos
	},

	EDIT_VIDEO(state, video) {
		let v = state.videos.find(v => v.id == video.id)
		v = video
	},
	DELETE_VIDEO(state, videoId) {
		let videos = state.videos.filter(v => v.id != videoId)
		state.videos = videos
	},
}

export const actions = {
	async loadAll({ commit }) {
		let { data: videos } = await getData('/course', this.$axios)

		commit('SET_VIDEOS', videos)
	},

	async create({ commit }, video) {
		let response = await this.$axios.post('/course/add', video);
		let savedVideo = response.data
		commit('ADD_VIDEO', savedVideo)
		return savedVideo
	},

	async edit({ commit }, video) {
		let response = await this.$axios.put(`/course/update/${video.id}`, video);
		let newVideo = response.data
		commit('EDIT_VIDEO', newVideo)
		return newVideo
	},

	async delete({ commit }, video) {
		// todo: make this work ** api section **

		let response = await this.$axios.delete(`/course/remove/${video.id}`);

		if (response.status == 200 || response.status == 204) {
			commit('DELETE_VIDEO', video.id)
		}
	}
}

export const getters = {
	get: state => id => {
		return state.videos.find(v => v.id == id) || {}
	}
}
