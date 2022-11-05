const refs = {
    tbody: document.querySelector('.js-calendar-tbody')
}


refs.tbody.addEventListener('click', onTdclick);
let prevEl = null; //e.target

function onTdclick(e) {
    if (e.target.nodeName !== 'TD' || e.target.textContent === '') { //guard clause
        return
    }

    if (prevEl === null) {
        e.target.classList.add('active')
        prevEl = e.target
        console.log('prevEl :>> ', prevEl);
        console.log('e.target :>> ', e.target);
        return
    }

    if (prevEl === e.target) {
        e.target.classList.toggle('active')
        console.log('prevEl :>> ', prevEl);
        console.log('e.target :>> ', e.target);
        return
    }

    prevEl.classList.remove('active');
    e.target.classList.add('active');
    prevEl = e.target;
    console.log('prevEl :>> ', prevEl);
    console.log('e.target :>> ', e.target);
}