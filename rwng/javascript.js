alert("What a Modern Disaster This Gonna Be...")

var tblbtn = document.getElementById("tablebutton")
function fnn(){
    var container = document.getElementById("container")
    var table = document.createElement("table")   
    var row1 = document.createElement("tr")
    var row1c1 = document.createElement("td")
    var row1c2 = document.createElement("td")
    row1c1.textContent = "Name"
    row1c2.textContent = "Cousin of the Guy Who Killed the Dog in John Wick"
    row1.appendChild(row1c1)
    row1.appendChild(row1c2)

    var row2 = document.createElement("tr")
    var row2c1 = document.createElement("td")
    var row2c2 = document.createElement("td")
    row2c1.textContent = "Aliases"
    row2c2.textContent = "You don't wanna know"
    row2.appendChild(row2c1)
    row2.appendChild(row2c2)

    var row3 = document.createElement("tr")
    var row3c1 = document.createElement("td")
    var row3c2 = document.createElement("td")
    row3c1.textContent = "Capable of"
    row3c2.textContent = "Probably Something Boring"
    row3.appendChild(row3c1)
    row3.appendChild(row3c2)

    table.appendChild(row1)
    table.appendChild(row2)
    table.appendChild(row3)

    container.appendChild(table)


}

tblbtn.addEventListener("click", fnn)
tblbtn.ho
