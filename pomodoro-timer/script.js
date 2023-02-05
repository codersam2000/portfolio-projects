  var title = document.querySelector('title');
  var settings = document.querySelector('.settings');
  var watch = document.querySelector('.watch');
  var display = document.getElementById('display');
  var startBtn = document.getElementById('start');
  var stopBtn = document.getElementById('stop');
  var beepSound = new Audio('./beep.mp3');

  var timeInterval = null;
  function pad(d) {
  return (d.length < 2) ? '0' + d.toString() : d.toString();
  }

  function setting(){
    settings.style.display="flex";
    watch.style.display="none";
  }
  function set(){
    settings.style.display="none";
    watch.style.display="flex";
    window.second = document.getElementById('setSec').value;
    window.minute = document.getElementById('setMin').value;
    stop();
    display.innerHTML = `${pad(window.minute)}:${pad(window.second)}`;
    title.innerHTML = `${pad(window.minute)}:${pad(window.second)}`;
    display.style.color="#fff";
  }
  var second = window.second ? window.second : 0;
  var minute = window.minute ? window.minute : 30;

  function starCount(){
    if(second == 0 && minute == 0){
        clearInterval(timeInterval);
        display.innerHTML = `${'00'}:${'00'}`;
        title.innerHTML = `${'00'}:${'00'}`;
        display.style.color="red";
        beepSound.play();
     }else{
        if(second == 0){
          minute -=1;
          second = 60;
          display.innerHTML = `${pad(minute)}:${pad(second)}`;
          title.innerHTML = `${pad(minute)}:${pad(second)}`;
          //beepSound.play();
        }else{
          second -= 1;
          display.innerHTML = `${pad(minute)}:${pad(second)}`;
          title.innerHTML = `${pad(minute)}:${pad(second)}`;
          //beepSound.play();
        }
     }
  }
  function start(){
    if(timeInterval){
      return false;
    }
    startBtn.style.display='none';
    stopBtn.style.display='inline-block';
    timeInterval = setInterval(starCount,1000);
  }
  function stop(){
      startBtn.style.display='inline-block';
      stopBtn.style.display='none';
      clearInterval(timeInterval);
      timeInterval = null;
  }
  function reset(){
    startBtn.style.display='inline-block';
    stopBtn.style.display='none';
    stop();
    second = 0;
    minute = 30;
    display.innerHTML = `${minute}:${'00'}`;
    title.innerHTML = `${'30'}:${'00'}`;
    display.style.color="#fff";
  }