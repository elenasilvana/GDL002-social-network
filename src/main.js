window.onload = () => {
  location.hash = '#open-modal';
}


/**Función para registrarse en sitio con correo y pwd */
function signUp(){

  const mail = document.getElementById('mail').value;
  const password = document.getElementById('pwd').value;

      firebase.auth().createUserWithEmailAndPassword(mail, password)
      .then(function(){
        verify();
        })
      .catch(function(error) {
     
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
      alert('Verifica tus datos');

      
  
    });
}

document.getElementById('btn-signUp').addEventListener('click', signUp);

/**Función para iniciar Sesión una vez registrado */
function login(){
const mailLogin = document.getElementById('loginMail').value;
  const passwordLogin = document.getElementById('loginPwd').value;
  observer(mail);
firebase.auth().signInWithEmailAndPassword(mailLogin, passwordLogin)
.catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
      alert('OJO verificar datos');
    });
    (function(){
      '#modal-close'
    });
}

document.getElementById('btn-login').addEventListener('click', login);
// When the user clicks anywhere outside of the modal, close it
//function that checks if the user is already log

/**Función del Observador, verifica correo enviado, que exista el usuario, permite que el usuario visualizar post en timeline */
function observer () {
    firebase.auth().onAuthStateChanged(function(user) {
      
        if (user) { 
          console.log('Existe usuario activo');
          showValidation(user);
          location.hash = '#timeline';
          // User is signed in.
          let displayName= user.displayName;
          console.log('displayName');
          
          let email = user.email;
          console.log('*****************');
          console.log(user.emailVerified);
          console.log('*****************');
          let emailVerified = user.emailVerified;
          let photoURL = user.photoURL;
          let isAnonymous = user.isAnonymous;
          let uid = user.uid;
          console.log('user uid ' + uid);
          let providerData = user.providerData;
          // Muestra Post una vez dentro.
          //printPostCollection(document.getElementById('boxPost'));
         }
         //else if (user.emailVerified === true){
        //     location.hash = '#timeline';
        // } 
        else {  
          console.log('No existe usuario activo');
          //validateUser.innerHTML =  alert("aun no te has registrado");
         // boxPost.innerHTML = '';
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
  location.hash = '#open-modal';
  
}

/**Función Validación de cta en email de usuario*/
function showValidation (user){
  //creates and shows a button for logout only if user is already login
  //var user = user;
  const validateUser = document.getElementById("validateUser");
    if (user.emailVerified){
    validateUser.innerHTML =  `
    <div class ="container mt-5">
    <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Bienvenido ${user.email}</h4>
    <p>¡Ahora formas parte de nuestra comunidad!</p>
    <hr>
    <p class="mb-0"></p>
    </div>
    <button class="btn btn-danger" id="logOut">Cerrar Sesión</button>
    </div>`;

    document.getElementById("logOut").addEventListener('click', close);
  } 

}

function verify(){
//verificación de correo electrónico
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    alert('Se ha enviado un correo para verificar que eres tu')
    // Email sent.
  }).catch(function(error) {
    console.log(error);
    // An error happened.
  })
}

function signWithGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    //timelineWall();
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
document.getElementById("loginGoogle").addEventListener('click', signWithGoogle);
