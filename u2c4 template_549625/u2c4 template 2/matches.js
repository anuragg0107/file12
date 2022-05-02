// write js code here corresponding to matches.html

var matchesValue = JSON.parse(localStorage.getItem("schedule"));
// console.log(matchesValue);
var favourite =JSON.parse(localStorage.getItem("favourites")) || [];
displayData(matchesValue);

function displayData(data){
    data.forEach(function(elem){
        var tr = document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText = elem.matchName;

        var td2=document.createElement("td");
        td2.innerText = elem.matchTeamA;

        var td3=document.createElement("td");
        td3.innerText = elem.matchTeamB;

        var td4=document.createElement("td");
        td4.innerText = elem.matchDate;

        var td5=document.createElement("td");
        td5.innerText = elem.matchVenue;

        var td6=document.createElement("td");
        td6.innerText = "Add as Favourites"
        td6.style.color = "green"
        td6.style.cursor = "pointer"

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr);


    })
}

function AddAsFavourites(elem){
    //console.log(elem)
    favourite.push(elem);
    console.log(elem);
    localStorage.setItem("favourites", JSON.stringify(favourite))


}