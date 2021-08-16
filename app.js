var hiden = document.getElementById('hiden')
document.getElementById('user-menu-button').addEventListener('click', function () {
    if (hiden.style.display == 'none') {
        if (hiden1.style.display = 'block') {
            hiden1.style.display = 'none'
            hiden.style.display = 'block'
        }
        hiden.style.display = 'block'
    } else {
        hiden.style.display = 'none'
    }
})

var hiden1 = document.getElementById('hiden1')
document.getElementById('user-menu-button1').addEventListener('click', function () {
    if (hiden1.style.display == 'none') {
        hiden1.style.display = 'block'
        if (hiden.style.display = 'block') {
            hiden.style.display = 'none'
            hiden1.style.display = 'block'
        }
    } else {
        hiden1.style.display = 'none'
    }
})

var hiden_on = document.getElementById('hiden_on_sm')
var hiden_show = document.getElementById('user-menu-button_sm')
var hiden_off = document.getElementById('hiden_off_sm')
hiden_on.addEventListener('click', function () {
    hiden_show.style.display = "block"
    hiden_off.style.display = "block"
    hiden_on.style.display = "none"

})
hiden_off.addEventListener('click', function () {
    hiden_show.style.display = "none"
    hiden_off.style.display = "none"
    hiden_on.style.display = "block"

})
