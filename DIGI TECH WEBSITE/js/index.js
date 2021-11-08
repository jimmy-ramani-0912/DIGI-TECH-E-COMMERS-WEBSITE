let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        name: 'ZEBRONICS Gaming Headphone',
        image1: './IMAGE/71q1p2pyFDL._SL1500_.jpg',
        image2: './IMAGE/81RJ3rWpxFL._SL1500_.jpg',
        old_price: '$2,499.00',
        curr_price: '$1,039.00'
    },
    {
        name: 'Zebronics Gaming Keyboard',
        image1: './IMAGE/81xZhmtvFpS._SL1500_.jpg',
        image2: './IMAGE/81Iq8115o9S._SL1500_.jpg',
        old_price: '$8,499.00',
        curr_price: '$3,761.000'
    },
    {
        name: 'Samsung Galaxy Tab S6 Lite ',
        image1: './IMAGE/71BDPPIdGeL._SL1280_.jpg',
        image2: './IMAGE/81hbNPC7eyL._SL1500_.jpg',
        old_price: '$3,999.000',
        curr_price: '$2,099.000'
    },
    {
        name: 'OnePlus Nord 2 5G',
        image1: './IMAGE/71D8xt91+VL._SL1500_.jpg',
        image2: './IMAGE/51tZuVxCMaL._SL1500_.jpg',
        old_price: '$34,999.000',
        curr_price: '$29,999.000'
    },
    {
        name: 'Samsung Galaxy M32 5G',
        image1: './IMAGE/71os5DRhuSL._SL1500_.jpg',
        image2: './IMAGE/61vMdEauatL._SL1200_.jpg',
        old_price: '$23,990.000',
        curr_price: '$16,999.000'
    },
    {
        name: ' Redmi Note 10S ',
        image1: './IMAGE/61Qkp5AUEFS._SL1500_.jpg',
        image2: './IMAGE/71f0t04-l3L._SL1500_.jpg',
        old_price: '$16,999.000',
        curr_price: '$13,999.000'
    },
    {
        name: 'realme narzo 30',
        image1: './IMAGE/51WoQXNUmQL._SL1500_.jpg',
        image2: './IMAGE/51R-NCUCfsL._SL1500_ (1).jpg',
        old_price: '$16,999.000',
        curr_price: '$14,449.000'
    }
]

let product_list = document.querySelector('#latest-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                    <button class="btn-flat btn-hover btn-shop-now"><a href="product-detail.html">TAKE A LOOK</a></button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        <b>${e.name} </b>
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
