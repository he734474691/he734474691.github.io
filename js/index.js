function towNum(n) {
    return n > 9 ? n : '0' + n;
}
var oSpan = document.createElement('span');
var date = document.getElementById('date');
var aa = date.appendChild(oSpan);
setInterval(function () {
    var myDate = new Date();
    var y = myDate.getFullYear();
    var m = myDate.getMonth() + 1;
    var d = myDate.getDate();
    var h = myDate.getHours();
    var minu = myDate.getMinutes();
    var s = myDate.getSeconds();
    oSpan.innerHTML =  y + '/' + m + '/' + d + '/' + h + ':' + towNum(minu) + ':' + towNum(s);
}, 250);
