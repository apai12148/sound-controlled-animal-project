cat = 0
dog = 0
cow = 0
lion = 0

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hTcd07Rh2/model.json', modelReady)
}

function gotResults(error,result){
    if (error) {
        console.error(error);
    } else{
        console.log(result);
        random_number_r = Math.floor(Math.random() * 225 ) + 1;
        random_number_g = Math.floor(Math.random() * 225) + 1;
        random_number_b = Math.floor(Math.random() * 225) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + result[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy' + (result[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result_label").style.color = "rgb(" + random_number_r +"," + random_number_g + "," + random_number_b + " )"
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"

        img = document.getElementById('cat.img')
        img1 = document.getElementById('cow.img')
        img2 = document.getElementById('dog.img')
        img3 = document.getElementById('lion.img')

        if(result[0].label == "meowing") {
            img.src = 'cat.img';
        } else if(result[0].label == "mooing"){
            img.src = 'cow.img';
        } else if(result[0].label == "barking"){
            img.src = 'dog.img';
        }
        else{
            img.src = 'lion.img';
        }
}
}