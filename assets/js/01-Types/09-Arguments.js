function addition(a, b) {
    console.log(arguments);
    return a + b; // Parametro
}

const result = addition(5, 6, 1, 3, 9, 7);  // Argumento

console.log(result);
console.log(typeof addition);
console.log(typeof result);