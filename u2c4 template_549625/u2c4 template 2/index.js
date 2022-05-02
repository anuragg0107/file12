// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", myFunction);
var arr= JSON.parse(localStorage.getItem("schedule")) || [];
function myFunction(){
    event.preventDefault();
   var matchObj ={
       matchName : document.querySelector("#matchNum").value,
       matchTeamA : document.querySelector("#teamA").value,
       matchTeamB : document.querySelector("#teamB").value,
       matchDate : document.querySelector("#date").value,
       matchVenue : document.querySelector("#venue").value,
   }
   arr.push(matchObj)
   console.log(arr)
  localStorage.setItem("schedule", JSON.stringify(arr));
  window.location.href ="matches.html"   

}
