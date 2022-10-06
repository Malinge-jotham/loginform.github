
function logr(){
//registration
var user=document.getElementById("username").value;
var em=document.getElementById("email").value;
var phone=document.getElementById("phonenumber").value;
var pass=document.getElementById("password").value;

//login page
var userl=document.getElementById("usernamel").value;
var eml=document.getElementById("emaill").value;
var phonel=document.getElementById("phonenumberl").value;
var passl=document.getElementById("passwordl").value;

//storage registration
var usern=localStorage.setItem("usernamer", user)
var ema=localStorage.setItem("emailr", em)
var phonen=localStorage.setItem("phonenumberr", phone)
var passw=localStorage.setItem("usernamer", pass)

//storange for login
var usernl=localStorage.setItem("usernamel", userl)
var emal=localStorage.setItem("email", eml)
var phonenl=localStorage.setItem("phonenumberl", phonel)
var passwl=localStorage.setItem("usernamel", passl)

//registration retrieve of data
var usern=localStorage.getItem("usernamer", user)
var ema=localStorage.getItem("emailr", em)
var phonen=localStorage.getItem("phonenumberr", phone)
var passw=localStorage.getItem("usernamer", pass)

//monitoring data from log in
var usernl=localStorage.getItem("usernamel", userl)
var emal=localStorage.getItem("email", eml)
var phonenl=localStorage.getItem("phonenumberl", phonel)
var passwl=localStorage.getItem("usernamel", passl)

var a="derick"
var aa="rg@gmail.com"
var aaa="0706745403"
var aaaaa=1234

var a="jotham"
var aa="rg@gmail.com"
var aaa="0706745403"
var aaaaa=1234


if((userl==a && emal==aa && phonenl==aaa && passwl==aaaa){
    alert("login succesful")
}
else{
    alert("invalid credentials")
}
}
