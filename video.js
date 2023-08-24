let video= document.querySelector("video");

const iniciar=(event)=>{
    video.play();
};
const pausar=(event)=>{
    video.pause();
};
const tiempo = document.getElementById("tiempo");
video.addEventListener('timeupdate', (event)=> {
    const minutos = Math.floor(video.currentTime / 60);
    const segundos = Math.floor(video.currentTime % 60);
    tiempo.textContent = minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
});

 