import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCbkL75lIX1IJrsvRhJ62277tuHNq20EjY",
    authDomain: "waldoapp-b68a2.firebaseapp.com",
    projectId: "waldoapp-b68a2",
    storageBucket: "waldoapp-b68a2.appspot.com",
    messagingSenderId: "130659652635",
    appId: "1:130659652635:web:209432af2b8feb0edb14be",
    measurementId: "G-9KW2K8V73X"
  };
  const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export{db}