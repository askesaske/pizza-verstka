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
    el: '#app',
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
    },

    methods: {
        removePizza(name) {
            let card = JSON.parse(localStorage.getItem('card')) || [];
            if (card[name]) {
                if (card[name].amount > 0) {
                    card[name].amount--;
                }
                if (card[name].amount === 0) {
                    delete card[name];
                }
                localStorage.setItem('card', JSON.stringify(card));
                this.setAmount();
            }
        },

        removePizzaFromCard(name) {
            let card = JSON.parse(localStorage.getItem('card')) || [];
            if (card[name]) {
                if (card[name].amount > 0) {
                    card[name].amount--;
                }
                if (card[name].amount === 0) {
                    delete card[name];
                }
                localStorage.setItem('card', JSON.stringify(card));
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
            this.setAmountForCard();
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

            if(this.name.length > 0 && this.phone.length > 0) {
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
    },
});

