export default async function ({ $auth, redirect, store }) {
	let user = $auth.user;

	if (user && user.role == 'student') {
		// let user in
		redirect('/courses')
	} else {
		store.dispatch('snackbar/setSnackbar', { color: 'error', text: 'You must be an admin to visit this page' })
		redirect('/')
	}
}
