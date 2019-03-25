

function signUp(){
    const mail = document.getElementById('mail').value;
    const password = document.getElementById('pwd').value;
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
function showModal() {
  loginModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
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

//function that checks if the user is already log
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
  //log out
    firebase.auth().signOut();
    //clean the div that shows the button "Cerrar sesion"
    const validateUser = document.getElementById("validateUser");
    validateUser.innerHTML = "";
}

function showValidation (){
    //creates and shows a button for logout only if user is already login
    const validateUser = document.getElementById("validateUser");
    validateUser.innerHTML = "";
    validateUser.innerHTML =  `<p>BIENVENIDO </p>
    <button id="logOut">CERRAR SESIÓN</button>`;

    document.getElementById("logOut").addEventListener('click', close);
}