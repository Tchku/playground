import React, { useState, useRef, useEffect } from "react";

// Klausimai Medai:
// 1. Kodėl vienur dedam kabliataškį, kitur kablelį?
// 2. Kodėl console rodo keliskart tą pačią eilutę?

function Learning() {
  const firstItem = {
    id: 1,
    name: "laptop",
    price: 500,
  };
  // object = {property/key: value, property:value};

  const secondItem = {
    id: 2,
    name: "watch",
    price: 240,
    brand: "Sonical",
  };

  const USD_EUR = 0.9;

  let thirdItem = {
    id: 3,
    name: "headphones",
    brand: "Sonical",
    price: 84, //US dollars
    // priceEUR: this.price * USD_EUR, <- neteisinga, nes atliekama kalkuliacija, todėl turi būti funkcija
    priceEUR: function () {
      return this.price * USD_EUR;
    },
    secondPriceEUR() {
      return this.price * USD_EUR;
    },
  };

  return (
    console.log(
      `First item has a name of ${firstItem.name} and the price of ${firstItem.price}`
    ), // ${object_name.key}
    console.log(
      `Second item has a name of ${secondItem["name"]} and the price of ${secondItem["price"]}`
    ), // ${object_name.key}
    console.log(
      `The brand of first item is ${firstItem["brand"]} while that of second item is ${secondItem["price"]}`
    ),
    console.log("Price of third item in Euros: ", thirdItem.priceEUR())
  );
}

export default Learning;
