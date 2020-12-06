
var auth = sessionStorage.getItem("franchiselogin");

if(auth=="true")
{

window.location.href = "index.html"

} 









// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDnc7xPnLSZFpOKLz_dB5prC2h_qHl4lzQ",
    authDomain: "agrows-890f8.firebaseapp.com",
    projectId: "agrows-890f8",
    storageBucket: "agrows-890f8.appspot.com",
    messagingSenderId: "828179935323",
    appId: "1:828179935323:web:1dcba8f9eff458b6260f7e",
    measurementId: "G-ZBDWWVYD8J"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Get a reference to the database service
var database = firebase.database();
var members;
var childkeys;
var len;

var authentiacte = database.ref("farmer");
authentiacte.on('value',function gotData(data)
{


  members = data.val();
  childkeys = Object.keys(members);
  len = childkeys.length;

 
});










function authin()
{ 
   
 var user = $("#username").val();
 var pass = $("#password").val();
 var acc = false; 
 
 
 for(var i=0; i<len; i++)
 {
 
 var k = childkeys[i];
 var bemail = members[k].email;
 var access_key = members[k].password;
 var status = members[k].status;
 var fid = members[k].fid;

 
 if(bemail==user&&access_key==pass)
 {

acc = true;

 if(status=="enabled"){
   
 sessionStorage.setItem("franchiselogin", "true");
 sessionStorage.setItem("childkey", k);
 sessionStorage.setItem("fid", fid);
 sessionStorage.setItem("access_key", access_key);
 window.location.href = "index.html";
 }else{

  alert("account " + status);
 
  
 }
 
 }
 }
 if(acc==false){
  alert("account not found");
 }

 }