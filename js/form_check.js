function isEmpty(str_input){
    if (str_input.length == 0) {
        return true;
    }
    return false;
}

function isWhiteSpaceOrEmpty(str_input){
    // console.log("str_input: " + str_input + " isWhiteSpaceOrEmpty: " + (/^[\s\t\r\n]*$/.test(str_input)));
    return /^[\s\t\r\n]*$/.test(str_input)
}

// function checkString(str_input, message){
//     if (isEmpty(str_input) || isWhiteSpaceOrEmpty(str_input)){
//         alert(message);
//         return false;
//     }
//     return true;
// }

function checkEmail(str_input){
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str_input)){
        // console.log("Email jest prawidłowy");
        return true;
    } else {
        // console.log("Podaj właściwy email");
        return false;
    }
}


function checkStringAndFocus(obj, msg){
    let str = obj.value;
    // console.log("obj.value: " + str);
    // console.log("msg: " + msg);
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpaceOrEmpty(str)){
        // console.log("isWhiteSpaceOrEmpty == true");
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    } 
    // console.log("isWhiteSpaceOrEmpty == false");
    document.getElementById(errorFieldName).innerHTML = "";
    return true;
}


function checkEmailAndFocus(obj, msg){
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);

    if (!checkStringAndFocus(obj, msg)){
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        // console.log("checkStringAndFocus returned false");
        return false;
    }

    if (!checkEmail(str)){
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        // console.log("checkEmail returned false");
        return false;
    }
    document.getElementById(errorFieldName).innerHTML = "";
    return true;
}


function validate(form){

    if (!checkStringAndFocus(form.elements["f_imie"], "Podaj imię!") || isEmpty(form.elements["f_imie"].value)){
        return false;
    }
    if (!checkStringAndFocus(form.elements["f_nazwisko"], "Podaj nazwisko!") || isEmpty(form.elements["f_nazwisko"].value)){
        return false;
    }
    if (!checkStringAndFocus(form.elements["f_kod"], "Podaj kod!") || isEmpty(form.elements["f_kod"].value)){
        return false;
    }
    if (!checkStringAndFocus(form.elements["f_ulica"], "Podaj ulicę!") || isEmpty(form.elements["f_ulica"].value)){
        return false;
    }
    if (!checkStringAndFocus(form.elements["f_miasto"], "Podaj miasto!") || isEmpty(form.elements["f_miasto"].value)){
        return false;
    }
    if (!checkEmailAndFocus(form.elements["f_email"], "Podaj email!") || isEmpty(form.elements["f_email"].value)){
        return false;
    }

    return true;
}
