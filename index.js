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
// console.log("from the global scope ", userArguments);
const firstUserArg = userArguments[0];
const firstUserArgNumber = parseInt(firstUserArg);
let userArgsToBePassedToCustomPass = [];

// validate user entries making sure they only contain an int, up, num, or sym
const validateUserArguments = (userArguments) => {
  // console.log("from validate user args function", userArguments);
  const validEntriesArray = ["up", "num", "sym"];
  const numberEntryExists = userArguments.find((arg) => !isNaN(parseInt(arg)));
  const validNumberExists = numberEntryExists !== undefined;
  const argsWithoutNumberArray = userArguments.filter((arg) =>
    isNaN(parseInt(arg))
  );
  const otherEntriesValid = argsWithoutNumberArray.every((entry) =>
    validEntriesArray.includes(entry)
  );

  if (otherEntriesValid) {
    if (!validNumberExists) {
      userArgsToBePassedToCustomPass.push(8);
    } else {
      userArgsToBePassedToCustomPass.push(parseInt(numberEntryExists));
    }
    if (userArguments.includes("up")) {
      userArgsToBePassedToCustomPass.push("up");
    }
    if (userArguments.includes("num")) {
      userArgsToBePassedToCustomPass.push("num");
    }
    if (userArguments.includes("sym")) {
      userArgsToBePassedToCustomPass.push("sym");
    }
    return true;
  } else {
    return false;
  }
};

// make a decision of the code customization

// direct the code to the function that creates the specific customized code

const createLowerCasePass = (length = 8) => {
  const alphabetsLower = "abcdefghijklmnopqrstuvwxyz";
  let lowCasePass = "";
  for (i = 0; i < length; i++) {
    const randomLetterIndex = Math.floor(Math.random() * 26);
    const randomLetter = alphabetsLower[randomLetterIndex];
    lowCasePass += randomLetter;
  }
  console.log(
    "Your Generated Password of lower case letters is: ",
    lowCasePass
  );
};

const createCustomPass = (userArgs) => {
  let allowedPool = "abcdefghijklmnopqrstuvwxyz";
  let customPass = "";
  const alphabetsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/`~";
  // console.log("from custom pass function: ", userArgs);
  if (userArgs.includes("up")) {
    allowedPool += alphabetsUpper;
  }
  if (userArgs.includes("num")) {
    allowedPool += numbers;
  }
  if (userArgs.includes("sym")) {
    allowedPool += symbols;
  }

  const passLength = userArgsToBePassedToCustomPass[0];
  for (let i = 0; i < passLength; i++) {
    const randomCharIndex = Math.floor(Math.random() * allowedPool.length);
    const randomChar = allowedPool[randomCharIndex];
    customPass += randomChar;
  }
  console.log("Your Generated Password is: ", customPass);
};

const displayInstructionsToUser = () => {
  console.log("                                                           ");
  console.log(
    ` Welcome to the Password Generator:
    
    Generate a lowercase password:
        Run: 'npx pass-gen'
    
 Customize your password:
    
    - Specify the length of the password:
        Example: 'npx pass-gen 12' (for a 12-character password)
    
    - Include uppercase letters:
        Example: 'npx pass-gen 12 up' (for a 12-character password with uppercase letters)

    - Include numbers:
        Example: 'npx pass-gen 12 num' (for a 12-character password with numbers)

    - Include symbols:
        Example: 'npx pass-gen 12 sym' (for a 12-character password with symbols)

    You can combine options for more customization:
        Example: 'npx pass-gen 12 up num sym' (for a password with uppercase letters, numbers, and symbols)
        Example: 'npx pass-gen 12 num' (for a password with numbers only, and lowercase letters)`
  );

  console.log("");
};

const displayErrorMessage = () => {
  console.log("                                                           ");
  console.log(`    Error      : Invalid entry, you enetered an invalid entry `);
  console.log(
    "    Quick fix  : Please enter a valid entry after 'npx pass-gen' command."
  );
  console.log(
    "                 Only allowed entries are a number , 'up', 'num', 'sym'"
  );
  console.log(
    "    For Help   : run 'npx pass-gen -h' command for more info about each entry."
  );
  console.log("");
};

// if the user entered an invalid entry for character number

  // if the user entered only a number for charecters length
  if (userArguments.length === 1 && !isNaN(firstUserArgNumber)) {
    createLowerCasePass(userArguments);
  } else {
    if (userArguments.length === 0) {
      createLowerCasePass(8);
    } else {
      if (userArguments.length === 1 && userArguments[0] === "-h") {
        displayInstructionsToUser();
      } else {
        const valid = validateUserArguments(userArguments);
        if (valid) {
          createCustomPass(userArgsToBePassedToCustomPass);
        } else {
          displayErrorMessage();
        }
      }
    }
  }

