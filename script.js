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
        let subBefore = name.slice(0, j);
        let subAfter = name.slice(j + 1, name.length);
        name = subBefore.concat(subAfter);
        console.log(name, newName);
      }
      if (vowels.indexOf(newName.charAt(newName.length - 1)) == -1) {
        console.log(newName.charAt(newName.length - 1));
        valid = true;
      } else {
        valid = false;
      }
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
  }
}

//stackoverflow
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
