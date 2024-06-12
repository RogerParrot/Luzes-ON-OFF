const lightRed = document.querySelector("#red")

const offPress = document.querySelector("#off-pressed")
const onUnpress = document.querySelector("#on-unpressed")

const btns = document.querySelector("#btns")

const container = document.querySelector("#container")

const onPress = document.createElement("button")
onPress.className = "btn"
onPress.id = "on-pressed"
onPress.textContent = "On"

const offUnpress = document.createElement("button")
offUnpress.className = "btn"
offUnpress.id = "off-unpressed"
offUnpress.textContent = "Off"

const lightGreen = document.createElement("div")
lightGreen.className = "lights"
lightGreen.id = "green-minus"

const onEvent = () => {
    btns.replaceChild(onPress, onUnpress)
    btns.replaceChild(offUnpress, offPress)
    
    container.replaceChild(lightGreen, lightRed)

    setTimeout(() => {
        lightGreen.id = "green-plus"
        setInterval(() => {
            lightGreen.id = "green-plus"
        }, 2000)
    }, 1000)

    setInterval(() => {
        lightGreen.id = "green-minus"
    }, 2000)
}

onUnpress.addEventListener("click", onEvent)

offUnpress.addEventListener("click", () => {
    btns.replaceChild(onUnpress, onPress)
    btns.replaceChild(offPress, offUnpress)
    container.replaceChild(lightRed, lightGreen)
})