let infoTrueque = `
<section class="timeline">
    Información o Trueque
    <div>
    <a href="#timeline">Info o trueque</a>
    <a href="#profile">Perfil</a>
    </div>
    <img class="image" src="" />
    <p>hola home</p>
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
    '': timeline,
    '#timeline': infoTrueque,
    '#profile': profilePage,
    };

let contentDiv = document.getElementById('content');

window.addEventListener("hashchange", () => {
    console.log('aqui está el eventlistener');
    contentDiv.innerHTML = routes[window.location.hash];
});

contentDiv.innerHTML = routes[window.location.hash];


