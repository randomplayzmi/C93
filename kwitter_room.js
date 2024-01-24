const firebaseConfig = {
    apiKey: "AIzaSyDor5ZJ5Vc0rPKaufgWm3niTP7vc2WZVPQ",
    authDomain: "letschat-88e26.firebaseapp.com",
    projectId: "letschat-88e26",
    storageBucket: "letschat-88e26.appspot.com",
    messagingSenderId: "639306598347",
    appId: "1:639306598347:web:46018e3f5daecda007184e"
  };
  
  // Initialize Firebase
  firebaseConfig.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";