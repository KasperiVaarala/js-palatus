// lets createe a HTTP request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://yesno.wtf/api",true);
// send request
xmlhttp.send();

//create an event handler
xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
    {

    
  }
}
// added button function
function yesFunction(){
    let answerObject = JSON.parse(xmlhttp.response)
    //call answer
    document.getElementById("answer").innerHTML = answerObject.answer;
    //call image
    document.getElementById("answer_image").setAttribute('src', answerObject.image);
}

let
function refreshPage(){
location.reload()
return false;
}

