import { sum } from './sum';

document.getElementById('calculateButton').addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerText = sum(num1, num2);
});