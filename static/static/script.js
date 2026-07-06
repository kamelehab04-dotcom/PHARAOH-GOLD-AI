function updateData(){

let price=(3300+Math.random()*100).toFixed(2);

let signals=["BUY","SELL","WAIT"];

let signal=signals[Math.floor(Math.random()*3)];

document.getElementById("price").innerHTML=price;

document.getElementById("signal").innerHTML=signal;

  }
