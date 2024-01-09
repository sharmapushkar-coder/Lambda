var t=localStorage.getItem("authid")
var token=t.slice(8)
var name=localStorage.getItem("user")
setTimeout(function(){
  document.getElementById("auth").innerHTML="{Login Id:"+token+"... , username:"+name+"}"
},500)
if ( window !== window.parent ) 
{
      // The page is in an iframe   
} 
else 
{    
  //location.href="https://social.mountabu.repl.co/?utm-medium=error-page&utm-source=data.html&errorid="
      // The page is not in an iframe   
}

function logout(){
  localStorage.removeItem("authid")
  location.href="https://goldenchip.repl.co/?logout=1"
}