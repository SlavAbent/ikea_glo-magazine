export const catalog = () => {
    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const btnClose = document.querySelector('.btn-close');

    const catalogList = document.querySelector('.catalog-list')
    const subCatalog = document.querySelector('.subcatalog')
    const subCatalogHeader = document.querySelector('.subcatalog-header')
    const btnReturn = document.querySelector('.btn-return')


    const overlay = document.createElement('div')
    overlay.classList.add('overlay');
    document.body.append(overlay);

    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active');
    }
    const closeMenu = () => {
        catalog.classList.remove('open');
        overlay.classList.remove('active');
        closeSubMenu()
    }
    const openSubMenu = e => {
        e.preventDefault();
        const target = e.target
        const itemList = target.closest('.catalog-list__item');

        if(itemList){
            subCatalogHeader.innerHTML = itemList.textContent;
            subCatalog.classList.add('subopen')
        };
    }

    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen')
    }



    btnBurger.addEventListener('click', openMenu);
    btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu)
    catalog.addEventListener('click', openSubMenu)
    btnReturn.addEventListener('click', closeSubMenu)


    document.addEventListener('click', e => {
        if(e.target.code === 'Escape'){
            closeMenu();
        }
    });
}