const output=document.getElementById('output');
const calc_button=document.getElementsByTagName('button');
function appendto(param) {
    if(output.value=="0")
    {
        output.value=param;
    }
    else {
        output.value += param;
    }
    }
function final() {


    output.value= eval(output.value);

}
function reset() {
    output.value= '0';

}
console.log('Hi');