function checkName(inputText){
    var exp = /^[A-Za-z ]+$/;
    if(inputText.value.match(exp)){
        return true;
    }
    else{
        return false;
    }
}
function checkPhone(inputText){
    var exp = /^[0-9]{10}$/;
    if(inputText.value.match(exp)){
        return true;
    }
    else{
        return false;
    }
}
function checkEmail(inputText){
    var exp = /^[A-Za-z0-9.]+@[A-Za-z0-9.]+.[A-Za-z0-9]+$/
    if(inputText.value.match(exp)){
        return true;
    }
    else{
        return false;
    }
}
function checkGender(inputText){
    var exp = /^[MF]$/
    if(inputText.value.match(exp)){
        return true;
    }
    else{
        return false;
    }
}
function checkBudget(inputText){
    var exp = /^[0-9]+$/
    if(inputText.value.match(exp)){
        return true;
    }
    else{
        return false;
    }
}