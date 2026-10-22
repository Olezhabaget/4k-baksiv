const leftbtn = document.getElementById("leftbtn");
const rightbtn = document.getElementById("rightbtn");
const products = document.getElementById("products");


const products2 = document.getElementById("products2");
const leftbtn2 = document.getElementById("leftbtn2");
const rightbtn2 = document.getElementById("rightbtn2");


let bibik = 0;
let lerka = [];

let bibik2 = 0;
let lerka2 = [];

const newpridact = document.getElementById("newpridact");

fetch('./products.json')
    .then(response => response.json())
    .then(json => {
        lerka = json;
        json.forEach(product => {
            newpridact.innerHTML += `
              <div class="pridact">
                    <div >
                        <div class="div-919">
                           <button><img src="Image/new.svg" alt="img"></button>
                <button><img src="Image/sale.svg" alt="img"></button>
                        </div>
                        <h1>${product.brand}</h1>
                        <p>${product.name}</p>
                            <div class="div-909">
                                <h2>${product.price}</h2>
                                <h3>${product.oldPrice}</h3>
                            </div>
                    </div>
                    <img class="img-122" src="${product.images[3]}" alt="ii">
                </div>
            </div>
            `
        });
    });







fetch('./products.json')
    .then(response => response.json())
    .then(json => {
        lerka = json;
        json.forEach(product => {
            products.innerHTML += `
            <div class="product" "data-id=${product.id}">
            <img class="img-4" src="Image/Group 36.svg" alt="img">
                        <img src="${product.images[0]}" alt="img">
                        <div class="div-18">
                            <div class="iamstar">
                                <input id="star5" type="radio" name="star">
                                <label for="star5">★</label>
                                <input id="star4" type="radio" name="star">
                                <label for="star4">★</label>
                                <input id="star3" type="radio" name="star">
                                <label for="star3">★</label>
                                <input id="star2" type="radio" name="star">
                                <label for="star2">★</label>
                                <input id="star1" type="radio" name="star">
                                <label for="star1">★</label>
                            </div>

                            <h3>${product.vidguki} відгуків</h3>
                        </div>
                        <p>Об'єм ${product.weight}</p>
                        <h6>${product.brand}</h6>
                        <h2>${product.name}</h2>
                        <h4>${product.shortDescription}</h4>
                        <div class="div-19">
                            <b>${product.price}</b>
                            <s>${product.oldPrice}</s>
                        </div>
                        <button class="btn1">Купити</button>
                    </div>
            `
        });
    });

products.addEventListener("click", function (nika) {
    if (nika.target.closest(".btn1")){
        return;
    }
    if (nika.target.closest(".iamstar")){
        return;
    }
    if (nika.target.closest(".img-4")){
        return;
    }
     const nikusya = nika.target.closest(".product");
     if(nikusya){
    window.location.href= `product.html?id=${nikusya.dataset.id}`;
     }
    });

   

fetch('./products.json')
    .then(response => response.json())
    .then(json => {
        lerka2 = json;
        json.forEach(product => {
            products2.innerHTML += `
            <div class="product">
            <img class="img-4" src="Image/Group 36.svg" alt="img">
                        <img src="${product.images[0]}" alt="img">
                        <div class="div-18">
                            <div class="iamstar">
                                <input id="star5" type="radio" name="star">
                                <label for="star5">★</label>
                                <input id="star4" type="radio" name="star">
                                <label for="star4">★</label>
                                <input id="star3" type="radio" name="star">
                                <label for="star3">★</label>
                                <input id="star2" type="radio" name="star">
                                <label for="star2">★</label>
                                <input id="star1" type="radio" name="star">
                                <label for="star1">★</label>
                            </div>

                            <h3>${product.vidguki} відгуків</h3>
                        </div>
                        <p>Об'єм ${product.weight}</p>
                        <h6>${product.brand}</h6>
                        <h2>${product.name}</h2>
                        <h4>${product.shortDescription}</h4>
                        <div class="div-19">
                            <b>${product.price}</b>
                            <s>${product.oldPrice}</s>
                        </div>
                        <button class="btn1">Купити</button>
                    </div>
            `
        });
    })

rightbtn.addEventListener("click", () => {
    if (bibik < lerka.length - 4) {
        bibik++;
        slider();
    }
});

leftbtn.addEventListener("click", () => {
    if (bibik > 0) {
        bibik--;
        slider();
    }
});


rightbtn2.addEventListener("click", () => {
    if (bibik2 < lerka2.length - 4) {
        bibik2++;
        slider2();
    }
});

leftbtn2.addEventListener("click", () => {
    if (bibik2 > 0) {
        bibik2--;
        slider2();
    }
});


function slider() {
    const productt = document.querySelectorAll(".product");
    productt.forEach(card => {
        card.style.transform = `translateX(-${bibik * 320}px)`
    })
}

function slider2() {
    const productt = document.querySelectorAll(".product");
    productt.forEach(card => {
        card.style.transform = `translateX(-${bibik2 * 320}px)`
    })
}


const open1 = document.getElementById("open1");
const close1 = document.getElementById("close1");
const modal1 = document.getElementById("modal1");

open1.addEventListener("click", () => {
    modal1.style.display = "block";
});

close1.addEventListener("click", () => {
    modal1.style.display = "none";
});

const open2 = document.getElementById("open2");
const close2 = document.getElementById("close2");
const modal2 = document.getElementById("modal2");

open2.addEventListener("click", () => {
    modal2.style.display = "block";
});

close2.addEventListener("click", () => {
    modal2.style.display = "none";
});
