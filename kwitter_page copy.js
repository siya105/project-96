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
    // Initialize Firebases
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

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
