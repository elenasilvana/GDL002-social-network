let homePage = `
<section  class = "home">
    Inicio
    <div>
    <a href="#home">Inicio</a>
    <a href="#timeline">Info o Trueque</a>
    <a href="#profile">Perfil</a>
    </div>
    <img class="image" src="" />
    <p>hola home</p>
`
let timeline = `
<section class="timeline">
    Información o Trueque
    <div>
    <a href="#home">Inicio</a>
    <a href="#timeline">Info o trueque</a>
    <a href="#profile">Perfil</a>
    </div>
    <img class="image" src="" />
    <p>hola timeline</p>
    <div class="container">
    <h2>INFO O TRUEQUE:</h2>
    <input type="text" id="title" placeholder="titulo" class="form control mt-3"> <br> <br>
    <textarea type="text" id="userPost" placeholder="que deseas compartir" class="form control"></textarea>
    <br>
      <legend category="This field is mandatory">Requiered*</legend>
      <input type="radio" required name="category" id="info-radio" value="INFO">information
    <input type="radio" required name="category" id="swap-radio" value="SWAP">trueque
</section>
`;


let profilePage = `
<section class="profile">
    Perfil
    <div>
    <a href="#timeline">Info ó trueque</a>
    <a href="#profile">Perfil</a>
    </div>
    <img class="image" src="" />
    <p>Es mi perfil</p>
</section>
`;

let routes = {
    '': homePage,
    '#home': homePage,
    '#timeline':timeline,
    '#profile': profilePage,
    };

let contentDiv = document.getElementById('content');

window.addEventListener("hashchange", () => {
    console.log('aqui está el eventlistener');
    contentDiv.innerHTML = routes[window.location.hash];
});

contentDiv.innerHTML = routes[window.location.hash];


