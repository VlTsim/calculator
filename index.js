function insert (num){
document.form.textview.value = document.form.textview.value + num
}
function clean (){
    document.form.textview.value = "";
}
function equal (){
    let a = document.form.textview.value;
    document.form.textview.value = eval(a);
}