let plus = document.querySelector(".plus") ;


function add() {
    let valu = +prompt("Enter Your First Value") ;
    let valuetwo = +prompt("Enter your 2nd Value ") ;
let ans = valu + valuetwo ;
plus.innerHTML = ` your first value ${valu} and 2nd valvue ${valuetwo} you click Add  Button and your answer is ${ans} ` ;

}
let subt = document.querySelector(".subt") ;

function sub() {
    let valu = +prompt("Enter Your First Value") ;
    let valuetwo = +prompt("Enter your 2nd Value ")
    let ans = valu - valuetwo ;
    subt.innerHTML = ` your first value ${valu} and 2nd valvue ${valuetwo} you click Subtract   Button and your answer is ${ans} ` ;
    
}

let mult = document.querySelector(".mult") ;

function mul() {
    let valu = +prompt("Enter Your First Value") ;
    let valuetwo = +prompt("Enter your 2nd Value ")
    let ans = valu * valuetwo ;
    mult.innerHTML = ` your first value ${valu} and 2nd valvue ${valuetwo} you click Multiply    Button and your answer is ${ans} ` ;
}

let divid = document.querySelector(".divid") ;

function div() {
    let valu = +prompt("Enter Your First Value") ;
    let valuetwo = +prompt("Enter your 2nd Value ")
    let ans = valu / valuetwo ;
    divid.innerHTML = ` your first value ${valu} and 2nd valvue ${valuetwo} you click Divide   Button and your answer is ${ans} ` ;
}
