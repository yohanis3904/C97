
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = 
{
     apiKey: "AIzaSyCQ2vx2fxWor6_ExB_5fYtAkpSMCqaE1Xw", 
     authDomain: "classtest-4e861.firebaseapp.com",
      projectId: "classtest-4e861",
       storageBucket: "classtest-4e861.appspot.com",
        messagingSenderId:"773646604476",
          appId: "1:773646604476:web:8a07e349d9e14c2ab958b9" 
        };
         // Initialize Firebase 
         const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window. location="kwitter_page .html";
}
function redirectToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}