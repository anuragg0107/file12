// write js code here corresponding to favourites.html
var matchFavourites =JSON.parse(localStorage.getItem("favourites"));
 console.log(matchFavourites)
displayData(matchFavourites)
function displayData(data){
    data.forEach(function (elem){
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

        var td6=document.createElement("button");
        td6.innerText = "Delete"
        td6.addEventListener("click", function(elem){
         elem.target.trNode.remove();
        })

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr);

    })

    }
