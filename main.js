function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hTcd07Rh2/model.json', modelReady)
}

function gotResults(error,result){
    
}