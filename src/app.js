firebase.initializeApp({
    apiKey: 'AIzaSyAxb4EmMmVWcrftptR4Xvx_baYsBqTwnZE',
    authDomain: 'enraizados-16d5c.firebaseapp.com',
    projectId: 'enraizados-16d5c'
  });
  
  // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
//agregar documentos
function savePost(){
    let title= document.getElementById('title').value;
    let userPost= document.getElementById('userPost').value;

    let checkboxValue = document.getElementById('info-checkbox').value;
    console.log(checkboxValue);

    //obtener el value del checkbox


    db.collection("post").add({
        title: title,
        userPost: userPost
       
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
       document.getElementById('title').value='';
       document.getElementById('userPost').value='';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });    

}
document.getElementById("btn-post").addEventListener('click', savePost);
//agregar documentos



//leer documentos
let boxPost= document.getElementById('boxPost')
db.collection("post").onSnapshot((querySnapshot) => {
    boxPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.title} => ${doc.data().title}`);
        boxPost.innerHTML += `
        <thead>
        <tr>
          <th scope="col">${doc.data().title}</th>
        </tr>
        <tr>
          <td scope="row">${doc.data().userPost}</t>
          <td><button class="btn btn-danger" onclick="deleted('${doc.id}')">Eliminar</button> </td>
          <td><button class="btn btn-warning" onclick="edit('${doc.id}','${doc.data().title}','${doc.data().userPost}')">Editar</button> </td>
        </tr>
      </thead>
        `;
    });
});
//borrar documentos
function deleted(id){
    db.collection("post").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

//editar documentos

function edit(id,title,userPost){
    document.getElementById("title").value = title;
    document.getElementById("userPost").value = userPost;

    let btnEdit = document.getElementById("btn-post");
    btnEdit.innerHTML = "Editar";

    btnEdit.onclick = function(){
    let ourCollection = db.collection("post").doc(id);
    let title = document.getElementById("title").value;
    let userPost = document.getElementById("userPost").value;

    return ourCollection.update({
        title: title,
        userPost: userPost
    })
    .then(function() {
        console.log("Document successfully updated!");
        btnEdit.innerHTML = "Guardar";
        document.getElementById('title').value='';
       document.getElementById('userPost').value='';
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    }
}
