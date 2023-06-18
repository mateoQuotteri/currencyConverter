const input = document.getElementById("amount");
const currency = document.getElementById("currency").value
const form = document.getElementById("form");





form.addEventListener("submit" , async (e)=>{
    e.preventDefault();
    await fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(response => response.json())
    .then(data => {
        if (currency == "USD") {
           let toDollarBlueSell = input.value * data.blue.value_sell;
           let toDollarBlueBuy = input.value * data.blue.value_buy;
           let toDollarBuy = input.value * data.oficial.value_buy;
           let toDollarSell = input.value * data.oficial.value_sell;

           console.log( toDollarBlueSell, toDollarBlueBuy , toDollarBuy, toDollarSell );

        }
  })
   
})