
text = localStorage.getItem('text')
image = localStorage.getItem('image')
price = localStorage.getItem('price')
descriptions = localStorage.getItem('description')
productDetails = localStorage.getItem('product')
shipping_fee = 500
let product_size = "medium"

btns = document.getElementsByClassName('btn-size')
for(let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        product_size = btns[i].innerHTML
    })
}


document.getElementById('name1').innerText=`${text}`;
document.getElementById('name2').innerText=`${text}`;
document.getElementById('description').innerText=`${descriptions}`;
document.getElementById('productDetail1').innerText=`${productDetails}`;
document.getElementById('price1').innerText=`Rs: ${price}`;
document.getElementById('image1').src=`${image}`;


btn_buy = document.getElementById('buy-now')
btn_buy.addEventListener('click', function(){
    document.getElementById('slip-data').innerHTML = `<div class="slip-show">
    SLIP SHOW HERE
  </div>`
    document.getElementById("myForm").style.display = "block";    
})

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById('full-name').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('address').value = ""
}

document.getElementById('confirm-order').addEventListener('click', function(){
    if(document.getElementById('full-name').value != "" && document.getElementById('phone').value != "" && document.getElementById('address').value != ""){
        
        quantity = document.getElementById('btn1').innerHTML
        total_price = (price * parseInt(quantity))
        if(total_price>=10000){
            shipping_fee = 0
        }
        total_amount = total_price + shipping_fee


        document.getElementById('slip-data').innerHTML = `<h3 style="text-align: center; margin-top: 55px;">Slip</h3>
    <div class="product-slip" style="padding: 6px 10px;">
      <div class="row">
          <div class="col-5">
            Customer name: <br>
            Phone Number: <br>
            Address: <br>
            Product name: <br>
            Product size: <br>
            price: <br>
            Quantity:<br>
            Shipping fee: <br>
          </div>
          <div class="col-7" style="text-align: right;">
            ${document.getElementById('full-name').value} <br>
            ${document.getElementById('phone').value} <br>
            ${document.getElementById('address').value} <br>
            ${text} <br>
            ${product_size} <br>
            ${price} <br>
            ${quantity}<br>
            ${shipping_fee} <br>
          </div>
      </div>
      <hr>
            Total amount: <span style="margin-left: 55%"> ${total_amount} </span>
    </div>`
    setTimeout(()=>{
        alert("Your order has been confirmed will be delivered within 3 days!")
    },100)
    }
    else{
        alert('please fill form')
    }
        
})
