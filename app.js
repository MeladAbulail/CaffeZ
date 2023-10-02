var theName;
var gender;

var male = "MALE";
var female = "FEMALE";

let A = ["Item 1", "Item 2", "Item 3", "Item 4"];


theName = window.prompt("Enter Your Name", "");
A[0] = theName;


gender = window.prompt("Enter Your Gender", "").toUpperCase();


    while (true) {
        if (gender !== male && gender !== female) {
            gender = window.prompt("Enter Your Gender", "").toUpperCase();
            A[1] = gender;
        } else {
            break;
            
        }
    }


if (gender == "MALE"){
    window.alert("Welcome Mr " + theName);
} else if (gender == "FEMALE"){
    window.alert("Welcome Ms "+ theName)
} else
    window.alert("Welcome " + theName);




let hotCold = window.prompt("Hot or Cold ?", "");
A[2] = hotCold;

let drink = window.prompt("What Would You Like to Drink ?", "");
A[3] = drink;


let prepared = window.alert("Your Drink is being Prepared !");

console.log("Name : " +  theName +'\n'  +"Drink : " + drink);

for(x = 0 ;x <= A.length -1; x++){
    console.log(A[x]);
}