var theName;
var gender;

var male = "MALE";
var female = "FEMALE";

let A = ["Item 1", "Item 2", "Item 3", "Item 4"];


theName = window.prompt("Enter Your Name", "");
A[0] = theName;


gender = window.prompt("Enter Your Gender", "").toUpperCase();


function LGender() {
    while (true) {
        if (gender !== male && gender !== female) {
            gender = window.prompt("Enter Your Gender", "").toUpperCase();
            A[1] = gender;
        } else {
            break;
            
        }
    }
    A[1] = gender;
}

LGender();

if (gender == "MALE"){
    window.alert("Welcome Mr " + theName);
} else if (gender == "FEMALE"){
    window.alert("Welcome Ms "+ theName)
} else
    window.alert("Welcome " + theName);




let age1 = window.prompt("How old are you?", "");
A[2] = age1;

let drink = window.prompt("what is your drink", "");
A[3] = drink;


let prepared = window.alert("Your Drink is being Prepared");

console.log("Name : " +  theName +'\n'  +"Drink : " + drink);

function commitData() { 
    document.getElementById("name").innerHTML=A[0];
    document.getElementById("genderli").innerHTML = "Gender : " + A[1];
    document.getElementById("ageli").innerHTML = "Age : " + A[2];
    document.getElementById("drinkli").innerHTML = "Drink : " + A[3];
};


commitData();