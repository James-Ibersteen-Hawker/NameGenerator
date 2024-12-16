"use strict";
const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "z",
];
const vowels = ["a", "e", "i", "o", "u"];
function submit() {
  let invalid = false;
  let values = [
    document.getElementById("fName"),
    document.getElementById("lName"),
    document.getElementById("fColor"),
    document.getElementById("superPowerDrop"),
    document.getElementById("fNum"),
  ];
  for (let i = 0; i < values.length; i++) {
    if (values[i].value.search(/[a-zA-Z]/) == -1) {
      values[i].classList.add("invalid");
      invalid = true;
      setTimeout(
        () => {
          values[i].classList.remove("invalid");
          values[i] = undefined;
          return;
        },
        500,
        values[i]
      );
    } else {
      let temp = values[i].value.trim();
      i != 3 ? (values[i].value = "") : values[i];
      values[i] = temp;
    }
  }
  if (invalid != true) {
    console.log(
      new entry(
        values[0],
        values[1],
        values[2],
        values[3],
        values[4]
      ).construct()
    );
  }
} //39 lines
class entry {
  firstName;
  lastName;
  fColor;
  fNum;
  input3;
  constructor(firstName, lastName, fColor, fNum, input3) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fColor = fColor;
    this.fNum = fNum;
    this.input3 = input3;
  }
  get newFirstName() {
    let name = this.firstName.split("");
    let nameHold = name;
    let availableConsonants = [];
    let availableVowels = [];
    for (let i = 0; i < name.length; i++) {
      if (consonants.indexOf(name[i]) != -1) availableConsonants.push(name[i]);
      else if (vowels.indexOf(name[i]) != -1) availableVowels.push(name[i]);
      else continue;
    }
    let newName = new Array(name.length);
    let valid = false;
    while (valid == false) {
      //scramble
      for (let i = 0; i < newName.length; i++) {
        let j = randomInt(0, name.length - 1);
        newName[i] = name[j];
        name.splice(j, 1);
      }
      name = nameHold;
      let vowelInc = false;
      let vowelCount = 0;
      let consonInc = false;
      let consonCount = 0;
      //if includes vowels
      for (let i = 0; i < newName.length; i++) {
        if (vowels.includes(newName[i])) {
          vowelInc = true;
          vowelCount++;
        } else if (consonants.includes(newName[i])) {
          consonInc = true;
          consonCount++;
        }
      }
      if (
        vowelInc == true &&
        vowels.indexOf(newName[newName.length - 1]) != -1
      ) {
        console.log("vowel at end!");
        if (consonCount == false) {
          console.log(newName);
          if (newName.indexOf(vowels[4]) + 1 == newName.indexOf(vowels[0])) {
            console.log("ua");
          } else if (
            newName.indexOf(vowels[4]) + 1 ==
            newName.indexOf(vowels[1])
          ) {
            console.log("ue");
          } else if (
            newName.indexOf(vowels[4]) + 1 ==
            newName.indexOf(vowels[2])
          ) {
            console.log("ue");
          }
          // }
          // return newName.join("");
        }
      } else {
        console.log("consonant at end!");
      }
      valid = true;
    }
    //scramble the string whilst retaining some rules;
  }
  get newMiddleName() {
    return "val";
  }
  get newLastName() {
    return "val";
  }
  construct() {
    let firstName = this.newFirstName;
    let middleName = this.newMiddleName;
    let lastName = this.newLastName;
    console.log(firstName);
  }
}

//stackoverflow
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
