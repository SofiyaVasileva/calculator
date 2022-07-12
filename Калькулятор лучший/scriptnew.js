let input = document.querySelector('.input')
var regex1 = /[0-9]|[+ / - * . ( )]/;
var regex2 = /[0-9]/;
var alphabit = regex1
function validate(evt) {
    let simb = 0
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var check1 = /[0-1]/
    if( !check1.test(key) ) {
        simb = 0 }
    else {
        simb = 1
    }
    if (simb = 0) {
        if( !alphabit.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
            alphabit = regex1
                }
        }
    if (simb = 1) {
        if( !alphabit.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
            alphabit = regex2
                }
    }
  }

function insert(num) {
    document.form.textview.value += num; 
}
function clean() {
    document.form.textview.value = "";
}
function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
function equal() {
    let exp = document.form.textview.value;
    if(exp) {
         document.form.textview.value = eval(exp);
    }
}
console.log('Привет, мир')