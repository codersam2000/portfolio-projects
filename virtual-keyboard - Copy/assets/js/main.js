var btns = document.querySelectorAll('button');
var display = document.querySelector('#use_keyboard');
var keyVal;
window.capLock = false;
for (i of btns) {
  i.addEventListener('click', function(e) {
    keyVal = e.target.getAttribute('data-id');
    action();
  });
}
function action(){
  switch(keyVal){
    case "backspace":
      let len = display.textContent.length;
      display.textContent = display.textContent.slice(0,len-1);
      break;
    case "enter": 
      display.textContent += '\n';
      break;  
    case "tab": 
      display.textContent += '    ';
      break;
    case "space": 
      display.textContent += ' ';
      break;
    case "capslock": 
      let cl = document.querySelector('.keyboard__key--activatable');
      if(cl.classList.contains('keyboard__key--active')){
        cl.classList.remove('keyboard__key--active');
        window.capLock = false;
        }else{
        cl.classList.add('keyboard__key--active');
        window.capLock = true;
        }
      break;      
    default:
      if(window.capLock == true){
        display.textContent += keyVal.toUpperCase();
      }else if(window.capLock == false){
      display.textContent += keyVal.toLowerCase();
      }
      break;  
  }
}
