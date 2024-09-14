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

if (userArguments.length === 1 && isNaN(firstUserArgNumber)) {
  console.log("                                                           ");
  console.log(`    Error      : Invalid entry, you enetered ${firstUserArg}  `);
  console.log("                 as the characters length of your password.");
  console.log(
    "    Quick fix  : Please enter a valid number after 'pass-gen' command."
  );
  console.log("    For Help   : run 'pass-gen -h' command for more info.");
  console.log("");
} else {
  if (userArguments.length === 0) {
    createLowerCasePass();
  } else {
    if (userArguments[0] === "-h") {
      console.log(
        "To start using the app, run (npx pass-gen 6 ) where '6' is the character length of your password"
      );
    } else {
      createLowerCasePass(userArguments)
    }
  }
}
