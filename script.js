// Elements

let mouseBtn = document.querySelector('#mouseBtn');
let keyboardBtn = document.querySelector('#keyboardBtn');
let ol = document.querySelector('#cart');

let i = 1;












// Event listeners


mouseBtn.addEventListener('click', addMouse);
ol.addEventListener('click',removeMouse);
keyboardBtn.addEventListener('click',addKeyboard);



//functions







function addMouse(e) {
    let innerCart = document.querySelector('#cart');


    if (innerCart.innerHTML == '') {
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#cart');
        li.appendChild(document.createTextNode(`Mouse  Quantity ${i}`));
        mouseRemoveBtn.innerText = 'Remove';
        li.appendChild(mouseRemoveBtn);
        li.className = 'mouseli';
        ol.appendChild(li);
        console.log("this is from if");

       

        // mouseRemove.addEventListener('click', );


        i = i + 1;
    }
    else {

        innerCart.removeChild(document.querySelector(".mouseli"));
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#cart');
        li.appendChild(document.createTextNode(`Mouse  Quantity ${i}`));
        mouseRemoveBtn.innerText = 'Remove';
        li.appendChild(mouseRemoveBtn);
        li.className = 'mouseli'
        ol.appendChild(li);
        i = i + 1;
        console.log("this is from else");
    }






    e.preventDefault();
}


function removeMouse(e) {
    console.log(e.target.hasAttribute('href'));
    let ele = e.target.parentElement;
        ele.remove();
        i=1;
    e.preventDefault();
}








function addKeyboard(e) {
    let innerCart = document.querySelector('#cart');


    if (innerCart.innerHTML == '') {
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#cart');
        li.appendChild(document.createTextNode(`Keyboard  Quantity ${i}`));
        mouseRemoveBtn.innerText = 'Remove';
        li.appendChild(mouseRemoveBtn);
        li.className = 'mouseli';
        ol.appendChild(li);
        // console.log("this is from if");

       

        // mouseRemove.addEventListener('click', );


        i = i + 1;
    }
    else {

        innerCart.removeChild(document.querySelector(".mouseli"));
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#cart');
        li.appendChild(document.createTextNode(`Keyboard  Quantity ${i}`));
        mouseRemoveBtn.innerText = 'Remove';
        li.appendChild(mouseRemoveBtn);
        li.className = 'mouseli'
        ol.appendChild(li);
        i = i + 1;
        console.log("this is from else");
    }






    e.preventDefault();
}
