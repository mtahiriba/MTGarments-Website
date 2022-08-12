womencardlist = [
    {
        id: '1',
        text: 'Silver Dress',
        price: 7999,
        image1: './images/first1.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '2',
        text: 'Pent Shirt',
        price: 6999,
        image1: './images/second1.jpg',
        image2: './images/second2.jpg'
    },
    {
        id: '3',
        text: 'Black Dress',
        price: 8999,
        image1: './images/third1.jpg',
        image2: './images/third2.jpg'
    },
    {
        id: '4',
        text: 'Blue Pents',
        price: 4999,
        image1: './images/four1.jpg',
        image2: './images/four2.jpg'
    },
    {
        id: '5',
        text: 'Red T-Shirt',
        price: 8599,
        image1: './images/five1.jpg',
        image2: './images/five2.jpg'
    },
    {
        id: '6',
        text: 'White Dress',
        price: 4499,
        image1: './images/six1.jpg',
        image2: './images/six2.jpg'
    },
    {
        id: '7',
        text: 'New Brown Dress',
        price: 7799,
        image1: './images/seven1.jpg',
        image2: './images/seven2.jpg'
    }
]

mencardlist = [
    {
        id: '1',
        text: 'Gray Suit',
        price: 14999,
        image1: './images/menfirst.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '2',
        text: 'Formal Pant',
        price: 2999,
        image1: './images/mensecond.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '3',
        text: 'Black Shirt',
        price: 3999,
        image1: './images/menthird.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '4',
        text: 'Black Trouser',
        price: 5299,
        image1: './images/mensix.jpg',
        image2: './images/first2.jpg'
    }
    ,
    {
        id: '5',
        text: 'Blue Coat',
        price: 10999,
        image1: './images/menfive.png',
        image2: './images/first2.jpg'
    },
    {
        id: '6',
        text: 'Formal Shirt',
        price: 10000,
        image1: './images/menfour.jpg',
        image2: './images/first2.jpg'
    }
]


kidscardlist = [
    {
        id: '1',
        text: 'Pink Dress',
        price: 7999,
        image1: './images/kids1.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '2',
        text: 'New Black dress',
        price: 4499,
        image1: './images/kids7.jpg',
        image2: './images/first2.jpg'
    }
    ,
    {
        id: '3',
        text: 'Blue suit',
        price: 5999,
        image1: './images/kids3.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '4',
        text: 'New Dress',
        price: 5399,
        image1: './images/kids4.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '5',
        text: 'Formal Dress',
        price: 6999,
        image1: './images/kids5.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '6',
        text: 'Formal Dress',
        price: 3299,
        image1: './images/kids6.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '7',
        text: 'Formal Dress',
        price: 3799,
        image1: './images/kids8.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '8',
        text: 'Formal Dress',
        price: 8999,
        image1: './images/kids2.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '9',
        text: 'Formal Dress',
        price: 5899,
        image1: './images/kids9.jpg',
        image2: './images/first2.jpg'
    },
    {
        id: '10',
        text: 'Formal Dress',
        price: 4999,
        image1: './images/kids10.jpg',
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
        <div class="card3">
            <div class="card2">
                <a href="./product.html"  id=${card.id}><img src=${card.image1} alt="" width="100%"></a>
            </div>
            <div class="card-text">
                <a href="./product.html"  id=${card.id}>${card.text}</a>
                <br>
                <span>RS: ${card.price}</span> 
            </div>    
        </div>
        
    </div>`

    ass = document.querySelectorAll('.card3 a')
    for(let i=0; i<ass.length; i++){
        ass[i].addEventListener('click', function(event){
            event.preventDefault()
            for(let j=0; j<kidscardlist.length; j++){
                if(kidscardlist[j].id == ass[i].id){
                    localStorage.setItem("text", kidscardlist[j].text)
                    localStorage.setItem("image", kidscardlist[j].image1)
                    localStorage.setItem("price", kidscardlist[j].price)
                }
            }
            window.location = './product.html'

        })
    }

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
        <div class="card3">
            <div class="card2">
                <a href="./product.html"  id=${card.id} ><img src=${card.image1} alt="" width="100%"></a>
            </div>
            <div class="card-text">
                <a href="./product.html"  id=${card.id}>${card.text}</a>
                <br>
                <span>RS: ${card.price}</span> 
            </div>    
        </div>
        
    </div>`

    ass = document.querySelectorAll('.card3 a')
    for(let i=0; i<ass.length; i++){
        ass[i].addEventListener('click', function(event){
            event.preventDefault()
            for(let j=0; j<mencardlist.length; j++){
                if(mencardlist[j].id == ass[i].id){
                    localStorage.setItem("text", mencardlist[j].text)
                    localStorage.setItem("image", mencardlist[j].image1)
                    localStorage.setItem("price", mencardlist[j].price)
                }
            }
            window.location = './product.html'

        })
    }

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
            <div class="card3">
                <div class="card2">
                    <a href="./product.html" id=${card.id}><img src=${card.image1} alt="" width="100%"></a>
                </div>
                <div class="card-text">
                    <a href="./product.html"  id=${card.id}>${card.text}</a>
                    <br>
                    <span>RS: ${card.price}</span> 
                </div>    
            </div>
        </div>`
    });

    ass = document.querySelectorAll('.card3 a')
    for(let i=0; i<ass.length; i++){
        ass[i].addEventListener('click', function(event){
            event.preventDefault()
            for(let j=0; j<womencardlist.length; j++){
                if(womencardlist[j].id == ass[i].id){
                    localStorage.setItem("text", womencardlist[j].text)
                    localStorage.setItem("image", womencardlist[j].image1)
                    localStorage.setItem("price", womencardlist[j].price)
                }
            }
            window.location = './product.html'

        })
    }
}

let buttons = document.querySelector('.product-cat').children
buttons[0].addEventListener('click', men)
buttons[1].addEventListener('click', women)
buttons[2].addEventListener('click', kids)

women()

document.querySelector('.MEN-Image').addEventListener('click', men)
document.querySelector('.WOMEN-Image').addEventListener('click', women)
document.querySelector('.KIDS-Image').addEventListener('click', kids)


