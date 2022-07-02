//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyB74LehjQReAoD6XPgEEKWGNPoLR3y7iRI",
      authDomain: "classtest-de7c2.firebaseapp.com",
      projectId: "classtest-de7c2",
      storageBucket: "classtest-de7c2.appspot.com",
      messagingSenderId: "606160461270",
      appId: "1:606160461270:web:05ed53a5f3a87fb7709877",
      measurementId: "G-HVH4R66YFQ"
    };
    
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

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