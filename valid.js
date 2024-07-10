// let prenom = "gael";
// pour chercher si a se trouve dans notre variable prenom ce qui nous retour true
// console.log(/b/.test(prenom));

// oubien
// let prenom = "gael";
// let regExp = new RegExp('a');
// console.log(regExp.test(prenom));

let form = document.querySelector('#loginForm');

// console.log(form.email);
// Ecouter la modification de l'email
form.email.addEventListener('change',function(){
validEmail(this);  
});


// Ecouter la modification du password
// le petit e sert à récuperer l'évennement
form.password.addEventListener('change',function(){
    validPassword(this);  
    });

    // le changement du nom
form.nom.addEventListener('change',function(){
    validNom(this);  
    });


// Ecouter la soumission du formulaire
    form.addEventListener('submit',function(e){
        e.preventDefault();
    if(validEmail(form.email) &&  validPassword(form.password) && validNom(form.nom)){
      form.submit();
    }
    });

//********************** */ validation Email******************
const validEmail = function (inputEmail){
    // création de l'expression reguliaire pour validation email
    let emailRegExp = new RegExp(
'^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
'g'
    );



// nextElementSibling c'est pour attraper la balise qui est juste aprés
// recuperation de la balise small
let small = inputEmail.nextElementSibling;

// on test l'expression reguliere
let testEmail = emailRegExp.test(inputEmail.value);
if(testEmail){
    small.innerHTML = 'Adresse Valide';
    small.classList.add('text-success');
    small.classList.remove('text-danger');
    return true;
} else{
    small.innerHTML = 'Adresse Non Valide';
    small.classList.add('text-danger');
    small.classList.remove('text-success');
    return false;
}
};




//********************** */ validation Password******************
const validPassword = function (inputPassword){
    let msg;
    let valid = false;

    // Au moins 8 caracteres
    if(inputPassword.value.length < 8){
        msg = "Le mot de passe doit contenir au moins 8 caracteres"
    }
    // Au moins 1 maj
    else if (!/[A-Z]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 majuscule" 
    }
    // Au moins 1 min
    else if (!/[a-z]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 minuscule" 
    }
    // Au moins 1 chiffre
    else if (!/[0-9]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 chiffre" 
    }

    // Mot de passe valide 
    else{
        msg = "Le mot de passe est valide" 
        valid = true;
    }

    // Affichage
    // recuperation de la balise small
let small = inputPassword.nextElementSibling;

// on test l'expression reguliere
if(valid){
    small.innerHTML = 'Mot de passe Valide';
    small.classList.add('text-success');
    small.classList.remove('text-danger');
    // return true permet de controller le button submit
    return true ;
} else{
    small.innerHTML = msg;
    small.classList.add('text-danger');
    small.classList.remove('text-success');
      // return false permet de controller le button submit
      return false ;
}
};




//********************** */ validation Nom******************
const validNom = function (inputNom){
    let msg;
    let valid = false;

    // Nom compris entre 3 et 15
    if(inputNom.value.length < 3 || inputNom.value.length > 15){
        msg = "Le nom doit etre compris entre 3 et 15"
    }
    else{
        msg = "Le nom est est valide" 
        valid = true;
    }

    // Affichage
    // recuperation de la balise small
let small = inputNom.nextElementSibling;

// on test l'expression reguliere
if(valid){
    small.innerHTML = 'Nom  Valide';
    small.classList.add('text-success');
    small.classList.remove('text-danger');
    // return true permet de controller le button submit
    return true ;
} else{
    small.innerHTML = msg;
    small.classList.add('text-danger');
    small.classList.remove('text-success');
      // return false permet de controller le button submit
      return false ;
}
};