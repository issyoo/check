


  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyBVrRabMjHB6JSWoIxpgDp6Wnn1_eryP6g",

    authDomain: "chat-9a308.firebaseapp.com",

    projectId: "chat-9a308",

    storageBucket: "chat-9a308.appspot.com",

    messagingSenderId: "425014899154",

    appId: "1:425014899154:web:be7fb6b68d239647e2180b",

    measurementId: "G-334Y4TXNJD"

  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

  

  

  import{

      getFirestore,Timestamp , doc, getDoc, getDocs, limit, orderBy, query, where, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, onSnapshot, arrayUnion

  }

  from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

  

  import { getAuth, signInWithPopup, GoogleAuthProvider , signOut

  } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

import { getStorage, ref as sRef, uploadBytesResumable , getDownloadURL

  } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-storage.js";

const auth = getAuth(app);

  const db = getFirestore();

  

  

 

  var allApp = document.getElementById("all");

  var inp_ = document.getElementById("inp_");

  var optTab = document.getElementById("optionTab");

  var cnt = document.getElementById("cnt");

  var cmt = document.getElementById("cmt");

  var c_app = document.getElementById("app");

  var inp = document.getElementById("input");

  var send = document.getElementById("send");

  var publicChat = document.getElementById("publicChat");

  var people = document.getElementById("people");

  var explore = document.getElementById("explore");

  var profile = document.getElementById("profile");

  var dashboard = document.getElementById("dashboard");

  var name_ = document.getElementById("name_");

  

      

     

 

  var capp = document.getElementById("feedapp");

 

  var optTab = document.getElementById("optionTab");

  var cnt = document.getElementById("cnt");

  var fcmt = document.getElementById("feedcmt");

  

  var finp = document.getElementById("feedinput");

  var fsend = document.getElementById("feedsend");

  

  var chat_lnth ="";

  var msg ="";

  var timer = false;

  var emailUser ="";

  var nameUser = "";

  var nameCurrent = "";

var uid = "";

      

     

  //creating account

     async function Create_acc(){

         var ref = doc(db, "People", name_.value);

      const docRef = await setDoc(

          ref, {

              UserName: nameUser,

              Name: name_.value,

              Gender: gender,

              Dob: dob_.value,

              Phone: tel_.value,

              Time: Timestamp.fromDate(new Date()),

              Email: emailUser,

              Uid: uid

          }

          )

          .then(()=>{

              alert("Account added");

              Add_Name();

              cnt.hidden = true;

              Get_login_data(); 

          })

          .catch((error)=>{

              alert("error: " + error);

          })

          

     }

     

 save.addEventListener("click", Check_login_data);

 

 

     //adding to list

      async function Add_Name(){

      //let name = document.getElementById("inp_").value;

      var ref = doc(db, "Explore", uid);

      await setDoc(ref, {

    

      Name: name_.value,

      Email: emailUser,

          Id: uid

    

});

      }

     //logging in

      async function Get_login_data(){

    

    var ref = doc(db, "Explore", uid);

      

      const docSnp = await getDoc(ref);

    

    if(docSnp.exists()){

    

     nameCurrent = docSnp.data().Name;

     cnt.hidden = true;

     Get_publicChat_data();

      getsmt();

     }

     else{

     //console.log(email);

     //console.log(emailUser);

       cnt.hidden = false;

          document.getElementById("inp_").value = nameUser;

     }

      

      

    }

    

    

    //Cheaking

      async function Check_login_data(){

    

          var ref = doc(db, "People", name_.value);

      

      const docSnap = await getDoc(ref);

    

    if(docSnap.exists()){

    alert("Username is already used try other");

      }

      else{

      if( dob_.value != "" && tel_.value != "" && gender != ""){

          Create_acc();

          }

       else{

       alert(" Please fill input section");

       }

      }

      }

    

    

    async function getsmt(){

          var ref = doc(db, "People", nameCurrent);

      

      const docSnap = await getDoc(ref);

    

    if(docSnap.exists()){

    optTab.hidden = false;

    c_app.hidden = false;

    document.getElementById("dashboard").hidden = false;

    //let password = docSnap.data().Password;

    let gender = docSnap.data().Gender;

    //let link = docSnap.data().Link;

    let phone = docSnap.data().Phone;

    let dob = docSnap.data().Dob;

      document.getElementById("dashboard").hidden =false;

      

 var ds =document.getElementById("dashboard");

      ds.hidden =false;

      document.getElementById("userIname").innerHTML = nameUser;

document.getElementById("userIlink").innerHTML = emailUser;

document.getElementById("userIphone").innerHTML = phone;

document.getElementById("userIdob").innerHTML = dob;

      if( gender == "male"){

        ds.style.backgroundColor = "rgb(242,250,255)";

        ds.setAttribute("class", "boy");

        c_app.style.backgroundColor = "rgb(242,250,255)";

        c_app.setAttribute("class", "boy");

        capp.style.backgroundColor = "rgb(242,250,255)";

        capp.setAttribute("class", "boy");

        allApp.style.backgroundColor = "rgb(242,250,255)";

        allApp.setAttribute("class", "boy");

        optTab.style.backgroundColor = "rgb(242,250,255)";

        optTab.setAttribute("class", "boy");

        document.getElementById("userIgen").innerHTML ="male";

        document.getElementById("userSgen").innerHTML ="male";

        document.getElementById("userSname").innerHTML ="person";

      }

          else{

           ds.style.backgroundColor = "#faeded";

           ds.setAttribute("class", "girl");

           allApp.style.backgroundColor = "#faeded";

           allApp.setAttribute("class", "girl");

           c_app.style.backgroundColor = "#faeded";

        c_app.setAttribute("class", "girl");

        capp.style.backgroundColor = "#faeded";

        capp.setAttribute("class", "girl");

        optTab.style.backgroundColor = "#faeded";

        optTab.setAttribute("class", "girl");

        document.getElementById("userIgen").innerHTML ="female";

        document.getElementById("userSgen").innerHTML ="female";

        document.getElementById("userSname").innerHTML ="person_3";

          }

      

      }

      else{

          

      }

      }

      

      

      async function Chat(){

          

          var feed_ref = doc(db, "Chat", "Chat");

     await updateDoc(

     feed_ref, {

          Chat: arrayUnion({

              Name: nameUser,

              Time: Timestamp.fromDate(new Date()),

              Message: inp.value

          })

      });

      }

      

      

      async function Get_Chat(){

      

          var ref = doc(db, "Chat", "Chat");

      

      const docSnap = await getDoc(ref);

    

    if(docSnap.exists()){

    document.getElementById("cmt").innerHTML = "";

    let l = docSnap.data().Chat.length - 1;

     for(let i =0; i < l; i++){

         var dv = document.createElement("div");

          cmt.appendChild(dv);

          var par = document.createElement("p");

          dv.appendChild(par);

          par.setAttribute("class" , "time");

          par.innerHTML = docSnap.data().Chat[i].Time.toDate();

          var h4 = document.createElement("p");

          dv.appendChild(h4);

          if(nameCurrent == docSnap.data().Chat[i].Name){

          dv.setAttribute("class", "my_cmt");

          h4.innerHTML ="You";

          }

          else{

              dv.setAttribute("class", "comment");

          h4.innerHTML = docSnap.data().Chat[i].Name;

          }

          h4.style.fontSize ="11px";

          h4.style.fontWeight ="bold";

          h4.style.fontFamily ="Nunito";

          var r = document.createElement("p");

          dv.appendChild(r);

          r.innerHTML = docSnap.data().Chat[i].Message;

         

     }

     inp.value ="";

    }

      }

      

      function get_typer(){

      let name = nameCurrent;

      var typ_info = document.getElementById("typing");

      UpdateTyper();

      const get_typr = onSnapshot(doc(db, "People", "People"), (doc) => {

    let nam = doc.data().name;

    typ_info.innerHTML = nam;

    typ_info.hidden = 0;

    if(timer){

    clearTimeout(myTimeout);

    }

    const myTimeout = setTimeout(type_hide, 1000);

    timer = true;

    });

      }

      

      

      async function UpdateTyper(){

      let name = nameCurrent;

      const typer = doc(db, "People", "People");

        await updateDoc(typer, {

        name: name + " is typing..."

});

}

     function type_hide(){

       timer = false;

        document.getElementById("typing").hidden =1;

     }

      

      

      async function getPeople(){

      capp.hidden = true;

      c_app.hidden = true;

      explore.hidden = false;

      explore.innerHTML ='<span onclick="homePeople()" class="material-symbols-outlined">arrow_back</span>';

      

        var ref = doc(db, "People", "People");

        

        const docSnap = await getDoc(ref);

    

    if(docSnap.exists()){

    let l = docSnap.data().People.length;

     for(let i =0; i < l; i++){

     let dv = document.createElement("div");

     let name = docSnap.data().People[i].Name;

     explore.appendChild(dv);

     dv.innerHTML = name;

     dv.setAttribute("class", "iPeople");

     dv.setAttribute("id", docSnap.data().People[i].Name);

     let btn = document.createElement("button");

     let mBtn = document.createElement("button");

    // dv.appendChild(mBtn);

     dv.appendChild(btn);

     btn.innerHTML = "View Profile";

     btn.onclick = getProfile;

     mBtn.innerHTML = "message";

    // mBtn.onclick = message;

      }

      }

      else{

        console.log("no people found");

      }

      }

      

      

      async function getProfile(){

        var person = this.parentNode.id;

       // document.getElementById("prflCard").hidden = false;

        //document.getElementById("homePeople").hidden = true;

        var ref = doc(db, "People", person);

      

      const docSnap = await getDoc(ref);

    

    if(docSnap.exists()){

    let password = docSnap.data().Password;

    let gender = docSnap.data().Gender;

    //let link = docSnap.data().Link;

    let phone = docSnap.data().Phone;

    

    let prflCard = document.createElement("div");

    let pCard = document.createElement("div");

    let clse = document.createElement("span");

    clse.setAttribute("class", "material-symbols-outlined");

    clse.innerHTML ="close";

    clse.addEventListener("click", function(){ prflCard.remove()});

    prflCard.setAttribute("id", "prflCard");

    pCard.setAttribute("id", "pCard");

    explore.appendChild(prflCard);

     prflCard.appendChild(pCard);

     prflCard.appendChild(clse);

     let ic = document.createElement("span");

     pCard.appendChild(ic);

     //ic.setAttribute("class", "material-symbols-outlined");

     ic.innerHTML = `<svg height="160px" width="250px">

        <circle stroke="rgb(222,222,222)" stroke-width="17" fill="none" cx="135px" cy="100px" r="85px"></circle>

            <circle stroke="rgb(222,222,222)" stroke-width="17" fill="none" cx="135px" cy="170px" r="55px"></circle>

            <circle stroke="rgb(222,222,222)" stroke-width="17" fill="none" cx="135px" cy="80px" r="35px"></circle>

        </svg>`;

     let he = document.createElement("h3");

     pCard.appendChild(he);

     he.textContent = person;

     }

       else{

         alert("data not found!");

       }

      }

      

      async function Get_publicChat_data(){

          var ref = doc(db, "People", nameCurrent);

      

      const docSnap = await getDoc(ref);

    

    if(docSnap.exists()){

   // let password = docSnap.data().Password;

    let gender = docSnap.data().Gender;

    //let link = docSnap.data().Link;

    let phone = docSnap.data().Phone;

      

      if(gender =="male"|| gender =="female"){

      //document.getElementById("dashboard").hidden =true;

          if(gender =="male"){

             c_app.setAttribute("class", "boy");

          c_app.hidden =false;

          capp.hidden = true;

          c_app.style.background ="rgb(250,250,255)";

          }

          else{

            c_app.setAttribute("class", "girl");

           // cnt1.hidden =true;

          //cnt2.hidden =true;

          //cnt3.hidden =true;

          c_app.hidden =false;

          c_app.style.background ="rgb(255,240,240)";

          }

          Get_Chat();

          const unsub = onSnapshot(doc(db, "Chat", "Chat"), (doc) => {

    chat_lnth = doc.data().Chat.length;

    msg = doc.data().Chat[doc.data().Chat.length-1].Message;

     

    var dv = document.createElement("div");

          cmt.appendChild(dv);

          var par = document.createElement("p");

          dv.appendChild(par);

          par.setAttribute("class" , "time");

          par.innerHTML = doc.data().Chat[doc.data().Chat.length-1].Time.toDate();

          var h4 = document.createElement("a");

          dv.appendChild(h4);

          if(nameCurrent == doc.data().Chat[doc.data().Chat.length-1].Name){

          dv.setAttribute("class", "my_cmt");

          h4.innerHTML ="You";

          }

          else{

              dv.setAttribute("class", "comment");

          h4.innerHTML = doc.data().Chat[doc.data().Chat.length-1].Name;

          }

          h4.style.fontSize ="11px";

          h4.style.fontWeight ="bold";

          h4.style.fontFamily ="Quicksand";

          var r = document.createElement("p");

          dv.appendChild(r);

          r.innerHTML = msg;

          dv.scrollIntoView();

          inp.value ="";

          navigator.vibrate(40);

});

    

}

else{

              alert("I guss u havent given your gender detail. It is used to enhance your app experience. Please Sign up again to continue");

          }

      }

      

      else{

          alert("no user found");

      }

}

      

     

         

    async function Get_Feed(){

        

          capp.hidden = false;

          document.getElementById("explore").hidden = true;

          c_app.hidden = true;

              const querySnapshot = await getDocs(collection(db, "Feed"));

querySnapshot.forEach((doc) => {

  // doc.data() is never undefined for query doc snapshots

  console.log(doc.id, " => ", doc.data());

             

    var caption = doc.data().Message;

     

    var dv = document.createElement("div");

          fcmt.appendChild(dv);

          var par = document.createElement("p");

          dv.appendChild(par);

          par.setAttribute("class" , "time");

          par.innerHTML = doc.data().Time.toDate();

          var h4 = document.createElement("a");

          dv.appendChild(h4);

          if(nameCurrent == doc.data().Name){

          dv.setAttribute("class", "my_feed");

          h4.innerHTML ="You";

          }

          else{

              dv.setAttribute("class", "feed");

          h4.innerHTML = doc.data().Name;

          }

          h4.style.fontSize ="11px";

          h4.style.fontWeight ="bold";

          h4.style.fontFamily ="Quicksand";

          var ffl = doc.data().FileTyp;

          if( ffl == "none"){

           }

           else{

             let ifrm = document.createElement(ffl);

             ifrm.setAttribute("src", doc.data().Url);

             if( ffl == "audio" || ffl == "video"){

             ifrm.controls = true;

             }

             dv.appendChild(ifrm);

           }

          var r = document.createElement("p");

          dv.appendChild(r);

          r.innerHTML = caption;

          dv.scrollIntoView();

          finp.value ="";

          //navigator.vibrate(40);

          });

     }

async function GetPfeed(){

      

          

    //  import { collection, query, where, onSnapshot } from "firebase/firestore";

const q = query(collection(db, "Feed"), orderBy("Time"));

const unsubscribe = onSnapshot(q, (querySnapshot) => {

  const cities = [];

  querySnapshot.forEach((doc) => {

      cities.push(doc.data().Name);

  });

  fcmt.innerHTML = "";

  console.log("Current cities in CA: ", cities.join(", "));

  Get_Feed();

          capp.hidden = false;

          

c_app.hidden = true;

          document.getElementById("explore").hidden = true;

});

    

      }

      

      

      async function AddFeed(){

          

          

  var feed_ref = collection(db, "Feed");

    await addDoc(

     feed_ref, {

         

              Name: nameCurrent,

              Time: Timestamp.fromDate(new Date()),

                FileTyp: "none",

              ImgName: "",

              Url: "",

              Message: finp.value,

          

      })

      }

      

      

      

      

      

      

      

      

     

     

     

     const provider = new GoogleAuthProvider();

 async function GoogleLogin(){

signInWithPopup(auth, provider)

  .then((result) => {

    // This gives you a Google Access Token. You can use it to access the Google API.

    const credential = GoogleAuthProvider.credentialFromResult(result);

    const token = credential.accessToken;

    // The signed-in user info.

    const user = result.user;

    console.log(result);

    // ...

    showUserDetails(result.user);

     showDash();

  }).catch((error) => {

    // Handle Errors here.

    const errorCode = error.code;

    const errorMessage = error.message;

    // The email of the user's account used.

    const email = error.customData.email;

    // The AuthCredential type that was used.

    const credential = GoogleAuthProvider.credentialFromError(error);

    // ...

  });

  

  }

  

  

  

  

  function showUserDetails(user){

        document.getElementById("userIname").innerHTML = `${user.displayName} `;

         emailUser =  `${user.email}`;

         nameUser = `${user.displayName}`;

        // UserID = `${user.email}`;

        // picUser = `${user.photoURL}`;

                                           if (user) {

    // User is signed in, see docs for a list of available properties

    // https://firebase.google.com/docs/reference/js/firebase.User

     uid = user.uid;

    const pPic = user.photuURL;

    // ...

  } else {

    alert(' User is signed out');

    // ...

  }

        // document.getElementById("pict").src = picUser;

      }

      

      async function LogOut(){

         

let auth = getAuth();

signOut(auth).then(() => {

  // Sign-out successful.

  document.getElementById('dashboard').hidden =true;

  c_app.hidden = true;

  optTab.hidden = true;

  document.getElementById("btnn").hidden = false;

}).catch((error) => {

  // An error happened.

});

      }

      

      function showDash(){

    

 

      Get_login_data();

      document.getElementById("btnn").hidden = true;

      }

document.getElementById("btnn").addEventListener("click" , GoogleLogin); 

     

      

      var files = [];

      var namebox = document.getElementById("name");

      var extlab = document.getElementById("extlab");

      var proglab = document.getElementById("upprogress");

      var upBtn = document.getElementById("upbtn");

      var dBtn = document.getElementById("dbtn");

      var reader = new FileReader();

      var inpt = document.createElement("input");

      inpt.type = "file";

      var filtyp = "";

      var attch = false;

      var pst = document.getElementById("pst");

      var url = "";

      

      inpt.onchange = e =>{

        files = e.target.files;

        var extension = GetFileExt(files[0]);

        var name = GetFileName(files[0]);

        namebox.innerHTML = name;

        extlab.innerHTML = extension;

        reader.readAsDataURL(files[0]);

        if( extension == ".jpg"){

          filtyp = "img";

        }

        else if( extension == ".mp4"){

          filtyp = "video";

        }

        else if( extension == ".mp3"){

          filtyp = "audio";

        }

        else{

        filtyp = "iframe";

        }

      }

      

      reader.onload = function (){

     var ftg = document.createElement(filtyp)

        ftg.setAttribute("src",  reader.result);

       ftg.setAttribute("id", "ifr");

        pst.appendChild(ftg);

        ftg.style.maxWidth = "70px";

       

        if( filtyp == "video" || filtyp == "audio" ){

          ftg.controls = true;

        }

      }

      

  function clk(){

    inpt.click();

   

  }

   function GetFileExt(file){

    var temp = file.name.split('.');

    var ext = temp.slice((temp.length-1),(temp.length));

    return '.' + ext[0];

    }

    function GetFileName(file){

    var temp = file.name.split("0");

    var fname = temp.slice(0,-1).join('.');

    return fname;

    }

    

    

    async function UploadProcess() { 

    var ImgToUpload = files [0];

var ImgName = namebox.innerHTML + extlab.innerHTML;

const metaData = {

contentType: ImgToUpload.type

}

const storage = getStorage();

const stroageRef = sRef(storage, "Images/"+ImgName);

const UploadTask = uploadBytesResumable (stroageRef, ImgToUpload, metaData);

UploadTask.on('state-changed', (snapshot) =>{ 

var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

if( progress != 100){

proglab.style.width =  progress + "vw";

}

else{

  cancelUp();

}

},

(error) =>{

  alert("error in uploading image: " + error);

},

() => {

  getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {

    SaveDownloadURL(downloadURL);

  })

}

);

}

async function SaveDownloadURL(url){

  var name = namebox.innerHTML;

  var ext = extlab.innerHTML;

  

  

  var feed_ref = doc(db, "Feed");

     await adddoc(

     feed_ref, {

          

              Name: nameCurrent,

              Time: Timestamp.fromDate(new Date()),

              FileTyp: filtyp,

              ImgName: (name+ext),

              Url: url,

              Message: finp.value,

          

      })

  .then(() =>{

    attch = false;

    filtyp = "";

    console.log("true");

  })

  

  

}

    function cancelUp(){

      proglab.style.width = 0;

      namebox.innerHTML = "";

      document.getElementById("imge").hidden = false;

      document.getElementById("pst").hidden = true;

      document.getElementById("ifr").remove();

    }

    

    function UploadProcesss(){

      if(attch){

        UploadProcess();

       

      }

      else{

        AddFeed();

      }

    }

    

   document.getElementById("imge").addEventListener("click", function(){

      attch = true;

      document.getElementById("imge").hidden = true;

      document.getElementById("pst").hidden = false;

      clk();

    })

    

    

     dBtn.addEventListener("click", cancelUp);

     

 document.getElementById("feed").addEventListener("click", GetPfeed)

      fsend.addEventListener("click", UploadProcesss);

      //check.addEventListener("click", Get_login_data);

      send.addEventListener("click", Chat);

      

      inp.addEventListener("keyup", get_typer);

      

      publicChat.addEventListener("click", Get_publicChat_data);

      

      people.addEventListener("click", getPeople);

      

      logout.addEventListener("click", LogOut);

