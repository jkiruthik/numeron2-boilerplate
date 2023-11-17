// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

var num1 = Math.round(Math.random()*100);
var num2 = Math.round(Math.random()*100);

var num1div = document.getElementById("number1");
var num2div = document.getElementById("number2");

// Iteration 3: Creating variables required to make the game functional

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mul = document.getElementById("mul");
var divide = document.getElementById("divide");
var modulus = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var num3;
var num3div = document.getElementById("number3");

// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
    var operation = Math.round(Math.random()*7);

    // swap 2 numbers using a 3rd variable

    // num1 = 2, num3 = 3
    // op: num1 = 3, num2 = 2


    // var temp;
    // temp = num1;
    // num1 = num2;
    // num2 = temp;

    // // rough
    // temp = 2
    // num1 = 3
    // num2 = 2

    var temp;

    if(num1<num2){
        temp = num1; 
        num1 = num2; 
        num2 = temp;
    }

    switch(operation){
        case 0:
            num3 = num1 + num2;
            break;
        case 1:
            num3 = num1-num2;
            break;
        case 2:
            num3 = num1*num2;
            break;
        case 3:
            num3 = Math.round(num1/num2);
            break;
        case 4:
            num3 = num1%num2;
            break;
        default:
            randomise();
    } 
    num1div.innerHTML = num1;
    num2div.innerHTML = num2;
    num3div.innerHTML = num3;

}

randomise()

// Iteration 6: Making the Operators (button) functional

var score = 0;


plus.onclick = ()=>{
    if(num1+num2 == num3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;
    }
}

minus.onclick = ()=>{
    if(num1-num2 == num3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}

mul.onclick = ()=>{
    if(num1*num2 == num3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}

divide.onclick = ()=>{
    if(Math.round(num1/num2) == num3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}

modulus.onclick = ()=>{
    if(num1%num2 == num3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}

// Iteration 7: Making Timer functional

var time = 20;
var timer = document.getElementById("timer");
var timerId;
 
function startTimer(){
    time = 20;
    timerId = setInterval(()=>{
        time--;
        timer.innerHTML = time;
        if(time<=0){
            window.location.href = `./gameover.html`;

        }
    }, 1000);
    localStorage.setItem("totalscore", score);
}

function clearout(timerId){
    clearInterval(timerId);
    startTimer();
}

startTimer();// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

var num1 = Math.round(Math.random()*100);
var num2 = Math.round(Math.random()*100);

var num1div = document.getElementById("number1");
var num2div = document.getElementById("number2");

// Iteration 3: Creating variables required to make the game functional

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mul = document.getElementById("mul");
var divide = document.getElementById("divide");
var modulus = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var num3;
var num3div = document.getElementById("number3");

// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
    var operation = Math.round(Math.random()*7);

    // swap 2 numbers using a 3rd variable

    // num1 = 2, num3 = 3
    // op: num1 = 3, num2 = 2


    // var temp;
    // temp = num1;
    // num1 = num2;
    // num2 = temp;

    // // rough
    // temp = 2
    // num1 = 3
    // num2 = 2

    var temp;

    if(num1<num2){
        temp = num1; 
        num1 = num2; 
        num2 = temp;
    }

    switch(operation){
        case 0:
            num3 = num1 + num2;
            break;
        case 1:
            num3 = num1-num2;
            break;
        case 2:
            num3 = num1*num2;
            break;
        case 3:
            num3 = Math.round(num1/num2);
            break;
        case 4:
            num3 = num1%num2;
            break;
        default:
            randomise();
    } 
    num1div.innerHTML = num1;
    num2div.innerHTML = num2;
    num3div.innerHTML = num3;

}

randomise()

// Iteration 6: Making the Operators (button) functional

var score = 0;


plus.onclick = ()=>{
    if(num1+num2 == num3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;
    }
}

minus.onclick = ()=>{
    if(num1-num2 == num3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}

mul.onclick = ()=>{
    if(num1*num2 == num3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}

divide.onclick = ()=>{
    if(Math.round(num1/num2) == num3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}

modulus.onclick = ()=>{
    if(num1%num2 == num3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}

// Iteration 7: Making Timer functional

var time = 20;
var timer = document.getElementById("timer");
var timerId;
 
function startTimer(){
    time = 20;
    timerId = setInterval(()=>{
        time--;
        timer.innerHTML = time;
        if(time<=0){
            window.location.href = `./gameover.html`;

        }
    }, 1000);
    localStorage.setItem("totalscore", score);
}

function clearout(timerId){
    clearInterval(timerId);
    startTimer();
}

startTimer();