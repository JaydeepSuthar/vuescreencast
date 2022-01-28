<template>
	<div class="mt-3">
		<h2 class="h1 display-1">Users List</h2>

		<v-spacer></v-spacer>

		<v-text-field
			v-model="search"
			single-line
			hide-details
			label="Search by name or email among all users"
		>
			<!-- <template #label>
				&nbsp; Search by name or email among
				{{ filteredUsers.length }} users
			</template> -->
		</v-text-field>


		<v-data-table
			:items="filteredUsers"
			:headers="headers"
			:search="search"
			class="mt-10 elevation-3"
		>
			<!-- :custom-filter="filter" -->
			<!-- <template #item.pro="{item}">
			<v-icon v-if="item.pro" color="green">mdi-check-circle</v-icon>
			<v-icon v-else color="red">mdi-cancel</v-icon>
		  </template>
		  <template #item.plan_id="{item}">
			{{ item.plan_id ? getPlanWithDefault(item.plan_id).name : ' – ' }}
		  </template> -->
		</v-data-table>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		async fetch({ store }) {
			await store.dispatch('loadAllUsers')
		},
		data() {
			return {
				search: ''
			}
		},
		computed: {
			...mapState(['users']),
			filteredUsers() {
				return this.users
			},
			headers() {
				return [
					{ text: 'Name', value: 'name' },
					{ text: 'Email', value: 'email' },
					{ text: 'Is Authenticated', value: 'is_authenticated' },
				]
			},
		},
	}
</script>

<style lang="scss" scoped>
</style>
