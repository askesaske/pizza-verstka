// new Vue({
//     el: '#questions',
//     data: {
//         questions: [
//             {
//                 show: false,
//                 title: "Отпуск 24 дня",
//                 text: "Ежегодный оплачиваемый трудовой отпуск составляет 24 дня.",
//             },
//             {
//                 show: false,
//                 title: "Сдельная оплата труда",
//                 text: "Заработная плата зависит от продаж, верхняя планка не ограничена.",
//             },
//             {
//                 show: false,
//                 title: "Пенсионные отчисления",
//                 text: "Ежемесячно с зароботной платы на Ваш пенсионный счёт автоматически поступает 10%.",
//             },
//             {
//                 show: false,
//                 title: "Оплачиваемые больничные",
//                 text: "Больничный лист оплачивается в соответствии с ТК РК.",
//             },
//             {
//                 show: false,
//                 title: "Комфортные условия труда",
//                 text: "В магазинах есть обеденные зоны, раздевалки и места для хранения вещей.",
//             },
//             {
//                 show: false,
//                 title: "Корпоративные скидки на продукцию",
//                 text: "В зависимости от категории товара, сотрудник может получить скидку от 10 до 50%.",
//             },
//             {
//                 show: false,
//                 title: "Зарплатный проект Halyk Bank",
//                 text: "При трудоустройстве с отдела кадрового администрирования выдаётся справка с места работы, " +
//                     "которую нужно предоставить в банк для получения 20-значного IBAN счёта, " +
//                     "на который будет поступать заработная плата.",
//             },
//             {
//                 show: false,
//                 title: "Удобное местоположение",
//                 text: "Мы всегда стараемся учитывать место Вашего проживания для распределения в магазин, " +
//                     "ближайший к вашему дому.",
//             },
//         ]
//     },
//     methods: {
//         toggle(index) {
//             this.questions[index].show = !this.questions[index].show;
//             for (let i = 0; i < this.questions.length; i++) {
//                 if (this.questions[i] !== this.questions[index]) {
//                     this.questions[i].show = false;
//                 }
//             }
//         }
//     },
// });
//
// // modal is not necessary yet
// // new Vue({
// //     el: '#modal',
// //     data: function () {
// //         return {
// //             surveyQuestions: [
// //                 {
// //                     id: 1,
// //                     title: "Кем Вы являетесь для клиента (по степени важности):",
// //                     answer1: "Эксперт, личность, представитель фирмы",
// //                     answer2: "Личность, представитель фирмы, эксперт",
// //                     answer3: "Эксперт, представитель фирмы, личность",
// //                 },
// //                 {
// //                     id: 2,
// //                     title: "Что такое презентация товара/услуги?",
// //                     answer1: "Рассказ об услуге/товаре",
// //                     answer2: "Рассказ о пользе услуги",
// //                     answer3: "Рассказ о решении имеющейся проблемы клиента",
// //                 },
// //                 {
// //                     id: 3,
// //                     title: "Клиент говорит «дорого». Как лучше реагировать?",
// //                     answer1: "Ваш ответ: «Если сравнивать с предложениями других компаний, то вы увидите, что это недорого»",
// //                     answer2: "Ваш ответ: «Да, я согласен, что это дорого, но давайте посмотрим, что Вы получите за эти деньги»",
// //                     answer3: "Ваш ответ: «Да, я понимаю, что вопрос денег важен и поэтому, давайте посмотрим на это с другой стороны…»",
// //                 },
// //                 {
// //                     id: 4,
// //                     title: "Клиент два раза возразил, что «это дорого». Ваши действия?",
// //                     answer1: "Наверное, у него нет денег. Нет дальнейшего смысла отвечать.",
// //                     answer2: "Возможно, что это отговорка. Надо это выяснить.",
// //                     answer3: "Предложу скидки, специальные предложения, кредит.  Возможно, удастся найти решение проблемы нехватки денег.",
// //                 },
// //             ]
// //         }
// //     },
// //
// //     methods: {},
// // });
// //
// // const modalBtn = document.getElementById('modal-btn');
// // const modal = document.getElementById('modal');
// //
// // function modalOpen() {
// //     modal.classList.add('modal--show');
// // }
// //
// // if (modalBtn) {
// //     modalBtn.addEventListener('click', modalOpen);
// // }
//
// let timer = null;
// const AUTO_INTERVAL = 5000;
//
// new Vue({
//     el: "#values",
//     data: {
//         playing: false,
//         valueBoxes: [
//             {
//                 title: "Ориентация на сервис и клиента",
//                 iconSrc1: "img/icons.svg#customer",
//                 iconSrc2: "img/icons.svg#customer-2",
//                 text: "Наш приоритет - предоставлять первоклассный сервис и высококачественную\n" +
//                     "продукцию по честным ценам",
//             },
//             {
//                 title: "Эффективность",
//                 iconSrc1: "img/icons.svg#efficiency",
//                 iconSrc2: "img/icons.svg#efficiency-2",
//                 text: "Мы настроены на скорость принятия решений и оперативность действий. У нас амбициозные цели, и мы стремимся к большему и видим возможности в изменениях",
//             },
//             {
//                 title: "Синергия взаимодействия",
//                 iconSrc1: "img/icons.svg#customer-group",
//                 iconSrc2: "img/icons.svg#customer-group2",
//                 text: "Мы работаем в одной команде, заботимся об интересах компании, строим честные и открытые отношения, сотрудничаем и всегда готовы оказать поддержку друг другу",
//             },
//             {
//                 title: "Вовлеченность и лояльность",
//                 iconSrc1: "img/icons.svg#lamp",
//                 iconSrc2: "img/icons.svg#lamp-2",
//                 text: "Драйв, энергия и страсть к делу — то, что мы уважаем в сотрудниках. Каждый из нас пример мотивации, заражён идеей и принимает активное участие в жизни Компании",
//             },
//         ],
//         currentIndex: 0
//     },
//     methods: {
//         setAutoRoll() {
//             let vueSelf = this;
//             timer = setInterval(function () {
//                 vueSelf.addIndex();
//             }, AUTO_INTERVAL);
//         },
//         addIndex() {
//             let newIndex = this.currentIndex + 1;
//             this.currentIndex = newIndex === this.valueBoxes.length ? 0 : newIndex;
//         },
//         play() {
//             this.setAutoRoll();
//             this.playing = true;
//         },
//     },
//     mounted() {
//         this.play();
//     }
// });
//
// function getPosition(element) {
//     var xPosition = 0;
//     var yPosition = 0;
//
//     while (element) {
//         xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
//         yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
//         element = element.offsetParent;
//     }
//
//     window.scroll({
//         top: yPosition - 90,
//         left: xPosition,
//         behavior: 'smooth'
//     });
// }
//
// const valueLink = document.getElementById('value-link');
// const aboutLink = document.getElementById('about-link');
// const questionsLink = document.getElementById('questions-link');
//
// function goToValues() {
//     var element = document.getElementById('values');
//     getPosition(element);
// }
//
// function goToAbout() {
//     var element = document.getElementById('about');
//     getPosition(element);
// }
//
// function goToQuestions() {
//     var element = document.getElementById('questions');
//     getPosition(element);
// }
//
// if(valueLink) {
//     valueLink.addEventListener('click', goToValues);
// }
//
// if(aboutLink) {
//     aboutLink.addEventListener('click', goToAbout);
// }
//
// if(questionsLink) {
//     questionsLink.addEventListener('click', goToQuestions);
// }
//
// const burger = document.getElementById('burger');
// const sideLinks = document.getElementsByClassName('dropdown__link');
//
// function openSide() {
//     document.getElementsByClassName('dropdown')[0].classList.add('dropdown--show');
// }
//
// function closeSide() {
//     document.getElementsByClassName('dropdown')[0].classList.remove('dropdown--show');
// }
//
// if(burger) {
//     burger.addEventListener('click', openSide);
// }
//
// if(sideLinks[0]) {
//     sideLinks[0].addEventListener('click', closeSide);
// }
//
// if(sideLinks[1]) {
//     sideLinks[1].addEventListener('click', goToValues);
//     sideLinks[1].addEventListener('click', closeSide);
// }
//
// if(sideLinks[2]) {
//     sideLinks[2].addEventListener('click', goToAbout);
//     sideLinks[2].addEventListener('click', closeSide);
// }
//
// if(sideLinks[3]) {
//     sideLinks[3].addEventListener('click', goToQuestions);
//     sideLinks[3].addEventListener('click', closeSide);
// }

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
    el: '#menu',
    data: {

    },
});