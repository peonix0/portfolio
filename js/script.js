function center_menu_visibility() {
  let ele = document.querySelector(".center_menu");
  if (!eleClicked) {
    document.querySelector("#menuBtn>img").src = "img/error.png";
    ele.style.display = "grid";

    if(screen.availWidth >= 380 && screen.availHeight>=700 ){
        document.querySelector(".centerText").style.bottom = "70%";
     }
   else{
       document.querySelector(".centerText").style.display= "none";
   }
    eleClicked = true;
  } else {
    document.querySelector("#menuBtn>img").src = "img/menu.png";
    ele.style.display = "none";
    if(screen.availWidth >= 380 && screen.availHeight>=700){
        document.querySelector(".centerText").style.bottom = "40%";
     }
   else{
       document.querySelector(".centerText").style.display= "block";
   }
    eleClicked = false;
  }
}

var ele2 = document.getElementById("menuBtn");

var eleClicked = false;
ele2.addEventListener("click", center_menu_visibility);


// typewriter effect


function typeWriter(text,i,ele,speed) {
  if (i < text.length) {
    document.getElementById(ele).innerHTML += text.charAt(i);
    setTimeout(typeWriter, speed, text,i+1,ele,speed);
  }
}

typeWriter("Helloo, Welcome to Aj's Portfolio.",0,"Typel1",120);
typeWriter("“There are 360 degrees, so why stick to one?” – Zaha Hadid",0,"Typel2",50);
