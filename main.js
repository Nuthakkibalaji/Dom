// var x =document.getElementById("text").innerHTML = 'good evening'
// console.log(x);

// var y =document.getElementsByTagName("h1").innerHTML = 'access the tag'
// console.log(y);

// var z =document.getElementsByClassName('box').innerHTML = 'access the class'
// console.log(z);

// var i = document.querySelector("#heading").textContent = "Hello World";
// console.log(i);

function  onbuttonclick(){
    var flex = document.getElementById('flex-container')
    if(flex.style.flexDirection == "row"){
        flex.style.flexDirection = "column"
        console.log('column');
    }
    else{
        flex.style.flexDirection = "row"
        console.log('row');
    }
}

// let back = document.getElementsByTagName('h3')[0];
// back.setAttribute("id", "new");
// back.setAttribute("style","color:red");




function myFunction(){
    var x =document.getElementById("text");
    if(x.innerHTML == "Hello World"){
        x.innerHTML = "Welcome to Elevation Acadmey";
    }
    else{
        x.innerHTML = "Hello World"
    }
}



function clock () {

    let  date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let period = "AM";
    if (hours === 0) {
      hours = 12;
    } else if (hours >= 12) {
      hours -= 12;
      period = "PM";
    }
  
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
  
    let clockHours = `${hours}`;
    let clockMinutes = `${minutes}`;
    let clockSeconds = `${seconds}`;
    let clockPeriod = `${period}`;
  
    document.getElementById("hour").innerHTML = clockHours;
    document.getElementById("minutes").innerHTML = clockMinutes;
    document.getElementById("seconds").innerHTML = clockSeconds;
    document.getElementById("ampm").innerHTML = clockPeriod;
};
setInterval(clock, 10)









