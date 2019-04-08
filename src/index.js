import {savePost, printPostCollection} from './app.js';

export const mainPage= () => {
    const divElem=document.createElement('div');
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
    `;
    document.getElementById('content').innerHTML = homePage;
}

export const timelineWall= () =>{
    console.log('holi')
    const divElem= document.createElement('div');

let timeline = `
<section class="timeline">
    Información o Trueque
    <div>
    <a href="#home">Inicio</a>
    <a href="#timeline">Info o trueque</a>
    <a href="#profile">Perfil</a>
    </div>
    <img class="image" src="" />
    <p>hola timeline en TEMPLATE</p>
    
    <div class="container" style="text-align:center">
        <h2>INFO O TRUEQUE:</h2>
        <input type="text" id="title" placeholder="titulo" class="form control col-12 col-lg-8"> <br> <br>
        <textarea type="text" id="userPost" placeholder="que deseas compartir" class="form control col-12 col-lg-8"></textarea>
        <br>
        <input type="radio" required name="category" id="info-radio" value="INFO">information
        <input type="radio" required name="category" id="swap-radio" value="SWAP">trueque
        <button type="button" class="btn btn-info m-5 green-btn" id="btn-post">PUBLICAR</button>
        <!-- Tabla donde se muestran los post -->
        <table class="table my-3">
            <tbody id="boxPost"></tbody>
        </table>
    </div>
</section>
`;
//divElem.innerHTML = timeline;
document.getElementById('content').innerHTML = timeline;
let boxPost = document.querySelector('#boxPost');
//let boxPost = document.getElementById('boxPost');
console.log(boxPost);

printPostCollection(boxPost);
document.querySelector('#btn-post').addEventListener('click', savePost);
//document.getElementById('boxPost').addEventListener('click', savePost);  
}

export const profile= () => {
    const divElem=document.createElement('div');
let profilePage = `
    <section class="profile">
        Perfil
        <div>
        <a href="#home">Inicio</a>
        <a href="#timeline">Info ó trueque</a>
        <a href="#profile">Perfil</a>
        </div>
        <img class="image" src="" />
        <p>Es mi perfil</p>
    </section>
    `;
    document.getElementById('content').innerHTML = profilePage;

}


// let routes = {
//     '': homePage,
//     '#home': homePage,
//     '#timeline': timeline,
//     '#profile': profilePage,
// };
//let contentDiv = document.getElementById('content');

// window.addEventListener("hashchange", () => {
//     console.log('aqui está el eventlistener');
//     contentDiv.innerHTML = routes[window.location.hash];
// });

// contentDiv.innerHTML = routes[window.location.hash];


