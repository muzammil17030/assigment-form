  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { ref,set,getDatabase,push,onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCerXt5DB2GNxtMlCe4MV4uUl9dZkNjsSs",
    authDomain: "form-with-database-a7be8.firebaseapp.com",
    databaseURL: "https://form-with-database-a7be8-default-rtdb.firebaseio.com",
    projectId: "form-with-database-a7be8",
    storageBucket: "form-with-database-a7be8.appspot.com",
    messagingSenderId: "483762514678",
    appId: "1:483762514678:web:0d6c5fa2285faea0605ad7",
    measurementId: "G-P3VKWYHS85"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();



  var inp = document.getElementById("inp1");
  var a = document.getElementById("inp2")
  var b = document.getElementById("inp3")
  var c = document.getElementById("inp4")
  var d = document.getElementById("inp5")
  var e = document.getElementById("inp6")
  var f = document.getElementById("inp7")
  var g = document.getElementById("inp8")
  var h = document.getElementById("inp9")
  var i = document.getElementById("inp10")
  var j = document.getElementById("inp11")
  var k = document.getElementById("inp12")
  var l = document.getElementById("inp13")
  var m = document.getElementById("inp14")

window.add = function () {
    var obj = {
        text: inp.value,
        n : a.value,
        o : b.value,
        p : c.value,
        q : d.value,
        r : e.value,
        s : f.value,
        t : g.value,
        u : h.value,
        v : i.value,
        w : j.value,
        x : k.value,
        y : l.value,
        z : m.value,
    };
    console.log(inp.value)
  obj.id = push(ref(database,"tasks/")).key;
  var refrence = ref(database,`tasks/${obj.id}`);
  set(refrence,obj);
};

function getData(){
  var refrence = ref(database,"tasks/");
  onValue(refrence,function (data){
    console.log(data.val());
  }); 
}
getData()


