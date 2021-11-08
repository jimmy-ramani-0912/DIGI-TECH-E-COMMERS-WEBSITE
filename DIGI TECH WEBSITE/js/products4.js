let products = [
    {
        name: 'boAt Rockerz 450 Wireless Bluetooth Headphone',
        image1: './IMAGE/61u1VALn6JL._SL1500_.jpg',
        image2: './IMAGE/611g-F3cv8L._SL1500_.jpg',
        old_price: '3,990.00',
        curr_price: '1,090.00'
    },
    {
        name: 'JBL C115 TWS by Harman',
        image1:'./IMAGE/51wnOfRKl6L._SL1500_.jpg',
        image2: './IMAGE/61tJXDVSI5L._SL1500_.jpg',
        old_price: '8,990.00',
        curr_price: '3,990.00'
    },
    {
        name: 'Noise Air Buds+',
        image1:'./IMAGE/51AbUNxi5tL._SL1500_.jpg',
        image2: './IMAGE/61G8rq9Nk6L._SL1500_.jpg',
        old_price: '5,999.00',
        curr_price: '1,599.00'
    },
    {
        name: 'Dell 14 (2021) i3',
        image1: './IMAGE/618nCW+Qk+S._SL1200_.jpg',
        image2: './IMAGE/71VV4HQGXUS._SL1200_.jpg',
        old_price: '79,486.00',
        curr_price: '62,999.00'
    },
    {
        name: 'Zebronics Sound Feast',
        image1: './IMAGE/816YiPaiKNL._SL1500_.jpg',
        image2: './IMAGE/81JMGG1XlGL._SL1500_.jpg',
        old_price: '2,499.00',
        curr_price: '1,349.00'
    },
    {
        name: 'boAt Stone 170 5W Bluetooth Speaker',
        image1: './IMAGE/71NvX5s2e7L._SL1500_.jpg',
        image2: './IMAGE/71C7FzVl49L._SL1500_.jpg',
        old_price: '2,990.00',
        curr_price: '8,099.00'
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
        name2: 'boAt Aavante Bar 1500 2.1 Channel ',
        image3: './IMAGE/61Qa+zvFzHL._SL1500_.jpg',
        image4: './IMAGE/61Qa+zvFzHL._SL1500_.jpg',
        old_price1: '16,990.00',
        curr_price2: '5,990.00'
    },
    {
        name2: 'Bencley® Nawab Series 90W Bluetooth ',
        image3: './IMAGE/61w-U1T9jqS._SL1500_.jpg',
        image4: './IMAGE/61w-U1T9jqS._SL1500_.jpg',
        old_price1: '6,500.00',
        curr_price2: '3,499.00'
    },
    {
        name2: 'Sony HT-S20R 400 Watt Real',
        image3: './IMAGE/71+s6K1eovL._SL1500_.jpg',
        image4: './IMAGE/71+s6K1eovL._SL1500_.jpg',
        old_price1: '19,990.00',
        curr_price2: '18,099.00'
    },
    {
        name2: 'Philips Audio SPA8140B/94 50W ',
        image3: './IMAGE/81i77xf1XLS._SL1500_.jpg',
        image4: './IMAGE/81i77xf1XLS._SL1500_.jpg',
        old_price1: '5,290.50',
        curr_price2: '3,990.00'
    },
    {
        name2: 'Zebronics Zeb-JUKEBAR 3900',
        image3: './IMAGE/81io-aPCPdL._SX522_.jpg',
        image4: './IMAGE/81io-aPCPdL._SX522_.jpg',
        old_price1: '11,990',
        curr_price2: '4,990'
        
    },
    {
        name2: 'Zebronics BT4440RUCF 4.1',
        image3: './IMAGE/81zQ0CFKpEL._SL1500_.jpg',
        image4: './IMAGE/81zQ0CFKpEL._SL1500_.jpg',
        old_price1: '4,299.00',
        curr_price2: '2,499.00'
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