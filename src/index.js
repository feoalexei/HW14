/*--------- Sum function ------------*/
function getSum() {
    let result = 0;
    return function(parametr) {
        return result += parametr;
    };
}

const getSumResult = getSum(); //eslint-disable-line 

// console.log(getSumResult(3));
// console.log(getSumResult(5));
// console.log(getSumResult(20));

/*--------- Counter function with parametres ------------*/
function counter(initialValue, stepValue) {
    let result = initialValue;
    return {
        normalCount: function() {
            return result += stepValue;
        },
        zeroCount: function() {
            return result = 0; //eslint-disable-line 
        }
    };
}

const fbCounter = counter(5, 10); //eslint-disable-line 

const $button = document.getElementById('fb');

$button.addEventListener('click', () => {
    console.log('get FB likes: ', fbCounter.normalCount()); //eslint-disable-line 
});

$button.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log('reset FB likes: ', fbCounter.zeroCount()); //eslint-disable-line 
});