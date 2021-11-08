let products = [
    {
        name: 'HP Pavilion 15 Ryzen 5',
        image1: './IMAGE/71SoiUdxmCL._SL1500_.jpg',
        image2: './IMAGE/71NTnJ8iVtL._SL1500_.jpg',
        old_price: '75,999',
        curr_price: '63,990'
    },
    {
        name: 'ASUS VivoBook 14 (2021)',
        image1:'./IMAGE/71WuDXpTAlL._SL1500_.jpg',
        image2: './IMAGE/61gjTD1GIJS._SL1200_.jpg',
        old_price: '38,990',
        curr_price: '29,990'
    },
    {
        name: 'Lenovo Ideapad Slim 3 ',
        image1:'./IMAGE/61Dw5Z8LzJL._SL1000_.jpg',
        image2: './IMAGE/61ZDeDna6wL._SL1000_.jpg',
        old_price: '52,290',
        curr_price: '35,990'
    },
    {
        name: 'Dell 14 (2021) i3',
        image1: './IMAGE/618nCW+Qk+S._SL1200_.jpg',
        image2: './IMAGE/71VV4HQGXUS._SL1200_.jpg',
        old_price: '79,486',
        curr_price: '62,999'
    },
    {
        name: 'HP Envy x360 Ryzen 5 4500U',
        image1: './IMAGE/711M3aJuhZL._SL1500_.jpg',
        image2: './IMAGE/81IHoBt7gZL._SL1500_.jpg',
        old_price: '88,840',
        curr_price: '74,990'
    },
    {
        name: 'ASUS VivoBook Flip 14 (2020)',
        image1: './IMAGE/71C-YpFn0zS._SL1500_.jpg',
        image2: './IMAGE/61gXbpmpyDS._SL1200_.jpg',
        old_price: '58,990',
        curr_price: '46,990'
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
        name2: 'ASUS TUF Gaming F15',
        image3: './IMAGE/51WhLTfR1dS._SL1200_.jpg',
        image4: './IMAGE/914o5xV1+8L._SL1500_.jpg',
        old_price1: '83,990',
        curr_price2: '57,990'
    },
    {
        name2: 'MSI GF75 Thin',
        image3: './IMAGE/716GgesrEFL._SL1500_.jpg',
        image4: './IMAGE/81lxm4dFfvL._SL1500_.jpg',
        old_price1: '82,990',
        curr_price2: '57,990'
    },
    {
        name2: 'LG Ultragear 27" 240Hz',
        image3: './IMAGE/71VHmNBWJQL._SL1500_.jpg',
        image4: './IMAGE/71qJYRm4xpL._SL1500_.jpg',
        old_price1: '40,000',
        curr_price2: '29,998'
    },
    {
        name2: 'HP Chromebook MediaTek MT8183',
        image3: './IMAGE/91skbuD3LmL._SL1500_.jpg',
        image4: './IMAGE/81XkBXW1yDL._SL1500_ .jpg',
        old_price1: '24,844.50',
        curr_price2: '23,990.00'
    },
    {
        name2: 'Asus Laptop E410M-EK003T Celeron',
        image3: './IMAGE/41b2ZOEL++L.jpg',
        image4: './IMAGE/21dszol+HXL.jpg',
        old_price1: '30,990.00',
        curr_price2: '28,500.00'
    },
    {
        name2: 'Acer Extensa 15 Thin & Light Laptop',
        image3: './IMAGE/71AZz7B-NdL._SL1500_.jpg',
        image4: './IMAGE/61h4rsriVlL._SL1500_.jpg',
        old_price1: '32,990',
        curr_price2: '29,990'
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