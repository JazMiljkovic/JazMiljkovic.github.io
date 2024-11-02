const greeting = document.getElementById('greeting');
greeting.style.textAlign = "center";
greeting.style.marginsTop = '50px';
greeting.style.fontsize = '40px';
const username = window.prompt("What's your name?", "Jane");
greeting.innerHTML = "Welcome to my website, " + username + "!";



