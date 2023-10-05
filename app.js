const hot = document.getElementById("hotdrink");
const cold = document.getElementById("colddrink");

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Age").value = "";
    hot.checked = false;
    cold.checked = false;
    document.getElementById("DrinkName").value = "";
    document.getElementById("disp").innerHTML = "disp";
}

document.getElementById("hotdrink").addEventListener("click", hotdrink);
function hotdrink() {
    cold.checked = false;
}

document.getElementById("colddrink").addEventListener("click", colddrink);
function colddrink() {
    hot.checked = false;
}

function printvalue() {
    var Name = document.getElementById("Name").value;
    var Age = document.getElementById("Age").value;
    var cold1 = document.getElementById("colddrink");
    var hot1 = document.getElementById("hotdrink");
    var DrinkName = document.getElementById("DrinkName").value;
    var A = [];

    if (cold1.checked === true) {
        A[0] = Name;
        A[1] = Age;
        A[2] = "Cold";
        A[3] = DrinkName;
        document.getElementById("disp").innerHTML =
            "Name: " + A[0] + '<br>' +
            "Age: " + A[1] + '<br>' +
            "Drink Type: " + A[2] + '<br>' +
            "Drink Name: " + A[3];
    }

    if (hot1.checked === true) {
        A[0] = Name;
        A[1] = Age;
        A[2] = "Hot";
        A[3] = DrinkName;
        document.getElementById("disp").innerHTML =
            "Name: " + A[0] + '<br>' +
            "Age: " + A[1] + '<br>' +
            "Drink Type: " + A[2] + '<br>' +
            "Drink Name: " + A[3];
    }
}
