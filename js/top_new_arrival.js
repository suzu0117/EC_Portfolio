(() => {
    let items = [];
    fetch('https://ec-portfolio-back.onrender.com/itemList')
        .then(response => response.json())
        .then(data => {
            items = data.sort((a,b) => {
                return new Date(b.release_date) - new Date(a.release_date);
            });
            displayitems(items);
        })
        .catch(error => console.log(error));

    function displayitems(items) {
        const item_list = document.getElementById('new_arrival'); //htmlのnew_arrivalのdivを取得
        item_list.innerHTML = ''; //中身をリセット
        const maxdisplay = Math.min(items.length, 8); //jsonが8件未満であればjsonの件数を代入,8件以上であれば8を代入
        for(let i = 0; i < maxdisplay; i++) {
            const test = items[i];
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
            <a href="./${test.item_link}">
                    <img src="./${test.item_img}">
                    <div class="item_infomation">
                        <p>${test.item_name}</p>
                        <p>${test.item_price.toLocaleString()}円(税込み)</p>
                    </div>
                </a>
            `;
            item_list.appendChild(item)
        };
    }
})();