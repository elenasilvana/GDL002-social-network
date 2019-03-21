
function login(){
	const mail = document.getElementById('mail').value;
	const password = document.getElementById('pwd').value;
	firebase.auth().createUserWithEmailAndPassword(mail, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
        
        
      });
}
document.getElementById('btn-login').addEventListener('click', login);