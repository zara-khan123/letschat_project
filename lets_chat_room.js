var firebaseConfig = {
    apiKey: "AIzaSyCpZBYc9tTHtLvkWsyZqERbBu2MNWsemVw",
    authDomain: "lets-chat-e7fa7.firebaseapp.com",
    projectId: "lets-chat-e7fa7",
    storageBucket: "lets-chat-e7fa7.appspot.com",
    messagingSenderId: "613370506184",
    appId: "1:613370506184:web:f2445cea061f6081506efd",
    measurementId: "G-R678NVF3T1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML =  "Welcome " + user + "!";
  
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
          childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log(Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
    });});}
getData();

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "letschat_page.html";
}

function redirectToRoomName(name)
{
localStorage.setItem("room_name", name);
window.location = "letschat_page.html";
}
