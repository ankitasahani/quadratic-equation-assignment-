var A;
var B;
var C;
var result;
var a;
var b;
var c;
var dis;
var r1;
var r2;

function init(){
    A = document.querySelector("#Valuea");
    B = document.querySelector("#Valueb");
    C = document.querySelector("#Valuec");
    result = document.querySelector("#result");
}

function equation(){
    document.getElementById("a").innerHTML = A.value==1?"":A.value;
    document.getElementById("b").innerHTML = B.value==1?"":B.value;
    document.getElementById("c").innerHTML = C.value;
}

function solution(){
    if(eval(A.value) !== undefined && eval(B.value) !== undefined && eval(C.value) !== undefined){
        a = A.value;
        b = B.value;
        c = C.value;
        dis = getDiscriminant(a, b, c);
        if (dis<0){
            result.innerHTML = "There is no real root.";
        }
        else if (dis===0){
            r1 = (-b+Math.sqrt(dis))/(2*a);
            r2 = (-b-Math.sqrt(dis))/(2*a);
            result.innerHTML += "x1: " + r1 + "<br>";
            result.innerHTML += "x2: " + r2 + "<br>";
        }
        else{
            r1 = (-b+Math.sqrt(dis))/(2*a);
            r2 = (-b-Math.sqrt(dis))/(2*a);
            result.innerHTML += "x1: " + r1 + "<br>";
            result.innerHTML += "x2: " + r2 + "<br>";
        }
    }
    else{
        result.innerHTML = "Please fill in all 3 coefficient";
    }
}

function getDiscriminant(a, b, c){
    return Math.pow(b, 2)-4*a*c;
}