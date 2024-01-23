let clicked = false;
const show = () => {
  if (!clicked) {
    pattern1();
    pattern2();
    pattern3();
    pattern4();
    pattern5();
    pattern6();
    pattern7();
    pattern8();
    clicked = true;
  }
};

const pattern1 = () => {
  const div = document.getElementById("pattern1");
  let array = [];
  for (let i = 0; i < 4; i++) {
    array[i] = [];
    for (let j = 0; j < 4; j++) {
      array[i][j] = j + 1;
    }
    let element = document.createElement("p");
    element.innerHTML = array[i];
    div.appendChild(element);
  }
};
const pattern2 = () => {
  const div = document.getElementById("pattern2");
  let array = [];
  for (let i = 0; i < 4; i++) {
    array[i] = [];
    for (let j = 0; j < 4; j++) {
      array[i][j] = i;
    }
    let element = document.createElement("p");
    element.innerHTML = array[i];
    div.appendChild(element);
  }
};
const pattern3 = () => {
  const div = document.getElementById("pattern3");
  let array = [];
  for (let i = 0; i < 4; i++) {
    array[i] = [];
    for (let j = 0; j < 4; j++) {
      array[i][j] = i > j ? "o" : "x";
    }
    let element = document.createElement("p");
    element.innerHTML = array[i];
    div.appendChild(element);
  }
};
const pattern4 = () => {
  const div = document.getElementById("pattern4");
  let array = [];
  for (let i = 0; i < 4; i++) {
    array[i] = [];
    for (let j = 0; j < 4; j++) {
      array[i][j] = i < j ? "x" : "o";
    }
    let element = document.createElement("p");
    element.innerHTML = array[i];
    div.appendChild(element);
  }
};
const pattern5 = () => {
  const div = document.getElementById("pattern5");
  let array = [];
  for (let i = 0; i < 4; i++) {
    array[i] = [];
    for (let j = 0; j < 4; j++) {
      array[i][j] = i + j;
    }
    let element = document.createElement("p");
    element.innerHTML = array[i];
    div.appendChild(element);
  }
};
const pattern6 = () => {
  const div = document.getElementById("pattern6");
  let array = [];
  for (let i = 0; i < 4; i++) {
    array[i] = [];
    for (let j = 0; j < 4; j++) {
      array[i][j] = j - i;
    }
    let element = document.createElement("p");
    element.innerHTML = array[i];
    div.appendChild(element);
  }
};
const pattern7 = () => {
  // * * * 1 * * *   00 01 02 03 04 05 06
  // * * 1 1 1 * *   10 11 12 13 14 15 16
  // * 1 1 1 1 1 *   20 21 22 23 24 25 26
  // 1 1 1 1 1 1 1   30 31 32 33 34 35 36
  const div = document.getElementById("pattern7");
  let array = [];
  let one = 1;
  let p = 0;
  for (let i = 0; i < 4; i++) {
    array[i] = [];
    p = 0;
    for (let j = 0; j < 7; j++) {
      if (i + j >= 3) {
        if (p < one) {
          array[i][j] = "1";
          p++;
        } else {
          array[i][j] = "*";
        }
      } else {
        array[i][j] = "*";
      }
    }
    one += 2;
    let element = document.createElement("p");
    element.innerHTML = array[i];
    div.appendChild(element);
  }
};
const pattern8 = () => {
  // * * * * * * * *
  // *             *
  // *             *
  // *             *
  // *             *
  // * * * * * * * *

  const div = document.getElementById("pattern8");
  let array = [];
  for (let i = 0; i < 6; i++) {
    array[i] = [];
    for (let j = 0; j < 8; j++) {
      if (i == 0 || j == 0 || i == 5 || j == 7) {
        array[i][j] = "*";
      } else {
        array[i][j] = "_";
      }
    }
    let element = document.createElement("p");
    element.innerHTML = array[i];
    div.appendChild(element);
  }
};
