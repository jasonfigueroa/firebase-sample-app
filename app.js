$( document ).ready(function() {	
	// firebase config
	var config = {
		apiKey: "AIzaSyDQpg80dwhKPB3aslCxoGhf-1lI7m2INmo",
		authDomain: "test-86e0c.firebaseapp.com",
		databaseURL: "https://test-86e0c.firebaseio.com",
		projectId: "test-86e0c",
		storageBucket: "test-86e0c.appspot.com",
		messagingSenderId: "764224831384"
	};

	firebase.initializeApp(config);

	$('#submit-btn').click(function(event) {
		// needed to prevent some default behaviour when clicking the submit button
		event.preventDefault();
		
		const user = {};
		
		// getting data from form
		user.email = $('#email-input').val();
		user.username = $('#username-input').val();
		
		// unique key to be assigned to object to be appended to users
		var newPostKey = firebase.database().ref().child('users').push().key;
		
		var updates = {};

		// unique key generated above is used here
        updates[`/users/${newPostKey}/`] = user;
      
		// posting the object to firebase
		firebase.database().ref().update(updates);
		
		// clearing input fields of form
		$('#email-input').val('');
		$('#username-input').val('');
	});
});