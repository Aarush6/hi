x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    console.log(to_number);
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started Drawing Apple"; 
      draw_apple = "set";
    }
    if(content == "tell me my fortune"){
      var synth = window.speechSynthesis;
      speak_data = "If you give Aarush Challa all hats off at the beginning off class, you will get good luck"
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);
    }
    if(content == "India"){
      var synth = window.speechSynthesis;
      speak_data = "INDIA is an amazing nation"
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);
    
    
    }
    if(content == "random number"){
      var synth = window.speechSynthesis;
      var hi = Math.random()
      speak_data = hi;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);
    
    
    }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width,screen_height-150);
  canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set"){
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number + "Apples Drawn";
    speak();
    for(var i = 1; i <= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple , x, y, 50, 50);
    }
  }
}
function speak(){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
function preload(){
  apple = loadImage("apple.png");
}





