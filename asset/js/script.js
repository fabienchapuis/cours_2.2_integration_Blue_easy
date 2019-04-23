// ---------------------------|Variable Fonction Nom|-----------------------------------------------------------
var nom = document.querySelector('#nom');
var missNom = document.querySelector('#missNom');
var missNom2 = nom.value.length;
var nomValue = nom.value;
var regexNom = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
var validNom = "";

nom.addEventListener('blur', validation);
// -----------------------------|Fonction Validation Nom|-------------------------------------------------------
function validation(event) {

    if (missNom2 == 0) {

        missNom.textContent = 'Nom manquant';
        missNom.style.color = 'red';
        validNom = false;

    } else if (regexNom.test(nomValue) == false) {

        missNom.textContent = 'Format incorrect';
        missNom.style.color = 'orange';
        validNom = false;

    } else {
        nom.className = "form-control";
        validNom = true;
    }

}
// ---------------------------|Variable Fonction Email|-----------------------------------------------------------|
var Mail = document.querySelector('#email');
var missemail = document.querySelector('#missEmail');
var missMail2 = Mail.value.length;
var mailValue = Mail.value;
var regexEmail = /^[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
var validEmail = "";

Mail.addEventListener('blur', validation3);
// -----------------------------|Fonction Validation Email|-------------------------------------------------------|
function validation3(event) {

    if (missMail2 == 0) {

        missemail.textContent = 'Email manquant';
        missemail.style.color = 'red';
        validEmail = false;

    } else if (!regexEmail.test(mailValue)) {

        missemail.textContent = 'Format incorrect';
        missemail.style.color = 'orange';
        validEmail = false;

    } else {
        Mail.className = "form-control";
        validEmail = true;
    }

}
// ------------------------------|Variable Fonction Commentaire|-----------------------------------------------------------|

var Commentaire = document.querySelector("#comment");
var misscommentaire = document.querySelector("#misscommentaire");
var misscommentaire2 = Commentaire.value.length;
var commentaireValue = Commentaire.value;
var regexCommentaire = /^[^&"()<>_$*€£`+=\/#]+$/;
var validCommentaire = "";

Commentaire.addEventListener('blur', validation8);
// -----------------------------|Fonction Validation Ville|-------------------------------------------------------|

function validation8(event) {

    if (misscommentaire2 == 0) {

        misscommentaire.textContent = 'Commentaire manquant';
        misscommentaire.style.color = 'red';
        validCommentaire = false;

    } else if (!regexCommentaire.test(commentaireValue)) {

        misscommentaire.textContent = 'Format incorrect';
        misscommentaire.style.color = 'orange';
        validCommentaire = false;

    } else {

        Commentaire.className = "form-control";
        validCommentaire = true;
    }

}

var formulaire = document.querySelector("#formulaire");
var missall = document.querySelector("#missall");

formulaire.addEventListener('click', validationFinale);

function validationFinale(event) {
    event.preventDefault();

    if ((validNom || validEmail || validCommentaire) == false) {

        missall.textContent = 'Champ manquant';
        missall.style.color = 'red';
        return false;

    } else {

        missall.textContent = 'Champ Verifié';
        missall.style.color = 'green';
        return true;
    }

}


console.log('%c%s',
    'color: red;  font-size: 12px;', '   |-- Putain ca marche !!!!!');