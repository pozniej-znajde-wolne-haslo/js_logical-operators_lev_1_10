/*  === SEITEN zum Thema ===
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

    https://javascript.info/logical-operators
*/

let x = 10;
let y = 15;
let z = 20;


console.log(x, y, z);


// === && === AND
// === || === OR
console.log(x > z && x > y);
console.log(x != y);
console.log(z < y || z > x);
console.log(x == z || x != y);
console.log(x >= 10 && y <= 10);
console.log((x*z) < 100 || (x*y) > 100);

/* Deklariere zwei Variablen: a mit dem Wert true und b mit dem Wert false.
Verwende die Konsole, um die Ergebnisse zu überprüfen.
Überprüfe das Ergebnis von a "AND" b.
Überprüfe das Ergebnis von a "OR" b.
Überprüfe das Ergebnis von NICHT a AND b. */

let a = true;
let b = false;
console.log(a);
console.log(b);

/* console.log(a && b);
console.log(a || b);
console.log(!a && b); */

console.log(a && b); // === FALSE
console.log(a || b); // === TRUE
console.log(!a && b); // === FALSE
