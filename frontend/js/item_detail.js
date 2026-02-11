const urlparams = new URLSearchParams(window.location.search);
const id = urlparams.get('id');

fetch('./json/item_list.json')
    .then(response => response.json())
    .then(data => {
        const item = data.find(test => test.id === id);
        displayitem(item);
    })
    .catch(error => console.log(error));

function displayitem(item) {
    const item_detail_area =document.getElementById('item_detail_area');
    item_detail_area.innerHTML = '';
    const item_detail = document.createElement('div');
    item_detail.className = 'item_detail';
    item_detail.innerHTML = `
        <div class="item_detail_img_area">
            <img src="${item.item_img}" class="item_detail_img">
        </div>
                    
        <div class="item_detail_produce">
            <div class="item_detail_info">
                <h3 class="item_detail_name">${item.item_name}</h3>
                <p class="item_detail_price">${item.item_price.toLocaleString()}円(税込み)</p>
            </div>

            <div class="item_detail_text">
                <p>${item.item_text}</p>
            </div>

            <div class="item_color_area" id="item_color_area"></div>
        </div>
    `;
    item_detail_area.appendChild(item_detail);
    const item_color_area = document.getElementById('item_color_area');
    item.colors.forEach(color => {
        const item_color = document.createElement('div');
        item_color.className= 'item_color';
        item_color.innerHTML = `
            <div class="item_color_name">${color}</div>
            <button class="add_cart_button">カートに入れる</button>
        `;
        item_color_area.appendChild(item_color);

        item_color.querySelector(".add_cart_button").addEventListener('click', ()=>{
            let cart = JSON.parse(localStorage.getItem("cart"))||[];

            const cartItem = {
                id: item.id,
                item_name: item.item_name,
                item_price: item.item_price,
                item_img: item.item_img,
                item_color: color
            };
            cart.push(cartItem);
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
        })
    });
    
}