"use strict";
window.addEventListener("beforeunload", save);
window.onload = load();
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
  "y",
  "z",
];
const vowels = ["a", "e", "i", "o", "u"];
let nameOutput;
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
    if (values[i] != document.getElementById("fNum")) {
      if (
        values[i].value.search(/[a-zA-Z]/) == -1 ||
        values[i].value.search(/[1-9]/) != -1
      ) {
        values[i].classList.add("invalid");
        values[i].value = "";
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
    } else {
      if (
        values[i].value.search(/[1-9]/) == -1 ||
        (values[i].value > 10 && values[i].value > -1)
      ) {
        values[i].classList.add("invalid");
        invalid = true;
        setTimeout(
          () => {
            values[i].classList.remove("invalid");
            values[i].value = "";
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
  }
  if (invalid != true) {
    let outputElem = document.getElementById("output");
    outputElem.textContent = new entry(
      values[0],
      values[1],
      values[2],
      values[3],
      values[4]
    ).fullName;
  }
} //39 lines
class entry {
  firstName;
  lastName;
  fColor;
  power;
  fNum;
  constructor(firstName, lastName, fColor, power, fNum) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fColor = fColor;
    this.power = power;
    this.fNum = fNum;
  }
  get newFirstName() {
    console.log("fName");
    let name = this.firstName.toLowerCase().split("");
    let nameHold = name;
    let availableConsonants = [];
    let availableVowels = [];
    let valid = false;
    console.log("here1");
    for (let i = 0; i < name.length; i++) {
      if (consonants.indexOf(name[i]) != -1) availableConsonants.push(name[i]);
      else if (vowels.indexOf(name[i]) != -1) availableVowels.push(name[i]);
      else console.log(name[i]);
    }
    let newName = new Array(name.length);
    console.log();
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
    console.log("here2");
    for (let i = 0; i < newName.length; i++) {
      if (vowels.includes(newName[i])) {
        vowelInc = true;
        vowelCount++;
      } else if (consonants.includes(newName[i])) {
        consonInc = true;
        consonCount++;
      }
    }
    console.log("here3");
    for (let i = 0; i < newName.length; i++) {
      if (vowels.includes(newName[i])) {
        if (
          vowels.includes(newName[i + 1]) &&
          vowels.includes(newName[i + 2])
        ) {
          let index;
          Math.random() > 0.5 ? (index = i + 2) : (index = i + 1);
          if (i == 0) {
            index = i + 1;
          }
          let rand = randomInt(0, consonants.length);
          while (consonants[rand] == "q") {
            rand = randomInt(0, consonants.length - 1);
          }
          newName.splice(index, 0, consonants[rand]);
          i = index;
        }
      } else if (consonants.includes(newName[i])) {
        if (
          consonants.includes(newName[i + 1]) &&
          consonants.includes(newName[i + 2])
        ) {
          let index;
          Math.random() > 0.5 ? (index = i + 2) : (index = i + 1);
          if (i == 0) {
            index = i + 1;
          }
          let rand = randomInt(0, vowels.length - 1);
          newName.splice(index, 0, vowels[rand]);
          i = index;
        }
      }
    }
    console.log("here4");
    for (let i = 0; i < newName.length; i++) {
      if (newName[i] == "q") {
        newName.splice(newName.indexOf("q") + 1, 0, "u");
      }
    }
    console.log("here5");
    for (let i = 0; i < newName.length; i++) {
      if (newName[i] == "k" && newName[i + 1] == "c") {
        newName[i] = "c";
        newName[i + 1] = "k";
      }
    }
    console.log("here6");
    if (
      newName.includes("h") &&
      newName.indexOf("h") == 0 &&
      newName.includes("c") &&
      newName.indexOf("c") == 1
    ) {
      newName[0] = "c";
      newName[1] = "h";
    }
    console.log("here7");
    return newName.join("");
  } //uses only fName
  get ending() {
    console.log("ending");
    //deal with the color
    let words = this.fColor.toLowerCase().split(" ");
    let letter;
    let construct = [];
    let wordPart;
    if (words.length > 1) {
      words = words[1];
      words = words.split("");
      letter = words[0];
    } else {
      words = words[0].split("");
      letter = words[0];
    }
    switch (letter) {
      case "a":
        wordPart = "Ahir";
        break;
      case "b":
        wordPart = "Bashkhaad";
        break;
      case "c":
        wordPart = "Chiin";
        break;
      case "d":
        wordPart = "Dorvstvok";
        break;
      case "e":
        wordPart = "Eaelin";
        break;
      case "f":
        wordPart = "Furna";
        break;
      case "g":
        wordPart = "Ga'gstrigo";
        break;
      case "h":
        wordPart = "Hoep";
        break;
      case "i":
        wordPart = "Iondys";
        break;
      case "j":
        wordPart = "Jalo";
        break;
      case "k":
        wordPart = "Kotta";
        break;
      case "l":
        wordPart = "Laprakolos";
        break;
      case "m":
        wordPart = "Mologra";
        break;
      case "n":
        wordPart = "Nphuitre";
        break;
      case "o":
        wordPart = "Ongri";
        break;
      case "p":
        wordPart = "Pir";
        break;
      case "q":
        wordPart = "Quoret";
        break;
      case "r":
        wordPart = "Rokur";
        break;
      case "s":
        wordPart = "Sindap";
        break;
      case "t":
        wordPart = "Tolot";
        break;
      case "u":
        wordPart = "Uundras";
        break;
      case "v":
        wordPart = "Ventro";
        break;
      case "w":
        wordPart = "Wkull";
        break;
      case "x":
        wordPart = "Xata";
        break;
      case "y":
        wordPart = "Ykaftrys";
        break;
      case "z":
        wordPart = "Zul";
        break;
      default:
        wordPart = "Khora";
        break;
    }
    construct.push(wordPart);
    //deal with the number
    let myNumber = Number(this.fNum);
    switch (myNumber) {
      case 1:
        construct.push("one");
        break;
      case 2:
        construct.push("two");
        break;
      case 3:
        construct.push("three");
        break;
      case 4:
        construct.push("four");
        break;
      case 5:
        construct.push("five");
        break;
      case 6:
        construct.push("six");
        break;
      case 7:
        construct.push("seven");
        break;
      case 8:
        construct.push("eight");
        break;
      case 9:
        construct.push("nine");
        break;
      case 10:
        construct.push("ten");
        break;
      default:
        alert(`${this.fNum} is an invalid number input`);
        throw new Error(`${this.fNum} is an invalid number input`);
    }
    let rand = Math.floor(Math.random() * 10);
    switch (rand) {
      case 0:
        construct.push("river");
        break;
      case 1:
        construct.push("mountain");
        break;
      case 2:
        construct.push("grove");
        break;
      case 3:
        construct.push("forest");
        break;
      case 4:
        construct.push("pyramid");
        break;
      case 5:
        construct.push("volcano");
        break;
      case 6:
        construct.push("desert");
        break;
      case 7:
        construct.push("field");
        break;
      case 8:
        construct.push("god");
        break;
      case 9:
        construct.push("order");
        break;
      default:
        alert(`rand is invalid, rand = ${rand}`);
        throw new Error(`${rand} is an invalid random number`);
    }
    //assemble
    let rand2 = Math.random();
    let part;
    if (rand2 >= 0.7) {
      part = `of ${construct[0]}`;
    } else {
      part = `of the ${construct[1]} ${this.pluralize(
        construct[2],
        myNumber
      )} of ${construct[0]}`;
    }
    return part;
  } //uses color and number
  get newLastName() {
    console.log("lName");
    let nameConstruct = [];
    for (let i = 0; i < this.power.length; i++) {
      if (this.power[i] == "c") {
        let insert;
        if (i == 0) {
          insert = consonants[randomInt(0, consonants.length - 1)];
          nameConstruct.push(insert);
        } else {
          if (nameConstruct[i - 1] == "c") {
            while (
              insert == "k" ||
              insert == "q" ||
              insert == "p" ||
              insert == "t"
            ) {
              insert = consonants[randomInt(0, consonants.length - 1)];
            }
            nameConstruct.push(insert);
          } else if (nameConstruct[i - 1] == "t") {
            while (
              insert == "k" ||
              insert == "q" ||
              insert == "p" ||
              insert == "d"
            ) {
              insert = consonants[randomInt(0, consonants.length - 1)];
            }
            nameConstruct.push(insert);
          } else if (nameConstruct[i - 1] == "q") {
            if (i < this.power.length && this.power[i + 1] == "c") {
              insert = vowels[randomInt(0, vowels.length - 1)];
              nameConstruct.push(insert);
            } else {
              insert = vowels[randomInt(0, vowels.length - 1)];
              nameConstruct.push(insert);
              let insert2;
              while (insert2 == "q") {
                insert2 = consonants[randomInt(0, consonants.length - 1)];
              }
              nameConstruct.push(insert2);
            }
          } else {
            while (insert == nameConstruct[i - 1]) {
              insert = consonants[randomInt(0, consonants.length - 1)];
            }
            nameConstruct.push(insert);
          }
        }
      } else {
        let insert = vowels[randomInt(0, vowels.length - 1)];
        nameConstruct.push(insert);
      }
    }
    return nameConstruct.join("");
  } //uses lName and power
  get fullName() {
    console.log("compile");
    let firstName = this.newFirstName;
    let lastNames = [];
    for (let i = 0; i < Math.ceil(this.lastName.length / 3); i++) {
      lastNames.push(this.capitalize(this.newLastName));
    }
    let end = this.ending;
    let output = `${this.capitalize(firstName)} ${lastNames.join(" ")} ${end}`;
    nameOutput = output;
    return output;
  } //build
  capitalize(arg) {
    let string = arg.split(" ");
    for (let i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string;
  }
  pluralize(arg, num) {
    if (num > 1) {
      return arg + "s";
    }
  }
}
function save() {
  let inputs = document.getElementsByTagName("INPUT");
  for (let i = 0; i < inputs.length; i++) {
    sessionStorage.setItem(`${i}th`, inputs[i].value);
  }
}
function load() {
  let inputs = document.getElementsByTagName("INPUT");
  for (let i = 0; i < inputs.length; i++) {
    if (sessionStorage.getItem(`${i}th`)) {
      inputs[i].value = sessionStorage.getItem(`${i}th`);
    }
  }
}
//stackoverflow
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function copy() {
  navigator.clipboard.writeText(nameOutput);
}
