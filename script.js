// Elements

let mouseBtn = document.querySelector('#mouseBtn');
let keyboardBtn = document.querySelector('#keyboardBtn');
let ramBtn = document.querySelector('#ramBtn');
let hddBtn = document.querySelector('#hddBtn');
let ssdBtn = document.querySelector('#ssdBtn');
let ol = document.querySelector('#cart');

let i = 1;
let j = 1;
let k = 1;
let h =1;
let s =1;












// Event listeners


mouseBtn.addEventListener('click', addMouse);
ol.addEventListener('click', removeMouse);
keyboardBtn.addEventListener('click', addKeyboard);
ramBtn.addEventListener('click', addRam);
hddBtn.addEventListener('click', addHdd);
ssdBtn.addEventListener('click', addSsd);




//functions







function addMouse(e) {
    let innerCart = document.querySelector('#mouseCart');


    if (innerCart.innerHTML == '') {
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#mouseCart');
        li.appendChild(document.createTextNode(`Mouse  Quantity ${i}`));
        mouseRemoveBtn.innerText = 'Remove';
        mouseRemoveBtn.className='mx-2';
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
        let ol = document.querySelector('#mouseCart');
        li.appendChild(document.createTextNode(`Mouse  Quantity ${i}`));
        mouseRemoveBtn.innerText = 'Remove';
        mouseRemoveBtn.className='mx-2';
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
    i = 1;
    e.preventDefault();
}




// keyboard part



function addKeyboard(e) {
    let innerCart = document.querySelector('#keyboardCart');


    if (innerCart.innerHTML == '') {
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#keyboardCart');
        li.appendChild(document.createTextNode(`Keyboard  Quantity ${j}`));
        mouseRemoveBtn.innerText = 'Remove';
        mouseRemoveBtn.className='mx-2';
        li.appendChild(mouseRemoveBtn);
        li.className = 'keyboardli';
        ol.appendChild(li);
        // console.log("this is from if");



        // mouseRemove.addEventListener('click', );


        j = j + 1;
    }
    else {

        innerCart.removeChild(document.querySelector(".keyboardli"));
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#keyboardCart');
        li.appendChild(document.createTextNode(`Keyboard  Quantity ${j}`));
        mouseRemoveBtn.innerText = 'Remove';
        mouseRemoveBtn.className='mx-2';
        li.appendChild(mouseRemoveBtn);
        li.className = 'keyboardli'
        ol.appendChild(li);
        j = j + 1;
        console.log("this is from else");
    }






    e.preventDefault();
}







// Ram part




function addRam(e) {
    let innerCart = document.querySelector('#ramCart');


    if (innerCart.innerHTML == '') {
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#ramCart');
        li.appendChild(document.createTextNode(`Ram  Quantity ${k}`));
        mouseRemoveBtn.innerText = 'Remove';
        mouseRemoveBtn.className='mx-2';
        li.appendChild(mouseRemoveBtn);
        li.className = 'ramli mx-2';
        ol.appendChild(li);
        // console.log("this is from if");



        // mouseRemove.addEventListener('click', );


        k = k + 1;
    }
    else {

        innerCart.removeChild(document.querySelector(".ramli"));
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#ramCart');
        li.appendChild(document.createTextNode(`Ram  Quantity ${k}`));
        mouseRemoveBtn.innerText = 'Remove';
        mouseRemoveBtn.className='mx-2';
        li.appendChild(mouseRemoveBtn);
        li.className = 'ramli'
        ol.appendChild(li);
        k = k + 1;
        console.log("this is from else");
    }






    e.preventDefault();
}




//hdd part


function addHdd(e) {
    let innerCart = document.querySelector('#hddCart');


    if (innerCart.innerHTML == '') {
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#hddCart');
        li.appendChild(document.createTextNode(`HDD  Quantity ${h}`));
        mouseRemoveBtn.innerText = 'Remove';
        mouseRemoveBtn.className='mx-2';
        li.appendChild(mouseRemoveBtn);
        li.className = 'hddli';
        ol.appendChild(li);
        // console.log("this is from if");



        // mouseRemove.addEventListener('click', );


        h = h + 1;
    }
    else {

        innerCart.removeChild(document.querySelector(".hddli"));
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#hddCart');
        li.appendChild(document.createTextNode(`HDD  Quantity ${h}`));
        mouseRemoveBtn.innerText = 'Remove';
        mouseRemoveBtn.className='mx-2';
        li.appendChild(mouseRemoveBtn);
        li.className = 'hddli'
        ol.appendChild(li);
        h = h + 1;
        // console.log("this is from else");
    }






    e.preventDefault();
}




//ssd part



function addSsd(e) {
    let innerCart = document.querySelector('#ssdCart');


    if (innerCart.innerHTML == '') {
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#ssdCart');
        li.appendChild(document.createTextNode(`SSD  Quantity ${s}`));
        mouseRemoveBtn.innerText = 'Remove';
        mouseRemoveBtn.className='mx-2';
        li.appendChild(mouseRemoveBtn);
        li.className = 'ssdli mx-2';
        ol.appendChild(li);
        // console.log("this is from if");



        // mouseRemove.addEventListener('click', );


        s = s + 1;
    }
    else {

        innerCart.removeChild(document.querySelector(".ssdli"));
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#ssdCart');
        li.appendChild(document.createTextNode(`SSD  Quantity ${s}`));
        mouseRemoveBtn.innerText = 'Remove';
        mouseRemoveBtn.className='mx-2';
        li.appendChild(mouseRemoveBtn);
        li.className = 'ssdli'
        ol.appendChild(li);
        s = s + 1;
        console.log("this is from else");
    }






    e.preventDefault();
}
