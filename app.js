let wrap = document.querySelector('.wrap');
let genBtn = document.querySelector('.gen');
let copyBtn = document.querySelector('.copy');
let colorCode = document.querySelector('.color-code');
let alertMsg = document.querySelector('.alert');

let hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let hexCode = '';

const getColor = () => {
    for (let i = 0; i < 6; i++) {
        let ind = Math.floor(Math.random() * 16);
        let colorPart = hexChars[ind];
        hexCode += colorPart;
    }

    let color = `#${hexCode}`;
    wrap.style.backgroundColor = color;
    genBtn.style.color = color;    
    copyBtn.style.color = color;
    colorCode.value = `#${hexCode}`
}

genBtn.addEventListener('click', (e) => {
    getColor();
    hexCode ='';
})

copyBtn.addEventListener('click', (e) => {
    colorCode.select();
    document.execCommand('copy');
})