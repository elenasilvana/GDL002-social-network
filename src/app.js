//postId is a post counter to order them later
let postId= 0;

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

//Función "savePost" guarda los post en la nube de firestore
//save posts in firestore cloud
export function savePost() {

  let title = document.getElementById('title').value;
  let userPost = document.getElementById('userPost').value;
  let info = document.getElementById('info-radio').checked;
  let swap = document.getElementById('swap-radio').checked;

  //like counter
  let like = 0;

  let user = firebase.auth().currentUser;
  let who = user.displayName;
  let userMail = user.email;
  let whoId = user.uid;
  let category;

  //se obtiene la categoría del radio seleccionado
  //get category selected by user
  if (info) {
    category = "info";
  }
  
  else { category = "swap";
  }

// TODO: Add 'liked' property, needs to be boolean and initialized in false
//       When a post is 'liked' it needs to be set to true
//
  db.collection('post')
    .add({
      postId: postId,
      title: title,
      userPost: userPost,
      like : like,
      who : who,
      whoId : whoId,
      category: category,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('title').value = '';
      document.getElementById('userPost').value = '';
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
    postId++;
    console.log(postId);
}


export function printPostCollection(divElement) {
  db.collection('post').onSnapshot(querySnapshot => {
    divElement.innerHTML = '';
    querySnapshot.forEach(doc => {
    //aquí no estoy segura pero debería hacerse el sort del postId para que los muestre ya con ese orden
      //snaptshot filter, y evaluar la propiedad 
      //console.log(`${doc.title} => ${doc.data().title}`);
      divElement.innerHTML += `
      <table class="table">
      <thead class="table-head-green" >
        <tr>
          <th scope="col-12">${doc.data().title}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${doc.data().userPost}</td>
        </tr>
        <tr>
          <td><button id = "${doc.id}" like="${doc.data().like}" class="btn btn-danger btn-like green-btn"><i class="fas fa-leaf"></i>  Like</button> <button id = "${doc.id}" class="btn btn-danger btn-delete">Eliminar</button> <button id = "${doc.id}" title = "${doc.data().title}" message = "${doc.data().userPost}" class="btn btn-warning btn-edit">Editar</button> </td>
          </tr>
      </tbody>
    </table>
          `;
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

function addLikes(id, likes) {
// TODO      like button needs to be disabled if 'liked' property is true

  likes++;

  likes = parseInt(likes);

  //la coleccion de post
  let likesPostRef = db.collection('post').doc(id);

  return likesPostRef
    .update({
      like: likes,

    }).then(function () {
      let likesPostRef = (db.collection('post').doc(id)).id;

      //el botón, buscar la imagen
      let buttonLike = document.getElementById(likesPostRef);
      buttonLike.innerHTML += " " + likes;
    })
    .then(function () {
      console.log('Document successfully updated!');
    })

    .catch(function (error) {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
}

