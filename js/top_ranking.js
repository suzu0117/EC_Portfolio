(() => {
    let items = [];
    fetch('./json/item_list.json')
        .then(response => response.json())
        .then(data => {
            items = data.sort((a,b) => {
                return a.ranking - b.ranking;
            });
            displayitems(items);
        })
        .catch(error => console.log(error));

    function displayitems(items) {
        const item_list = document.getElementById('ranking'); //htmlのnew_arrivalのdivを取得
        item_list.innerHTML = ''; //中身をリセット
        const maxdisplay = Math.min(items.length, 8); //jsonが8件未満であればjsonの件数を代入,8件以上であれば8を代入
        for(let i = 0; i < maxdisplay; i++) {
            const test = items[i];
            const item = document.createElement('div');
            item.className = 'item';

            if(test.ranking === "1"){
                item.classList.add("ranking_1");
            } else if (test.ranking === "2") {
                item.classList.add("ranking_2");
            } else if (test.ranking === "3") {
                item.classList.add("ranking_3");
            }
            
            item.innerHTML = `
            <a href="./${test.item_link}">
                    <img class="ranking_img" src="./${test.item_img}">
                    <span class="ranking_icon">${test.ranking}</span>
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