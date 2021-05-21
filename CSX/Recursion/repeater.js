console.log("Hello, world!");
let output = "";
function repeater(char) {
  if (output.length == 5) {
    let baseCase = output;
    output = "";
    return baseCase;
  }
  output += char;
  return repeater(char);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater("g"));
console.log(repeater("j"));
