function isWhiteSpaceOrEmpty(str_input) {
    return /^[\s\t\r\n]*$/.test(str_input);
}

function isEmailInvalid(str_input) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str_input)) { // email is correct
        return false;
    } else {
        return true;
    }
}


function checkStringAndFocus(obj, msg, validation_function) {

    // check if there is whitespace or empty place in input
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);

    // isWhiteSpaceOrEmpty(str) or isEmailInvalid(str)
    if (validation_function(str)) { // isWhiteSpaceOrEmpty returns true or isEmailInvalid returns true
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    } else {
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
}

function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
}

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
}

function isWoman() {

    let np = document.getElementById("NazwiskoPanienskie");
    if (np.style.visibility === 'visible') {
        hideElement("NazwiskoPanienskie");
    } else {
        showElement("NazwiskoPanienskie");
    }
}

function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }

        // firstChild, lastChild, previousSibling, parentNode, childNodes
        e = e.nextSibling; // zwraca następny węzeł będący rodzeństwem aktualnego
        while (e && e.nodeType != 1) { // nodeType == 1 oznacza element
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}

// zwraca następny węzeł będący rodzeństwem aktualnego
function nextNode(e){
    while (e && e.nodeType != 1){
        e = e.nextSibling;
    }
    return e;
}

// zwraca poprzedni węzeł będący rodzeństwem aktualnego
function prevNode(e){
    while (e && e.nodeType != 1){
        e = e.previousSibling;
    }
    return e;
}

// wstawia ostatni wiersz tabeli jako pierwszy
function swapRows(b){
 
    let tBody = nextNode(b.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}

function validate(form) {
    
   
    if (!checkStringAndFocus(form.elements["f_imie"], "Podaj imię!", isWhiteSpaceOrEmpty)) {
        return false;
    }
    if (!checkStringAndFocus(form.elements["f_nazwisko"], "Podaj nazwisko!", isWhiteSpaceOrEmpty)) {
        return false;
    }
    if (!checkStringAndFocus(form.elements["f_kod"], "Podaj kod!", isWhiteSpaceOrEmpty)) {
        return false;
    }
    if (!checkStringAndFocus(form.elements["f_ulica"], "Podaj ulicę!", isWhiteSpaceOrEmpty)) {
        return false;
    }
    if (!checkStringAndFocus(form.elements["f_miasto"], "Podaj miasto!", isWhiteSpaceOrEmpty)) {
        return false;
    }
    if (!checkStringAndFocus(form.elements["f_email"], "Podaj email!", isEmailInvalid)) {
        return false;
    }

    return true;
}
