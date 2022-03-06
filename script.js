function alterarRadius() {
    //const valorRadius = document.querySelector("#input-1").value
    const valorRadius = document.getElementById("input-1").value
    console.log(valorRadius)
    //const itens = document.querySelectorAll(".item")
    const itens = document.getElementsByClassName("item")
    for(let i = 0; i < itens.length; i++) {
        itens[i].style.borderRadius=`${valorRadius}px`;
    }
}

