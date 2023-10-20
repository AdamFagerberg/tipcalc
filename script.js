let billInput = document.getElementById('bill');
let fivePrTip = document.getElementById('5pr');
let tenPrTip = document.getElementById('10pr');
let fifteenPrTip = document.getElementById('15pr');
let twentyPrTip = document.getElementById('20pr');
let twentyfivePrTip = document.getElementById('25pr');
let fiftyPrTip = document.getElementById('50pr');
let totalDisplay = document.getElementById('totaltip');
let peopleInput = document.getElementById('people');
let perPersonDisplay = document.getElementById('perperson');

fivePrTip.addEventListener('click', function(){
    let billValue = parseFloat(billInput.value);
    let totalPeople = parseFloat(peopleInput.value);
    let billOutput = billValue * 0.05;
    let billPerPerson = ((billValue * 0.05) / totalPeople);
    perPersonDisplay.innerHTML = `Tip Per Person: $${billPerPerson.toFixed(2)}`;
    totalDisplay.innerHTML = `Total Tip: $${billOutput.toFixed(2)}`;
})

tenPrTip.addEventListener('click', function(){
    let billValue = parseFloat(billInput.value);
    let totalPeople = parseFloat(peopleInput.value);
    let billOutput = billValue * 0.10;
    let billPerPerson = ((billValue * 0.10) / totalPeople);
    perPersonDisplay.innerHTML = `Tip Per Person: $${billPerPerson.toFixed(2)}`;
    totalDisplay.innerHTML = `Total Tip: $${billOutput.toFixed(2)}`;
})

fifteenPrTip.addEventListener('click', function(){
    let billValue = parseFloat(billInput.value);
    let totalPeople = parseFloat(peopleInput.value);
    let billOutput = billValue * 0.15;
    let billPerPerson = ((billValue * 0.15) / totalPeople);
    perPersonDisplay.innerHTML = `Tip Per Person: $${billPerPerson.toFixed(2)}`;
    totalDisplay.innerHTML = `Total Tip: $${billOutput.toFixed(2)}`;
})

twentyPrTip.addEventListener('click', function(){
    let billValue = parseFloat(billInput.value);
    let totalPeople = parseFloat(peopleInput.value);
    let billOutput = billValue * 0.20;
    let billPerPerson = ((billValue * 0.20) / totalPeople);
    perPersonDisplay.innerHTML = `Tip Per Person: $${billPerPerson.toFixed(2)}`;
    totalDisplay.innerHTML = `Total Tip: $${billOutput.toFixed(2)}`;
})

twentyfivePrTip.addEventListener('click', function(){
    let billValue = parseFloat(billInput.value);
    let totalPeople = parseFloat(peopleInput.value);
    let billOutput = billValue * 0.25;
    let billPerPerson = ((billValue * 0.25) / totalPeople);
    perPersonDisplay.innerHTML = `Tip Per Person: $${billPerPerson.toFixed(2)}`;
    totalDisplay.innerHTML = `Total Tip: $${billOutput.toFixed(2)}`;
})

fiftyPrTip.addEventListener('click', function(){
    let billValue = parseFloat(billInput.value);
    let totalPeople = parseFloat(peopleInput.value);
    let billOutput = billValue * 0.50;
    let billPerPerson = ((billValue * 0.50) / totalPeople);
    perPersonDisplay.innerHTML = `Tip Per Person: $${billPerPerson.toFixed(2)}`;
    totalDisplay.innerHTML = `Total Tip: $${billOutput.toFixed(2)}`;
})