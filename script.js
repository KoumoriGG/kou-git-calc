var suhu = document.getElementById('celc')
var tamp1 = document.querySelector('.tampilan1')
var tamp2 = document.querySelector('.tampilan2')
var tamp3 = document.querySelector('.tampilan3')



function convert() {
    var nilai = parseInt(suhu.value)
    var reamur = 4/5 * nilai
    var fahrenheit = (9/5 * nilai) + 32
    var kelvin = nilai + 273
    tamp1.innerText = ('Suhunya dalam Reamur adalah ' + Math.round(reamur))
    tamp2.innerText = ('Suhunya dalam Fahrenheit adalah ' + Math.round(fahrenheit))
    tamp3.innerText = ('Suhunya dalam kelvin adalah ' + Math.round(kelvin))
}