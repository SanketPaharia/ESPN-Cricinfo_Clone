const home_productContainers = [...document.querySelectorAll('.home_product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    home_productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })