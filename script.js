
document.addEventListener("DOMContentLoaded", function (event) {
    
    let origArray;
    let origArray1
    let origArray2
    

    origArray = [4,9,16];
    origArray1 = [6,27,64];
    origArray2 = [16,81,256];
    document.getElementById("square").addEventListener("click", function () {
        let = origArray.map(mysquare);
        document.getElementById("output").value;
    });
    
    document.getElementById("cubed").addEventListener("click", mycube());
    
    document.getElementById("ToTheFourth").addEventListener("click", function () {
        let = origArray.map(MyToTheFourth)
        document.getElementById("output").value;
    });
});

function mysquare() {
    document.getElementById("two").value = Math.pow(document.getElementById("three").value, 2);
}

function mycube() {
    document.getElementById("three").value = Math.pow(document.getElementById("three").value, 2);
    
}

function MyToTheFourth() {
    document.getElementById("four").value = Math.pow(document.getElementById("three").value, 4);
    
}

