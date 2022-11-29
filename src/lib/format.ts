export function formatNumber(number) {
  const inputVal = number.replace(/ /g, ""); //remove all the empty spaces in the input
  let inputNumbersOnly = inputVal.replace(/\D/g, ""); // Get only digits

  const splits = inputNumbersOnly.match(/.{1,2}/g);
  let spacedNumber = "";

  if (splits) {
    spacedNumber = splits.join(" "); // Join all the splits with an empty space
  }

  return spacedNumber;
}
