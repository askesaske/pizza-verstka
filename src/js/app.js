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
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("menu__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("menu__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" menu__tablinks--active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " menu__tablinks--active";
}

new Vue({
    el: '#app',
    data: {
        pizzaList: [
            {
                id: 1,
                name: "4 сезона",
                desc: "Пицца соус, сыр моцарелла, ветчина, томаты, шампиньоны, брынза",
                price: 1700,
                amount: 0,
            },
            {
                id: 2,
                name: "Мацарелаа",
                desc: "Пицца соус, сыр моцарелла, ветчина, томаты, шампиньоны, брынза",
                price: 1500,
                amount: 0,
            },
            {
                id: 3,
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

        addPizza(name, description, price) {
            let card = JSON.parse(localStorage.getItem('card')) || {};
            console.log(card);
            if (card[name]) {
                card[name].amount++;
            } else {
                let item = {
                    price: price,
                    amount: 1,
                }
                card[name] = item;
            }
            localStorage.setItem('card', JSON.stringify(card));
            this.setAmount();
        },
        sendOrder() {

        },
        setAmount() {
            let card = JSON.parse(localStorage.getItem('card')) || {};
            console.log(card);
            for (var i = 0; i < this.pizzaList.length; i++) {
                let name = this.pizzaList[i].name;
                if(card[name]) {
                    this.pizzaList[i].amount = card[name].amount;
                }
            }
        }
    },

    mounted() {
        let card = JSON.parse(localStorage.getItem('card')) || {}
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
    }
});

