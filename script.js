let grid = document.querySelector('.grid');

const colorChange = (e) => {
    e.target.style.backgroundColor='green'
    console.log(e.target.style);
    }

for(let i = 1; i <= 256; i ++){
    const div = document.createElement('div');
    div.addEventListener('click', colorChange)
    grid.appendChild(div);

}

