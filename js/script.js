document.getElementById('blueBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});

document.getElementById('yellowBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
});

document.getElementById('blackBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
});

document.getElementById('randomBtn').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
});