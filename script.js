const currencyFisrt = document.getElementById('currencyFirst');
const currencySecond = document.getElementById('currencySecond');
const count = document.getElementById('count');
const equal = document.getElementById('equal');
const exchangeRate = document.getElementById('exchangeRate');


updateRate();

function updateRate() {
    fetch(` https://v6.exchangerate-api.com/v6/d1e4232df683496f97a09ebd/latest/${currencyFisrt.value}`).then((res)=>res.json()).then((data) => { const rate = data.conversion_rates[currencySecond.value]
        equal.textContent = (count.value * rate).toFixed(2);
        exchangeRate.textContent = `1 ${currencyFisrt.value} = ${rate} ${currencySecond.value}`
    })
}

currencyFisrt.addEventListener('change', updateRate)
currencySecond.addEventListener('change', updateRate);
count.addEventListener('input', updateRate);