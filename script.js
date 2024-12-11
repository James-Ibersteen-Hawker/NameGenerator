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
    if (this.firstName.length >= 4) return "King";
    else return "Master";
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
    return `${firstName} ${middleName} ${lastName}`;
  }
}
