// const btnAddCart = document.querySelectorAll('.add-to-cart')
// console.log(btnAddCart)
// btnAddCart.forEach(function (button, index) {
//     button.addEventListener("click", function (event) {
//         var btnItem = event.target
//         var product = btnItem.parentElement
//         var productImg = document.querySelector(".home-product-item__img").style.backgroundImage;
//         console.log(productImg)                       
//         var productName = product.querySelector(".home-product-item__nametitle").innerText
//         var productPrice = product.querySelector(".home-product-item__price-cunrent").innerText
//         addCart(productImg, productName, productPrice)
        
//     })
// })
// function addCart(productImg, productName, productPrice) {
//     var addItem = document.createElement("li")
//     var LiPrice ='<li class="header__cart-item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqMfAVKh351WTXloqFHogJG8MFDvHg8lki4BT81fKAR3jrdsUoh4-4rS3ZFH2waCsDQ0&usqp=CAU" alt="" class="header__cart-img"><div class="header__cart-item-info"><div class="header__cart-item-head"><h5 class="header__cart-item-name">'+productName+'</h5><div class="header__cart-item-price-wrap"><span class="header__cart-price">'+productPrice+'đ</span><span class="header__cart-mutiply">x</span><span class="header__cart-qnt">2</span></div></div><div class="header__cart-item-body"><span class="header__cart-item-decription">Phân loại : Bạc</span><span class="header__cart-item-remove">Xóa</span></div></div></li>'     
//     addItem.innerHTML = LiPrice
//     var cartList = document.querySelector(".header__cart-list-item")
//     console.log(cartList)
//     cartList.append(addItem)
// }
const chooseProduct = document.querySelectorAll('.home-product-item')
chooseProduct.forEach(function(a, index) {
    a.addEventListener("click", function (event) {
                var btnItem = event.target              
                var product = btnItem.parentElement               
                var productImg = document.querySelector(".home-product-item__img").style.backgroundImage;  
                console.log(productImg)                                 
                var productName = product.querySelector(".home-product-item__name").innerText                
                var productPrice = product.querySelector(".home-product-item__price-cunrent").innerText
                addCart(productImg)
            })
});

function addCart(productImg, productName, productPrice) {
        var addItem = document.createElement("div")
        console.log(addItem)
        var divIMG ='<div class="img-product"style="background-image: '+productImg+';"> </div>'    
        addItem.innerHTML = divIMG
        var cartList = document.querySelector(".img-product-full")                
        console.log(cartList)   
        cartList.append(addItem)
    }
// up down btn

// let inputNumber = document.querySelector('.details-product-set-up__item-content-quantity');
// let inputNumberUpDown = inputNumber.value;

// let render= (inputNumberUpDown) => {
//     inputNumber.value = inputNumberUpDown
// }

// let ClickPlus = () =>  {
//     inputNumberUpDown++;
//     render(inputNumberUpDown);
// }

// let ClickMinus = () =>  {
//     if(inputNumberUpDown > 1)
//         inputNumberUpDown--;    
//     render(inputNumberUpDown);
// }

// inputNumber.addEventListener('input', () => {
//     inputNumberUpDown = inputNumber.value
//     inputNumberUpDown = parseInt(inputNumberUpDown)
//     inputNumberUpDown = (isNaN(inputNumberUpDown) || inputNumberUpDown==0 )?1:inputNumberUpDown;
//     render(inputNumberUpDown);
//     console.log(inputNumberUpDown)
// })