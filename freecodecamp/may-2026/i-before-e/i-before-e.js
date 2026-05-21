function iBeforeE(sentence) {

  const result = sentence 
    .replaceAll("cie", "cei")
    .replaceAll("cie", "cei")
    .replaceAll("ei", "ie")
    .replaceAll("cie", "cei");
    
  return result;
}

console.log(iBeforeE("beleive"));
console.log(iBeforeE("recieve"));
console.log(iBeforeE("we recieved a breif"));
console.log(iBeforeE("she beleived the friendly niece could percieve the greif"));
console.log(iBeforeE("we recieved relief after the theif gave us a breif piece of feirce deceit"));