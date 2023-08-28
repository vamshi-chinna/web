const userName=document.getElementById("name").value
const userPassward=document.getElementById("Passward").value

let user={
    name:userName,
    passward:userPassward
}
 var json=JSON.stringify(user);
 localStorage.setItem("userdata",json)
 console.log(json)
  function register(){
    if(userName===" "||userPassward===" "){
        alert("please complete the form")
    }
    alert("user added")
  }