var oP = document.createElement('p');
    var data = document.getElementsByClassName('data');
    var aa = document.data.appendChild(oP);
    setInterval(function(){
        var myDate = new Date();
        var y = myDate.getFullYear();
        var m = myDate.getMonth()+1;
        var d = myDate.getDate();
        var h = myDate.getHours();
        var minu = myDate.getMinutes();
        var s = myDate.getSeconds();
        oP.innerHTML = '今天是'+ y +'年' + m + '月' + d + '日' + h +':'+towNum(minu)+ ':' +towNum(s);
    },1000);
    function towNum(n){
        return n > 9 ? n:'0'+n;
    }