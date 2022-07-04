var dog = 0;
var cat = 0;
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}
function modelReady()
{
  classifier.classify(gotResults);
}
function gotResults(error, results)
{
  if (error)
  {
    console.error(error);
  }
  else
  {
    console.log(results);
    document.getElementById("results_count").innerHTML = 'Detected Dog' + dog + '        Detected Cat' + cat;
    document.getElementById("results_label").innerHTML = 'I can hear - ' + results[0].label;
    if (results[0].label == "dog")
    {
      
    }
  }
}