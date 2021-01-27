"use strict";
 // строгий режим

// для инициализации и отображения

document.getElementById("indicator").value="1"; // Изначальное значение - собрали 1 доллар
document.getElementById("indicator").max="15"; // Максимальное значение 
let elem = document.getElementById("indicator");
elem.style.width = 100/elem.max+ "%"; // Отображаем размер индикатора по значениям вверху в процентах
 
let elemDifference=elem.max-elem.value; // Разница, сколько осталось собрать
document.getElementById("indtext").innerHTML="You need "+elemDifference+"$ more to reach target"; // Внизу надпись, сколько осталось собрать
// alert(elem.value+"$"); 
// для инициализации и отображения


let i = 0;
function move() {

  if (i == 0) {
   let i = 1;

    
    let elem = document.getElementById("indicator");
    let width = 1;
    let id = setInterval(frame, 10);
    //alert(elem.innerHTML);


    function frame() {
      //width = elem.value*100/elem.max;
      if (width >= elem.value*100/elem.max) {

        clearInterval(id);
        
        i = 0;
      } else {
        width++;
        elem.style.width = width+ "%";
	//elem.innerHTML = Math.round(100*elem.value*100/elem.max)/100+"%";
	

	let elemDifference=elem.max-elem.value;//elem difference

	document.getElementById("indtext").innerHTML="You need "+elemDifference+"$ more to reach target";

	// let pl=175+elem.style.left;
	let pl=175+width*1.5;

	document.getElementById("pointer").style.left=pl+"px";

	document.getElementById("pointer").innerText="^"+String.fromCharCode(13)+elem.value+"$";
      }
    }
  }
//alert(document.getElementById("indicator").position);
if (elem.value<elem.max) {elem.value++;}; // увеличиваем собранные доллары на 1 при каждом нажатии
//let document.getElementById("indicator").value=document.getElementById("indicator").value+1
};
  
