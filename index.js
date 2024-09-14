#!/usr/bin/env node
const process = require("node:process");
const userArguments = process.argv.slice(2);

console.log("");
console.log("");
console.log(
  "_____________________________________________________________________"
);
console.log(
  "|                Welcome to Your Password Generator                 |"
);
console.log(
  "|                For more info, run: npx pass-gen -h                |"
);
console.log(
  "---------------------------------------------------------------------"
);

// console.log(userArguments);
console.log(userArguments)
const firstUserArg = userArguments[0];
const firstUserArgNumber = parseInt(firstUserArg);

const createLowerCasePass = (length = 8) => {
  const alphabetsLower = "abcdefghijklmnopqrstuvwxyz";
  let lowCasePass = "";
  for (i = 0; i < length; i++) {
    const randomLetterIndex = Math.floor(Math.random() * 26);
    const randomLetter = alphabetsLower[randomLetterIndex];
    lowCasePass += randomLetter;
  }
  console.log(alphabetsLower.length);
  console.log(lowCasePass);
};
// if the user entered an invalid entry for character number
if (userArguments.length === 1 && isNaN(firstUserArgNumber) && userArguments[0] !== "-h") {
  console.log("                                                           ");
  console.log(`    Error      : Invalid entry, you enetered ${firstUserArg}  `);
  console.log("                 as the characters length of your password.");
  console.log(
    "    Quick fix  : Please enter a valid number after 'pass-gen' command."
  );
  console.log("    For Help   : run 'pass-gen -h' command for more info.");
  console.log("");
} else {
  // if the user entered only a number for charecters length
  if (userArguments.length === 1 && !isNaN(firstUserArgNumber)) {
    createLowerCasePass(userArguments);
  } else {
    if (userArguments.length === 0) {
      createLowerCasePass();
    } else {
      if (userArguments[0] === "-h") {
     
        console.log(
          "                                                           "
        );
        console.log(
          ` Welcome to the Password Generator:
    
    Generate a lowercase password:
        Run: 'npx pass-gen'
    
    Customize your password:
    - Specify the length of the password:
        Example: 'npx pass-gen 12' (for a 12-character password)
    
    - Include uppercase letters:
        Example: 'npx pass-gen 12 up' (for a 12-character password with uppercase letters)
        To exclude uppercase, use 'notup':
        Example: 'npx pass-gen 12 notup'
    
    - Include symbols:
        Example: 'npx pass-gen 12 sym' (for a 12-character password with symbols)
        To exclude symbols, use 'notsym':
        Example: 'npx pass-gen 12 notup notsym'`
        );
    
        console.log("");
      } else {
      }
    }
  }
}
