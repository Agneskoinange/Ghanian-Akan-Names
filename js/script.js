
//arrays of days of the week, male names and female names
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

var akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

//variables
var YY= yearOfBirth
var MM= monthOfBirth
var DD= dayOfBirth
var CC= centuryDigits
var ValidMonth= monthValidator();
var ValidDay= dayValidator();
var d= daysOfTheWeek.slice();



function generateAkanName() { 
  monthOfBirth = parseInt(document.getElementById("month").value);
  dayOfBirth = parseInt(document.getElementById("day").value);
  centuryDigits = parseInt(document.getElementById("year").value).slice(0,2)
  yearOfBirth = parseInt(document.getElementById("year").value).slice(2,4)
  // how to calculate the day of the week that one is born
  return d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
}


  //Therefore

  if (gender == "famale") {
  let akanMaleNames =("You were born on"+ "d" +"So Your name Ghanian Akan name is" + akanMaleNames)
  
  } else if (gender == "famale") {
    let akanFemaleNames =("You were born on"+ "d" +"So Your name Ghanian Akan name is" + akanFemaleNames)

  }else {
    alert("Please select gender")
  }    

  if (day > 31 || day <1){
    alert ("Invalid day")
  }
  // var validDay= dayValidator();
  else {
    console.log (validDay)
  }


  if (month > 12 || month < 1){
    alert ("Invalid month")
  }
  // var validMonth= monthValidator();
  else {
    console.log (validMonth)
  }

  function checkName(){


var daysOfTheWeek = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];

var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];


     if (gender == "male" && validDay && validMonth && daysOfTheWeek[0]) {
      alert (document.getElementById("male").innerHTML ="You were born on"+ daysOfTheWeek[0] +"So Your name Ghanian Akan name is" + akanMaleNames[0]);
    
     } else if
      (gender == "male" && validDay && validMonth && daysOfTheWeek[1]) {
      alert (document.getElementById("male").innerHTML ="You were born on"+ daysOfTheWeek[1] +"So Your name Ghanian Akan name is" + akanMaleNames[1]);
    
    } else if 
    (gender == "male" && validDay && validMonth && daysOfTheWeek[2]) {
      alert (document.getElementById("male").innerHTML ="You were born on"+ daysOfTheWeek[2] +"So Your name Ghanian Akan name is" + akanMaleNames[2]);
       
    } else if 
      (gender == "male" && validDay && validMonth && daysOfTheWeek[3]) {
       alert (document.getElementById("male").innerHTML ="You were born on"+ daysOfTheWeek[3] +"So Your name Ghanian Akan name is" + akanMaleNames[3]);
         
    } else if 
      (gender == "male" && validDay && validMonth && daysOfTheWeek[4]) {
      alert (document.getElementById("male").innerHTML ="You were born on"+ daysOfTheWeek[4] +"So Your name Ghanian Akan name is" + akanMaleNames[4]);
   
    } else if 
      (gender == "male" && validDay && validMonth && daysOfTheWeek[5]) {
      alert (document.getElementById("male").innerHTML ="You were born on"+ daysOfTheWeek[5] +"So Your name Ghanian Akan name is" + akanMaleNames[5]);
               
    } else if 
     (gender == "male" && validDay && validMonth && daysOfTheWeek[6]) {
      alert (document.getElementById("male").innerHTML ="You were born on"+ daysOfTheWeek[6] +"So Your name Ghanian Akan name is" + akanMaleNames[6]);
      
    } else {
    alert("Input your details again");
    }
   
    var daysOfTheWeek = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday" ];

    var akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
    
    if (gender == "female" && validDay && validMonth && daysOfTheWeek[0]) {
      alert (document.getElementById("female").innerHTML ="You were born on"+ daysOfTheWeek[0] +"So Your name Ghanian Akan name is" + akanFemaleNames[0]);
    
    }else if (gender == "female" && validDay && validMonth && daysOfTheWeek[1]) {
      alert (document.getElementById("female").innerHTML ="You were born on"+ daysOfTheWeek[1] +"So Your name Ghanian Akan name is" + akanFemaleNames[1]);
      

    }else if (gender == "female" && validDay && validMonth && daysOfTheWeek[2]) {
      alert (document.getElementById("female").innerHTML ="You were born on"+ daysOfTheWeek[2] +"So Your name Ghanian Akan name is" + akanFemaleNames[2]);
    
    }else if (gender == "female" && validDay && validMonth && daysOfTheWeek[3]) {
      alert (document.getElementById("female").innerHTML ="You were born on"+ daysOfTheWeek[3] +"So Your name Ghanian Akan name is" + akanFemaleNames[3]);
    

    }else if (gender == "female" && validDay && validMonth && daysOfTheWeek[4]) {
      alert (document.getElementById("female").innerHTML ="You were born on"+ daysOfTheWeek[4] +"So Your name Ghanian Akan name is" + akanFemaleNames[4]);
    

    }else if (gender == "female" && validDay && validMonth && daysOfTheWeek[5]) {
      alert (document.getElementById("female").innerHTML ="You were born on"+ daysOfTheWeek[5] +"So Your name Ghanian Akan name is" + akanFemaleNames[5]);
      

    } else if (gender == "female" && validDay && validMonth && daysOfTheWeek[6]) {
      alert (document.getElementById("female").innerHTML)= ("You were born on"+ daysOfTheWeek[6] +"So Your name Ghanian Akan name is" + akanFemaleNames[6]);
      }
      
      else {
      alert("Input your details again")
      }
    }

    function resetButton(){
      document.getElementById("myForm").reset();
      
    }