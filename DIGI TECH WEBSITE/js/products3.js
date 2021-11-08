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
        name2: 'Logitech K480 Wireless Multi-Device Keyboard',
        image3: './IMAGE/81Lvj2OYf6L._SL1500_.jpg',
        image4: './IMAGE/41X46qKZTuL.jpg',
        old_price1: '3,295.00',
        curr_price2: '2,195.00'
    },
    {
        name2: 'Portronics Chicklet POR-973 Foldable QWERTY Keyboard',
        image3: './IMAGE/51uZHbpo32L._SL1200_.jpg',
        image4: './IMAGE/61SzydWDBPL._SL1200_.jpg',
        old_price1: '1,199.00',
        curr_price2: '1,339.00'
    },
    {
        name2: 'Chiptronex Kranos RGB Backlit Gaming Keyboard',
        image3: './IMAGE/81i-oJSVj9S._SL1500_.jpg',
        image4: './IMAGE/815B1QnpMLS._SL1500_.jpg',
        old_price1: '1,599.00',
        curr_price2: '1,150.00'
    },
    {
        name2: 'Colorful GTX 1050Ti NVIDIA Graphics Card',
        image3: './IMAGE/61Eso5umzYL._SL1000_.jpg',
        image4: './IMAGE/61Pz8qF5iUL._SL1000_.jpg',
        old_price1: '31,000.00',
        curr_price2: '28,500.00'
    },
    {
        name2: 'Zebronics Zeb-Cronus Premium Gaming Cabinet',
        image3: './IMAGE/71va1gKN5YL._SL1500_.jpg',
        image4: './IMAGE/71DetdFAiYL._SL1500_.jpg',
        old_price1: '3,999.00',
        curr_price2: '3,199.00'
    },
    {
        name2: 'Samsung 870 QVO 2TB SATA',
        image3: './IMAGE/91PA5sP5wNL._SL1500_.jpg',
        image4: './IMAGE/81APYt8YldL._SL1500_.jpg',
        old_price1: '24,599.00',
        curr_price2: '16,799.00'
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