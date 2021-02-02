var swiper = new Swiper('.sales__swiper', {
    loop: true,
    pagination: {
        el: '.sales__pagination',
    },
    navigation: {
        nextEl: '.sales__btn--next',
        prevEl: '.sales__btn--prev',
    },
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("menu__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("menu__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" menu__tablinks--active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " menu__tablinks--active";
}

new Vue({
    el: '#menu',
    data: {
        items: [
            {
                id: 1,
                type: "pizza",
                name: "4 сезона",
                desc: "Пицца соус, сыр моцарелла, ветчина, томаты, шампиньоны, брынза",
                price: 1700,
                amount: 0,
            },
            {
                id: 2,
                type: "pizza",
                name: "Мацарелаа",
                desc: "Пицца соус, сыр моцарелла, ветчина, томаты, шампиньоны, брынза",
                price: 1500,
                amount: 0,
            },
            {
                id: 3,
                type: "pizza",
                name: "Пеперони",
                desc: "Пицца соус, сыр моцарелла, ветчина, томаты, шампиньоны, брынза",
                price: 2000,
                amount: 0,
            },
        ],
        countOfItems: 0,
        tmp: 0,
        cardItems: [],
        totalPrice: 0,

        alertShow: false,

        name: "",
        phone: "",
        delivery: "",
        address: "",
        date: "",
        time: "",
        comment: "",
        error: null,
        validationError: "",
    },

    methods: {
        removePizza(name, price) {
            let card = JSON.parse(localStorage.getItem('card')) || [];
            if (card[name]) {
                if (card[name].amount > 0) {
                    card[name].amount--;
                }
                if (card[name].amount === 0) {
                    delete card[name];
                }
                localStorage.setItem('card', JSON.stringify(card));
                this.removeCount();
                this.removePrice(price);
                this.setAmount();
            }
        },

        removePizzaFromCard(name, price) {
            let card = JSON.parse(localStorage.getItem('card')) || [];
            if (card[name]) {
                if (card[name].amount > 0) {
                    card[name].amount--;
                }
                if (card[name].amount === 0) {
                    delete card[name];
                }
                localStorage.setItem('card', JSON.stringify(card));
                this.removeCount();
                this.removePrice(price);
                this.setAmountForCard();
            }
        },

        addPizza(name, description, price) {
            let card = JSON.parse(localStorage.getItem('card')) || {};
            console.log(card);
            if (card[name]) {
                card[name].amount++;
            } else {
                let item = {
                    price: price,
                    description: description,
                    amount: 1,
                }
                card[name] = item;
            }
            localStorage.setItem('card', JSON.stringify(card));
            this.addCount();
            this.addPrice(price);
            this.setAmount();
        },

        addPizzaForCard(name, description, price) {
            let card = JSON.parse(localStorage.getItem('card')) || {};
            if (card[name]) {
                card[name].amount++;
            } else {
                let item = {
                    price: price,
                    description: description,
                    amount: 1,
                }
                card[name] = item;
            }
            localStorage.setItem('card', JSON.stringify(card));
            this.addCount();
            this.addPrice(price);
            this.setAmountForCard();
        },

        addCount() {
            let count = JSON.parse(localStorage.getItem('count')) || 0;
            this.countOfItems = ++count;
            localStorage.setItem('count', JSON.stringify(this.countOfItems));
        },

        removeCount() {
            let count = JSON.parse(localStorage.getItem('count')) || 0;
            this.countOfItems = --count;
            localStorage.setItem('count', JSON.stringify(this.countOfItems));
        },

        addPrice(pr) {
            let price = JSON.parse(localStorage.getItem('price')) || 0;
            this.totalPrice = price + pr;
            localStorage.setItem('price', JSON.stringify(this.totalPrice));
        },

        removePrice(pr) {
            let price = JSON.parse(localStorage.getItem('price')) || 0;
            this.totalPrice = price - pr;
            localStorage.setItem('price', JSON.stringify(this.totalPrice));
        },

        setAmount() {
            let card = JSON.parse(localStorage.getItem('card')) || {};
            for (var i = 0; i < this.items.length; i++) {
                let name = this.items[i].name;
                if (card[name]) {
                    this.items[i].amount = card[name].amount;
                } else {
                    this.items[i].amount = 0;
                }
            }
        },

        setAmountForCard() {
            let card = JSON.parse(localStorage.getItem('card')) || {};
            // console.log(card);
            console.log(this.cardItems);
            for (var i = 0; i < this.cardItems.length; i++) {
                let name = this.cardItems[i].name;
                if (card[name]) {
                    this.cardItems[i].amount = card[name].amount;
                }
            }
            console.log(this.cardItems);
        },

        sendOrder() {

            if(this.name.length > 0 && this.phone.length === 16) {
                fetch('https://pizzatest-7f32a-default-rtdb.firebaseio.com/orders.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: this.name,
                        phone: this.phone,
                        deliveryType: this.delivery,
                        address: this.address,
                        date: this.date,
                        time: this.time,
                        comment: this.comment,
                        listOfItems: this.cardItems,
                        totalPrice: this.totalPrice,
                    }),
                })
                    .then((response) => {
                        if (response.ok) {
                            this.alertShow = true;
                        } else {
                            throw new Error('Could not save data!');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        this.error = error.message;
                    });
                this.validationError = "";
            } else if (this.name.length <= 0 && this.phone.length <= 0){
                this.validationError = "Пожалуйста введите ваше Имя и Телефон";
            } else if (this.name.length > 0 && this.phone.length !== 16) {
                this.validationError = "Пожалуйста введите ваш Телефон в формате +7(XXX)XXX-XX-XX";
                console.log(this.name.length + " " + this.phone.length);
            } else if (this.name.length <= 0 && this.phone.length > 0) {
                this.validationError = "Пожалуйста введите ваше Имя";
                console.log(this.phone.length);
            }
        },

        alertClose() {
            this.alertShow = false;
        }
    },

    mounted() {
        let card = JSON.parse(localStorage.getItem('card')) || {};
        this.cardItems = card;
        // Object.keys(card).forEach(function (itemName) {
        //     for (var globalItem in this.pizzaList) {
        //         if (globalItem.name === itemName ) {
        //             let ind = this.pizzaList.indexOf(globalItem);
        //             console.log(ind);
        //         }
        //     }
        // });
        this.setAmount();
        this.setAmountForCard();
        this.totalPrice = JSON.parse(localStorage.getItem('price')) || 0;
    },
});

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    window.scroll({
        top: yPosition - 65,
        left: xPosition,
        behavior: 'smooth'
    });
}

const advantagesLink = document.getElementById('advantages-link');
const salesLink = document.getElementById('sales-link');
const menuLink = document.getElementById('menu-link');
const menuLink2 = document.getElementById('menu-link2');

function goToAdvantages() {
    var element = document.getElementById('advantages');
    getPosition(element);
}

function goToSales() {
    var element = document.getElementById('sales');
    getPosition(element);
}

function goToMenu() {
    var element = document.getElementById('menu');
    getPosition(element);
}

if(advantagesLink) {
    advantagesLink.addEventListener('click', goToAdvantages);
}

if(salesLink) {
    salesLink.addEventListener('click', goToSales);
}

if(menuLink) {
    menuLink.addEventListener('click', goToMenu);
}

if(menuLink2) {
    menuLink2.addEventListener('click', goToMenu);
}

const burger = document.getElementById('burger');
const sideLinks = document.getElementsByClassName('side-menu__link');

function openSide() {
    document.getElementsByClassName('side-menu')[0].classList.add('side-menu--show');
}

function closeSide() {
    document.getElementsByClassName('side-menu')[0].classList.remove('side-menu--show');
}

if(burger) {
    burger.addEventListener('click', openSide);
}

if(sideLinks[0]) {
    sideLinks[0].addEventListener('click', closeSide);
}

if(sideLinks[1]) {
    sideLinks[1].addEventListener('click', goToAdvantages);
    sideLinks[1].addEventListener('click', closeSide);
}

if(sideLinks[2]) {
    sideLinks[2].addEventListener('click', goToSales);
    sideLinks[2].addEventListener('click', closeSide);
}

if(sideLinks[3]) {
    sideLinks[3].addEventListener('click', goToMenu);
    sideLinks[3].addEventListener('click', closeSide);
}

var inputMask = document.getElementById('phoneNumber');
var maskOptions = {
    mask: '+{7}(000)000-00-00'
};
var mask = IMask(inputMask, maskOptions);
mask.updateValue();