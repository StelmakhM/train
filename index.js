const rectangle = document.querySelector('.field');
const p = document.querySelector('.coords');
const normal = document.querySelector('.normal');
const trottled = document.querySelector('.throttled');
let counterNormal = 0;
let counterTrottled = 0;



rectangle.addEventListener('mousemove', mouseHandler);
rectangle.addEventListener('mousemove', _.throttle(slowedMouseHandler, 300));

function mouseHandler(e) {
    const coordinats = `X: ${e.offsetX}, Y: ${e.offsetY}`;
    p.textContent = coordinats;
    counterNormal += 1;
    normal.textContent = counterNormal;
}

function slowedMouseHandler() {
    counterTrottled += 1;
    trottled.textContent = counterTrottled;
}