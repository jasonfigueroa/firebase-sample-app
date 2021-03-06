# Basic Firebase App
This is a basic app with JavaScript & jQuery

Make sure to replace the config settings with the settings unique to your project.

From the Project Overview page click the the right-most circle with the label that reads, "Add Firebase to your web app". 
![alt text](https://raw.githubusercontent.com/jasonfigueroa/firebase-sample-app/master/images-for-readme/add-firebase-to-app.png)

On click you should see something like the following.
![alt text](https://github.com/jasonfigueroa/firebase-sample-app/blob/master/images-for-readme/firebase-config.png?raw=true)

Paste what is in the second script tag into the top of the jQuery block of app.js.

Make sure your database rules look like the following for simplicity. Anyone will be able to post to your database and read from it but firebase authentication is a separate beast not worth your time for a brief demo.
![alt text](https://github.com/jasonfigueroa/firebase-sample-app/blob/master/images-for-readme/database-rules.png?raw=true)

Run the app and on clicking the submit button with valid data you should see the results posted to firebase.
![alt text](https://github.com/jasonfigueroa/firebase-sample-app/blob/master/images-for-readme/results.png?raw=true)
