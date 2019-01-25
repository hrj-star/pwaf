window.onload=function(){
	document.getElementById("result").style.display="none";
};
var url="http://numbersapi.com/";

async function numcall(){
var getnum=document.getElementById('searchBox').value;
var num="?json";
var response=await fetch(url+getnum+num);
var res=await response.json();
console.log(res.text);
document.getElementById("def").innerHTML=res.text;
document.getElementById("result").style.display="block";
}
