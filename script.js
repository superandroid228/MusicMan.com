// let nameNotebookOriginal = ['Гітари', 'Ударні', 'Клавішні', 'Духові', 'Гітарне обладнання'];

let noteApp = {
    data() {
        return {
            nameNotebook: ['Гітари', 'Гітарне обладнання', 'Клавішні', 'Духові', 'Барабани',],
            notebookArr: [
                {
                    name: 'Гітари',
                    model: 'Акустична гітара Fender',
                    price: 8000,
                    Image: 'guitar1.jpg',
                    description: 'Лади, кількість: 17 ',
                    description1: 'Розмір гітари: повнорозміри',
                    description2: 'Ширина накладки грифа (у верхнього порожка), мм: 43',
                    description3: 'Струни, кількість: 6',
                    description4: 'Форма корпусу: дредноут',

                },
                {
                    name: 'Гітари',
                    model: 'Акустична гітара Fender',
                    price: 8000,
                    Image: 'guitar2.jpg',
                    description: 'Лади, кількість: 20',
                    description1: 'Розмір гітари: повнорозміри',
                    description2: 'Ширина накладки грифа (у верхнього порожка), мм: 43',
                    description3: 'Струни, кількість: 6',
                    description4: 'Форма корпусу: дредноут',
                },
                {
                    name: 'Гітари',
                    model: 'Акустична гітара Cort',
                    price: 10000,
                    Image: 'guitar3.jpg',
                    description: 'Лади, кількість: 17 ',
                    description1: 'Розмір гітари: повнорозміри',
                    description2: 'Ширина накладки грифа (у верхнього порожка), мм: 43',
                    description3: 'Струни, кількість: 6',
                    description4: 'Форма корпусу: дредноут',
                },

                {
                    name: 'Гітари',
                    model: 'Електрогітара YAMAHA',
                    price: 15800,
                    Image: 'guitaryamaha.jpg',
                    description: 'Лади, кількість: 23 ',
                    description1: 'Розмір гітари: повнорозміри',
                    description2: 'Ширина накладки грифа (у верхнього порожка), мм: 42',
                    description3: 'Струни, кількість: 6',
                    description4: 'Форма корпусу: дредноут',
                },

                {
                    name: 'Гітари',
                    model: 'Електро гітара Gibson',
                    price: 16400,
                    Image: 'guitarlespaul.jpeg',
                    description: 'Лади, кількість: 21 ',
                    description1: 'Розмір гітари: повнорозміри',
                    description2: 'Ширина накладки грифа (у верхнього порожка), мм: 42',
                    description3: 'Струни, кількість: 6',
                    description4: 'Форма корпусу: Les Paul',
                },
                {
                    name: 'Гітари',
                    model: 'Електро гітара James Hetvil',
                    price: 26800,
                    Image: 'guitarstrila.png',
                    description: 'Лади, кількість: 22 ',
                    description1: 'Розмір гітари: повнорозміри',
                    description2: 'Ширина накладки грифа (у верхнього порожка), мм: 43',
                    description3: 'Струни, кількість: 6',
                    description4: 'Форма корпусу: стрела',
                },
                {
                    name: 'Гітари',
                    model: 'Бас гітара YAMAHA',
                    price: 26800,
                    Image: 'bas.jpg',
                    description: 'Лади, кількість: 20 ',
                    description1: 'Розмір гітари: повнорозміри',
                    description2: 'Ширина накладки грифа (у верхнього порожка), мм: 42',
                    description3: 'Струни, кількість: 5',
                    description4: 'Форма корпусу: дредноут',
                },
                {
                    name: 'Гітарне обладнання',
                    model: 'Гітарний комбік',
                    Image: 'kom1.jpg',
                    description: 'Потужність: 15 Вт',
                    description1: 'Вага: 2,3 кг',
                    description2: 'Габаритні розміри: 27 х 25 х 9 см',
                    description3: 'Розєми: 1 вхід jack 6,3мм, 1 вихід jack 6,3мм',
                    description4: '',
                    price: 4800,
                },
                {
                    name: 'Гітарне обладнання',
                    model: 'Гітарний комбік',
                    Image: 'kom2.jpg',
                    description: 'Потужність: 15 Вт',
                    description1: 'Вага: 3,3 кг',
                    description2: 'Габаритні розміри: 29х28х11 см',
                    description3: 'Розєми: 1 вхід jack 6, 3мм, 1 вихід jack 6, 3мм',
                    description4: '',
                    price: 6200
                },
                {
                    name: 'Гітарне обладнання',
                    model: 'Медіатори',
                    Image: 'med.jpg',
                    description: 'Матеріал: пластик',
                    description1: '',
                    description2: '',
                    description3: '',
                    description4: '',
                    price: 20
                },
                {
                    name: 'Барабани',
                    model: 'Барабани GRETSCH DRUMS',
                    Image: 'bar1.jpg',
                    description: 'Вага: 21.4 кг',
                    description1: 'Полифония: 256 нот',
                    description2: 'Клавіатура: 88 клавіша ',
                    description3: 'Розміри: 1397 x 151 x 445 мм',
                    description4: '',
                    price: 22000
                },
                {
                    name: 'Барабани',
                    model: 'Електробарабани Millenium',
                    Image: 'bar2.jpg',
                    description: 'Кількість барабанів - 5',
                    description1: 'Бас-барабан - 22 x 18',
                    description2: 'Клавіатура: 88 клавіша ',
                    description3: 'Розміри: 1397 x 151 x 445 мм',
                    description4: '',
                    price: 19000
                },
                {
                    name: 'Клавішні',
                    model: 'Синтезатор Electro key',
                    Image: 'sin1.jpg',
                    description: 'Бас-барабан 20 х 8',
                    description1: '',
                    description2: '',
                    description3: '',
                    description4: '',
                    price: 8200
                },
                {
                    name: 'Клавішні',
                    model: 'Синтезатор YAMAHA',
                    Image: 'sin2.jpg',
                    description: 'Вага: 6,6 кг',
                    description1: 'Полифония: 128 нот',
                    description2: 'Клавіатура: 61 клавіша ',
                    description3: 'Розміри: 937 х 134 х 331 мм',
                    description4: '',
                    price: 26000
                },
                {
                    name: 'Духові',
                    model: 'Трамбон мі-бемоль',
                    Image: 'tro1.jpg',
                    description: 'Покритя: прозорий лак',
                    description1: 'Колір: золотистий',
                    description2: 'Діаметр раструба: 204 мм',
                    description3: 'Діаметр канала: 12.70 мм',
                    description4: '',
                    price: 14300
                },
                {
                    name: 'Духові',
                    model: 'Трамбон YAMAHA',
                    Image: 'tro2.jpg',
                    description: 'Матеріал раструба: Латунь',
                    description1: 'Колір: золотистий',
                    description2: 'Діаметр раструба: 203',
                    description3: 'Діаметр канала: 12.7',
                    description4: 'Матеріал куліси: Латунь',
                    price: 12000
                },
                {
                    name: 'Духові',
                    model: 'Труба Сі бемоль',
                    Image: 'tru1.jpg',
                    description: 'Матеріал корпуса: латунь ',
                    description1: 'Вага: середній',
                    description2: 'Діаметр раструба: 122 мм',
                    description3: 'Діаметр канала: 11.70 мм',
                    description4: '',
                    price: 8600
                },
                {
                    name: 'Духові',
                    model: 'Труба YAMAHA',
                    Image: 'tru2.jpg',
                    description: 'Матеріал корпуса: жовта латунь ',
                    description1: 'Вага: середній',
                    description2: 'Усилена скоба основного налаштувального крона',
                    description3: 'Діаметр раструба: 123 мм',
                    description4: 'Диаметр канала: 11.65мм',
                    price: 12500
                },
                {
                    name: 'Духові',
                    model: 'Саксофон',
                    Image: 'sax.jpg',
                    description: 'Саксофон: Тенор',
                    description1: 'Колір: золотий',
                    description2: '',
                    description3: '',
                    description4: '',
                    price: 9800
                },
                {
                    name: 'Духові',
                    model: 'Тенор YAMAHA',
                    Image: 'ten.jpg',
                    description: 'Покритя: прозорий лак',
                    description1: 'Кількість клапанів: 3',
                    description2: 'Діаметр канала : 13.60 мм',
                    description3: 'Діаметр раструба: 223 мм',
                    description4: '',
                    price: 17300
                },
                {
                    name: 'Духові',
                    model: 'Туба Maxtone',
                    Image: 'tub.jpg',
                    description: 'Колір: Золотий лак',
                    description1: 'Кількість клапанів: 4',
                    description2: '',
                    description3: 'Діаметр раструба: 401,5 мм',
                    description4: '',
                    price: 24000
                },

            ],
            newArr: [],
            nameChoose: 'Гітара',
            searchText: '',
            currentIndex: 0,
            showDetailsVar: false,
            detailI: -1,

        }
    },
    methods: {
        ShowNotebook(i) {
            this.newArr.length = 0;
            this.nameChoose = this.nameNotebook[i];//ім'я на яке натиснули 
            for (elem of this.notebookArr) {
                if (elem.name == this.nameChoose) {
                    this.newArr.push(elem);
                }
            }
            console.log(this.newArr)
            this.currentIndex = i;
        },
        searchFunction() {
            let find = this.searchText;
            this.newArr.length = 0;
            find = find.trim().toLowerCase();

            return this.notebookArr.filter(item => {
                if ((item.name.toLowerCase().indexOf(find) !== -1) || (item.model.toLowerCase().indexOf(find) !== -1)) {
                    this.newArr.push(item);
                    return this.newArr;
                }
            })
        },
        showDetails(i) {
            this.showDetailsVar = !this.showDetailsVar;
            console.log(this.showDetailsVar);
            this.detailI = i;

        }
    },
    mounted() {
        this.ShowNotebook(0)
    },

}
Vue.createApp(noteApp).mount('.container-notebook')

let btnCloseModal = document.querySelector('.btn-close-modal')
let modal = document.querySelector('.modal-window')

setTimeout(() => {
     modal.style.transform = 'translateX(0)'
}, 8000);
btnCloseModal.onclick = function () {
    modal.style.transform = 'translateX(100%)'
}