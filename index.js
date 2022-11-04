const cars = [{
    brand: 'Honda',
    model: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
},
{
    brand: 'BMW',
    model: 'X5',
    price: 19000,
    img: 'https://i.infocar.ua/img/mats/11150/ins/1614846802162.jpg'
},
{
    brand: 'Audi',
    model: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
}, {
    brand: 'BMW',
    model: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
},
{
    brand: 'Audi',
    model: 'A6',
    price: 25000,
    img: 'https://i.gaw.to/vehicles/photos/40/28/402805-2022-audi-a6.jpg?640x400'
}, {
    brand: 'Honda',
    model: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
}, {
    brand: 'Volvo',
    model: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
},
{
    brand: 'Audi',
    model: 'RSQ8',
    price: 180000,
    img: 'https://static.apostrophe.ua/uploads/image/7a832f54750de46acc3269ef2e0d8b26.jpg'
},
]

const refs = {
    form: document.querySelector('form[action="submit"]'),
    carList: document.querySelector('.carlist'),
    input: document.querySelector('input[name="query"]')
}


refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', _.debounce(onInputType, 500))

refs.carList.innerHTML = createMarkUp(cars);


function onInputType(e) {
    const { query, option } = refs.form.elements;
    let filteredCars = cars.filter(car => {
        return car[option.value].toLowerCase().includes(query.value.toLowerCase())
    })

    refs.carList.innerHTML = createMarkUp(filteredCars);
}

function onFormSubmit(e) {
    e.preventDefault();
    const { query, option } = refs.form.elements;
    let filteredCars = cars.filter(car => {
        return car[option.value].toLowerCase().includes(query.value.toLowerCase())
    })

    refs.carList.innerHTML = createMarkUp(filteredCars);
}


function createMarkUp(array) {
    const markUp = array.map(({ brand, model, price, img }) => {
        return `
        <li>
            <h2>${brand}</h2>
            <h3>${model}</h3>
            <p>${price}</p>
            <img src="${img}" alt="car" width="300">
        </li>
        `
    }).join('')
    return markUp
}