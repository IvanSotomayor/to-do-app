import html from './app.html?raw';


export const App = ( elementID ) => {
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementID).append( app );
    })();
}