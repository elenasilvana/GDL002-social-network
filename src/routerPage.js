import {mainPage, timelineWall, profile} from './index.js';

export const nameHash=(nameHash) => {
    window.location.hash = nameHash;
}

export const router= (hash)=>{
    if (hash ==='#'|| hash ==='' || hash ==='#'){
        return showPage (hash);
    }else if (hash === '#home' || hash === '#timeline'|| hash ==='#profile'){
        return showPage(hash);
    }else {
        return showPage('#404');
    }
};

const showPage = (router) => {
    console.log('holi')
    const content = document.getElementById('content');
    content.innerHTML= '';

    switch (router){
        case '#home':
        content.innerHTML = '';
        mainPage();
        break;

        case '#timeline':
        content.innerHTML = '';
        timelineWall();
       
        break;

        case '#profile':
        content.innerHTML = '';
        profile();
        //content.innerHTML = profile;
        break;
        
        /*default:
        const home = home();
        content.appendChild(home);*/
    }

};



//export const runRouter = () => {
    window.addEventListener('load',router(window.location.hash));
    if ('onhashchange' in window) {
        window.onhashchange = () => router(window.location.hash);
    }
//};
