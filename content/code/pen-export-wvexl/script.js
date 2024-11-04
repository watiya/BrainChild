function burn(str)
{
  var arr = str.split(",");
  var tscode =  parseInt(arr[5],10)+"px -5px 5px #FFF,"
          + parseInt(arr[4]*2,10)+"px -9px 10px #FF3,"
          + parseInt(arr[3]*4,10)+"px -14px 12px #FC2,"
          + parseInt(arr[2]*6,10)+"px -20px 14px #C71,"
          + parseInt(arr[1]*8,10)+"px -26px 17px #A01,"
          + parseInt(arr[0]*10,10)+"px -32px 20px #444";
        
  arr.shift();
  arr.push(Math.random()*4-2);
  $("#burning").css("box-shadow",tscode);
  str = arr.join(',');
  setTimeout("burn('"+str+"')",50);
}
$(document).ready(function() {
  burn("3,-1,2,4,0,-2"); //burning effect
});