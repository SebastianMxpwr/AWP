if(navigator.serviceWorker){
    console.log('podemos usar esta shit');
    navigator.serviceWorker.register('sw.js')
} 

document.querySelectorAll(".carousel-history").forEach(carousel=>{
    const items = carousel.querySelectorAll(".carousel__item")
    items.forEach((item, i)=>{
        item.innerHTML = `<img src="images/${i+1}.jpg">`
    })
    const buttonsHtml = Array.from(items, ()=>{
        return `<span class="carousel_button"></span>`
    })

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel_nav">
            ${buttonsHtml.join("")}
        </div>
    `)

    const buttons = carousel.querySelectorAll(".carousel_button")
    console.log(buttons)
    buttons.forEach((button, i)=>{
        button.addEventListener("click", ()=>{
            items.forEach(item => item.classList.remove("carousel_item-selected"))
            buttons.forEach(button => button.classList.remove("carousel_button-selected"))

            items[i].classList.add("carousel_item-selected")
            button.classList.add("carousel_button-selected")

        })
    })

    items[0].classList.add("carousel_item-selected")
    buttons[0].classList.add("carousel_button-selected")
})

