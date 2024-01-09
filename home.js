
var database=firebase.database();
var authtoken=localStorage.getItem("authid")
var uname,width,height
var device
var ip ,devip
var home_visit=0;
var notification
var d_width=screen.width;
if(d_width<800){
  device="mobile"
  location.href="mobile.html"
}
else{
  $.getJSON("https://ipinfo.io",function(data){
    devip=data.ip
  })
  device="pc"
}
var code=window.location.search;
if(code==="?error=242"){
  setTimeout(function(){
    alert("Ther was an error while launching an application :chat ERRORCODE=242")
  },100)
}
else if(code==="?error=198"){
  setTimeout(function(){
    location.href="MAILTO:sharmapushkar800@gmail.com?Subject=Account%20Verification%20Request%20for%20my%20quantumOS%20Account"
    alert("Your account is not verified to use some services please mail the developers")
  },100)
}
setTimeout(function(){
   width=document.getElementById("main").offsetWidth
   height=document.getElementById("main").offsetHeight
},100)

var ban=false;
if(typeof authtoken==="undefined"||authtoken===null || authtoken===""){
  location.href="login"
}
else{
  database.ref("login/"+authtoken).on("value",function(snap){
    uname=snap.val().user
  })
  setTimeout(function(){
    if(typeof uname==="undefined"||uname===null||uname===""){
      document.getElementById("log_data").innerHTML="Unable to login . Make dure you have good Internet connection<a href=''style='color:yellow'>Try again?</a> or <a href='logout'style='color:yellow'>Login again</a>"
    }
    else{
      document.getElementById("load").style.display="none"
      document.getElementById("user-name").innerHTML="Welcome,"+uname
      document.getElementById("noti").src="https://connectopia.repl.co/noti/?u="+uname
    }
  },5000)
}
setInterval(function(){
  database.ref("users/"+uname).on("value",function(data){
    ban=data.val().ban
  })
  if(ban==="yes"){
    location.href="https://connectopia.repl.co/terminated.html?from=homepage_landing"
  }
  else{
    
  }
},1000)


function increase(){
  document.getElementById("main").style.width=width+5;
  document.getElementById("main").style.height=height+10;
}
function decrease(){
  document.getElementById("main").style.width=width-5;
  document.getElementById("main").style.height=height-5;
}
function home(){
  location.href="https://connectopia.repl.co/?refresh=2"
}

setInterval(function(){
  database.ref("global").on("value",function(noti){
    notification=noti.val().note
  })
  if(typeof notification==="undefined"||notification===null|| notification===""){
    
  }
  else{
    document.getElementById("info").style.display="block"
    document.getElementById("msg").innerHTML="A Push Notification received ! <br></br><b>"+notification+"</b>"
    
  }
},1000)


function video(){
   location.href="https://video.connectopia.repl.co/login?authid="+authtoken
}

function search(){
  var sname=document.getElementById('s').value;
  location.href='https://connectopia.repl.co/profile/?u='+sname
}




function tokenexp(){
  database.ref("login/"+authtoken).on("value",function(snap){
    ip=snap.val().ip
  })
  setTimeout(function(){
    if(typeof ip!="undefined"||ip!=null||ip!="" && ip!=devip){
       document.write("Your Token has expired Please login again .<iframe src='https://connectopia.repl.co/logout/'></iframe>")
    }
    else{
      
    }
  },5000)
}