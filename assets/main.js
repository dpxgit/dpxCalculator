let huidigeGetal = 0;
//let volledigeRekensom = "0";
let rekensom = "";
let displayDiv = document.getElementById('displayDiv');
let calculationDiv = document.getElementById('calculationDiv');
let onthouden = 0;
let display = "0";
let prevAction = "";
displayDiv.innerHTML = huidigeGetal;

function updateRekensom(actie) {
    switch (actie) {
        case "Dot":
            //werkt nog niet
            display += ".";
        case "Plus":
            if (prevAction == "") {
                rekensom = display + "+";
                onthouden = display;
                prevAction = "+";
                display = "";
                //onthouden 
            }
            break;
        case "Minus":
            if (prevAction == "") {
                rekensom = display + "-";
                onthouden = display;
                prevAction = "-";
                display = "";
            }
            break;
        case "Divide":
            if (prevAction == "") {
                rekensom = display + "/";
                onthouden = display;
                prevAction = "/";
                display = "";
            }
            break;
        case "Times":
            if (prevAction == "") {
                rekensom = display + "*";
                onthouden = display;
                prevAction = "*";
                display = "";
            }
            break;
        case "Equals":
            rekensom += display;
            display = eval(rekensom);
            prevAction = "";
            //parseFloat(onthouden) + parseFloat(display)

            //onthouden = display;
            //display = "";
            break;
        case "Clear":
            display = "0";
            rekensom = "";
            prevAction = "";
            break;

        default:
            if (display == "0") {
                display = actie;

            } else {
                display += actie;

            }
            break;
    }
    calculationDiv.innerHTML = rekensom;
    displayDiv.innerHTML = display;

}

//acties wanneer er geklikt wordt 

var elements = document.getElementsByTagName('button');
for (var i = 0, len = elements.length; i < len; i++) {
    let itShine = elements[i].id.replace("vc", "")
    elements[i].onclick = function() {
        updateRekensom(itShine)
    }
}