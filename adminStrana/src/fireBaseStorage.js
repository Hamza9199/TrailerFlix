import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import firebaseConfig from './fireBase.js';

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;
