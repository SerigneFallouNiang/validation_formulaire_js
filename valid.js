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

const validEmail = function (inputEmail){
    // création de l'expression reguliaire pour validation email
    let emailRegExp = new RegExp(
'^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
'g'
    );

let testEmail = emailRegExp.test(inputEmail.value);

// nextElementSibling c'est pour attraper la balise qui est juste aprés
let small = inputEmail.nextElementSibling;

if(testEmail){
    small.innerHTML = 'Adresse Valide';
} else{
    small.innerHTML = 'Adresse Non Valide';
}
};