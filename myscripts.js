// Get the elements
const generateButton = document.getElementById('generate');
const resultSpan = document.getElementById('result');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

// Function to generate password
function generatePassword() {
  const length = parseInt(lengthInput.value);
  const useUppercase = uppercaseCheckbox.checked;
  const useLowercase = lowercaseCheckbox.checked;
  const useNumbers = numbersCheckbox.checked;
  const useSymbols = symbolsCheckbox.checked;

  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  let allCharacters = '';
  if (useUppercase) allCharacters += uppercaseLetters;
  if (useLowercase) allCharacters += lowercaseLetters;
  if (useNumbers) allCharacters += numbers;
  if (useSymbols) allCharacters += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }
  console.log(password)

  resultSpan.textContent = password;
}