import {homeLoad} from './home.js';
import {menuLoad} from './menu.js';
import {contactLoad} from './contact.js';

function firstLoad(){
    const content = document.querySelector('#content');
    const title = document.createElement('div');
    const tabs = document.createElement('div');
    const tab1 = document.createElement('button');
    const tab2 = document.createElement('button');
    const tab3 = document.createElement('button');
    const body = document.createElement('div');
    const description = document.createElement('div');
    const img = document.createElement('img');

    tab1.textContent = 'Home';
    tab2.textContent =  'Menu';
    tab3.textContent = 'Contact';
    title.textContent = "Jack's Bistro";
    description.textContent = 'The best restaurant in the world!';
    img.src = './images/restaurant.jpeg';

    content.style.cssText = 'display: flex ; flex-direction: column ; align-items: center'
    tabs.style.cssText = 'margin-top: 5%'
    title.style.cssText = 'padding: 5% ; font-size: 3rem; background-color: lightblue; width: 100%; text-align: center'
    tabs.style.cssText = 'display: flex ; gap: 15px; align-items: center'
    body.style.cssText = 'display: flex; align-items: center; gap: 15px; margin-top: 5%';

    tabs.appendChild(tab1);
    tabs.appendChild(tab2);
    tabs.appendChild(tab3);
    body.appendChild(description);
    body.appendChild(img);
    content.appendChild(title);
    content.appendChild(tabs);
    content.appendChild(body);

    tab1.addEventListener('click', ()=> {
        content.innerHTML = '';
        homeLoad();
    });
    tab2.addEventListener('click', () => {
        content.innerHTML = '';
        menuLoad();
    });
    tab3.addEventListener('click', () =>{
        content.innerHTML = '';
        contactLoad();
    });
}

export {
    firstLoad,
};
