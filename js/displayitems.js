let items = [];
fetch('./json/item_list.json')
    .then(response => response.json())
    .then(data => {
        items = data.sort((a,b) => {
            return new Date(b.release_date) - new Date(a.release_date);
        });
        displayitems(items);
    })
    .catch(error => console.log(error));

function displayitems(items) {
    const item_list = document.getElementById('item_list');
    item_list.innerHTML = '';
    items.forEach(test => {
        const item = document.createElement('div')
        item.className = 'item';
        item.innerHTML = `
           <a href="./${test.item_link}">
                <img src="./${test.item_img}">
                <div class="item_infomation">
                    <p>${test.item_name}</p>
                    <p>${test.item_price.toLocaleString()}円(税込み)</p>
                    <p>${test.release_date}</p>
                </div>
            </a>
        `;
        item_list.appendChild(item)
    });
}