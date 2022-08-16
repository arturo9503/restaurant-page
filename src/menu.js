import {homeLoad} from './home.js';
import {contactLoad} from './contact.js';

function menuLoad(){
    const content = document.querySelector('#content');
    const title = document.createElement('div');
    const tabs = document.createElement('div');
    const tab1 = document.createElement('button');
    const tab2 = document.createElement('button');
    const tab3 = document.createElement('button');
    const body = document.createElement('div');
    const description = document.createElement('div');

    tab1.textContent = 'Home';
    tab2.textContent =  'Menu';
    tab3.textContent = 'Contact';
    title.textContent = "Jack's Bistro";
    description.textContent = 'Burgers, Pizza, Tacos, Sandwich, Icecream';

    content.style.cssText = 'display: flex ; flex-direction: column ; align-items: center'
    tabs.style.cssText = 'margin-top: 5%'
    title.style.cssText = 'padding: 5% ; font-size: 3rem; background-color: lightblue; width: 100%; text-align: center'
    tabs.style.cssText = 'display: flex ; gap: 15px; align-items: center'
    body.style.cssText = 'display: flex; align-items: center; gap: 15px; margin-top: 5%';

    tabs.appendChild(tab1);
    tabs.appendChild(tab2);
    tabs.appendChild(tab3);
    body.appendChild(description);
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

export{
    menuLoad,
}