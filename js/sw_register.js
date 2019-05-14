if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./serviceworker.js')
	.then(function() {
		console.log('Registration succeeded!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}
