const select = document.querySelectorAll(".select select");
// Getting Elements;
for (let sel of select) {
    for (let code in countryList) {
        let newOption = document.createElement("option");
        newOption.value = code;
        newOption.innerText = code;
        if (sel.name == "fromSelect" && code == "USD") {
            newOption.selected = "selected";
        } else if (sel.name == "toSelect" && code == "BDT") {
            newOption.selected = "selected"
        }
        sel.append(newOption);
    }
}
// Genarating Options for all Countrys;
const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";
// Api url;
const btn = document.getElementById("btn");
const input = document.getElementById("amount");
const fromImg = document.getElementById("fromImg");
const toImg = document.getElementById("toImg");
// Getting Elements;
btn.addEventListener("click", () => {
    let amount = input.value;
    alert(amount);
});
// Event Listener;
let myUrl = `${BASE_URL}/usd.json`;
let api = async () => {
    let response = await fetch(myUrl);
    let json = await response.json();
    console.log(json.usd.bdt);
}
