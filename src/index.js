import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//TEMP
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAtBwUvUSqoaFSWyhTemHGx4HlOS5gsmFo",
  authDomain: "smartq-333117.firebaseapp.com",
  projectId: "smartq-333117",
  storageBucket: "smartq-333117.appspot.com",
  messagingSenderId: "789231561358",
  appId: "1:789231561358:web:27926b701a4863f295b7df",
  measurementId: "G-PY51NVC3EN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//TEMP

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
