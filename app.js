//1a,b
const button1 = document.querySelector(`#one`);

button1.addEventListener(`click`, () =>{
    alert(`You clicked the first button! congrats!`);
});

//2 a,b
const h3 = document.querySelector(`h3`);


h3.addEventListener(`mouseover`, () => {
    alert("You hovered over the h3 element! congrats!");
},{once: true});

//3 a,b
const form = document.querySelector(`form`);


form.addEventListener(`submit`, () => {
    const entry = form.elements.entry.value;
    alert(`${entry}`);
});



//4 a,b
const darkMode = document.querySelector(`#dm`);
const body = document.querySelector(`body`);


darkMode.addEventListener(`click`, () =>{
        body.classList.toggle(`dark-mode`);
});

//or

const everyElement = document.querySelectorAll(`*`);

darkMode.addEventListener(`click`, () => {
    for (a of everyElement){
        a.classList.toggle(`dark-mode`);
    }
});


//5 a, b
const times = document.querySelector(`#times`);
let click = 0;


times.onclick = () =>{
    click++;
    if(click <= 2){
        alert("You clicked the last button! Congrats!");

    } else if (click === 3){
        alert("OH NO!! This button is NOT going to work anymore");
        
    } else{
        times.disabled = true;
    
    }

};