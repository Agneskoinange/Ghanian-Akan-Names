
//arrays of days of the week, male names and female names
var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];

var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

var akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

//variables
var  yearDigits = parseInt(year.substring(2,4));
var  monthOfBirth = parseInt(document.getElementById("month").value);
var  dayOfBirth = parseInt(document.getElementById("day").value);
var  centryDigits = parseInt(year.substring(0,2));

var dayOfBirth= prompt("What is your year of Birth");
var monthOfBirth = prompt("What is your year of Birth");
var yearOfBirth = prompt("What is your year of Birth");


console.log();


    function checkAkanName(){ 
    YY = document.getElementById("year").value;
    MM = document.getElementById("month").value;
    DD = document.getElementById("day").value;
    genders = document.getElementsByName("gender");
    
    // how to calculate the day of the week that one is born
    let d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

    
    return(number)
 
    }
    alert(d)




}
