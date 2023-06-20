const input = document.getElementById("amount");
const currency = document.getElementById("currency").textContent
const form = document.getElementById("form");
const date = document.getElementById("date")
const hour = document.getElementById("hour")
const result = document.getElementById("result")
function checking(data) {
  if (currency == "USD") {
    let toDollarBlueSell = input.value * data.blue.value_sell;
    let toDollarBlueBuy = input.value * data.blue.value_buy;
    let toDollarBuy = input.value * data.oficial.value_buy;
    let toDollarSell = input.value * data.oficial.value_sell;

    let resultDolarBlueSell = document.createElement("h5")
    let resultDolarBlueBuy = document.createElement("h5")
    let resultDolarSell = document.createElement("h5")
    let resultDolarBuy = document.createElement("h5")
    resultDolarBlueSell.textContent = "A dolar blue valor venta: $" + toDollarBlueSell;
    resultDolarBlueBuy.textContent = "A dolar blue valor compra: $" + toDollarBlueBuy;
    resultDolarBuy.textContent = "A dolar oficial valor compra: $" + toDollarBuy;
    resultDolarSell.textContent = "A dolar oficial valor venta: $" + toDollarSell;

    result.appendChild(resultDolarBlueBuy)
    result.appendChild(resultDolarBlueSell)
    result.appendChild(resultDolarBuy)
    result.appendChild(resultDolarSell)

 }else{
   console.log("H");
   let toEuroBlueSell = input.value * data.blue_euro.value_sell;
    let toEuroBlueBuy = input.value * data.blue_euro.value_buy;
    let toEuroBuy = input.value * data.oficial_euro.value_buy;
    let toEuroSell = input.value * data.oficial_euro.value_sell;

    let resultEuroBlueSell = document.createElement("h5")
    let resultEuroBlueBuy = document.createElement("h5")
    let resultEuroSell = document.createElement("h5")
    let resultEuroBuy = document.createElement("h5")
    resultEuroBlueSell.textContent = "A euro blue valor venta: $" + toEuroBlueSell;
    resultEuroBlueBuy.textContent = "A euro blue valor compra: $" + toEuroBlueBuy;
    resultEuroBuy.textContent = "A euro oficial valor compra: $" + toEuroBuy;
    resultEuroSell.textContent = "A euro oficial valor venta: $" + toEuroSell;

    result.appendChild(resultEuroBlueBuy)
    result.appendChild(resultEuroBlueSell)
    result.appendChild(resultEuroBuy)
    result.appendChild(resultEuroSell)
 }
}

form.addEventListener("submit" , async (e)=>{
    e.preventDefault();
    await fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(response => response.json())
    .then(data => {
      checking(data);
  })
   
})


window.onload = function(event) {
  let today = new Date();

  /*
  var año = fecha.getFullYear(); // Obtener el año (ej: 2023)
var mes = fecha.getMonth(); // Obtener el mes (0-11)
var dia = fecha.getDate(); // Obtener el día del mes (1-31)
var diaSemana = fecha.getDay(); // Obtener el día de la semana (0-6)
var hora = fecha.getHours(); // Obtener la hora (0-23)
var minutos = fecha.getMinutes(); // Obtener los minutos (0-59)
var segundos = fecha.getSeconds(); // Obtener los segundos (0-59) */
  
  date.textContent = today.getDate() + "/" + today.getMonth() + "/" +today.getFullYear();
  hour.textContent = today.getHours() + ":" + today.getMinutes() + ":" +today.getSeconds()


}