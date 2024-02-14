function updateTime() {
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var month = currentDate.toLocaleString('en', { month: 'short' });
    var day = currentDate.toLocaleString('en', { weekday: 'short' });
    var formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + day + '. ' + month+'.' ;

    
    document.getElementById('currentTime').innerHTML = formattedTime;
  }
  setInterval(updateTime);
  function prev(){
    const widthslider = document.querySelector('.body_div1').offsetWidth;
    document.querySelector('.body_div2').scrollLeft -= widthslider;
  }
  function next(){
    const widthslider = document.querySelector('.body_div1').offsetWidth;
    document.querySelector('.body_div2').scrollLeft += widthslider;
  }
