var firebaseConfig = {
      apiKey: "AIzaSyD2W7_SWyQupPiQ6ocim0C1__kuvs3sYb0",
      authDomain: "kwitter-73d9e.firebaseapp.com",
      databaseURL: "https://kwitter-73d9e-default-rtdb.firebaseio.com",
      projectId: "kwitter-73d9e",
      storageBucket: "kwitter-73d9e.appspot.com",
      messagingSenderId: "933814068118",
      appId: "1:933814068118:web:fb8ecc5ff96773513733b7",
      measurementId: "G-SYD9P9NGX2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
