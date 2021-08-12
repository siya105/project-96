
var firebaseConfig = {
      apiKey: "AIzaSyCcLN3ek_MaKOfkhCd1gGdWLQcjcEb8ueY",
      authDomain: "kwitter-1353d.firebaseapp.com",
      databaseURL: "https://kwitter-1353d-default-rtdb.firebaseio.com",
      projectId: "kwitter-1353d",
      storageBucket: "kwitter-1353d.appspot.com",
      messagingSenderId: "332827048997",
      appId: "1:332827048997:web:d2c178d36d11b0eab253cc",
      measurementId: "G-7BWGBM278L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
    
          localStorage.setItem("room_name", room_name);
    
          window.location = "kwitter_page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
          //End code
          });});}
    getData();
    
    function redirectToRoomName(name)
    {
          console.log(name);
          localStorage.setItem("room_name", name);
          window.location = "kwitter_page copy.html";
    }

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}