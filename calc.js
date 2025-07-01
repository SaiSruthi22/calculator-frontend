//append value 
function appendValue(val) {
    document.getElementById("display").value += val;
}
//clear display 
function clearDisplay() {
    document.getElementById("display").value = "";
}
//calculate result 
function calculateResult() {
    // const display=document.getElementById("display");
    // display.value=eval(display.value);
    //exception handling 
    const display = document.getElementById("display");
    //Error handling
    try {
        display.value = eval(display.value);
    }
    catch (e) {
        display.value = "Error";
    }
}