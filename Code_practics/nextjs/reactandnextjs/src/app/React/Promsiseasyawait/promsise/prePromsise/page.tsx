"use client";
import React, { useState } from "react";

function TestApp() {
  const [name, setName] = useState<string>("");

  function letsStart() {
    // getPrime()
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    // getPrime2(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (e) => {
    //     console.log(e);
    //   }
    // );
    var promis = getPrime();
    var res = promis.then;
  }
  return (
    <div>
      <h1 id="haners">{name}</h1>
      <button
        onClick={(e) => setName("xpos" + e.clientX + "ypos:" + e.clientY)}
      >
        update
      </button>
      <button onClick={letsStart}>Check Prime</button>
    </div>
  );
}

export default TestApp;

function getPrime() {
  const promsi = new Promise(function (sucess, fail) {
    var rand = Math.floor(Math.random() * 100);
    if (rand % 5 == 0) {
      sucess(rand);
    } else {
      fail("prinme nu not found");
    }
  });
  return promsi;
}

async function getPrime2() {
  var rand = Math.floor(Math.random() * 100);
  var res = await odd();
  if (rand + (res % 5) == 0) {
    return rand;
  }
}

async function odd() {
  var rand = Math.floor(Math.random() * 100);
  return rand;
}
