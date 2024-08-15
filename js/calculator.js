function appendToDisplay(value) {
    document.getElementById("display").value+=value;
}

//this function clears the content of the display
function clearDisplay() {
    document.getElementById("display").value="";
}

//this function evaluates the expression in the display
function calculateResult() {
    const display=document.getElementById("display");
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value="Error";
    }

}