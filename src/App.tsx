import logo from './assets/newLog.png'
import './App.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



function App() {

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDqIP2hSEC_pNaXJ5nNDMZmJWf3_f7hjDA",
    authDomain: "trado-5dfdb.firebaseapp.com",
    projectId: "trado-5dfdb",
    storageBucket: "trado-5dfdb.appspot.com",
    messagingSenderId: "871348723118",
    appId: "1:871348723118:web:7dcc108a34798c6cebbc3f",
    measurementId: "G-DLGL9CXLWX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className='form'></div>
    </>
  )
}

export default App
