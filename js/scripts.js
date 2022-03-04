
//arrays of days of the week, male names and female names
var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];

var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

var akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function checkAkanName(){
    var YY= document.getElementById("year").value;
    var MM = Number(document.getElementById("month").value);
    var DD = Number(document.getElementById("day").value);
    var gender = document.getElementsByName("gender");
    var CC = parseInt(year.substring(0,2));
    var (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
}

function getGender() {
    if(gender.option==true){
        return gender="female"
    }
}