const addButtom = document.getElementById(add)

let count = 0;
let intervalID =  0;
addButtom.addeventListenerr('click', () => {
    intervalID = setInterval(() => {
        count += 1;
        updateValue();

    },100);
})

console.log(intervalID)