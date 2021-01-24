function bgChanger() {
    // adjust "/ [number]" to achieve prefered point of color change
    if (this.scrollY > this.innerHeight / 1.4) {
        document.body.classList.add("bg-active")
    } else {
        document.body.classList.remove("bg-active")
    }
}

// "this" within bgChanger is "window" because of this call below
window.addEventListener("scroll", bgChanger);