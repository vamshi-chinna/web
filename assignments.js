let a = prompt("CHEACK wheater the num is divisible by 7 or not")
let b = prompt("CHEACK wheater the num is divisible by 7 or not")
let c = prompt("CHEACK wheater the num is divisible by 7 or not")
if(a%7===0){
    console.log("it is divisable by 7")

}
else{
    console.log("it is not divisable by 7")
}


if (a<b){
    if (b<c){console.log(a,b,c)}
    else{if(a<c){
        console.log(a,c,b)
    }
else{console.log(c,a,b)}}

}
else{
    if(a<c){
        console.log(b,a,c)
    }else{
        if(b<c){
           console.log(b,c,a)
        }
        else{
             console.log(c,b,a)
        }
    }
}