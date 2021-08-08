// Elements

let mouseBtn = document.querySelector('#mouseBtn');
let keyboardBtn = document.querySelector('#keyboardBtn');


let i = 1;












// Event listeners


mouseBtn.addEventListener('click', addMouse);



//functions

function addMouse(e) {
    let innerCart = document.querySelector('#cart');


    if (innerCart.innerHTML == '') {
        let li = document.createElement('li');
        let mouseRemoveBtn = document.createElement('button');
        let ol = document.querySelector('#cart');
        li.appendChild(document.createTextNode(`Mouse  Quantity ${i}`));
        mouseRemoveBtn.innerText = 'Remove';
        mouseRemoveBtn.className = 'mouseRemove';
        li.appendChild(mouseRemoveBtn);
        li.className = 'mouseli'
        ol.appendChild(li);
        console.log("this is from if");
        document.querySelector(".mouseRemove").addEventListener('click', removeMouse);
        // console.log(innerCart.childNodes);
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


        console.log("this is from else");
    }


    


    i = i + 1;
    e.preventDefault();
}


// function removeMouse(e) {

//     i=i-1;
//     innerCart.removeChild(document.querySelector(".mouseli"));

//     let li = document.createElement('li');
//     let mouseRemoveBtn = document.createElement('button');
//     let ol = document.querySelector('#cart');
//     li.appendChild(document.createTextNode(`Mouse  Quantity ${i}`));
//     mouseRemoveBtn.innerText = 'Remove';
//     li.appendChild(mouseRemoveBtn);
//     li.className = 'mouseli'
//     ol.appendChild(li);



//         e.preventDefault();
//     }