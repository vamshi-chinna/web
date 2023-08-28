const H = document.querySelector('.hour')
const M = document.querySelector('.min')
const S = document.querySelector('.sec')
setInterval(() => {
    let date= new Date();
     H.innerHTML=date.getHours()-12+" :  ";
     M.innerHTML=date.getMinutes()+" : ";
     S.innerHTML=date.getSeconds();

}, 1000);
