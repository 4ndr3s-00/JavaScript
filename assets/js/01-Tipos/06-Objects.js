const name = 'kurona';
const series = 'blue lock';
const age = 16;

const character = {
    name: 'kurona',
    series: 'blue lock',
    age: 16,
}

console.log (character);
console.log (character.name);
console.log (character['series']);

character.age = 17;
console.log (character);

delete character.name;

console.log (character);