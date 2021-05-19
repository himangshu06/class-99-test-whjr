var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var Content=event.results[0][0].transcirpt;
    console.log(Content);
    document.getElementById("textbox").innerHTML="Content";
    if (Content == "take my selfie"){
        console.log("taking-selfie");
        speak();

    }
}
function speak(){
    var synth = window.speechSynthesis;
    speakdata = "taking new selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    Image_format:"png",
    png_quality:90
})


