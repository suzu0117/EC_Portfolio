document.querySelectorAll('.category_menu_item').forEach(item => {
    const title = item.querySelector('h4');
    const submenu = item.querySelector('.small_category_menu_list');

    title.addEventListener('click',() => {
        if(submenu.style.maxHeight === '0px'){
            submenu.style.maxHeight = '300px';
        } else {
            submenu.style.maxHeight = '0px';
        }
    });
});