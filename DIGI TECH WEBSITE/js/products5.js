let products = [
    {
        name: 'WOW IMAGINE Translucent Hybrid Back Case Cover',
        image1: './IMAGE/51uWyBFrEsL._SL1000_.jpg',
        image2: './IMAGE/51uWyBFrEsL._SL1000_.jpg',
        old_price: '999.00',
        curr_price: '199.00'
    },
    {
        name: 'CROSSVOLT Silicon Case Cover Compatible for Oneplus Buds Pro Case',
        image1:'./IMAGE/51JbgtfTJyL._SL1500_.jpg',
        image2: './IMAGE/51JbgtfTJyL._SL1500_.jpg',
        old_price: '999.00',
        curr_price: '399.00'
    },
    {
        name: 'Caseology Solid Flex Crystal Back Cover Case withSamsung Galaxy S20 Ultra',
        image1:'./IMAGE/51F6mx3UkJL._SL1000_.jpg',
        image2: './IMAGE/51F6mx3UkJL._SL1000_.jpg',
        old_price: '14,290.00',
        curr_price: '12,990.00'
    },
    {
        name: 'Amozo Frameless Slim Flexible Back Case Cover for iPhone 11',
        image1: './IMAGE/51WO1X-wxXL._SL1000_.jpg',
        image2: './IMAGE/51WO1X-wxXL._SL1000_.jpg',
        old_price: '999.00',
        curr_price: '599.00'
    },
    {
        name: 'Original Samsung Mobile Battery for Samsung Galaxy J7,On7,On7 Pro,J7',
        image1: './IMAGE/41yPvi5S6YS.jpg',
        image2: './IMAGE/41yPvi5S6YS.jpg',
        old_price: '1,499.00',
        curr_price: '559.00'
    },
    {
        name: 'Samsung EVO Plus 128GB microSDXC',
        image1: './IMAGE/71VpTb++OQL._SX679_.jpg',
        image2: './IMAGE/71VpTb++OQL._SX679_.jpg',
        old_price: '3,990.00',
        curr_price: '1,599.00'
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
        name2: 'Sounce Phone Stand Height Angle Adjustable',
        image3: './IMAGE/31aFR1dtSaL.jpg',
        image4: './IMAGE/31aFR1dtSaL.jpg',
        old_price1: '899.00',
        curr_price2: '290.00'
    },
    {
        name2: 'ELV Aluminum Adjustable Mobile Phone',
        image3: './IMAGE/51HPpINbM1L._SL1094_.jpg',
        image4: './IMAGE/51HPpINbM1L._SL1094_.jpg',
        old_price1: '1,499.00',
        curr_price2: '399.00'
    },
    {
        name2: 'Mi 10000mAH Li-Polymer Power Bank 3i',
        image3: './IMAGE/71Rcb9pnbEL._SL1500_.jpg',
        image4: './IMAGE/71Rcb9pnbEL._SL1500_.jpg',
        old_price1: '1,299.00',
        curr_price2: '899.00'
    },
    {
        name2: 'WeCool Nylon Braided Multifunction',
        image3: './IMAGE/61FUzup4yAL._SL1500_.jpg',
        image4: './IMAGE/61FUzup4yAL._SL1500_.jpg',
        old_price1: '1,299.00',
        curr_price2: '349.00'
    },
    {
        name2: 'Spigen Liquid Air Back Cover Case Compatible with iPhone 13 Pro',
        image3: './IMAGE/61qotg1sU7L._SL1000_.jpg',
        image4: './IMAGE/61qotg1sU7L._SL1000_.jpg',
        old_price1: '2,990.00',
        curr_price2: '1,104.00'
    },
    {
        name2: 'Caseology Parallax Back Cover Case Compatible with Galaxy Note 20 Ultra',
        image3: './IMAGE/51tw8lJgEzL._SL1000_.jpg',
        image4: './IMAGE/51tw8lJgEzL._SL1000_.jpg',
        old_price1: '1,990.00',
        curr_price2: '1,110.00'
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