
text = localStorage.getItem('text')
image = localStorage.getItem('image')
price = localStorage.getItem('price')
descriptions = localStorage.getItem('description')
productDetails = localStorage.getItem('product')


btn_buy = document.getElementById('buy-now')
document.getElementById('name1').innerText=`${text}`;
document.getElementById('name2').innerText=`${text}`;
document.getElementById('description').innerText=`${descriptions}`;
document.getElementById('productDetail1').innerText=`${productDetails}`;
document.getElementById('price1').innerText=`Rs: ${price}`;
document.getElementById('image1').src=`${image}`;

btn_buy.addEventListener('click', function(){
    alert(`${text}
    ${image}
    ${price}
    ${productDetails}`)

})

