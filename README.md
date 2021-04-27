## `LIVE PROJECT :`

https://challenge-9a753.web.app

## To get started with React project

### npx create-react-app amazon-clone

or just clone it from here...

### git clone https://github.com/Akansha0211/Amazon-Clone.git

## To run the React app in your localhost

Go In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Firebase

### `User Authentication`

Go to Firebase console : https://console.firebase.google.com/u/0/
Now create a new project and copy the configuration code from in there to your project in file firebase.js

### npm install firebase

### Then intialize the app using :

### `const firebaseApp = firebase.initializeApp(firebaseConfig)`

### Also Intialize the db and auth similarly:

### `const db = firebaseApp.firestore()`

### `const auth = firebase.auth()`

### export the db and auth to use it outside of the firestore

### export{db,auth}

### `Deploying the app`

In the cmd prompt

### npm i -g firebase-tools

firebase login\
firebase init : (use arraow keys in cmd prompt and select -->) Hosting : Configure and deploy Firebase Hosting sites

### npm run build

The above cmd will create an optimized production build

### firebase deploy
