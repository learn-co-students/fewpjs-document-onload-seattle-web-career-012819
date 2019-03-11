document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let targetParagraph = document.getElementById('text').innerHTML = 'This is really cool!' ;

  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );