let block = document.querySelector('.header_right_menu');
let burger = document.querySelector('.header_right_item');
block.addEventListener('click',toggleContainer);
function toggleContainer(){
    burger.classList.toggle("unvisible");
}




let met = document.querySelectorAll('.detail__button');
let metContent = document.querySelectorAll('.detail__prewiew');
console.log(met);
console.log(metContent);
metContent[0].style.display = 'flex';

for (let i = 0; i < met.length; i++){
    met[i].addEventListener('click', function(){
        showMeContent(i);
    } )
}
function showMeContent(ind){
    for (let b = 0; b< metContent.length; b++){
        if (b === ind) {
            metContent[b].style.display = 'flex';
        }else {
            metContent[b].style.display = 'none';
        }
    }
}




let tab = document.querySelectorAll('.services__prewiew_left_item');
let tabContent = document.querySelectorAll('.services__prewiew_center');
console.log(tab);
console.log(tabContent);
tabContent[0].style.display = 'block';

for (let i = 0; i < tab.length; i++){
    tab[i].addEventListener('click', function(){
        showCurrentContent(i);
    } )
}
function showCurrentContent(ind){
    for (let b = 0; b< tabContent.length; b++){
        if (b === ind) {
            tabContent[b].style.display = 'block';
        }else {
            tabContent[b].style.display = 'none';
        }
    }
}


let god = document.querySelectorAll('.news__prewiew_right_button');
let godContent = document.querySelectorAll('.news__prewiew_left');
console.log(god);
console.log(godContent);
godContent[0].style.display = 'block';

for (let i = 0; i < god.length; i++){
    god[i].addEventListener('click', function(){
        showYouContent(i);
    } )
}
function showYouContent(ind){
    for (let b = 0; b< godContent.length; b++){
        if (b === ind) {
            godContent[b].style.display = 'block';
        }else {
            godContent[b].style.display = 'none';
        }
    }
}





let rech = document.querySelectorAll('.team__button_item');
let rechCont = document.querySelectorAll('.team__prewiew_item');
console.log(rech);
console.log(rechCont);
rechCont[0].style.display = 'flex';

for (let i = 0; i < rech.length; i++){
    rech[i].addEventListener('click', function(){
        showUserContent(i);
    } )
}
function showUserContent(w){
    for (let c = 0; c < rechCont.length; c++){
        if (c === w) {
            rechCont[c].style.display = 'flex';
        }else {
            rechCont[c].style.display = 'none';
        }
    }
}

let car = document.querySelectorAll('.test__prewiew_button_item');
let carCon = document.querySelectorAll('.test__prewiew_item');
console.log(car);
console.log(carCon);
carCon[0].style.display = 'flex';

for (let i = 0; i < car.length; i++){
    car[i].addEventListener('click', function(){
        showWinContent(i);
    } )
}
function showWinContent(ind){
    for (let b = 0; b< carCon.length; b++){
        if (b === ind) {
            carCon[b].style.display = 'flex';
        }else {
            carCon[b].style.display = 'none';
        }
    }
}
function myMap() {
    var mapCanvas = document.querySelector(".map");
    var mapOptions = {
      center: new google.maps.LatLng(53.909637, 27.554635), zoom: 17
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }


  const allWorksButton = document.querySelector('.portfolio__links_item_all');
  const printButton =document.querySelector('.portfolio__links_item_print');
  const identityButton = document.querySelector('.portfolio__links_item_identity');
  const brandingButton = document.querySelector('.portfolio__links_item_branding');
  const webButton = document.querySelector('.portfolio__links_item_web');
  const htmlButton = document.querySelector('.portfolio__links_item_html');
  const wordButton = document.querySelector('.portfolio__links_item_word');

  const allWorksComp = document.querySelectorAll('.portfolio__prewiew_item');
  const printComp =document.querySelectorAll('.print');
  const identityComp = document.querySelectorAll('.identity');
  const brandingComp = document.querySelectorAll('.branding');
  const webComp = document.querySelectorAll('.web');
  const htmlComp = document.querySelectorAll('.html');
  const wordComp = document.querySelectorAll('.word');


  allWorksButton.addEventListener('click', function() {
      for (let i = 0; i < allWorksComp.length; i++) {
          allWorksComp[i].style.display = 'flex';
      }
  })

  printButton.addEventListener('click', function() {
    for (let i = 0; i < allWorksComp.length; i++) {
        allWorksComp[i].style.display = 'none';
    }

    for (let i = 0; i < printComp.length; i++) {
        printComp[i].style.display = 'flex';
    }
})

brandingButton.addEventListener('click', function() {
    for (let i = 0; i < allWorksComp.length; i++) {
        allWorksComp[i].style.display = 'none';
    }

    for (let i = 0; i < printComp.length; i++) {
        brandingComp[i].style.display = 'flex';
    }
})

identityButton.addEventListener('click', function() {
    for (let i = 0; i < allWorksComp.length; i++) {
        allWorksComp[i].style.display = 'none';
    }

    for (let i = 0; i < printComp.length; i++) {
        identityComp[i].style.display = 'flex';
    }
})

webButton.addEventListener('click', function() {
    for (let i = 0; i < allWorksComp.length; i++) {
        allWorksComp[i].style.display = 'none';
    }

    for (let i = 0; i < printComp.length; i++) {
        webComp[i].style.display = 'flex';
    }
})

htmlButton.addEventListener('click', function() {
    for (let i = 0; i < allWorksComp.length; i++) {
        allWorksComp[i].style.display = 'none';
    }

    for (let i = 0; i < printComp.length; i++) {
        htmlComp[i].style.display = 'flex';
    }
})


wordButton.addEventListener('click', function() {
    for (let i = 0; i < allWorksComp.length; i++) {
        allWorksComp[i].style.display = 'none';
    }

    for (let i = 0; i < printComp.length; i++) {
        wordComp[i].style.display = 'flex';
    }
})