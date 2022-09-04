/*/ light box //

// 輪播左右按鈕 //
function illustPrev() {
    var i;
    let items = document.getElementsByClassName("illustBox");
    for (i = 0; i < items.length; i++) {
        let orderValue = parseInt(items[i].style.order);
        let newOrder = orderValue - 1;
        if (newOrder < 1) {
            newOrder = items.length;
        }
        items[i].style.order = newOrder;
    }
}

function illustNext() {
    var i;
    let items = document.getElementsByClassName("illustBox");
    for (i = 0; i < items.length; i++) {
        let orderValue = parseInt(items[i].style.order);
        let newOrder = orderValue + 1;
        if (newOrder > items.length) {
            newOrder = 1;
        }
        items[i].style.order = newOrder;
    }
}

let items = document.getElementsByClassName("illustBox");
let orderValue = parseInt(items[0].style.order) + 1;
console.log(orderValue);
console.log(123);

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}
*/


// navigation-scroll //
/*
let toItem = document.querySelectorAll('.scrollTo');
let clickItem = document.querySelectorAll('.click_to');

clickItem.forEach(
    (item, index) => {
        item.addEventListener('click', () => {
            var headerOffset = 90;
            if (index > 0) {
                var elementPosition = toItem[1].getBoundingClientRect().top;
            }
            else { var elementPosition = toItem[index].getBoundingClientRect().top; }
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        })
    }
)*/


function goTop() {
    document.querySelector('body').scrollIntoView({
        behavior: 'smooth'
    })
}


// hover carousel //

let titleItem_A = document.querySelectorAll('.works_titleA');
let carouselItem_A = document.querySelectorAll('.carouselA');

console.log(titleItem_A);
console.log(carouselItem_A);

titleItem_A.forEach(
    (item, index) => {
        item.addEventListener('mouseover', () => {
            for (i = 0; i < titleItem_A.length; i++) {
                titleItem_A[i].classList.remove("active_title");
                carouselItem_A[i].classList.remove("active_carousel");
            };
            titleItem_A[index].classList.add("active_title");
            carouselItem_A[index].classList.add("active_carousel");
        })
    }
)

let titleItem_B = document.querySelectorAll('.works_titleB');
let carouselItem_B = document.querySelectorAll('.carouselB');


titleItem_B.forEach(
    (item, index) => {
        item.addEventListener('mouseover', () => {
            for (i = 0; i < titleItem_B.length; i++) {
                titleItem_B[i].classList.remove("active_title");
                carouselItem_B[i].classList.remove("active_carousel");
            };
            titleItem_B[index].classList.add("active_title");
            carouselItem_B[index].classList.add("active_carousel");
        })
    }
)

// click a //

titleItem_A.forEach(
    (item, index) => {
        item.addEventListener('click', () => {
            for (i = 0; i < titleItem_A.length; i++) {
                titleItem_A[i].classList.remove("active_title");
                carouselItem_A[i].classList.remove("active_carousel");
            };
            titleItem_A[index].classList.add("active_title");
            carouselItem_A[index].classList.add("active_carousel");
        })
    }
)

titleItem_B.forEach(
    (item, index) => {
        item.addEventListener('click', () => {
            for (i = 0; i < titleItem_B.length; i++) {
                titleItem_B[i].classList.remove("active_title");
                carouselItem_B[i].classList.remove("active_carousel");
            };
            titleItem_B[index].classList.add("active_title");
            carouselItem_B[index].classList.add("active_carousel");
        })
    }
)


//

var _A1 = document.getElementById("A1");//父级
var _B1 = document.getElementById("B1");//子级
var _A2 = document.getElementById("A2");//父级
var _B2 = document.getElementById("B2");//子级
var _A3 = document.getElementById("A3");//父级
var _B3 = document.getElementById("B3");//子级


//为子级添加监听函数
_B1.addEventListener("mouseenter", function (event) {
    _A1.style.color = '#B41F42';//改变父级样式
}, false);

_B1.addEventListener("mouseleave", function (event) {
    _A1.style.color = 'black';//改变父级样式
}, false);


_B2.addEventListener("mouseenter", function (event) {
    _A2.style.color = '#B41F42';//改变父级样式
}, false);

_B2.addEventListener("mouseleave", function (event) {
    _A2.style.color = 'black';//改变父级样式
}, false);

_B3.addEventListener("mouseenter", function (event) {
    _A3.style.color = '#B41F42';//改变父级样式
}, false);

_B3.addEventListener("mouseleave", function (event) {
    _A3.style.color = 'black';//改变父级样式
}, false);



// 禁止右鍵及copy //
document.oncontextmenu = new Function("return false");
oncontextmenu="return false;";

document.body.oncopy = function(){
    event.returnValue=false;
}