const PRICE = 0.0349;

const SIZE = 39;

const REF = 69;

// update numbers live

function updateVal(id,val){

  document.getElementById(id).innerText = val;

}

// set target preset

function setTarget(val){

  document.getElementById("target").value = val;

  updateVal("tval", val);

}

// main calculation

function run(){

  const current = +document.getElementById("current").value;

  const target = +document.getElementById("target").value;

  if(target <= current){

    document.getElementById("out").innerText = "Target must be higher than current";

    return;

  }

  const kWh = (target - current) / 100 * SIZE;

  const chargerPercent = (kWh / REF) * 100;

  const cost = kWh * PRICE;

  document.getElementById("out").innerHTML =

    `🔋 ${kWh.toFixed(2)} kWh<br>

     ⚡ Set charger: ${chargerPercent.toFixed(1)}%<br>

     💷 Cost: £${cost.toFixed(2)}`;

}

// IMPORTANT: initialise values on load

window.onload = function () {

  updateVal("cval", document.getElementById("current").value);

  updateVal("tval", document.getElementById("target").value);

};
