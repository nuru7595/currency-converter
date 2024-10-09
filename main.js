// Getting Elements;
const selects = document.querySelectorAll(".select select");
const fromImg = document.querySelector("#fromImg");
const toImg = document.querySelector("#toImg");
const btn = document.getElementById("btn");
const amount = document.getElementById("amount");
let fromCode = "usd";
let toCode = "bdt";
const output = document.getElementById("output");

// Api Link;
const Url = "https://latest.currency-api.pages.dev/v1/currencies";

// Functions =>=>=>
const addOption = (select, code) => {
    let option = document.createElement("option");
    option.value = code;
    option.innerText = code;
    if (select.name == "fromSelect" && code == "USD") {
        option.selected = "selected";
    } else if (select.name == "toSelect" && code == "BDT") {
        option.selected = "selected";
    }
    select.append(option);
}
// Fuction 1 => Adding select option;

const updateFlag = (select) => {
    let flag = countryList[select.value];
    if (select.name == "fromSelect") {
        fromImg.src = `https://flagsapi.com/${flag}/flat/64.png`;
        fromCode = select.value.toLowerCase(); // Updating fromCode on change;
    } else if (select.name == "toSelect") {
        toImg.src = `https://flagsapi.com/${flag}/flat/64.png`;
        toCode = select.value.toLowerCase(); // Updating toCode on change;
    }
}
// Function 2 => Updating flags according to selection;
let api = async () => {
    let myUrl = `${Url}/${fromCode}.json`;
    let response = await fetch(myUrl);
    let json = await response.json();
    let apiData = json[fromCode][toCode];
    showData(apiData);
}
// Function 3 => Fetching Api;

let showData = (apiData) => {
    let inputValue = amount.value;
    if (inputValue > 0) { } else {
        amount.value = 1;
        inputValue = amount.value;
    }
    const outputValue = (apiData * inputValue).toFixed(3);
    output.innerText = `${outputValue} ${toCode.toUpperCase()}`;
}
// Function 4 => Calculate Data;

for (let select of selects) {
    for (let code in countryList) {
        addOption(select, code);
    }
    // Adding All Countries;

    select.addEventListener("change", () => {
        updateFlag(select);
    });
    // Updating Flag;
}

btn.addEventListener("click", () => {
    api();
});