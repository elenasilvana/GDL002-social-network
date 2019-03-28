let homePage = `
<section class="home">
    Home page
    <div>
    <a href="#home">Home</a>
    <a href="#profile">Perfil</a>
    </div>
    <img class="image" src="" />
</section>
`;

let profilePage = `
<section class="profile">
    Perfil
    <div>
    <a href="#home">Home</a>
    <a href="#profile">Perfil</a>
    </div>
    <img class="image" src="" />
    <p>Es mi perfil</p>
</section>
`;

let routes = {
    '': homePage,
    '#home': homePage,
    '#profile': profilePage,
    };

let contentDiv = document.getElementById('content');

window.addEventListener("hashchange", () => {
    contentDiv.innerHTML = routes[window.location.hash];
});

contentDiv.innerHTML = routes[window.location.hash];