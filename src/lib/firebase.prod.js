import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//  import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDgkK_l2bXOwPi4fpshgCaNJ5q6k6OYijc',
  authDomain: 'netflix-cab95.firebaseapp.com',
  projectId: 'netflix-cab95',
  storageBucket: 'netflix-cab95.appspot.com',
  messagingSenderId: '1090960631789',
  appId: '1:1090960631789:web:e939364c88e491348529e4',
  measurementId: 'G-D61X558FS2',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//  seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
