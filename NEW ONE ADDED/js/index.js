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

// PAUSE SLIDE WHEN HOVER SLIDER

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// ENABLE SLIDE WHEN MOUSE LEAVE OUT SLIDER

document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// SLIDER CONTROLL 

document.querySelector('.slider-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slider-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return 
//     nextSlide()
//     showSlide()
// }, 3000);

//RENDER PRODUCTS

let products = [
    {
        name: 'ZEBRONICS Gaming Headphone',
        image1: './IMAGES/zebronics zeb-rush headphone.jpg',
        image2: './IMAGES/61LvZ0YUDrL._SL1361_.jpg',
        old_price: '₹2,499.00',
        curr_price: '₹1,039.00'
    },
    {
        name: 'Zebronics Gaming Keyboard',
        image1: './IMAGES/71Nm+F2bi6L._SL1500_.jpg',
        image2: './IMAGES/71EANFq6ENL._SL1500_.jpg',
        old_price: '₹8,499.00',
        curr_price: '₹3,761.000'
    },
    {
        name: 'Samsung Galaxy Tab S6 Lite ',
        image1: './IMAGES/81j1RO-kVAL._SL1444_.jpg',
        image2: './IMAGES/71T+gmvb+dL._SL1426_.jpg',
        old_price: '3,999.000',
        curr_price: '2,099.000'
    },
    {
        name: 'OnePlus Nord 2 5G',
        image1: './IMAGES/61TnX0PmqES._SL1500_.jpg',
        image2: './IMAGES/51zvGnX4BjS._SL1500_.jpg',
        old_price: '34,999.000',
        curr_price: '29,999.000'
    },
    {
        name: 'Samsung Galaxy M32 5G',
        image1: './IMAGES/71os5DRhuSL._SL1500_.jpg',
        image2: './IMAGES/61vMdEauatL._SL1200_.jpg',
        old_price: '23,990.000',
        curr_price: '16,999.000'
    },
    {
        name: ' Redmi Note 10S ',
        image1: './IMAGES/81sZamLSPWL._SL1500_.jpg',
        image2: './IMAGES/81ylExIK0lL._SL1500_.jpg',
        old_price: '16,999.000',
        curr_price: '13,999.000'
    },
    {
        name: 'realme narzo 30',
        image1: './IMAGES/719tm7l723L._SL1500_.jpg',
        image2: './IMAGES/61AhETVZSOL._SL1500_.jpg',
        old_price: '16,999.000',
        curr_price: '14,449.000'
    }
]

let product_list = document.querySelector('#latest-products')

products.forEach(e => {
    let prod = `
    <div class="col-3 col--md-6 col-sm-12">
    <div class="product-card">
        <div class="product-card-img">
            <img src="${e.image1}" alt="">
            <img src="${e.image2}" alt="">
           
        </div>
        <div class="product-card-info">
            <div class="product-btn">
                <button class="btn-flat btn-hover btn-shop-now">TAKE A LOOK</button>
                <button class="btn-flat btn-hover btn-cart-add">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button class="btn-flat btn-hover btn-cart-add">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-card-name">
                <b>${e.name}</b>
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
