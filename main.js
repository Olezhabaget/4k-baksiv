const open1 = document.getElementById("open1");
const close1 = document.getElementById("close1");
const modal1 = document.getElementById("modal1");

open1.addEventListener("click",() =>{
modal1.style.display = "block";
});

close1.addEventListener("click",() =>{
modal1.style.display = "none";
});

const open2 = document.getElementById("open2");
const close2 = document.getElementById("close2");
const modal2 = document.getElementById("modal2");

open2.addEventListener("click",() =>{
modal2.style.display = "block";
});

close2.addEventListener("click",() =>{
modal2.style.display = "none";
});

const products = document.getElementById("products");

fetch('./products.json')
      .then(response => response.json())
      .then(json => {
        json.forEach(product => {
            products.innerHTML+=`
            <div class="product">
                        <img src="${product.images[0]}" alt="img">
                        <div>
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
                        <h1>${product.brand}</h1>
                        <h2>${product.name}</h2>
                        <h4>${product.shortDescription}</h4>
                        <div>
                            <b>${product.price}</b>
                            <s>${product.oldPrice}</s>
                        </div>
                        <button>Купити</button>
                    </div>
            `
        });
      })