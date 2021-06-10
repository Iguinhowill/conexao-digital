let time = 2000,
    currentImageIndex = 0, //posição inicial
    images = document.
                querySelectorAll("#slider div img"),
    max = images.length;

function nextImage(){
    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0
    
    images[currentImageIndex]
        .classList.add("selected")

}

function start(){
    setInterval(() => {
        //troca de imagens
        nextImage()
    }, //tempo 
    time) 
}

window.addEventListener("load", start)
//quando a pagina for aberta ele inicia a função start