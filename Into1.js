let inputField = document.getElementById("inputArea");
let outputField = document.getElementById("outputArea");
let buttonBox = document.querySelector(".bodyoftheCalc");
let inputFieldData = ""

buttonBox.addEventListener("click", function(e){
    (e.target.innerText === "CLEAR")?inputFieldData = "":inputFieldData+= e.target.innerText
    inputField.innerText = inputFieldData;
    outputField.innerText = inputFieldData?eval(inputFieldData):""
});