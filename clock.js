function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m  = today.getMinutes();
    var s = today.getSeconds();

    document.getElementById('clock').innerHTML= h+'::'+m+'::'+s;
    // setTimeout('startTime()',1000)
    

}
// startTime();
// clearTimeout(i);
var i = setInterval(startTime(),1000);
var j = setTimeout('clearInterval(i)',1000)