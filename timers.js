// document.getElementsByTagName('p')
// document.getElementById('id')
// document.getElementsByClassName('cssClass’)


// WindowTimers.clearInterval()
// Cancels the repeated execution set using WindowTimers.setInterval().
//
// WindowTimers.setInterval()
// Schedules the execution of a function each X milliseconds.
// Note: There are 1000 milliseconds in one second.

//click on start button
  //ID the element
  //add click action to button
  var i = 0;
  var startButton = document.getElementById('start');
  var resetButton = document.getElementById('reset');
  var pauseButton = document.getElementById('pause');

  startButton.addEventListener("click",function(){
    // window.setInterval("javascript function", milliseconds);
    // Alert "hello" every 3 seconds:
    countDown = setInterval(StartTimer, 1000);
    //without the () it will evaluate the code and i will increment
    //but as StartTimer(), it will only return the result without
    //incrementing every second instead
  });
    function StartTimer(){
      document.getElementById('timer').innerHTML = i;
      i++;
    }


  pauseButton.addEventListener("click",function(){
    console.log("low")
    clearInterval(countDown);
  })

  resetButton.addEventListener("click",function(){
    clearInterval(countDown);
    i = 0;
    countDown = setInterval(StartTimer, 1000);
  })


// ============================================================
  //   var myVar = setInterval(function(){ myTimer() }, 1000);
  //
  //   function myTimer() {
  //       var d = new Date();
  //       var t = d.toLocaleTimeString();
  //       document.getElementById("demo").innerHTML = t;
  //   }
  //
  //   function myStopFunction() {
  //       clearInterval(myVar);
  //   }
  // //when click, calls watch funtion to start timer.


//watch function replaces id = timer innderHTML field with display


//start timer


//display timer


///////////////////////////////
//click on pause button
//stops timer
//id = "timer" innerHTML text freezes

///////////////////////////
//click on reset button
//resets timer
//id = "timer" innerHTML text resets to zero
