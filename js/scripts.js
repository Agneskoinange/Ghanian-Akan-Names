
//arrays of days of the week, male names and female names
var daysOfTheWeek = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];

var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

var akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

//variables
var YY= yearDigits
var MM= monthOfBirth
var DD= dayOfBirth
var CC= centuryDigits
var ValidMonth= monthValidator();
var ValidDay= dayValidator();
var d= daysOfTheWeek.slice();


function generateAkanName() { 
  yearDigits = parseInt(year.slice(2,4));
  monthOfBirth = parseInt(document.getElementById("month").value);
  dayOfBirth = parseInt(document.getElementById("day").value);
  centuryDigits = parseInt(year.slice(0,2));
  // how to calculate the day of the week that one is born
  var d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
  var d=  daysOfTheWeek.slice();
  // Var ValidDay= dayValidator();
  validMonth= monthValidator();

}

  //Therefore

  if (gender == "male" || "famale") {
  let akanName =("You were born on"+ "d" +"So Your name Ghanian Akan name is" + akanName)
  }

  }
  else {
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


var daysOfTheWeek = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];

var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];


     if (gender == "male" && "validDay" && "validMonth" && daysOfTheWeek[0]); {
      return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(0,7))" +"So Your name Ghanian Akan name is" + akanMaleNames[0]);
    
     } else if
      (gender == "male" && "validDay" && "validMonth" && daysOfTheWeek[1]); {
       return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(8,14))" +"So Your name Ghanian Akan name is" + akanMaleNames[1]);
    
    } else if 
    (gender == "male" && "validDay" && "validMonth" && daysOfTheWeek[2]); {
      return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(15,22))" +"So Your name Ghanian Akan name is" + akanMaleNames[2]);
       
    } else if 
      (gender == "male" && "validDay" && "validMonth" && daysOfTheWeek[3]); {
        return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(23,32))" +"So Your name Ghanian Akan name is" + akanMaleNames[3]);
         
    } else if 
      (gender == "male" && "validDay" && "validMonth" && daysOfTheWeek[4]); {
        return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(33,41))" +"So Your name Ghanian Akan name is" + akanMaleNames[4]);
   
    } else if 
      (gender == "male" && "validDay" && "validMonth" && daysOfTheWeek[5]); {
       return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(42,48))" +"So Your name Ghanian Akan name is" + akanMaleNames[5]);
               
    } else if 
     (gender == "male" && "validDay" && "validMonth" && daysOfTheWeek[6]); {
      return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(49,57))" +"So Your name Ghanian Akan name is" + akanMaleNames[6]);
      
    } else {
    alert("Input your details again")
    }
   
    var daysOfTheWeek = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday" ];

    var akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
    
    if (gender == "female" && "validDay" && "validMonth" && daysOfTheWeek.slice()) {
      return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(0,7))" +"So Your name Ghanian Akan name is" + akanFemaleNames[0]);
    
    }else if (gender == "female" && "validDay" && "validMonth" && daysOfTheWeek[1]); {
      return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(8,14))" +"So Your name Ghanian Akan name is" + akanFemaleNames[1]);
      

    }else if (gender == "female" && "validDay" && "validMonth" && daysOfTheWeek[2]); {
      return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(15,22))" +"So Your name Ghanian Akan name is" + akanFemaleNames[2]);
    };
      

    else if (gender == "female" && "validDay" && "validMonth" && daysOfTheWeek[3]); {
      return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(23,32))" +"So Your name Ghanian Akan name is" + akanFemaleNames[3]);
    

    }else if (gender == "female" && "validDay" && "validMonth" && daysOfTheWeek[4]); {
      return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(33,41))" +"So Your name Ghanian Akan name is" + akanFemaleNames[4]);
    

    }else if (gender == "female" && "validDay" && "validMonth" && daysOfTheWeek[5]); {
      return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(42,48))" +"So Your name Ghanian Akan name is" + akanFemaleNames[5]);
      }

    } else if (gender == "female" && "validDay" && "validMonth" && daysOfTheWeek[6]); {
      return (document.getElementById("alert").innerHTML ="You were born on"+ "daysOfTheWeek.slice(49,57))" +"So Your name Ghanian Akan name is" + akanFemaleNames[6]);
      }
      
      else {
      alert("Input your details again")
      }
  
      