// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let score=0;
let ClearReferenceTime = undefined;
let time = document.getElementById("timer");
let number1Div = document.getElementById("number1");
let number2Div = document.getElementById("number2");
  
let num1Random = Math.floor(Math.random()*100);
let num2Random = Math.floor(Math.random()*100);
let num3Random = undefined;

// Iteration 3: Creating variables required to make the game functional
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let mulBtn = document.getElementById("mul");
let divideBtn = document.getElementById("divide");
let modulusBtn = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3Div = document.getElementById("number3");
let Operators;

// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    Operators = Math.floor(Math.random()*5);
    num1Random = Math.floor(Math.random()*100);
    num2Random = Math.floor(Math.random()*100);
    
    if (num1Random < num2Random){
        let tempVariable = num1Random;
        num1Random=num2Random;
        num2Random=tempVariable;
    }
    if (num1Random==0 || num2Random==0){
        randomise();
        //becoz if one number is zero in case of division and modulus it will be difficult and it will give undefined.
    }
    if (Operators==5){
        //addition
        num3Random=num1Random+num2Random;
        console.log("Addition",num3Random);
    }
    else if (Operators==4){
        //minus
        num3Random=num1Random-num2Random;
        console.log("Minus",num3Random);
    }
    else if (Operators==3){
        //multiply
        num3Random=num1Random*num2Random;
        console.log("Minus",num3Random);
    }
    else if (Operators==2){
        //divide
        num3Random=Math.floor(num1Random/num2Random);
        console.log("divide",num3Random);
    }
    else if (Operators==1){
        //modulus
        num3Random=num1Random%num2Random;
        console.log("modulus",num3Random);
    }
    else{
        //in this case operators==0
        randomise();
        console.log("Recurrsion");
    }

    number1Div.innerText=num1Random;
    number2Div.innerText=num2Random;
    number3Div.innerText=num3Random;

}
randomise();

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
function Timer(){
    let timeStart=20;
    time.innerText=timeStart;
    ClearReferenceTime=setInterval(function(){
        timeStart-=1;
        if (timeStart==0){
            localStorage.setItem("score",score);
            window.location.href="./gameover.html"
        }
    },1000);
}
Timer();
plusBtn.addEventListener("click",function(){
    if (num1Random + num2Random == num3Random){
        score+=1;
        clearInterval(ClearReferenceTime);
        Timer();
        randomise();
    }
    else{
        //gameover
        localStorage.setItem("score",score)
        window.location.href="./gameover.html";
    }
})

minusBtn.addEventListener("click",function(){
    if (num1Random-num2Random==num3Random){
        score+=1;
        clearInterval(ClearReferenceTime);
        Timer();
        randomise();
    }
    else{
        localStorage.setItem("score",score)
        window.location.href="./gameover.html"
    }
})

mulBtn.addEventListener("click",function(){
    if (num1Random*num2Random==num3Random){
        score+=1;
        clearInterval(ClearReferenceTime);
        Timer();
        randomise();
    }
    else{
        localStorage.setItem("score",score);
        window.location.href="./gameover.html";
    }
})

divideBtn.addEventListener("click",function(){
    if (Math.floor(num1Random/num2Random)==num3Random){
        score+=1;
        clearInterval(ClearReferenceTime);
        Timer();
        randomise()
    }
    else{
        localStorage.setItem("score",score)
        window.location.href="./gameover.html"
    }
})

modulusBtn.addEventListener("click",function(){
    if (num1Random%num2Random==num3Random){
        score+=1;
        clearInterval(ClearReferenceTime);
        Timer();
        randomise();
    }
    else{
        localStorage.setItem("score",score)
        window.location.href="./gameover.html"
    }
})
