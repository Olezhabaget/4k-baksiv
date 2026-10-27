const tato = document.getElementById("tato-div");

fetch('product.js')
    .then(response => response.json())
    .then(json => {
        const id = new URLSearchParams(window.location.search).get("id");
        const product = json.find(item => item.id == id);
        if(product){
            tato.innerHTML=`
            <div>

                <div class="diiv">
                    <div>
                        <div class="trioimg">
                            <img src="" alt="img">
                            <img src="" alt="img">
                            <img src="" alt="img">
                        </div>
                        <img src="" alt="img">
                    </div>

                    <div class="opis1">
                        <div>
                            <h1>ІНФОРМАЦІЯ ПРО ПРОДУКТ</h1>
                            <button><img src="Image/Vector (3).svg" alt="img"></button>
                        </div>
                        <p></p>
                        <h4>Країна бренду: <span></span></h4>
                        <h4>Обʼєм: <span></span></h4>
                    </div>


                    <div class="opis2">
                        <div>
                            <h1>ПЕРЕВАГИ</h1>
                            <button><img src="Image/Vector (3).svg" alt="img"></button>
                        </div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                    </div>

                    <div class="opis3">
                        <div>
                            <h1>СПОСІБ ЗАСТОСУВАННЯ</h1>
                            <button><img src="Image/Vector (3).svg" alt="img"></button>
                        </div>
                        <p></p>
                    </div>


                    <div class="opis4">
                        <div>
                            <h1>СЕРТИФІКАЦІЯ</h1>
                            <button><img src="Image/Vector (3).svg" alt="img"></button>
                        </div>
                        <div>
                            <img src="" alt="img">
                            <p></p>
                        </div>
                    </div>


                    <div class="opis5">
                        <div>
                            <h1>СКЛАД</h1>
                            <button><img src="Image/Vector (3).svg" alt="img"></button>
                        </div>
                        <p></p>
                    </div>


                    <div class="feetback">
                        <h1>ВІДГУКИ</h1>
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
                            <button>Залишити відгук</button>
                            <div>
                                <div>
                                    <p>5</p>
                                    <img src="Image/Star 1.svg" alt="img">
                                    <input type="range">
                                    <span>0</span>
                                </div>

                                <div>
                                    <p>4</p>
                                    <img src="Image/Star 1.svg" alt="img">
                                    <input type="range">
                                    <span>0</span>
                                </div>

                                <div>
                                    <p>3</p>
                                    <img src="Image/Star 1.svg" alt="img">
                                    <input type="range">
                                    <span>0</span>
                                </div>

                                <div>
                                    <p>2</p>
                                    <img src="Image/Star 1.svg" alt="img">
                                    <input type="range">
                                    <span>0</span>
                                </div>

                                <div>
                                    <p>1</p>
                                    <img src="Image/Star 1.svg" alt="img">
                                    <input type="range">
                                    <span>0</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="diiv2">
                    <h6></h6>
                    <h1></h1>
                    <h2></h2>
                    <div>
                        <h3>Знижка -50% на догляд для шкіри голови та тіла.</h3>
                    </div>
                    <p>Основні переваги</p>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <p>Активні компоненти</p>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <p>Обʼєм</p>
                    <button></button>
                    <div>
                        <h4></h4>
                        <s></s>
                    </div>
                    <div>
                        <button></button>
                        <button>Купити</button>
                        <button><img src="Image/Group 36 (1).svg" alt="img"></button>
                    </div>
                    <hr>
                    <div>
                        <img src="Image/Group 465.svg" alt="img">
                        <h5>Сертифікована продукція від офіційних партнерів</h5>
                    </div>
                    <div>
                        <img src="Image/Vector (4).svg" alt="img">
                        <h5>Безкоштовна доставка на суму від 3000 ₴</h5>
                        <ul>
                            <li>Доставка Новою Поштою до відділення, поштомату або курʼєром</li>
                            <li>Експрес-доставка по києву</li>
                        </ul>
                    </div>
                    <div>
                        <img src="Image/Group 452.svg" alt="img">
                        <h5>Оплата карткою на сайті або накладений платіж</h5>
                    </div>
                    <div>
                        <img src="Image/Vector (5).svg" alt="img">
                        <h5>Покупка частинами від monobank</h5>
                    </div>
                </div>
            </div>
            `

        }

    });




