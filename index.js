console.log("hello world!");

const btnAll = document.getElementById ("btnAll");
const btnDrink = document.getElementById ("btnDrink");
const btnBurger = document.getElementById ("btnBurger");
const btnLounch = document.getElementById ("btnLounch");
const btnDinner = document.getElementById ("btnDinner");
const drink1 = document.getElementById ("drink1") ;
const drink2 = document.getElementById ("drink2") ;
const drink3 = document.getElementById ("drink3") ;
const burger1 = document.getElementById ("burger1") ;
const burger2 = document.getElementById ("burger2");
const burger3 = document.getElementById ("burger3");
const lounch1 = document.getElementById ("lounch1");
const lounch2 = document.getElementById ("lounch2");
const lounch3 = document.getElementById ("lounch3");
const dinner1 = document.getElementById ("dinner1");
const dinner2 = document.getElementById ("dinner2");
const dinner3 = document.getElementById ("dinner3");

const divDrink = document.getElementById ("divDrink");
const divBurger = document.getElementById ("divBurger");
const divLounch = document.getElementById ("divLounch");
const divDinner = document.getElementById ("divDinner");


btnAll.addEventListener ("click", () =>{
    console.log ("Print All") ;
    divDrink.style.display = "block" ;
    divBurger.style.display = "block" ;
    divLounch.style.display = "block" ;
    divDinner.style.display = "block" ;
})

btnDrink.addEventListener ("click", () => {
    console.log("Print Drink") ;
    divDrink.style.display = "block" ;
    divBurger.style.display = "none" ;
    divLounch.style.display = "none" ;
    divDinner.style.display = "none" ;
})

btnBurger.addEventListener ( "click", () => {
    console.log("Print Burger") ;
    divDrink.style.display = "none" ;
    divBurger.style.display = "block" ;
    divLounch.style.display = "none" ;
    divDinner.style.display = "none" ;
})

btnLounch.addEventListener ( "click", () => {
    console.log("Print Lounch") ;
    divDrink.style.display = "none" ;
    divBurger.style.display = "none" ;
    divLounch.style.display = "block" ;
    divDinner.style.display = "none" ;
})

btnDinner.addEventListener ("click", () => {
    console.log("Print Dinner") ;
    divDrink.style.display = "none" ;
    divBurger.style.display = "none" ;
    divLounch.style.display = "none" ;
    divDinner.style.display = "block" ;
})