

function signUp(){
    const mail = document.getElementById('mail').value;
   // console.log(mail);
    const password = document.getElementById('pwd').value;
   //observer();
	firebase.auth().createUserWithEmailAndPassword(mail, password).catch(function(error) {
        console.log(mail);
        
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
        
        
      });
}
document.getElementById('btn-signUp').addEventListener('click', signUp);



function login(){
	const mailLogin = document.getElementById('loginMail').value;
    const passwordLogin = document.getElementById('loginPwd').value;
    observer(mail);
	firebase.auth().signInWithEmailAndPassword(mailLogin, passwordLogin).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
  closeModal();
}
document.getElementById('btn-login').addEventListener('click', login);

// Get the modal
const loginModal = document.getElementById('login-modal');

// Get the button that opens the modal
const loginModalbBtn = document.getElementById("login-Modal-Btn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("closeLoginModal")[0];

// When the user clicks the button, open the modal 
loginModalbBtn.addEventListener("click", showModal);
//btn.onclick = 
function showModal() {
  loginModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
//span.onclick = 
span.addEventListener("click", closeModal)
function closeModal() {
  loginModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
//creo que debemos corregir esta parte, pero no sé como
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}

function observer () {
    firebase.auth().onAuthStateChanged(function(user) {
      //console.log(user);
        if (user) {
          console.log('Existe usuario activo');
            showValidation();
            
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          console.log('No existe usuario activo');
          
        }
      });
}
observer();


function close(){
  console.log('hola')
    firebase.auth().signOut();
    const validateUser = document.getElementById("validateUser");
    validateUser.innerHTML = "";
}

function showValidation (){
    const validateUser = document.getElementById("validateUser");
    validateUser.innerHTML = "";
    //validateUser.innerHTML = "Solo lo ve usuario activo";
    validateUser.innerHTML =  `<p>BIENVENIDO </p>
    <button id="logOut">CERRAR SESIÓN</button>`;

    document.getElementById("logOut").addEventListener('click', close);
}