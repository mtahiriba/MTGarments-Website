
text = localStorage.getItem('text')
image = localStorage.getItem('image')
price = localStorage.getItem('price')

btn_buy = document.getElementById('buy-now')
btn_buy.addEventListener('click', function(){
    alert(`${text}
    ${image}
    ${price}`)
})
