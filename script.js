let origArray = [2, 3, 4];

document.addEventListener('DOMContentLoaded', () => {
    setTextBoxValues(origArray);
});


function updateValue() {
    let squareArray = origArray.map(x=>x*x);
    setTextBoxValues(squareArray);
};

function Unknowncubed() {
    let cubeArray = origArray.map(x=>x*x*x);
    setTextBoxValues(cubeArray);
};

function KnownFourth() {
    let fourthArray = origArray.map(x=>x*x*x*x);
    setTextBoxValues(fourthArray);
};

document.getElementById("cubed").addEventListener("click", Unknowncubed);

document.getElementById("Fourth").addEventListener("click", KnownFourth);
    
function setTextBoxValues(anArray) {
    document.getElementById("firstTextBox").value = anArray[0];
    document.getElementById("secondTextBox").value = anArray[1];
    document.getElementById("thirdTextBox").value = anArray[2];
};
