let products = [
    {
        name: 'Apple iPhone 11',
        image1: './IMAGE/71i2XhHU3pL._SL1500_.jpg',
        image2: './IMAGE/81A4mZpvWBL._SL1500_.jpg',
        old_price: '49,900',
        curr_price: '40,999'
    },
    {
        name: 'I KALL N3 4G Calling Tablet',
        image1:'./IMAGE/61W0qy07CML._SL1500_.jpg',
        image2: './IMAGE/41sOSRd-YqL._SL1500_.jpg',
        old_price: '7,999',
        curr_price: '6,199'
    },
    {
        name: 'OnePlus Nord CE 5G',
        image1:'./IMAGE/71LRBr1aLNS._SL1500_.jpg',
        image2: './IMAGE/51Z4KslTVyS._SL1500_.jpg',
        old_price: '29,990',
        curr_price: '24,999'
    },
    {
        name: 'Samsung Galaxy S20 FE 5G',
        image1: './IMAGE/81vDZyJQ-4L._SL1500_.jpg',
        image2: './IMAGE/81fgR0nttVL._SL1500_.jpg',
        old_price: '74,999',
        curr_price: '39,990'
    },
    {
        name: 'Redmi 9 Power',
        image1: './IMAGE/71hEzQGO5qL._SL1500_.jpg',
        image2: './IMAGE/61xpY3N1bnS._SL1200_.jpg',
        old_price: '13,999',
        curr_price: '10,999'
    },
    {
        name: 'Vivo Y33s',
        image1: './IMAGE/613NMoQhH5L._SL1200_.jpg',
        image2: './IMAGE/715nYwnA8tL._SL1500_.jpg',
        old_price: '21,990',
        curr_price: '17,990'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)
// renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

// document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let products2 = [
    {
        name2: 'Samsung Galaxy A03s',
        image3: './IMAGE/91LLLNGJQML._SL1500_.jpg',
        image4: './IMAGE/81O4eWnrR0L._SL1500_.jpg',
        old_price1: '14,499',
        curr_price2: '11,766'
    },
    {
        name2: 'Tecno Spark 7',
        image3: './IMAGE/81wXWncgV0S._SL1500_.jpg',
        image4: './IMAGE/71w9xrkrjFL._SL1500_.jpg',
        old_price1: '8,999',
        curr_price2: '7,699'
    },
    {
        name2: 'OPPO A16 ',
        image3: './IMAGE/61SV915kH0L._SL1500_.jpg',
        image4: './IMAGE/8109kVtie-L._SL1500_.jpg',
        old_price1: '15,990',
        curr_price2: '13,490'
    },
    {
        name2: 'Tecno Spark 8',
        image3: './IMAGE/71AJN1Do1+L._SL1500_.jpg',
        image4: './IMAGE/81El2+trZFL._SL1500_.jpg',
        old_price1: '9,999',
        curr_price2: '7,999'
    },
    {
        name2: 'Samsung Galaxy Tab S6 Lite ',
        image3: './IMAGE/712YC1bGhJL._SL1500_.jpg',
        image4: './IMAGE/51iNWxQcE2S._SL1100_.jpg',
        old_price1: '30,999',
        curr_price2: '25,999'
    },
    {
        name2: '2020 Apple iPad Air with A14 Bionic chip',
        image3: './IMAGE/71wg0R7ulsL._SL1500_.jpg',
        image4: './IMAGE/811zAtuYJiL._SL1500_.jpg',
        old_price1: '68,900',
        curr_price2: '54,900'
    },
]

let product_list2 = document.querySelector('#products2')

renderProducts2 = (products2) => {
    products2.forEach(e => {
        let prod2 = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image3}" alt="">
                        <img src="${e.image4}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name2}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price1}</del></span>
                            <span class="curr-price">${e.curr_price2}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod2)
    })
}

renderProducts2(products2)

let filter_col2 = document.querySelector('#filter-col')

// document.querySelector('#filter-toggle').addEventListener('click', () => filter_col2.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col2.classList.toggle('active'))