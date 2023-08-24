
let imagen1 = document.getElementById("rompeA");
let imagen2 = document.getElementById("rompeB");
let imagen3 = document.getElementById("rompeC");
let rompe = document.getElementById("cuadro");
let rompe1 = document.getElementById("ronpe1");
let rompe2 = document.getElementById("ronpe2");
let rompe3 = document.getElementById("ronpe3");

imagen1.addEventListener('dragstart',(event)=>{
  event.dataTransfer.setData("text/plain", "../codigo/assets/imagenes/Rompe1.png");
});

imagen2.addEventListener('dragstart', (event)=>{
  event.dataTransfer.setData("text/plain", "../codigo/assets/imagenes/rompe2.png");
});

imagen3.addEventListener('dragstart', (event)=>{
  event.dataTransfer.setData("text/plain", "../codigo/assets/imagenes/Rompe3.png");
});

rompe.addEventListener('dragover', (event)=>{
  event.preventDefault();
});
rompe1.addEventListener('drop', (event) => {   
    
    if (rompe1.querySelector("img")) {
   
       return;
    }else{
          let dato = event.dataTransfer.getData("text/plain");
  rompe1.innerHTML = `<img src="${dato}"  alt="" >`;
  event.dataTransfer.clearData("dato");
  imagen1.classList.add("ocultar");
    }
     
});


rompe2.addEventListener('drop', (event)=>{
    if(rompe2.querySelector("img")){
       return;
    }
   let dato = event.dataTransfer.getData("text/plain");
  rompe2.innerHTML = `<img src="${dato}" alt="" >`;
  event.dataTransfer.clearData("dato");
  imagen2.classList.add("ocultar");
});

rompe3.addEventListener('drop', (event)=>{
    if(rompe3.querySelector("img")){ 
        return;
    }
  let dato = event.dataTransfer.getData("text/plain");
  rompe3.innerHTML = `<img src="${dato}" alt="">`;
  event.dataTransfer.clearData("dato");
  imagen3.classList.add("ocultar");
});
let reinicio = document.getElementById("reinicio");
reinicio.addEventListener('click',(event)=>{
       location.reload();
});
/* Le dejo una consulta, como prodria modificar el condicional, para que en caso de no ser la imagen 
correspondiente a su recuadro, igual coloque la imagen en otro lugar sin eliminar la imagen a ocultar 
escrita en el condicional*/