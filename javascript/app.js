var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error){
    alert("Something went wrong with server! Try again later.");
}

btnTranslate.addEventListener("click", clickEventHandler = () => {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;
    })
    .catch(errorHandler)
});