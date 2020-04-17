const right = document.querySelector('.right');
const left = document.querySelector('.left');
const slides = document.querySelectorAll('.img');
var index = 0;
var status = 'dangdungyen';
setInterval(() =>{
    Slide('right');
}, 10000);
function Slide(item) {
    if (status == 'dangchuyendong') {
        return;
    }
    status = 'dangchuyendong';
    let check = 0;
    let curretImg = slides[index];
    index = (item === 'right') ? (index = index < slides.length - 1 ? index + 1 : 0) :
        (index = index > 0 ? index - 1 : slides.length - 1)
    let nextCurrentImg = slides[index];
    // Xóa phần tử chuyên động
    curretImg.addEventListener('webkitAnimationEnd', function () {
        curretImg.classList.remove('img-see');
        curretImg.classList.remove(item === 'right' ? 'animation' : 'animation3')
        check++;
        status = (check == 2) ? 'dangdungyen' : status;
    })
    nextCurrentImg.addEventListener('webkitAnimationEnd', function () {
        nextCurrentImg.classList.add('img-see');
        nextCurrentImg.classList.remove(item === 'right' ? 'animation-in' : 'animation2')
        check++;
        status = check == 2 ? 'dangdungyen' : status;
    })
    // Kiểm tra chuyển động
    curretImg.classList.add(item === 'right' ? 'animation' : 'animation3');
    nextCurrentImg.classList.add(item === 'right' ? 'animation-in' : 'animation2');
}
function buttonRight() {
    Slide('right');
}
function buttonLeft() {
    Slide('left');
}

right.addEventListener('click', buttonRight)
left.addEventListener('click', buttonLeft)