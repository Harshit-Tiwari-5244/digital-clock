setInterval(function() {
    let currentDateTime = new Date();

    let day = currentDateTime.getDate();
    let month = currentDateTime.getUTCMonth() + 1;
    let year = currentDateTime.getFullYear();
    let hour = currentDateTime.getHours();
    let minute = currentDateTime.getMinutes();
    let second = currentDateTime.getSeconds();
    
    let clock =document.getElementById("clock");
    clock.innerHTML = `${hour}:${minute}:${second} ${day}/${month}/${year}`;
},1000)