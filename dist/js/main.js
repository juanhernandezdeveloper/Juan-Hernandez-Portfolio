const myImages=document.getElementById("my-pics");let countImg=0;const Images=[];Images[0]="Juan-in-Barcelona.jpg";Images[1]="Juan-in-family.jpg";Images[2]="Juan-in-modena.jpg";Images[3]="Juan-in-Paris.jpg";Images[4]="Juan-in-Venecia.jpg";Images[5]="Juan-MTB.jpg";Images[6]="Juan.jpg";Images[7]="The-whole-family.jpg";setInterval(function(){myImages.src=`images/${Images[countImg]}`;if(countImg<Images.length-1){countImg++}else{countImg=0}},3e3);const bdark=document.querySelector("#bdark");const body=document.querySelector("body");const header=document.querySelector("header");bdark.addEventListener("click",e=>{body.classList.toggle("bluemode");header.classList.toggle("bluemode1")});