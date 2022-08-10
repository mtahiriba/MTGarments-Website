womencardlist = [
    {
        text: 'Silver Dress',
        price: 7999,
        image1: './images/first1.jpg',
        image2: './images/first2.jpg'
    },
    {
        text: 'Pent Shirt',
        price: 6999,
        image1: './images/second1.jpg',
        image2: './images/second2.jpg'
    },
    {
        text: 'Black Dress',
        price: 8999,
        image1: './images/third1.jpg',
        image2: './images/third2.jpg'
    },
    {
        text: 'Blue Pents',
        price: 4999,
        image1: './images/four1.jpg',
        image2: './images/four2.jpg'
    },
    {
        text: 'Red T-Shirt',
        price: 8599,
        image1: './images/five1.jpg',
        image2: './images/five2.jpg'
    },
    {
        text: 'White Dress',
        price: 4499,
        image1: './images/six1.jpg',
        image2: './images/six2.jpg'
    },
    {
        text: 'New Brown Dress',
        price: 7799,
        image1: './images/seven1.jpg',
        image2: './images/seven2.jpg'
    }
]

mencardlist = [
    {
        text: 'Formal Dress',
        price: 8000,
        image1: './images/first1.jpg',
        image2: './images/first2.jpg'
    },
    {
        text: 'Formal Shirt',
        price: 10000,
        image1: './images/first1.jpg',
        image2: './images/first2.jpg'
    }
]


kidscardlist = [
    {
        text: 'Formal Dress',
        price: 8000,
        image1: './images/first1.jpg',
        image2: './images/first2.jpg'
    }
]



let kidscount = kidscardlist.length
function kids(){
    let btns = document.querySelector('.product-cat').children
    btns[0].style.borderBottom = "none";
    btns[1].style.borderBottom = "none";
    btns[2].style.borderBottom = "2px solid rgb(225, 33, 33)";
    
    container = document.querySelector('.items-container');
    container.innerHTML = ''
    
    if(kidscount<=4){
        container.classList.remove('cont-height1')
        container.classList.remove('cont-height2')
        container.classList.add('cont-height')
    }
    else if(kidscount<=8){
        container.classList.remove('cont-height')
        container.classList.remove('cont-height2')
        container.classList.add('cont-height1')
    }
    else if(kidscount<=12){
        container.classList.remove('cont-height')
        container.classList.remove('cont-height1')
        container.classList.add('cont-height2')
    }
    
    kidscardlist.forEach(card => {
        container.innerHTML += `<div class="col-md-3 card1">
            <div class="card2">
                <img src=${card.image1} alt="" width="100%">
            </div>
            <div class="card-text">
                <a href="#">${card.text}</a>
                <br>
                <span>RS: ${card.price}</span> 
            </div>
        </div>`
    });
}


let mencount = mencardlist.length
function men(){
    let btns = document.querySelector('.product-cat').children
    btns[1].style.borderBottom = "none";
    btns[2].style.borderBottom = "none";
    btns[0].style.borderBottom = "2px solid rgb(225, 33, 33)";
    
    container = document.querySelector('.items-container');
    container.innerHTML = ''
    
    if(mencount<=4){
        container.classList.remove('cont-height1')
        container.classList.remove('cont-height2')
        container.classList.add('cont-height')
    }
    else if(mencount<=8){
        container.classList.remove('cont-height')
        container.classList.remove('cont-height2')
        container.classList.add('cont-height1')
    }
    else if(mencount<=12){
        container.classList.remove('cont-height')
        container.classList.remove('cont-height1')
        container.classList.add('cont-height2')
    }
    
    mencardlist.forEach(card => {
        container.innerHTML += `<div class="col-md-3 card1">
            <div class="card2">
                <img src=${card.image1} alt="" width="100%">
            </div>
            <div class="card-text">
                <a href="#">${card.text}</a>
                <br>
                <span>RS: ${card.price}</span> 
            </div>
        </div>`
    });
}


let womencount = womencardlist.length
function women(){
    let btns = document.querySelector('.product-cat').children
    btns[0].style.borderBottom = "none";
    btns[1].style.borderBottom = "2px solid rgb(225, 33, 33)";
    btns[2].style.borderBottom = "none";
    
    container = document.querySelector('.items-container');
    container.innerHTML = ''
    
    if(womencount<=4){
        container.classList.remove('cont-height1')
        container.classList.remove('cont-height2')
        container.classList.add('cont-height')
    }
    else if(womencount<=8){
        container.classList.remove('cont-height')
        container.classList.remove('cont-height2')
        container.classList.add('cont-height1')
    }
    else if(womencount<=12){
        container.classList.remove('cont-height')
        container.classList.remove('cont-height1')
        container.classList.add('cont-height2')
    }
    
    womencardlist.forEach(card => {
        container.innerHTML += `<div class="col-md-3 card1">
            <div class="card2">
                <img src=${card.image1} alt="" width="100%">
            </div>
            <div class="card-text">
                <a href="#">${card.text}</a>
                <br>
                <span>RS: ${card.price}</span> 
            </div>
        </div>`
    });
}

let buttons = document.querySelector('.product-cat').children
buttons[0].addEventListener('click', men)
buttons[1].addEventListener('click', women)
buttons[2].addEventListener('click', kids)

women()