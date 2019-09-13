window.onload = function(){
  var startButton = document.querySelector('.startButton');
  var stopButton = document.querySelector('.stopButton');

  var container = document.querySelector('.timer');

  var seg = 1;

  var contador = setInterval(function(){
    console.log(seg);
  },1000)

}
