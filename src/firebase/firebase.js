// Syntax (* as) takes all named exports and dumps to a variable called firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// Child changed example
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   notes: 'May',
//   amount: 145000
// });

// Example using once()
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// Example using on()
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }, (e) => console.log('An error occurred', e));

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching', e);
//   });

// database.ref().set({
//   name: 'Jay Sullivan',
//   age: 44,
//   stressLevel: 8,
//   location: {
//     city: 'Houston',
//     country: 'United States'
//   },
//   job: {
//     title: 'Software engineer',
//     company: 'Microsoft'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e)
// });

// database.ref().update({
//   name: 'Jay',
//   age: 45,
//   job: 'Software engineer',
//   isSingle: null
// });

// database.ref().update({
//   job: 'Manager',
//   'location/city': 'New York'
// });

//database.ref('isSingle').set(null);

// database.ref('isSingle').remove().then(() => {
//   console.log('Data has been removed');
// }).catch((e) => {
//   console.log('Oops, an error: ', e);
// });