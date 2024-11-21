export function calculateSum(input) {
  if (!input) return 0;
 
  if (isCustomDelimiterFormat(input)) {
    return calculateWithCustomDelimiters(input);
  }
 
  return calculateWithDefaultDelimiters(input);
}

function isCustomDelimiterFormat(input) {
  return input.startsWith("//");
}

function calculateWithCustomDelimiters(input) {
  const {numbers, delimiters} = extractCustomDelimitersAndNumbers(input);
  
  if (delimiters.length === 0) return 0;
  
  return sumValidNumbers(splitByDelimiters(numbers, delimiters));
}

function extractCustomDelimitersAndNumbers(input) {
  let numbers = input;
  let delimiters = [];
 
  const bracketedDelimiters = input.match(/\[(.*?)\]/g);
  if (bracketedDelimiters) {
    delimiters = extractDelimitersFromBrackets(bracketedDelimiters);
    numbers = extractNumbersAfterBrackets(input);
  } else {
    const {delimiter, remainingNumbers} = extractSingleDelimiterAndNumbers(input);
    delimiters = [escapeSpecialCharacters(delimiter)];
    numbers = remainingNumbers;
  }
 
  return {numbers, delimiters};
}

function extractDelimitersFromBrackets(bracketedDelimiters) {
  return bracketedDelimiters
    .map(delimiter => delimiter.slice(1, -1))
    .map(escapeSpecialCharacters);
}

function extractNumbersAfterBrackets(input) {
  const lastBracketIndex = input.lastIndexOf(']');
  const newlineIndex = input.indexOf('\n', lastBracketIndex);
  return newlineIndex !== -1 
    ? input.slice(newlineIndex + 1)
    : input.slice(lastBracketIndex + 1);
}

function extractSingleDelimiterAndNumbers(input) {
  const newlineIndex = input.indexOf('\n');
  const delimiter = input.substring(2, newlineIndex);
  const remainingNumbers = input.slice(newlineIndex + 1);
  return {delimiter, remainingNumbers};
}

function escapeSpecialCharacters(delimiter) {
  return delimiter.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function splitByDelimiters(numbers, delimiters) {
  const regex = new RegExp(delimiters.join('|'));
  return numbers.split(regex);
}

function calculateWithDefaultDelimiters(input) {
  return sumValidNumbers(input.split(/[,\-]/));
}

function sumValidNumbers(numbers) {
  return numbers
    .filter(isNotEmpty)
    .map(parseToInteger)
    .filter(isValidNumber)
    .reduce(sum, 0);
}

function isNotEmpty(number) {
  return number.length > 0;
}

function parseToInteger(number) {
  return parseInt(number.trim(), 10);
}

function isValidNumber(number) {
  return !isNaN(number) && number <= 1000;
}

function sum(accumulator, current) {
  return accumulator + current;
}