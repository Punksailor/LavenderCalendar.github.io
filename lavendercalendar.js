
    var m = new Date();
    var d = new Date();
    var w = new Date();
    var y = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    month = document.getElementById("month").innerHTML = months[m.getMonth()];

    date = document.getElementById("date").innerHTML = d.getDate();

    weekdays = ["Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,"];
    weekday = document.getElementById("weekday").innerHTML = weekdays[w.getDay()];

    year = document.getElementById("year").innerHTML = y.getFullYear();

    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
