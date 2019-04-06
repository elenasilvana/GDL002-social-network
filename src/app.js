
// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();
//agregar documentos
//esta funcion esta guardando los post en la nube de firestore
export function savePost() {
  //aqui tendría que ir un userInfo

  let title = document.getElementById('title').value;
  let userPost = document.getElementById('userPost').value;
  let info = document.getElementById('info-radio').checked;
  let swap = document.getElementById('swap-radio').checked;

  let like = 0;
  let user = firebase.auth().currentUser;
  let who = user.displayName;
  let whoId = user.uid;

  console.log('estoy guardando tu post');
  if ((info || swap) === true) {
    //todavía no hacemos nada con esto pero ya revisa que haya uno en true
    console.log('hola')
  }

  //obtener el value del checkbox

  db.collection('post')
    .add({
      title: title,
      userPost: userPost,
      like : like,
      who : who,
      whoId : whoId,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('title').value = '';
      document.getElementById('userPost').value = '';
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
}


//if(window.location.hash === '#timeline') {
//document.getElementById('btn-post').addEventListener('click', savePost);
//agregar documentos
//}

//leer documentos
//let boxPost = document.getElementById('boxPost');


export function printPostCollection(divElement) {
  console.log('divElement', divElement);
  db.collection('post').onSnapshot(querySnapshot => {
    divElement.innerHTML = '';
    querySnapshot.forEach(doc => {
      //console.log(`${doc.title} => ${doc.data().title}`);
      divElement.innerHTML += `
          <li>
          <tr>
            <th scope="col">${doc.data().title}</th>
          </tr>
          <tr>
            <td scope="row">${doc.data().userPost}</t>
             <td><button id = "${doc.id}" like="${doc.data().like}" class="btn btn-danger btn-like">like</button> </td>
            <td><button id = "${doc.id}" class="btn btn-danger btn-delete">Eliminar</button> </td>
            <td><button id = "${doc.id}" title = "${doc.data().title}" message = "${doc.data().userPost}" class="btn btn-warning btn-edit">Editar</button> </td>
          </tr>
        </li>
          `;


      //******Remplazar onclick por un querySelect y hacer el click en el Template**************
      // document.querySelector('#btn-delete-'+doc.id).addEventListener('click', function () {
      //   deletedPost(doc.id);
      // });
      // document.querySelector('#btn-edit').addEventListener('click', function(){
      //   editPost(doc.id, doc.data().title, doc.data().userPost);
      // })
    });

    let likeButton = document.querySelectorAll('.btn-like');

    for (var i = 0; i < likeButton.length; i++) {
      likeButton[i].addEventListener('click', function (event) {
        addLikes(event.target.id, event.target.getAttribute('like'));
        //id, like
      console.log(event.target.id, event.target.getAttribute('like'));
      });
    }

    let deleteButtons = document.querySelectorAll('.btn-delete');

    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', function (event) {
        deletedPost(event.target.id);
        console.log(event.target.id);
      });
    }

    let editButtons = document.querySelectorAll('.btn-edit');

      for (let j = 0; j < editButtons.length; j++) {
        editButtons[j].addEventListener('click', function (event) {
          console.log(event.target.getAttribute('message'));
          editPost(event.target.id, event.target.title, event.target.getAttribute('message'));
        });

      }
  });
}

//borrar documentos
export function deletedPost(id) {
  db.collection('post')
    .doc(id)
    .delete()
    .then(function () {
      console.log('Document successfully deleted!');
    })
    .catch(function (error) {
      console.error('Error removing document: ', error);
    });
}

//editar documentos

/**Funcion de editar hay que modificarla */
export function editPost(id, title, userPost) {
  document.getElementById('title').value = title;
  document.getElementById('userPost').value = userPost;

  let btnEdit = document.getElementById('btn-post');
  btnEdit.innerHTML = 'Editar';

  btnEdit.onclick = function () {
    let ourCollection = db.collection('post').doc(id);
    let title = document.getElementById('title').value;
    let userPost = document.getElementById('userPost').value;

    return ourCollection
      .update({
        title: title,
        userPost: userPost,
      })
      .then(function () {
        console.log('Document successfully updated!');
        btnEdit.innerHTML = 'Guardar';
        document.getElementById('title').value = '';
        document.getElementById('userPost').value = '';
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };
}

function addLikes (id, likes) {

  likes++;

  likes = parseInt(likes);

  //la coleccion de post
  //let washingtonRef = db.collection('post').doc(id);
  let likesPostRef = db.collection('post').doc(id);

  //return washingtonRef
  return likesPostRef
    .update({
      like: likes,
      
    }).then(function(){
      //let washingtonRef = (db.collection('post').doc(id)).id;
      let likesPostRef = (db.collection('post').doc(id)).id;
    
        //el botón, buscar la imagen
       let buttonLike= document.getElementById(likesPostRef);
        buttonLike.innerHTML+= " " + likes;
      })
    .then(function() {
      console.log('Document successfully updated!');
    })

    .catch(function(error) {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
}

