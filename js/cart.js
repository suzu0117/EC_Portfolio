
const cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

function displaycart(cart) {
    const cart_item_area = document.getElementById('cart_item_area');
    cart_item_area.innerHTML = '';
    if (cart.length > 0) {
        cart.forEach((test,index) => {
            const cart_item = document.createElement('div')
            cart_item.className = 'cart_item';
            cart_item.innerHTML = `
                <div class="cart_item_img_area">
                    <img src="./${test.item_img}" class="cart_item_img">
                </div>
                <div class="cart_item_info">
                    <h3 class="cart_item_name">${test.item_name}</h3>
                    <p class="cart_item_color">${test.item_color}</p>
                    <p class="cart_item_price">${test.item_price.toLocaleString()}円</p>
                    <button class="delete_button">削除</button>
                </div>
            `;
            cart_item_area.appendChild(cart_item);
            cart_item.querySelector('.delete_button').addEventListener('click',()=>{
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                displaycart(cart);
                displaycartui(cart);
            })
        })
    } else {
        cart_item_area.style.width = '100%';
        cart_item_area.innerHTML = `
            <div class="empty_cart_area">
                <p class="empty_cart_message">カートが空です</p>
                <a class="empty_cart_link" href="./index.html">トップページへ</a>
            </div>
        `;
    }
}

function displaycartui(cart) {
    const cart_ui = document.getElementById('cart_ui');
    let sumitemprice = 0;
    let shipping = 0;
    let sumprice= 0;
    cart.forEach(item => {
        sumitemprice = sumitemprice + item.item_price;
    });
    if(sumitemprice >= 10000){
        shipping = 0;
    }else{
        shipping = 500;
    };
    sumprice = sumitemprice + shipping;
    cart_ui.innerHTML = '';
    if (cart.length > 0) {
        cart_ui.innerHTML = `
            <button class="buy_button">購入手続きへ</button>
            <div class="cart_ui_info">
            <div class="sum_item_price">
                            <p>商品合計</p>
                            <p>${sumitemprice}円</p>
                        </div>

                        <div class="shipping_fee">
                            <p>送料</p>
                            <p>${shipping}円</p>
                        </div>
                        
                        <div class="sum_price">
                            <p>合計金額</p>
                            <p>${sumprice}円</p>
                        </div>      
            </div>
        `;
    } else {
        cart_ui.style.display = 'none';
    }
}

displaycart(cart);
displaycartui(cart);
