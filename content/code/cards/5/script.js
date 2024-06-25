Pt=(o,e=-20,t=20)=>Math.min(Math.max(o,e),t);
var MvAuto = false;



function OrientCard(mvX,mvY)
{
  if (!MvAuto)
  {
    var Xdeg = 0;
    var Ydeg = 0;
    Ydeg = 90- (mvX * 90) / (document.body.clientWidth /2);            
    Xdeg =  -90 + (mvY * 90) / (document.body.clientHeight /4);
    var acard = document.getElementById("acard");
    acard.style.setProperty('--rx',Ydeg + 'deg');
    acard.style.setProperty('--ry',Xdeg/2 + 'deg');
    acard.style.setProperty('--mx',40-(Ydeg*5) + '%');
    acard.style.setProperty('--my',5+Xdeg + '%');
    acard.style.setProperty('--tx',Ydeg + 'px');
    acard.style.setProperty('--ty',Xdeg/10 + 'px');
    acard.style.setProperty('--pos',Xdeg*5 + '% ' + Ydeg + '% ' );
    acard.style.setProperty('--posx',50+Xdeg/10+Ydeg + '% ');
    acard.style.setProperty('--posy',50+Ydeg/10+Xdeg/10 + '% ');
    acard.style.setProperty('--hyp',Pt(Math.sqrt((mvX-50)*(mvX-50)+(mvY-50)*(mvY-50))/50,0,1));
  }
}

function adaptCardType(e) {
  var acard = document.getElementById("acard");
  acard.setAttribute('data-rarity',e.value );
}

function changeCard(e) {
  var acard = document.getElementById("card_front_pic");
  acard.setAttribute('src',e.value );
}

function ChangeCardMove(e) {
  switch(e.id)
    {
      case 'mouseMove':
        {
          MvAuto=false;
          break;
        }
        default:
        {
          MvAuto=true;
          initCard();
          break;
        }        
    }
}

var CurrentDeg = 0;
function initCard()
{
  var acard = document.getElementById("acard");
  acard.style.setProperty('--ry','0deg');
  acard.style.setProperty('--rx','0deg');
  acard.style.setProperty('--tx','0px');
  acard.style.setProperty('--ty','0px');
  CurrentDeg = -180;
}

function rotate()
{
  if (MvAuto)
    {
      CurrentDeg=CurrentDeg+2;
      if (CurrentDeg>180)
        CurrentDeg=-180;
      var acard = document.getElementById("acard");  
      acard.style.setProperty('--rx', CurrentDeg + 'deg');     
      acard.style.setProperty('--mx',CurrentDeg*10 + '%');
      acard.style.setProperty('--my',CurrentDeg + '%');
  
      acard.style.setProperty('--pos',CurrentDeg*5 + '% ' + CurrentDeg + '% ' );
      acard.style.setProperty('--posx',50+CurrentDeg/2 + '% ');
      acard.style.setProperty('--posy',50+CurrentDeg/10+'% ');
      acard.style.setProperty('--hyp',Pt(Math.sqrt((CurrentDeg)+(CurrentDeg)*(CurrentDeg))/50,0,1))
    }
  setTimeout(function() {
    rotate();
  }, 40);
}




document.addEventListener("DOMContentLoaded", (event) => {
  if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
    document.getElementById('mouseMoveLabel').innerHTML = 'Phone move';
    window.addEventListener('deviceorientation',  orientationhandler, false);
    window.addEventListener('MozOrientation',     orientationhandler, false);
  }
  else
  {
    document.getElementById('mouseMoveLabel').innerHTML = 'Mouse move';
  }
  
  document.getElementById("acard").addEventListener('mousemove', e => {  
    document.getElementsByClassName('PNL_Infos')[0].innerHTML = `M.x:${e.clientX}px;M.y:${e.clientY}px`;
      OrientCard(e.clientX,e.clientY);
  });
  
  setTimeout(function() {
    rotate();
  }, 40);
});

function orientationhandler(evt){


  // For FF3.6+
  if (!evt.gamma && !evt.beta) {
    evt.gamma = -(evt.x * (180 / Math.PI));
    evt.beta = -(evt.y * (180 / Math.PI));
  }

  document.getElementsByClassName('PNL_Infos')[0].innerHTML = `A:${evt.alpha.toFixed(2)}°;B:${evt.beta.toFixed(2)}°;G:${evt.gamma.toFixed(2)}°`;
  
  // use evt.gamma, evt.beta, and evt.alpha 
  // according to dev.w3.org/geo/api/spec-source-orientation
  OrientCard((document.body.clientWidth /2) +(evt.gamma*2),(document.body.clientHeight /2)-evt.beta*4);
  //document.getElementById('mouseMoveLabel').innerHTML = evt.;

}