let firstElemInArray = document.querySelector('.first-element');
firstElemInArray.innerHTML = ['js', 'css', 'html'][0];


const result = document.querySelector('.result');
result.innerHTML = [0, 1, false, 2, undefined, '', 3, null].filter(elem => elem);
