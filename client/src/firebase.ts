import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC6oIFStFY0E9XFL60zSMwfD_SXCI1CPTE',
  authDomain: 'good-news-31af0.firebaseapp.com',
  projectId: 'good-news-31af0',
  storageBucket: 'good-news-31af0.appspot.com',
  messagingSenderId: '771195273875',
  appId: '1:771195273875:web:ea9c9ca60350afa9cb8366',
  measurementId: 'G-4FBFCHX7YB',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
