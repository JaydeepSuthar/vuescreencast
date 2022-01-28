<template>
	<v-container>
		<h2 class="h1">Register</h2>

		<UserAuthForm :submitForm="handleUserRegistration" buttonText="Register" hasName="true" />
	</v-container>
</template>

<script>
	import UserAuthForm from '@/components/UserAuthForm.vue'

	export default {
		components: {
			UserAuthForm
		},
		methods: {
			handleUserRegistration(registrationinfo) {
				alert('user Register')
			}
		}
	}
</script>
