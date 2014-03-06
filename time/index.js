var themes = [
    "hello world",
    "border",
    "binary",
    "error",
    "bounce",
    "Time",
    "input",
    "mathematics",
    "jump",
    "switch",
    "ascii",
    "pixel",
    "sound",
    "loop",
    "yellow",
    "square",
    "random",
    "search",
    "tree",
    "play",
    "wave",
    "whirlpool",
    "meta",
    "space",
    "cursor",
    "malicious",
    "pattern",
    "race",
    "golf",
    "infinity",
    "exit"
];

window.onload=function(){
    var calendar = document.getElementById("calendar");

    // add february days
    for (var i = 24; i <= 28; i++){
        var d = document.createElement("div");
        d.setAttribute("class","day");
        d.textContent = "Feb " + i;
        calendar.appendChild(d);
    }

    var date = new Date();
    var day = (date.getFullYear() == 2014 && date.getMonth() == 2) ? date.getDate() : -1;

    // add march days
    for (var i = 1; i <= 31; i++){
        var d = document.createElement("div");
        d.setAttribute("class","day code");
        d.textContent = "Mar " + i + "\n\n\n\n\n" + themes[i-1] ;
        calendar.appendChild(d);
        if (day == i){
            d.setAttribute("id", "today");
        }
    }

    // add april days
    for (var i = 1; i <= 6; i++){
        var d = document.createElement("div");
        d.setAttribute("class","day");
        d.textContent = "Apr " + i;
        calendar.appendChild(d);
    }
};