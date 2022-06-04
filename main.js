let firstElemInArray = document.querySelector('.first-element');
firstElemInArray.innerHTML = ['js', 'css', 'html'][0];


let result = document.querySelector('.result');
result.innerHTML = [0, 1, false, 2, undefined, '', 3, null].filter(elem => {
    elem !== false; 
    return elem;
});


//Можете, пожалуйста, объяснить почему без return возвращает другой ответ?
// result.innerHTML = [0, 1, false, 2, undefined, '', 3, null].filter(elem => elem !== false);
// 0,1,2,,,3,