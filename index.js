document.addEventListener("DOMContentLoaded", function() {
   console.log("The DOM has loaded");
   document.getElementById('text').textContent = "This is really cool!";
 });

 console.log(
   "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
 );

//  function addingEventListener() {
//    const main = document.getElementById('input');
    
//    main.addEventListener('click', function(event) {
//      alert('I was clicked!');
//    });
//    };

// function displayMessage(arg) {
//    document.getElementById("greeting").textContent = arg
//  }
   